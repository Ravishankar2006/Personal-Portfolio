import { useEffect, useState } from "react";
import { sections } from "../../data/sections";

/**
 * Numbered index rail (replaces the dot nav).
 *
 * Eight identical 16px dots with hover-only tooltips failed the "what
 * is this?" test. Numbered labels that are always legible do not.
 * Moved to the left edge so it stops colliding with the mobile
 * hamburger in the top-right.
 *
 * Reads data/sections.js — the same list App.jsx and the mobile menu
 * use, so the three can no longer disagree.
 */
export default function IndexRail() {
  const [active, setActive] = useState(sections[0].id);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShown(window.scrollY > 120);
      const mid = window.innerHeight / 2;
      let current = sections[0].id;
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section index"
      className={`fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 border-y-2 border-r-2 border-rule bg-ink-0/95 transition-opacity duration-base ease-snap lg:block ${
        shown ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ul>
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                aria-current={on ? "true" : undefined}
                className={`flex w-full items-center gap-3 px-3 py-2 text-left font-mono text-micro uppercase transition-colors duration-fast ease-snap ${
                  on
                    ? "bg-acc text-acc-ink"
                    : "text-paper-3 hover:bg-paper hover:text-ink-0"
                }`}
              >
                <span className="tabular-nums">{s.num}</span>
                <span>{s.short}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
