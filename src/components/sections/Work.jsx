import Section from "../ui/Section";
import Row from "../ui/Row";
import { Tag } from "../ui/Panel";
import { projects } from "../../data/projects";

/**
 * Selected work — a ruled index, not a card grid.
 *
 * Five items in a 3-column grid orphaned two on the last row. A
 * full-width numbered row is denser, scans faster, and is the actual
 * Swiss editorial idiom.
 */
export default function Work() {
  return (
    <Section id="work" num="01" kicker="Selected Work" title="Things I've shipped">
      <div className="border-t-2 border-rule">
        {projects.map((p, i) => (
          <Row
            key={p.title}
            index={i}
            num={p.num}
            title={p.title}
            meta={`${p.kind} · ${p.year}`}
            right="View on GitHub"
            href={p.github}
          >
            <p className="text-sm leading-relaxed">{p.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Tag
                  key={t}
                  className="transition-colors duration-fast ease-snap group-hover:border-ink-0 group-hover:text-ink-0 group-focus-visible:border-ink-0 group-focus-visible:text-ink-0"
                >
                  {t}
                </Tag>
              ))}
            </div>
          </Row>
        ))}
      </div>
    </Section>
  );
}
