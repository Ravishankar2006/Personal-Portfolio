import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Section from "../ui/Section";
import Row from "../ui/Row";
import { contact, profile } from "../../data/profile";
import { enterUp } from "../../motion";
import { useEffectsEnabled, setEffectsEnabled } from "../../hooks/useEffectsEnabled";

/**
 * Contact — the address IS the call to action.
 *
 * The old version was three identical cards each captioned "Connect
 * with me", which said nothing. This leads with the email at display
 * size and adds LeetCode and résumé, neither of which the site
 * surfaced despite 450+ solved being its strongest single number.
 */
export default function Contact() {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const effects = useEffectsEnabled();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked — the mailto link below still works.
    }
  };

  return (
    <Section id="contact" num="05" kicker="Contact" title="Let's build something">
      <motion.div {...enterUp(reduced)}>
        {/* Sized to fit the address on ONE line at desktop — at text-h2 it
            wrapped to "...@GMAIL." / "COM", orphaning the TLD. The clamp
            floor still fits a 320px viewport, where wrapping is
            unavoidable and `anywhere` is the right behaviour. */}
        <a
          href={`mailto:${contact.email}`}
          className="block font-display text-[clamp(1.25rem,4.2vw,3.25rem)] font-black uppercase leading-none tracking-tight text-paper transition-colors duration-fast ease-snap hover:text-acc"
          style={{ overflowWrap: "anywhere" }}
        >
          {contact.email}
        </a>

        <button
          onClick={copy}
          className="mt-3 border-2 border-rule px-3 py-1 font-mono text-micro uppercase text-paper-2 transition-colors duration-fast ease-snap hover:border-paper hover:bg-paper hover:text-ink-0"
        >
          {copied ? "Copied ✓" : "Copy address"}
        </button>
      </motion.div>

      <div className="mt-s6 border-t-2 border-rule">
        {contact.links.map((l, i) =>
          l.url ? (
            <Row key={l.label} index={i} title={l.label} meta={l.handle} href={l.url} />
          ) : (
            <Row key={l.label} index={i} title={l.label} meta={l.handle} />
          )
        )}
      </div>

      {/* Colophon */}
      <div className="mt-s6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-rule pt-s3 font-mono text-micro uppercase text-paper-3">
        <span>
          {profile.name} · {profile.location}
        </span>
        <div className="flex items-center gap-4">
          <span>© 2026</span>
          {/* The escape hatch for every decorative effect on the page. */}
          <button
            onClick={() => setEffectsEnabled(!effects)}
            aria-pressed={effects}
            className="border-2 border-rule px-2 py-1 uppercase transition-colors duration-fast ease-snap hover:border-paper hover:bg-paper hover:text-ink-0"
          >
            Effects: {effects ? "On" : "Off"}
          </button>
        </div>
      </div>
    </Section>
  );
}
