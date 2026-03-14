# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # SSG build (vite-react-ssg) → pre-rendered HTML in dist/
npm run preview    # Preview production build locally
npm run deploy     # Build + push to gh-pages branch (GitHub Pages)
```

No test runner or linter is configured in this project.

**Windows note:** If `npm` is blocked by PowerShell execution policy, run:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Architecture

**Static Site Generation (SSG)** — React 18 + Vite 5 + `vite-react-ssg`, deployed to GitHub Pages at `https://allenintaipei.github.io/ASRockAICenter/`. The `base: './'` in [vite.config.js](vite.config.js) ensures relative asset paths work on GitHub Pages.

**Entry point flow:** `index.html` → `src/main.jsx` → `src/App.jsx`

### Static Site Generation (SSG)

`vite-react-ssg` pre-renders the app to full HTML at build time. The built `dist/index.html` contains all rendered content — search crawlers see the complete page without executing JavaScript. React then hydrates client-side for full interactivity.

**Entry point:** `src/main.jsx` exports `createRoot` via `ViteReactSSG` with a routes array (react-router-dom format). There is only one route: `{ path: '/', element: <App /> }`.

**SSR guard:** `App.jsx` reads `localStorage` with a `typeof window !== 'undefined'` check because `localStorage` is unavailable during build-time rendering. All other browser APIs (`IntersectionObserver`, etc.) are safely inside `useEffect` and do not need guarding.

**SEO files:** `public/robots.txt` and `public/sitemap.xml` are copied to `dist/` at build time and are accessible at the deployed URL.

### Internationalization (i18n)

The app supports English and Traditional Chinese. All page content (headings, app cards, resource links, contact info) lives exclusively in [src/locales/en.js](src/locales/en.js) and [src/locales/zh-TW.js](src/locales/zh-TW.js) as plain JS object exports. `App.jsx` holds a `lang` state (persisted to `localStorage`) and selects the appropriate locale object to render — there are no i18n libraries involved.

When adding or editing content, edit the locale files; do not put content strings directly in `App.jsx`.

### Starfield Background

[src/components/Starfield.jsx](src/components/Starfield.jsx) is a self-contained Canvas 2D animation component rendered at `position: fixed; z-index: -1`. It features multi-layer parallax stars, nebula blobs, shooting stars, mouse-parallax offsets, and click ripple waves. Star count is reduced automatically on mobile. It uses `useRef` for the canvas and `useEffect` for the animation loop.

### Scroll Reveal Animations

`App.jsx` uses `IntersectionObserver` to add a `reveal` CSS class to cards and sections as they scroll into view. The base state (`opacity: 0; transform: translateY(40px)`) and animated state (`.reveal`) are defined in [src/assets/global.css](src/assets/global.css).

### Styling

All styles are in [src/assets/global.css](src/assets/global.css). The design uses glassmorphism cards (`backdrop-filter: blur`), gradient text (`-webkit-background-clip: text`), and responsive breakpoints at 968px, 768px, and 480px. There are no CSS modules or utility frameworks.
