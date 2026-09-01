import { motion, useReducedMotion } from "framer-motion";
import Counter from "../ui/Counter";
import CommandBar from "./CommandBar";
import { profile } from "../../data/profile";
import { enterUp, fade } from "../../motion";
import { useEffectsEnabled } from "../../hooks/useEffectsEnabled";
import portrait from "../../assets/me3.webp";

/**
 * The masthead — the name set as a type specimen, not a headline.
 *
 * The photo is a hard plate with registration marks, replacing a
 * circular avatar wrapped in orbital rings, 15 animated particles, a
 * hologram scan line and a 3D tilt — all soft, skeuomorphic gestures
 * that fight the idiom.
 */
export default function Masthead() {
  const reduced = useReducedMotion();
  const effects = useEffectsEnabled();
  const glitch = effects && !reduced;

  return (
    <section id="index" className="relative scroll-mt-6">
      <div className="mx-auto max-w-page px-gutter pb-s7 pt-s7">
        {/* Availability marker — an accent budget slot */}
        <motion.div
          {...fade(reduced)}
          className="mb-s4 flex flex-wrap items-center gap-3 font-mono text-meta uppercase"
        >
          <span className="block h-2 w-2 bg-acc" aria-hidden="true" />
          <span className="text-acc">{profile.available}</span>
          <span className="text-paper-3">/ {profile.location}</span>
        </motion.div>

        {/* Name as specimen */}
        <motion.h1
          {...enterUp(reduced)}
          className="relative font-display text-mega font-black uppercase text-paper"
          style={{ overflowWrap: "anywhere" }}
        >
          <span className="relative z-10">{profile.name}</span>

          {/* Offset-print misregistration. Fires in short bursts on a
              long interval rather than looping forever — a permanently
              glitching name hurts readability. */}
          {glitch && (
            <>
              <span
                aria-hidden="true"
                className="misregister-a absolute inset-0 z-0 text-acc"
              >
                {profile.name}
              </span>
              <span
                aria-hidden="true"
                className="misregister-b absolute inset-0 z-0 text-paper-3"
              >
                {profile.name}
              </span>
            </>
          )}
        </motion.h1>

        <motion.div
          {...enterUp(reduced)}
          className="mt-s4 grid gap-s5 lg:grid-cols-12"
        >
          {/* Photo plate */}
          <div className="lg:col-span-4">
            <div className="relative inline-block">
              {/* Registration frame, offset behind */}
              <div
                aria-hidden="true"
                className="absolute left-2 top-2 h-full w-full border-2 border-acc"
              />
              <img
                src={portrait}
                alt={profile.name}
                width="800"
                height="1000"
                decoding="async"
                className="relative aspect-[4/5] w-full max-w-xs border-4 border-paper object-cover grayscale contrast-125 transition-all duration-base ease-snap hover:grayscale-0"
              />
            </div>
            <p className="mt-3 font-mono text-micro uppercase text-paper-3">
              Fig. 01 — {profile.initials} / {profile.location} / 2026
            </p>
          </div>

          {/* Lede, stats, shell */}
          <div className="lg:col-span-8">
            <p className="max-w-2xl text-lead text-paper-2">{profile.lede}</p>

            <div className="mt-s5 grid grid-cols-3 gap-px border-2 border-rule bg-rule">
              {profile.stats.map((s) => (
                <div key={s.label} className="bg-ink-1 p-s3">
                  <div className="font-display text-h3 font-black text-paper">
                    <Counter
                      value={s.value}
                      suffix={s.suffix || ""}
                      decimals={String(s.value).includes(".") ? 1 : 0}
                    />
                  </div>
                  <div className="mt-1 font-mono text-micro uppercase text-paper-3">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-s5">
              <CommandBar />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
