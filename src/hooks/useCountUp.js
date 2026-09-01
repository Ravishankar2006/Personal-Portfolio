import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Count-up that SNAPS in discrete steps rather than easing smoothly —
 * a mechanical readout, not a swell.
 *
 * Replaces two near-duplicate implementations (ProfileIntro's
 * AnimatedCounter and SocialProof's GlitchCounter), both of which ran a
 * 16ms setInterval for ~125 state updates per counter. This does 24.
 *
 * Also fixes two bugs those versions shared: the interval cleanup was
 * returned from inside the IntersectionObserver callback (so it never
 * ran), and nothing guarded re-triggering on every scroll pass.
 */
const STEPS = 24;
const DURATION = 900;

export function useCountUp(target, { decimals = 0 } = {}) {
  const reduced = useReducedMotion();
  const end = Number(target) || 0;
  const [value, setValue] = useState(0);
  const nodeRef = useRef(null);
  const startedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Reduced motion never animates — the final value is derived at
    // render below, so there is nothing to set here.
    if (reduced) return;

    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || startedRef.current) return;
        startedRef.current = true;

        let step = 0;
        timerRef.current = setInterval(() => {
          step += 1;
          if (step >= STEPS) {
            setValue(end);
            clearInterval(timerRef.current);
            timerRef.current = null;
          } else {
            setValue((end * step) / STEPS);
          }
        }, DURATION / STEPS);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [end, reduced]);

  // Derived, not stored: under reduced motion the counter reads its
  // final value from the first paint.
  const display = reduced ? end : value;

  return { ref: nodeRef, text: display.toFixed(decimals) };
}
