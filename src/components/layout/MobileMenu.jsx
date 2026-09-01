import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { sections } from "../../data/sections";
import { profile } from "../../data/profile";
import { soundManager } from "../../utils/sounds";
import { DUR, EASE } from "../../motion";

/**
 * Mobile navigation.
 *
 * Now reads data/sections.js. The old hardcoded list held only 5 of the
 * 8 sections, so three were simply unreachable on mobile.
 *
 * Also adds safe-area insets — the trigger was `fixed top-6 right-6`
 * with no inset handling, which collides with notches and rounded
 * corners.
 */
export default function MobileMenu() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  // Lock scroll and wire Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id) => {
    soundManager.playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen((v) => !v);
          soundManager.playClick();
        }}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="fixed z-[60] flex h-12 w-12 flex-col items-center justify-center gap-1.5 border-2 border-rule bg-ink-0 lg:hidden"
        style={{
          top: "calc(env(safe-area-inset-top, 0px) + 16px)",
          right: "calc(env(safe-area-inset-right, 0px) + 16px)",
        }}
      >
        <span
          className={`h-0.5 w-6 bg-paper transition-transform duration-fast ease-snap ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-paper transition-opacity duration-fast ease-snap ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-paper transition-transform duration-fast ease-snap ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0.001 : DUR.fast }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-ink-0/90 lg:hidden"
            />
            <motion.nav
              aria-label="Sections"
              initial={reduced ? { opacity: 0 } : { x: "100%" }}
              animate={reduced ? { opacity: 1 } : { x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: reduced ? 0.001 : DUR.base, ease: EASE.inout }}
              className="fixed bottom-0 right-0 top-0 z-[56] w-4/5 max-w-sm border-l-2 border-rule bg-ink-0 pt-24 lg:hidden"
            >
              <ul className="border-t-2 border-rule">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => go(s.id)}
                      onMouseEnter={() => soundManager.playHover()}
                      className="flex w-full items-center gap-4 border-b-2 border-rule px-5 py-4 text-left transition-colors duration-fast ease-snap hover:bg-paper hover:text-ink-0"
                    >
                      <span className="font-mono text-micro tabular-nums text-paper-3">
                        {s.num}
                      </span>
                      <span className="font-display text-lg font-extrabold uppercase">
                        {s.short}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="px-5 py-4 font-mono text-micro uppercase text-paper-3">
                © 2026 {profile.name}
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
