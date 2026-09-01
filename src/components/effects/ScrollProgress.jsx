import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { sections } from "../../data/sections";

/**
 * Scroll progress — an accent rule plus a mono section-index readout.
 * The readout is one of the accent budget's allotted slots.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let current = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const total = String(sections.length).padStart(2, "0");

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-acc"
      />
      {/* lg, not sm: the mobile hamburger occupies this corner until lg,
          and at sm the two overlapped. */}
      <div className="pointer-events-none fixed right-gutter top-4 z-[60] hidden font-mono text-micro uppercase tabular-nums text-paper-3 lg:block">
        {sections[active].num} <span className="text-rule-2">/</span> {total}
      </div>
    </>
  );
}
