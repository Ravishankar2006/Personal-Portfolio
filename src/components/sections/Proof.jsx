import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Section from "../ui/Section";
import Row from "../ui/Row";
import Counter from "../ui/Counter";
import Lightbox from "../ui/Lightbox";
import {
  stats,
  statsMeta,
  credentials,
  kaggleGroup,
  hackathonGroup,
} from "../../data/proof";
import { enterRow } from "../../motion";

/** One grouped credential row — a cluster of same-weight certs collapsed
 *  into a single line with buttons, so they don't outweigh a real placing. */
function CredentialGroup({ group, onSelect }) {
  return (
    <div className="border-b-2 border-rule px-2 py-s4">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-meta tabular-nums text-paper-3">
          {group.year}
        </span>
        <span className="font-display text-h3 font-extrabold uppercase tracking-tight text-paper">
          {group.title}
        </span>
        <span className="font-mono text-micro uppercase text-paper-3">
          {group.org}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <button
            key={item.label}
            onClick={() =>
              onSelect({ src: item.full, alt: `${group.prefix} — ${item.label}` })
            }
            className="border-2 border-rule px-2 py-1 font-mono text-micro uppercase text-paper-2 transition-colors duration-fast ease-snap hover:border-paper hover:bg-paper hover:text-ink-0"
          >
            {item.label} →
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * PROOF — the numbers and the credentials in one section.
 *
 * SocialProof and Achievements used to make this identical argument in
 * two separate places, each at half strength — and SocialProof shipped
 * with no header at all, four floating tiles with zero context.
 */
export default function Proof() {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(null);

  return (
    <Section id="proof" num="02" kicker="Proof" title="Receipts">
      {/* Headline numerics */}
      <div className="grid grid-cols-2 gap-px border-2 border-rule bg-rule lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...enterRow(reduced, i)} className="bg-ink-1 p-s4">
            <div className="font-display text-h2 font-black text-paper">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-micro uppercase text-paper-3">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary numbers as a mono strip, not more big tiles */}
      <div className="mt-s3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-micro uppercase text-paper-3">
        {statsMeta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Credentials */}
      <h3 className="mt-s6 font-mono text-meta uppercase text-paper-3">
        Credentials
      </h3>
      <div className="mt-s3 border-t-2 border-rule">
        {credentials.map((c, i) => (
          <Row
            key={c.title}
            index={i}
            num={c.year}
            title={c.title}
            meta={c.org}
            right="View cert"
            onClick={() => setShown({ src: c.full, alt: c.title })}
          />
        ))}

        {/* Certificate groups collapse each cluster into ONE row. As
            equal-weight individual cards they'd outweigh a real placing
            like TechSprint or HCL, which inverts their actual worth. */}
        <CredentialGroup group={kaggleGroup} onSelect={setShown} />
        <CredentialGroup group={hackathonGroup} onSelect={setShown} />
      </div>

      <Lightbox
        src={shown?.src}
        alt={shown?.alt}
        onClose={() => setShown(null)}
      />
    </Section>
  );
}
