# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page React portfolio built with Vite, Tailwind CSS and Framer Motion. The design is **brutalist / Swiss with one accent colour**: visible grid, blocky oversized type, hard edges. Dark ground only — there is no light theme.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # ESLint
```

No test suite is configured.

## Non-negotiable design rules

These are enforced by config, not discipline — don't work around them.

1. **No rounded corners, no blur, no glassmorphism.** `tailwind.config.js` maps every `borderRadius`, `blur` and `backdropBlur` key to `0`, *outside* `theme.extend` so it replaces the scales. Adding `rounded-xl` to a component does nothing. This is intentional.
2. **One accent, on a budget.** `--acc` (electric cyan `#00F0FF`) gets **at most one visible element per viewport-height**. Allotted slots: scroll-progress rule, active nav row, focus ring, availability marker, one hovered row, the `CURRENT` tag. `Panel` takes `accent` as an explicit opt-in and never defaults to it.
3. **The accent is banned on white.** It is 14.91:1 on black but **1.41:1 on white**, and the primary hover state is a white inversion. This is why the focus ring is two-tone (accent + black halo) — don't "simplify" it.
4. **Text tone floor is `--paper-3` (`#8A8A8A`, 6.08:1).** Never reintroduce `zinc-500` (4.35:1) or `zinc-600` (3.0:1) — both fail WCAG AA on black.
5. **Hover inverts, it never moves.** `hover:bg-paper hover:text-ink-0`, no `translate`/`scale` (those shift layout). `:focus-visible` must trigger the *same* inversion as `:hover`, and the trailing `→` plus bottom rule stay **permanent** so touch users get the affordance too.

## Architecture

### Single sources of truth — use these, don't hardcode

- **`src/data/sections.js`** — the section registry (`id`, `num`, `label`, `short`). `App.jsx`, `IndexRail`, `MobileMenu` and the hero `CommandBar` all read it. Adding a section means editing this list *and* adding the component to `App.jsx`. This previously lived hardcoded in three places that had drifted, leaving three sections unreachable on mobile.
- **`src/data/{projects,stack,record,proof,profile}.js`** — all content. Sections and the command bar read the same modules, so their output cannot disagree. **Do not put content back inside components.**
- **`src/styles/tokens.css`** — every colour, size, weight, duration and easing curve. Nothing downstream hardcodes these.
- **`src/motion.js`** — the *only* place `whileInView` / `viewport` / easing is configured, with `once: true` baked in. Sections must not write their own `initial` / `whileInView` / `transition`; import a variant instead. Every variant takes `reduced` from `useReducedMotion()`.

### Page structure

`App.jsx` renders six sections in order: **Masthead** (`index`, absorbs the command bar) → **Work** → **Proof** → **Stack** → **Record** → **Contact**.

### UI primitives (`src/components/ui/`)

Build sections from these rather than hand-rolling markup:
- **`Section`** — id anchor, 8px top slab, numbered header, container, entrance.
- **`Row`** — the workhorse ruled index row. Work, Proof, Stack, Record and Contact all use it. Renders as `<a>` with `href`, `<button>` with `onClick`, else `<div>`.
- **`Panel`** / **`Tag`** — the opaque hard-edged box and label pill.
- **`Marquee`**, **`Counter`**, **`Lightbox`**, **`SkipLink`**.

### Effects (`src/components/effects/`)

All decorative effects are gated three ways — `useReducedMotion()`, `usePointerFine()` where pointer-dependent, and the user-facing **`EFFECTS: ON/OFF`** toggle in the Contact colophon (`useEffectsEnabled`).

- **`Crosshair`** — writes position via **ref mutation inside one rAF loop**; it must never re-render per frame, and must **never hide the native cursor** (the previous version injected `* { cursor: none !important }` globally, so any error left users with no cursor at all).
- **`ConstructionGrid`** — column rules on the *same* container and gutter as content, so the visible grid is the real grid.
- **`BootOverlay`** — non-blocking; the page renders underneath. Never gate content behind it.
- **`ScrollProgress`**.

### Motion contract

Reduced motion is honoured in two layers: `tokens.css` zeroes the duration *tokens* (so CSS and Framer read one source of truth), and each `motion.js` variant returns a fade-in-place. `Marquee`'s reduced-motion fallback is a **static wrapped list**, not a paused transform — a frozen transform can strand the track off-screen.

## Gotchas

- **Don't extend `spacing` or `borderWidth` with numeric keys.** That silently overwrites `p-4`, `p-6`, `gap-4`, `border-2` across the codebase. Spacing tokens are prefixed (`s1`–`s8`, `gutter`); Tailwind's default border widths already map 1:1 onto the rule weights (`border`=1px, `border-2`=2px, `border-4`=4px, `border-8`=8px).
- **ESLint's `react-hooks/set-state-in-effect` is on.** Derive at render instead of calling `setState` in an effect body (see `useCountUp`, `BootOverlay`).
- **Images are two-size WebP** (`-thumb` 600w, `-full` 1600w). Thumbs render in cards; fulls load only in the `Lightbox`. Always add `loading="lazy" decoding="async"` and explicit `width`/`height`.

## Static files

`public/` is served at the site root: `resume.pdf`, `og.png`, `favicon.svg`. Reference these as root-relative paths (`/resume.pdf`) — do **not** `import` them the way `src/assets/` images are imported. Keep filenames URL-safe (no spaces or apostrophes).
