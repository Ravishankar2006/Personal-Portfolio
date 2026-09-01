import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { usePointerFine } from "../../hooks/usePointerFine";
import { useEffectsEnabled } from "../../hooks/useEffectsEnabled";

/**
 * Survey crosshair — the cursor effect, re-cut for the grid idiom.
 *
 * Replaces a 21-point glowing trail that called setTrail (cloning a
 * 21-element array) on EVERY mousemove plus setPosition inside a rAF
 * loop — two React re-renders per frame, re-rendering 21 divs and an
 * SVG path continuously.
 *
 * Here nothing re-renders: pointer position is written straight to the
 * DOM via refs inside one rAF loop.
 *
 * Critically, this NEVER hides the native cursor. The old version
 * injected `* { cursor: none !important }` globally, so any frame drop
 * or JS error left the user with no cursor at all, and text I-beams,
 * resize handles and disabled states became invisible. This draws
 * behind the real cursor as pure enhancement.
 */
export default function Crosshair() {
  const reduced = useReducedMotion();
  const fine = usePointerFine();
  const enabled = useEffectsEnabled();

  const vRef = useRef(null);
  const hRef = useRef(null);
  const boxRef = useRef(null);
  const readRef = useRef(null);

  const active = fine && !reduced && enabled;

  useEffect(() => {
    if (!active) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;
    let visible = false;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
    };
    const onLeave = () => {
      visible = false;
      if (vRef.current) vRef.current.style.opacity = "0";
      if (hRef.current) hRef.current.style.opacity = "0";
      if (boxRef.current) boxRef.current.style.opacity = "0";
      if (readRef.current) readRef.current.style.opacity = "0";
    };

    const tick = () => {
      // Slight lag on the reticle only — the rules track exactly.
      pos.x += (target.x - pos.x) * 0.35;
      pos.y += (target.y - pos.y) * 0.35;

      const o = visible ? "1" : "0";
      if (vRef.current) {
        vRef.current.style.transform = `translate3d(${target.x}px,0,0)`;
        vRef.current.style.opacity = o;
      }
      if (hRef.current) {
        hRef.current.style.transform = `translate3d(0,${target.y}px,0)`;
        hRef.current.style.opacity = o;
      }
      if (boxRef.current) {
        boxRef.current.style.transform = `translate3d(${pos.x - 12}px,${pos.y - 12}px,0)`;
        boxRef.current.style.opacity = o;
      }
      if (readRef.current) {
        readRef.current.style.transform = `translate3d(${target.x + 18}px,${target.y + 18}px,0)`;
        readRef.current.style.opacity = visible ? "0.65" : "0";
        readRef.current.textContent = `X:${String(Math.round(target.x)).padStart(4, "0")} Y:${String(
          Math.round(target.y)
        ).padStart(4, "0")}`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70]">
      <div
        ref={vRef}
        className="absolute left-0 top-0 h-full w-px bg-acc opacity-0"
        style={{ willChange: "transform" }}
      />
      <div
        ref={hRef}
        className="absolute left-0 top-0 h-px w-full bg-acc opacity-0"
        style={{ willChange: "transform" }}
      />
      <div
        ref={boxRef}
        className="absolute left-0 top-0 h-6 w-6 border border-acc opacity-0"
        style={{ willChange: "transform" }}
      />
      <span
        ref={readRef}
        className="absolute left-0 top-0 font-mono text-[10px] uppercase tracking-widest text-acc opacity-0"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
