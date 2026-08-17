# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Shady Agamy's personal portfolio site. React 19 + React Router v5, built with Vite, deployed to GitHub Pages. No TypeScript.

## Commands

```
npm start      # Vite dev server at localhost:5173/ShAgamyPortfolio/
npm run build  # production build to /build (outDir is set to `build`, not Vite's default `dist`, so `npm run deploy` doesn't need updating)
npm run preview # serve the /build output locally to sanity-check a production build
npm test       # Vitest (only src/App.test.jsx exists, a default smoke test)
npm run deploy # npm run build, then gh-pages -d build (publishes /build to the gh-pages branch)
```

`vite.config.js` sets `base: '/ShAgamyPortfolio/'` to match the `homepage` field, so asset/HTML references resolve correctly under the GitHub Pages subpath in both dev and prod.

No lint script is wired into `npm test`/`build`; run `npx eslint src` manually. Config is `eslint.config.js` (flat config), a minimal `eslint-plugin-react`/`eslint-plugin-react-hooks` setup.

## Branches & deployment

- `master` is the working/source branch (this checkout).
- `gh-pages` is the built output branch that GitHub Pages actually serves — do not hand-edit it; it's overwritten by `npm run deploy` (via the `gh-pages` package) from `/build`.
- `package.json` `homepage` field points at `https://ShadyAgamy.github.io/ShAgamyPortfolio`.

## Architecture

- **Entry**: `index.html` (repo root, Vite convention) loads `src/main.jsx`, which wraps `<App />` in `HashRouter` (GitHub Pages has no server-side rewrite, so routes are `/#/about` etc.) plus a `ScrollToTop` component that resets scroll on route change, and mounts via `react-dom/client`'s `createRoot`.
- **`src/App.jsx`**: top-level layout. Owns `menuOpen` state (open by default ≥900px viewport width, toggle-only below it) and renders `<Switch>` routes for `/`, `/about`, `/resume`, `/portfolio`, `/contact` next to the persistent `<Menu>`.
- **Pages** (`src/pages/<name>/<Name>.jsx` + co-located `.scss`): each page is a single self-contained component — no shared page layout component beyond what `App.jsx` provides, no global state manager (no Redux/Context store beyond local `useState`).
- **Portfolio content is data-driven**: `src/pages/portfolio/portfolio.data.js` exports `projects`, `caseStudies`, and `agencyWork` arrays; `Portfolio.jsx` just maps over them via `ProjectCard`/`CaseStudy` presentational components. To add/edit a portfolio entry, edit the data file, not the JSX. Project images live in `public/imgs/projects/` and are referenced via `${import.meta.env.BASE_URL}imgs/projects/<file>` (Vite's equivalent of CRA's `PUBLIC_URL`).
- **Contact form** (`src/pages/contact/Contact.jsx`): submits via EmailJS (`@emailjs/browser`, service/template/public key are hardcoded constants — EmailJS public keys are designed to be client-side, not secrets) and shows success/failure via SweetAlert2. On failure it falls back to showing the direct mailto address rather than surfacing the raw API error.
- **Styling**: Sass per-component (`*.scss` next to each `.jsx`), plus `src/reset.scss` and `src/App.scss` for global/reset styles, and `animate.css` for scroll-in animations (`animate__animated` classes). No CSS-in-JS.
- **Assets**: `src/assets/` for images used directly by components (imported as modules, e.g. `profile.png` in the menu); `public/imgs/` for portfolio project screenshots referenced by URL through `portfolio.data.js`.
