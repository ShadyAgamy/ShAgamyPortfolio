# ShAgamyPortfolio

My personal portfolio site: a single-page React app covering who I am, my resume, and my project work.

**Live site:** https://ShadyAgamy.github.io/ShAgamyPortfolio

## Stack

- [React 19](https://react.dev/) with [React Router v5](https://v5.reactrouter.com/) (`HashRouter`, since GitHub Pages has no server-side rewrites)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build
- Sass, per-component (`*.scss` next to each `.tsx`)
- [EmailJS](https://www.emailjs.com/) for the contact form, [SweetAlert2](https://sweetalert2.github.io/) for its success/failure feedback
- [Vitest](https://vitest.dev/) + Testing Library for tests
- Deployed to GitHub Pages via the `gh-pages` package

## What's on the site

- **Home** — landing/intro page
- **About** — background and skills
- **Resume** — CV content
- **Portfolio** — shipped projects, case studies, and agency work, driven by data in `src/pages/portfolio/portfolio.data.ts`
- **Contact** — a working contact form (EmailJS) with a mailto fallback if the request fails

## Development

```bash
npm install
npm start      # dev server at localhost:5173/ShAgamyPortfolio/
```

Other scripts:

```bash
npm run build    # production build to /build
npm run preview  # serve the /build output locally
npm test         # Vitest
npm run deploy   # build, then publish /build to the gh-pages branch
```
