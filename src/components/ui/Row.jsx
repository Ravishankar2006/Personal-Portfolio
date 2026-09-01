import { motion, useReducedMotion } from "framer-motion";
import { enterRow } from "../../motion";

/**
 * THE WORKHORSE — a ruled index row. Work, Proof, Stack, Record and
 * Contact all collapse onto this instead of each hand-rolling a card.
 *
 * Accessibility contract (see R3 in the plan):
 *  - the trailing glyph and the bottom rule are PERMANENT, so touch
 *    users get the same affordance a hover would give
 *  - :focus-visible triggers the same inversion as :hover, so keyboard
 *    users see the same state
 *  - inversion is enhancement, never the only signal
 *
 * Hover inverts (white fill, black ink). It never translates or scales —
 * the old cards used `y:-10, scale:1.02`, which shifts layout on hover.
 */
export default function Row({
  index = 0,
  num,
  title,
  meta,
  right,
  children,
  href,
  onClick,
  as,
}) {
  const reduced = useReducedMotion();

  const inner = (
    <>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        {num && (
          <span className="font-mono text-meta tabular-nums text-paper-3 transition-colors duration-fast ease-snap group-hover:text-ink-0 group-focus-visible:text-ink-0">
            {num}
          </span>
        )}
        <span className="font-display text-h3 font-extrabold uppercase tracking-tight">
          {title}
        </span>
        {meta && (
          <span className="font-mono text-micro uppercase text-paper-3 transition-colors duration-fast ease-snap group-hover:text-ink-0 group-focus-visible:text-ink-0">
            {meta}
          </span>
        )}
      </div>

      {children && (
        <div className="mt-2 max-w-3xl text-paper-2 transition-colors duration-fast ease-snap group-hover:text-ink-0 group-focus-visible:text-ink-0">
          {children}
        </div>
      )}
    </>
  );

  const cls =
    "group relative flex w-full items-start justify-between gap-6 border-b-2 border-rule bg-ink-0 px-2 py-s4 text-left text-paper " +
    "transition-colors duration-fast ease-snap " +
    "hover:bg-paper hover:text-ink-0 hover:border-paper " +
    "focus-visible:bg-paper focus-visible:text-ink-0 focus-visible:border-paper";

  const Tag = as || (href ? "a" : onClick ? "button" : "div");
  const interactive = Boolean(href || onClick);

  const props = {
    className: cls,
    ...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}),
    ...(onClick ? { onClick, type: "button" } : {}),
  };

  return (
    <motion.div {...enterRow(reduced, index)}>
      <Tag {...props}>
        <div className="min-w-0 flex-1">{inner}</div>
        <div className="flex shrink-0 items-center gap-4 pt-1">
          {right && (
            <span className="hidden font-mono text-micro uppercase text-paper-3 transition-colors duration-fast ease-snap group-hover:text-ink-0 group-focus-visible:text-ink-0 sm:inline">
              {right}
            </span>
          )}
          {interactive && (
            // Permanent, not hover-revealed — touch users need it too.
            <span aria-hidden="true" className="font-mono text-lg leading-none">
              →
            </span>
          )}
        </div>
      </Tag>
    </motion.div>
  );
}
