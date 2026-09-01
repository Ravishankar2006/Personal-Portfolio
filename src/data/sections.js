/**
 * THE SECTION REGISTRY — single source of truth.
 *
 * App.jsx, the desktop index rail, the mobile menu and the hero command
 * bar all read this list. Previously the section list was hardcoded in
 * three places that had already drifted apart (FloatingNav listed 8,
 * MobileMenu listed 5, App.jsx defined 8), so the mobile menu silently
 * could not reach three sections. Add or reorder a section HERE and
 * every consumer follows.
 */
export const sections = [
  { id: "index", num: "00", label: "Masthead", short: "Index" },
  { id: "work", num: "01", label: "Selected Work", short: "Work" },
  { id: "proof", num: "02", label: "Proof", short: "Proof" },
  { id: "stack", num: "03", label: "Stack", short: "Stack" },
  { id: "record", num: "04", label: "Record", short: "Record" },
  { id: "contact", num: "05", label: "Contact", short: "Contact" },
];

export const sectionIds = sections.map((s) => s.id);
