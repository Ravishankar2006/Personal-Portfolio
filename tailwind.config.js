/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // ─── KILL SWITCHES ──────────────────────────────────────────
    // These sit OUTSIDE `extend` on purpose: they REPLACE Tailwind's
    // scales rather than adding to them. Mapping every radius and
    // blur key to 0 makes all pre-existing `rounded-*` and
    // `backdrop-blur-*` classes no-ops the moment this lands, so the
    // site goes hard-edged and glass-free in one commit — before a
    // single component is touched. Do not re-add these scales.
    borderRadius: {
      none: "0", sm: "0", DEFAULT: "0", md: "0", lg: "0",
      xl: "0", "2xl": "0", "3xl": "0", full: "0",
    },
    blur: {
      none: "0", sm: "0", DEFAULT: "0", md: "0", lg: "0",
      xl: "0", "2xl": "0", "3xl": "0",
    },
    backdropBlur: {
      none: "0", sm: "0", DEFAULT: "0", md: "0", lg: "0",
      xl: "0", "2xl": "0", "3xl": "0",
    },
    // sm:480px fills a gap that genuinely did not exist — the codebase
    // had zero `sm:` usage, which is why grids jumped 1->2 cols at 768.
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1440px",
    },

    extend: {
      colors: {
        ink: {
          0: "var(--ink-0)",
          1: "var(--ink-1)",
          2: "var(--ink-2)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          2: "var(--paper-2)",
          3: "var(--paper-3)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          2: "var(--rule-2)",
        },
        acc: {
          DEFAULT: "var(--acc)",
          ink: "var(--acc-ink)",
        },
      },
      fontFamily: {
        display: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        mega: ["var(--fs-mega)", { lineHeight: "0.86", letterSpacing: "-0.03em" }],
        h1: ["var(--fs-h1)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        h2: ["var(--fs-h2)", { lineHeight: "0.95", letterSpacing: "-0.015em" }],
        h3: ["var(--fs-h3)", { lineHeight: "1.15" }],
        lead: ["var(--fs-lead)", { lineHeight: "1.45" }],
        meta: ["var(--fs-meta)", { lineHeight: "1.2", letterSpacing: "0.14em" }],
        micro: ["var(--fs-micro)", { lineHeight: "1.2", letterSpacing: "0.12em" }],
      },
      // borderWidth is deliberately NOT extended: Tailwind's defaults
      // already map 1:1 onto the rule weights —
      //   border = 1px (--w-hair) · border-2 = 2px (--w-1)
      //   border-4 = 4px (--w-2)  · border-8 = 8px (--w-3)
      // Redefining numeric keys here would silently change every
      // existing border in the codebase.
      spacing: {
        // Prefixed so these ADD to Tailwind's scale instead of
        // overwriting p-4/p-6/gap-4 etc. across every component.
        s1: "var(--sp-1)", s2: "var(--sp-2)", s3: "var(--sp-3)", s4: "var(--sp-4)",
        s5: "var(--sp-5)", s6: "var(--sp-6)", s7: "var(--sp-7)", s8: "var(--sp-8)",
        gutter: "var(--gutter)",
      },
      maxWidth: {
        page: "var(--maxw)",
      },
      transitionDuration: {
        instant: "var(--dur-instant)",
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
        wipe: "var(--dur-wipe)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        inout: "var(--ease-inout)",
        snap: "var(--ease-snap)",
        step: "var(--ease-step)",
      },
      boxShadow: {
        // The brutalist depth cue — a hard offset, never a glow.
        slab: "8px 8px 0 0 var(--rule)",
        "slab-acc": "8px 8px 0 0 var(--acc)",
      },
    },
  },
  plugins: [],
};
