# Golden Era — Workout Planner (PWA)

An installable Progressive Web App: Arnold-inspired workout planner with an aggregated
exercise database, a smart split generator, progress tracking, and offline support.

## Files (keep them together in one folder)

| File | Purpose |
|------|---------|
| `index.html` | The app (this is the page to open/host) |
| `manifest.webmanifest` | App metadata + icons (makes it installable) |
| `sw.js` | Service worker — offline support + caching |
| `icon-192.png`, `icon-512.png` | App icons |
| `icon-512-maskable.png` | Adaptive (maskable) icon for Android |
| `apple-touch-icon.png` | Home-screen icon for iOS |

`golden-era.html` is an identical copy of `index.html` kept for convenience.

## Important: it must be served over HTTPS (or localhost)

A PWA's service worker and the live exercise-data sync **do not work from a double‑clicked
`file://` page**. Open it through a web server instead.

### Test locally (1 minute)

From this folder, run any static server, then open the printed URL:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

(Service workers are allowed on `localhost`, so install + offline work here.)

### Host it for real (free options)

- **GitHub Pages** — create a repo, upload these files, enable Pages (Settings → Pages →
  deploy from branch). Your app is at `https://<user>.github.io/<repo>/`.
- **Netlify** — drag this folder onto https://app.netlify.com/drop. Instant HTTPS URL.
- **Cloudflare Pages / Vercel** — connect the repo or upload the folder.

All paths are relative, so it works at any sub-path without changes.

## Install it

- **Android / Chrome / Edge:** open the hosted URL → menu → *Install app* / *Add to Home screen*.
- **iOS / Safari:** open the URL → Share → *Add to Home Screen*.

Once installed it launches full-screen, runs offline, and keeps your data on the device.

## Notes

- **Your data** (programs, history) lives in the browser for the site's URL via
  `localStorage`; the exercise database is cached in `IndexedDB`. Use the in‑app
  **Back up / Restore** buttons to move data between browsers or devices.
- **Updating the app:** after you change `index.html` (or any cached file), bump the
  `CACHE` version string in `sw.js` (e.g. `golden-era-v1` → `v2`) so clients pull the
  new version.
- The exercise data syncs from the public‑domain
  [free-exercise-db](https://github.com/yuhonas/free-exercise-db); offline, the app falls
  back to its built‑in curated set.
