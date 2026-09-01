import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { DUR, EASE } from "../../motion";

/**
 * Boot overlay — the loading screen's aesthetic, without the block.
 *
 * The old LoadingScreen gated App.jsx so that NOTHING rendered until a
 * hardcoded ~1.8s timer elapsed: LCP was pinned to that timer, and a
 * JS-slow device showed pure black. This renders on top of a fully
 * painted page, exits on window.load or a 600ms cap (whichever is
 * later), is skipped entirely on repeat visits within a session, and
 * never runs under reduced motion.
 */
const KEY = "booted";
const CAP = 600;

export default function BootOverlay() {
  const reduced = useReducedMotion();

  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      if (sessionStorage.getItem(KEY) === "1") return false;
    } catch {
      // Storage blocked — show it once, harmlessly.
    }
    return true;
  });

  useEffect(() => {
    // Reduced motion never shows the overlay — that's derived below, so
    // there is no state to set here.
    if (!show || reduced) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        // Non-fatal.
      }
      setShow(false);
    };

    const timer = setTimeout(finish, CAP);
    window.addEventListener("load", finish, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", finish);
    };
  }, [show, reduced]);

  // Derived, not stored — reduced motion skips the overlay entirely.
  const visible = show && !reduced;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: DUR.wipe, ease: EASE.inout }}
          className="fixed inset-0 z-[95] flex items-end bg-ink-0"
        >
          <div className="mx-auto w-full max-w-page px-gutter pb-s6">
            <div className="h-[3px] w-full bg-acc" />
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <span className="font-display text-h2 font-black uppercase text-paper">
                {profile.initials}
              </span>
              <span className="font-mono text-meta uppercase text-paper-3">
                Portfolio / 2026
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
