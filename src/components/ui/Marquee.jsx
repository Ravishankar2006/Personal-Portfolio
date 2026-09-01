import { useReducedMotion } from "framer-motion";

/**
 * Horizontal ticker band — the Stack section's kinetic element.
 *
 * Under reduced motion it renders the FULL list statically and
 * untransformed. That matters: zeroing a transition mid-transform can
 * strand a marquee off-screen, so the fallback must be a plain wrapped
 * list, not a paused animation.
 */
export default function Marquee({ items, className = "" }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        className={`flex flex-wrap gap-x-6 gap-y-2 border-y-2 border-rule py-3 font-mono text-meta uppercase text-paper-2 ${className}`}
      >
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  }

  // Duplicated once so the -50% translate loops seamlessly.
  const track = [...items, ...items];

  return (
    <div
      className={`group relative overflow-hidden border-y-2 border-rule py-3 ${className}`}
    >
      <div className="marquee-track flex w-max gap-8 font-mono text-meta uppercase text-paper-2">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            {item}
            <span aria-hidden="true" className="text-rule-2">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
