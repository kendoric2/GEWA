/* Golden Era — service worker
   Precaches the app shell for offline launch and runtime-caches the CDN
   resources (fonts, jsPDF, the exercise dataset) so the app works offline
   after the first online visit. The page is network-first, so installed apps
   auto-update on the next online launch — no version bump needed for content
   changes. (Still bump CACHE if you change this service worker or the shell.) */
const CACHE = 'golden-era-v2';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Page loads: NETWORK-FIRST so the installed app grabs the latest version on
  // every online launch, falling back to the cached shell when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then(c => c || caches.match('./')))
    );
    return;
  }

  // Other same-origin assets (icons, manifest): cache-first.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => undefined)
      )
    );
    return;
  }

  // Cross-origin CDNs (Google Fonts, jsPDF, exercise dataset): stale-while-revalidate
  event.respondWith(
    caches.open(CACHE).then(cache => cache.match(req).then(cached => {
      const network = fetch(req)
        .then(res => { cache.put(req, res.clone()).catch(() => {}); return res; })
        .catch(() => cached);
      return cached || network;
    }))
  );
});

// Allow the page to trigger an immediate update
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
