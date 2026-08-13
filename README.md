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

1. Push this repo to GitHub.
2. In Vercel, **Import Project** → pick the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
4. Deploy — done.

`vercel.json` includes an SPA rewrite so any path falls back to `index.html`.

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
