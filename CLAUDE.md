# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page React portfolio site (cyberpunk / glassmorphism theme) built with Vite, Tailwind CSS, and Framer Motion. Dark mode only — there is no light theme.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint over the project
```

There is no test suite configured in this repo.

## Architecture

- **`src/App.jsx`** is the entire page: it renders a fixed sequence of `<section id="...">` blocks (`profile`, `timeline`, `workflow`, `projects`, `terminal`, `stats`, `achievements`, `contact`), each backed by one component from `src/components/sections/`. There is no router — this is a single scrolling page, not multi-route.
- **Section IDs are a coupling point.** `FloatingNav` (`src/components/layout/FloatingNav.jsx`) and `MobileMenu` hardcode the same list of section `id`s to scroll to and to highlight as "active" via scroll position. If you rename, add, or remove a `<section id="...">` in `App.jsx`, update the `sections` array in both nav components to match.
- **`src/components/`** is organized by role, not by feature:
  - `sections/` — the page's content blocks (one component per `<section>` in `App.jsx`)
  - `layout/` — `FloatingNav` (desktop side dot-nav) and `MobileMenu`
  - `effects/` — global visual/behavioral effects mounted once in `App.jsx` (`Enhancements.jsx` exports `ScrollProgress`, `LoadingScreen`, `CustomCursor`, `BackgroundGrid`; also `SmoothScroll`, `PageTransition`)
  - `ui/` — small reusable widgets (`BackToTop`, `MagneticButton`, `ProjectModal`, `SkipLink`)
- Content is edited directly inside components, not pulled from a CMS or JSON data file — e.g. profile/education/stats live in `ProfileIntro.jsx` and `Timeline.jsx`, skills/orbital system in `SocialProof.jsx`, project cards in `Projects.jsx`, workflow tabs in `TechWorkflow.jsx`, contact links in `Contact.jsx`, certificates in `Achievements.jsx`.
- Images/certificates referenced by components live in `src/assets/` and are imported directly (not referenced by URL string).
- Custom animations (glitch text, CRT scanlines, border-tracing, spin/pulse variants) are defined as raw CSS keyframes/classes in `src/index.css` rather than as Tailwind plugins; Tailwind's `tailwind.config.js` only extends a couple of `laser` animations. When adding a new one-off animation, prefer following the existing `src/index.css` pattern over extending the Tailwind config.
- ESLint (`eslint.config.js`) enables `no-unused-vars` but ignores names matching `^[A-Z_]|^motion$` (component-style/constant names and the `motion` import from Framer Motion).
