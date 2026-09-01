/**
 * THE MOTION CONTRACT.
 *
 * This is the ONLY place `whileInView` / `viewport` / easing curves are
 * configured. Sections import from here and never write their own
 * `initial` / `whileInView` / `transition` props.
 *
 * Why: the old code had 25 occurrences of `viewport={{ once: false }}`
 * against 6 of `once: true` — so most of the page re-animated on every
 * scroll pass, which reads as jitter. Centralising it kills that
 * mechanically instead of by discipline, and guarantees one easing
 * vocabulary across the site.
 */

// Mirror of the CSS duration tokens (seconds — Framer wants seconds).
export const DUR = {
  instant: 0.09,
  fast: 0.16,
  base: 0.28,
  slow: 0.52,
  wipe: 0.7,
};

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  inout: [0.76, 0, 0.24, 1],
  snap: [0.2, 0, 0, 1],
};

/** Entrances fire once, when a quarter of the element is on screen. */
export const VIEWPORT = { once: true, amount: 0.25 };

/**
 * All variants take `reduced` (from framer-motion's useReducedMotion).
 * Under reduced motion nothing translates — elements fade in place at
 * ~0 duration, so the page still composes correctly with no movement.
 */

export const enterUp = (reduced) =>
  reduced
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: VIEWPORT, transition: { duration: 0.001 } }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEWPORT,
        transition: { duration: DUR.slow, ease: EASE.out },
      };

export const enterLeft = (reduced) =>
  reduced
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: VIEWPORT, transition: { duration: 0.001 } }
    : {
        initial: { opacity: 0, x: -24 },
        whileInView: { opacity: 1, x: 0 },
        viewport: VIEWPORT,
        transition: { duration: DUR.slow, ease: EASE.out },
      };

export const fade = (reduced) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT,
  transition: { duration: reduced ? 0.001 : DUR.base, ease: EASE.out },
});

/**
 * Staggered row entrance. Capped at 6 steps (360ms total) so long
 * lists don't leave the last item crawling in seconds late.
 */
export const enterRow = (reduced, index = 0) => {
  const delay = reduced ? 0 : Math.min(index, 6) * 0.06;
  return reduced
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: VIEWPORT, transition: { duration: 0.001 } }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEWPORT,
        transition: { duration: DUR.base, ease: EASE.out, delay },
      };
};

/** Hard slab wipe — used by section top-rules and the boot overlay. */
export const wipeIn = (reduced) =>
  reduced
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: VIEWPORT, transition: { duration: 0.001 } }
    : {
        initial: { scaleX: 0 },
        whileInView: { scaleX: 1 },
        viewport: VIEWPORT,
        transition: { duration: DUR.wipe, ease: EASE.inout },
      };
