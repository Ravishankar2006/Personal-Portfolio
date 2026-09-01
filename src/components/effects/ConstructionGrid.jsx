import { useReducedMotion } from "framer-motion";
import { useEffectsEnabled } from "../../hooks/useEffectsEnabled";

/**
 * The structural grid — promoted from decoration to architecture.
 *
 * The old BackgroundGrid drew verticals at 10%/15% that aligned with
 * nothing on the page, plus a soft dot-matrix (the single softest
 * element in the design). These rules sit on the SAME container and
 * gutter as the content, so the visible grid is the real grid — which
 * is the entire point of the idiom.
 */
export default function ConstructionGrid() {
  const reduced = useReducedMotion();
  const enabled = useEffectsEnabled();
  const scan = !reduced && enabled;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 lg:pl-28">
      {/* Column rules on the content container's own geometry */}
      <div className="mx-auto flex h-full max-w-page justify-between px-gutter">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-full w-px bg-rule/40 ${
              i === 0 || i === 4 ? "" : "hidden sm:block"
            }`}
          />
        ))}
      </div>

      {/* Measurement tick — advances in discrete steps, not a smooth sweep */}
      {scan && (
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
          <div className="grid-tick absolute inset-x-0 h-px bg-acc/20" />
        </div>
      )}
    </div>
  );
}
