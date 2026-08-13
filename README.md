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

## Project structure

```
├── index.html
├── vercel.json
├── public/          # static assets (profile image, favicon)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/profile.js      # ← all content lives here
    └── components/          # section components
```
