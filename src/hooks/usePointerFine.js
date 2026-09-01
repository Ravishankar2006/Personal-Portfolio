import { useEffect, useState } from "react";

/**
 * True only for a real mouse: a device that can hover with a precise
 * pointer.
 *
 * Gates the crosshair. The old CustomCursor gated on the `md:`
 * breakpoint instead, so a touch laptop at 1280px got a cursor effect
 * it could not use — while the code had already hidden the OS cursor.
 */
export function usePointerFine() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setFine(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return fine;
}
