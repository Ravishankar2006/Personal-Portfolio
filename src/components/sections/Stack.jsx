import { motion, useReducedMotion } from "framer-motion";
import Section from "../ui/Section";
import Marquee from "../ui/Marquee";
import { stack, stackFlat } from "../../data/stack";
import { enterRow } from "../../motion";

/**
 * The stack — always visible.
 *
 * Replaces a 4-tab click-to-reveal that hid three-quarters of the list
 * behind an interaction. 22 short strings is not enough content to
 * justify that, and the payload behind the click was filler: six
 * entries whose entire description read "Programming language".
 */
export default function Stack() {
  const reduced = useReducedMotion();

  return (
    <Section id="stack" num="03" kicker="Stack" title="What I build with">
      <div className="grid gap-px border-2 border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group, gi) => (
          <motion.div key={group.group} {...enterRow(reduced, gi)} className="bg-ink-1 p-s4">
            <h3 className="font-mono text-meta uppercase text-paper-3">
              {group.group}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-base font-semibold uppercase tracking-tight text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <Marquee items={stackFlat} className="mt-s5" />
    </Section>
  );
}
