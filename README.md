# Tusher Mondal — Portfolio

A lightweight personal portfolio showcasing my career, skills and projects.

Built with **React 18 + Vite**. No UI framework, no routing library — just fast, dependency-free code.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # production build (outputs to dist/)
npm run preview # preview the production build locally
```

## Editing content

All site content (profile, experience, education, skills, projects) lives in one file:

```
src/data/profile.js
```

Edit that file to update the site — no component changes needed.

## Deploying to Vercel

This project is ready for Vercel out of the box (Vite is auto-detected).
`vercel.json` includes an SPA rewrite so any path falls back to `index.html`.

**Live at:** https://www.tusher.in (custom domain owned by Tusher — add it under
Vercel → Project → Settings → Domains; canonical/OG/sitemap URLs in the site
already point there).

### Option A — Vercel dashboard (recommended)

Auto-deploys on every future push, no CLI needed.

1. The code is already pushed to GitHub (`Hurley2017/tushermondalcv`, branch `main`).
2. Go to [vercel.com](https://vercel.com) → **Add New…** → **Project** → import `Hurley2017/tushermondalcv`.
3. Framework preset **Vite** is auto-detected. Build command `npm run build`, output directory `dist`.
4. Click **Deploy**. Every subsequent push to `main` redeploys automatically.

### Option B — Vercel CLI

```bash
vercel login          # once — confirm in the browser
vercel                # preview deployment
vercel --prod         # production deployment
```

`vercel` links the project on first run and reuses the link afterwards.

## Visit analytics (optional)

Every page load sends a tiny, non-cookie analytics beacon to `POST /api/visit`
(device/browser, screen size, language, timezone, referrer + server-side IP and
country) which is stored in a **key-value store** (KV = Key-Value).

**Setup — pick one store:**

- **Vercel KV** (if available in your dashboard): Vercel → Project → **Storage**
  → **Create Database** → **KV** → link it (auto-adds `KV_REST_API_URL` +
  `KV_REST_API_TOKEN`).
- **Upstash Redis (recommended if KV isn't shown):** create a free database at
  [upstash.com](https://upstash.com) → copy **REST URL** and **REST Token** →
  add them as `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` env vars.

Then:

1. Add an **`ADMIN_TOKEN`** env var (any secret string) under Project → Settings
   → Environment Variables → Redeploy.
2. View logs at **`https://www.tusher.in/logs.html`** and enter your
   `ADMIN_TOKEN` (or use `/logs.html?key=YOUR_TOKEN`).

Until a store is configured, the beacon fails silently and the site works
normally.

## Project structure

```
├── index.html
├── vercel.json
├── api/              # serverless functions (visit logging)
│   ├── visit.js      #   POST — record a visit
│   └── visits.js     #   GET  — read logs (needs ADMIN_TOKEN)
├── public/           # static assets (profile image, favicon, logs.html)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/profile.js      # ← all content lives here
    └── components/          # section components
```
