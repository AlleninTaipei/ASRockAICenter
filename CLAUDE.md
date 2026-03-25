# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Branches

| Branch | Stack | Entry point | Status |
|--------|-------|-------------|--------|
| `main` | Plain HTML + CSS + JS (no framework, no build step) | `index.html` | **Primary** |
| `react-vite` | React 18 + Vite 5 | `src/main.jsx` → `src/App.jsx` | Archived |

---

## `main` branch — Plain HTML + CSS + JS

No build step required. Open `index.html` directly in any browser.

GitHub Pages source: `main` branch, root `/`, no build command.

### File layout

| File | Role |
|------|------|
| `index.html` | Full page structure + all SEO/OG meta |
| `style.css` | All styles (from `global.css`, Starfield canvas rules removed) |
| `locales.js` | `const LOCALES = { en: {...}, 'zh-TW': {...} }` global |
| `main.js` | Language toggle, scroll reveal, YouTube fetch/cache |
| `public/` | Static assets — docs (PDF), favicon, og-image, robots.txt, sitemap.xml |

### Internationalization

`locales.js` exposes a single `LOCALES` global. `main.js` reads `localStorage.getItem('lang')` on load (default `'en'`), then calls `applyLocale(lang)` which:
- Resolves `data-i18n` key paths (e.g. `header.taglines.0`) against `LOCALES[lang]`
- Re-renders dynamic grids (apps, resources, contact) via `innerHTML`
- Re-attaches `IntersectionObserver` for scroll reveal

When adding or editing content, edit `locales.js` only.

### YouTube API key

Inject the key via a meta tag in `index.html` — no build tool or env file needed:

```html
<meta name="youtube-api-key" content="YOUR_KEY" />
```

Leave `content` empty to hide the videos section gracefully.

### PDF document paths

PDFs live in `public/docs/en/` and `public/docs/zh-TW/`. Links in `locales.js` use paths relative to `index.html`, e.g. `public/docs/en/MasterAi_en.pdf`.

---

## `react-vite` branch — React + Vite (Archived)

### Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run deploy     # Build + push to gh-pages branch (GitHub Pages)
```

No test runner or linter is configured in this project.

**Windows note:** If `npm` is blocked by PowerShell execution policy, run:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Architecture

**Single Page Application** — React 18 + Vite 5. The `base: './'` in [vite.config.js](vite.config.js) ensures relative asset paths work on GitHub Pages.

**Entry point flow:** `index.html` → `src/main.jsx` → `src/App.jsx`

#### Internationalization (i18n)

All page content lives exclusively in [src/locales/en.js](src/locales/en.js) and [src/locales/zh-TW.js](src/locales/zh-TW.js) as plain JS object exports. `App.jsx` holds a `lang` state (persisted to `localStorage`) and selects the appropriate locale object — there are no i18n libraries involved.

When adding or editing content, edit the locale files; do not put content strings directly in `App.jsx`.

#### Starfield Background

[src/components/Starfield.jsx](src/components/Starfield.jsx) is a self-contained Canvas 2D animation component rendered at `position: fixed; z-index: -1`. It features multi-layer parallax stars, nebula blobs, shooting stars, mouse-parallax offsets, and click ripple waves. Star count is reduced automatically on mobile.

#### Scroll Reveal Animations

`App.jsx` uses `IntersectionObserver` to add a `reveal` CSS class to cards and sections as they scroll into view. The base state (`opacity: 0; transform: translateY(40px)`) and animated state (`.reveal`) are defined in [src/assets/global.css](src/assets/global.css).

#### Styling

All styles are in [src/assets/global.css](src/assets/global.css). The design uses glassmorphism cards (`backdrop-filter: blur`), gradient text (`-webkit-background-clip: text`), and responsive breakpoints at 968px, 768px, and 480px. There are no CSS modules or utility frameworks.
