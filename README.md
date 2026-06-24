# Golden Era — Workout Planner

A clean, installable workout app for serious lifters: built-in legend‑inspired programs, an
800+ exercise database, a smart weekly split generator, and full progress tracking. It's a
single static site — no build step, no server, no accounts — that installs to your phone and
works offline.

> **Live app:** `https://<your-live-url>` &nbsp;·&nbsp; **Repo:** https://github.com/kendoric2/GEWA

---

## What it does

- **Built-in programs** — legend‑influenced training splits, each with a dumbbell and a barbell/original variant.
- **Exercise Bank** — 800+ exercises grouped by equipment, with form cues and coaching notes.
- **Weekly Generator** — enter goal, experience, equipment, injuries and schedule; it builds a balanced split that spaces muscle groups for recovery.
- **Tracker** — tap‑to‑complete sets, +/− steppers, automatic progressive‑overload suggestions, a rest timer (with superset timing), a plate calculator, and an lb/kg toggle.
- **Starting‑weight estimator** — a quick profile (bodyweight, sex, experience) gives a sensible starting weight for each lift.
- **Stats** — estimated‑1RM trends, weekly volume, training frequency, PRs, per‑exercise history, and body‑measurement tracking — all filterable by date range.
- **Quick Log** — log a one‑off PR / 1RM attempt for any lift, in or out of your program.
- **Timed moves** — planks and holds are logged in seconds, not reps.
- **Your data, your device** — back up, restore, or reset everything; data is stored locally in the browser.
- **Installable PWA** — add it to your home screen and it runs full‑screen and offline.

---

## Install it on your phone

It's a PWA, so you install it from the browser — no app store.

- **iPhone / iPad (Safari):** open the live URL → tap **Share** → **Add to Home Screen**.
- **Android (Chrome):** open the live URL → menu (⋮) → **Install app** / **Add to Home screen**.

Once installed it launches full‑screen, works offline, and keeps your data on that device.
Data doesn't sync between devices automatically — use **Back up / Restore** (on the Programs
screen) to move it.

---

## Run it locally

It's just static files, but the service worker and live exercise‑data sync need a real server
(they won't work from a double‑clicked file). From the project folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

`localhost` counts as a secure origin, so install + offline behave just like production.

---

## Project files

| File | What it is |
|------|------------|
| `index.html` | The page — markup only; loads the CSS and JS below |
| `styles.css` | All styling |
| `app.js` | All app logic (data, generator, tracker, stats, etc.) |
| `sw.js` | Service worker — offline caching + auto‑update |
| `manifest.webmanifest` | App metadata + icons (makes it installable) |
| `icon-*.png`, `apple-touch-icon.png` | Home‑screen icons |
| `golden-era.html` | Legacy duplicate of `index.html` — safe to delete |

---

## How updates reach the app

The app deploys straight from this repo. After you push to `main`:

1. Your host (Netlify / Cloudflare Pages / GitHub Pages) redeploys automatically.
2. Installed phones pick up the new version on the next launch — the service worker serves
   `index.html`, `app.js` and `styles.css` **network‑first**, so there's no manual cache‑busting.

If you ever change `sw.js` itself or add new precached files, bump the `CACHE` version string at
the top of `sw.js` so old caches clear.

---

## Working on it from more than one computer

The important part if you switch between your **Mac** and a **Windows desktop**. GitHub is the
single source of truth; each computer keeps its own copy. The whole game is two commands:

> **Golden rule:** `git pull` before you start, `git push` when you finish.
> Do that and both computers stay perfectly in sync.

### One-time setup on a new computer

**Windows desktop**

1. Install **Git for Windows**: https://git-scm.com/download/win (accept the defaults — it
   includes *Git Bash* and a GitHub login helper).
2. Open **Git Bash** (search it in the Start menu). Using Git Bash means the commands are
   **identical to your Mac**.
3. Pick a home for the project and clone it:
   ```bash
   cd ~/Documents
   git clone https://github.com/kendoric2/GEWA.git
   ```
4. The first time you push, a browser opens to sign in to GitHub — approve it once and you're set.
   - If it ever asks for a *password* in the terminal, paste a **Personal Access Token** instead
     (GitHub → Settings → Developer settings → Personal access tokens). GitHub no longer accepts
     your account password there.

You now have `Documents/GEWA` on Windows — the same project as your Mac.

**Mac** — already set up; your repo is the folder you've been pushing from.

### Everyday workflow (identical on Mac and Windows)

Open a terminal (Terminal on Mac, Git Bash on Windows), go into the project, and:

```bash
cd ~/Documents/GEWA              # wherever your copy lives

git pull                         # 1. get the latest BEFORE you touch anything

# ... make your edits ...

git add -A                       # 2. stage everything you changed
git commit -m "what I changed"   # 3. save it to history
git push                         # 4. upload to GitHub
```

Whatever you push from one computer, the other picks up with `git pull`.

### Prefer clicking to typing? GitHub Desktop

[**GitHub Desktop**](https://desktop.github.com) is a free app for Mac and Windows that gives you
**Pull**, **Commit**, and **Push** buttons instead of commands. Sign in once, *clone* the repo,
and you get a visual list of your changes. Same result, no terminal.

### If Git ever mentions a "conflict"

It only happens if the same file was changed on both computers without pulling in between. Don't
force anything — pulling before you start prevents it entirely, and if you do get stuck it's a
quick fix.

---

## Working with bigger changes safely

For small edits, working directly on `main` is fine. For a big or risky change, make a **branch**
first so the live app keeps working while you experiment:

```bash
git checkout -b my-change     # create + switch to a branch
# ... edit, commit, push the branch ...
git push -u origin my-change

# when you're happy, merge it into main (makes it live):
git checkout main
git merge my-change
git push
```
