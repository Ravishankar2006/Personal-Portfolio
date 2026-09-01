/**
 * The glassmorphism replacement.
 *
 * was:  bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
 * now:  opaque near-black, a hard 2px rule, zero radius, zero blur
 *
 * `accent` is an explicit opt-in and is NOT a default — the accent
 * budget is one accent element per viewport-height, and making it
 * opt-in is what stops that discipline eroding over time.
 */
export default function Panel({
  children,
  invertOnHover = false,
  accent = false,
  offset = false,
  className = "",
  ...rest
}) {
  const base = "bg-ink-1 border-2 " + (accent ? "border-acc" : "border-rule");
  const hover = invertOnHover
    ? " transition-colors duration-fast ease-snap hover:bg-paper hover:text-ink-0 hover:border-paper focus-visible:bg-paper focus-visible:text-ink-0 focus-visible:border-paper"
    : "";
  // Hard offset shadow — the brutalist depth cue, never a glow.
  const depth = offset ? " shadow-slab" : "";

  return (
    <div className={`${base}${hover}${depth} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/** Tech / label pill. Square, mono, uppercase. */
export function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-block border-2 border-rule px-2 py-1 font-mono text-micro uppercase text-paper-2 ${className}`}
    >
      {children}
    </span>
  );
}
