import { useSyncExternalStore } from "react";

/**
 * Global on/off for the decorative effects (crosshair, marquee, grid
 * scan), persisted per viewer.
 *
 * This exists because the crosshair is the single biggest usability
 * liability in the design: if anything goes wrong with a cursor effect
 * the user needs an escape hatch that is visible and obvious, not a
 * devtools incantation. ~20 lines that remove a whole risk class.
 */
const KEY = "effects-enabled";
const listeners = new Set();

function read() {
  try {
    return localStorage.getItem(KEY) !== "false";
  } catch {
    // Private mode / blocked storage — default to on.
    return true;
  }
}

// Client-only SPA, so the stored preference can be read once at module
// load — no hydration pass needed.
let current = read();

function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return current;
}

export function setEffectsEnabled(next) {
  current = next;
  try {
    localStorage.setItem(KEY, String(next));
  } catch {
    // Non-fatal: the toggle still works for this session.
  }
  listeners.forEach((cb) => cb());
}

export function useEffectsEnabled() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
