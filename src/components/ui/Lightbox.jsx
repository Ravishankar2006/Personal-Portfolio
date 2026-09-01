import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { DUR, EASE } from "../../motion";

/**
 * Full-size certificate viewer.
 *
 * The Escape handling and body scroll-lock are lifted from the orphaned
 * ui/ProjectModal.jsx — that logic was the one genuinely good thing in
 * the never-imported files, so it's reused rather than rewritten.
 * Adds focus management, which the original lacked.
 */
export default function Lightbox({ src, alt, onClose }) {
  const reduced = useReducedMotion();
  const closeRef = useRef(null);
  const open = Boolean(src);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    // Move focus into the dialog so Escape and Tab behave.
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.001 : DUR.fast }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt || "Certificate"}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-0/95 p-4"
        >
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: reduced ? 0.001 : DUR.base, ease: EASE.out }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col"
          >
            <div className="mb-3 flex items-center justify-between gap-4 border-b-2 border-rule pb-3">
              <p className="truncate font-mono text-meta uppercase text-paper-2">
                {alt}
              </p>
              <button
                ref={closeRef}
                onClick={onClose}
                className="shrink-0 border-2 border-rule px-3 py-1 font-mono text-meta uppercase text-paper transition-colors duration-fast ease-snap hover:border-paper hover:bg-paper hover:text-ink-0"
              >
                Close ✕
              </button>
            </div>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="max-h-[80vh] w-full border-2 border-rule object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
