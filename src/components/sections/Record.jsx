import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import Section from "../ui/Section";
import { record } from "../../data/record";
import { enterRow } from "../../motion";

/**
 * The ledger — education and experience, single left gutter.
 *
 * The old timeline alternated cards left/right, which only paid off on
 * desktop and collapsed to one column below md anyway. This is
 * identical at every width.
 *
 * The expand trigger is a real <button>: the previous version put
 * onClick on a motion.div, so it was not keyboard-reachable at all.
 */
export default function Record() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(null);
  const trackRef = useRef(null);

  // Scroll-LINKED (not scroll-triggered), so it never re-fires.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section id="record" num="04" kicker="Record" title="How I got here">
      <div ref={trackRef} className="relative pl-6 sm:pl-10">
        {/* Track + accent fill — one of the accent budget's slots */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-rule">
          <motion.div
            style={{ scaleY: reduced ? 1 : fill }}
            className="h-full w-full origin-top bg-acc"
          />
        </div>

        {record.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.article
              key={item.title}
              {...enterRow(reduced, i)}
              className="relative border-b-2 border-rule py-s4 last:border-b-0"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className={`absolute -left-6 top-s4 block h-3 w-3 sm:-left-10 ${
                  item.current ? "bg-acc" : "bg-rule-2"
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-meta tabular-nums text-paper-3">
                  {item.year}
                </span>
                {item.current && (
                  <span className="border-2 border-acc px-2 py-0.5 font-mono text-micro uppercase text-acc">
                    Current
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-display text-h3 font-extrabold uppercase tracking-tight text-paper">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-micro uppercase text-paper-3">
                {item.org}
              </p>

              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="mt-3 border-2 border-rule px-2 py-1 font-mono text-micro uppercase text-paper-2 transition-colors duration-fast ease-snap hover:border-paper hover:bg-paper hover:text-ink-0"
              >
                {isOpen ? "[ − ] Less" : "[ + ] Detail"}
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: reduced ? 0.001 : 0.28 }}
                className="overflow-hidden"
              >
                <ul className="mt-3 space-y-1 border-l-2 border-rule pl-4">
                  {item.detail.map((d) => (
                    <li key={d} className="text-sm text-paper-2">
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
