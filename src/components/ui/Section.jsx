import { motion, useReducedMotion } from "framer-motion";
import { enterUp, wipeIn } from "../../motion";

/**
 * The section shell: id anchor, 8px top slab, numbered header, container.
 *
 * Every section used to re-implement its own centred header markup with
 * slightly different sizes and its own ad-hoc entrance props. This owns
 * all of it, so the page has one header rhythm.
 */
export default function Section({ id, num, title, kicker, children, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <section
      id={id}
      className={`relative border-t-8 border-paper scroll-mt-6 ${className}`}
    >
      <div className="mx-auto max-w-page px-gutter py-s7">
        {/* Header — numeral in the gutter, label set against a rule */}
        <motion.header {...enterUp(reduced)} className="mb-s6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-mono text-meta uppercase text-paper-3 tabular-nums">
              {num}
            </span>
            {kicker && (
              <span className="font-mono text-meta uppercase text-paper-3">
                {kicker}
              </span>
            )}
          </div>

          <h2 className="mt-3 font-display text-h2 font-black uppercase text-paper break-words">
            {title}
          </h2>

          <motion.div
            {...wipeIn(reduced)}
            className="mt-s3 h-[2px] w-full origin-left bg-rule"
          />
        </motion.header>

        {children}
      </div>
    </section>
  );
}
