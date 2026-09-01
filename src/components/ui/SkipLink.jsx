/**
 * Skip link. Targets #main — the previous version pointed at
 * #timeline, which skipped *past* the hero rather than to the content.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-acc focus:bg-ink-0 focus:px-4 focus:py-2 focus:font-mono focus:text-meta focus:uppercase focus:text-acc"
    >
      Skip to content
    </a>
  );
}
