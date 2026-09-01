import { useCountUp } from "../../hooks/useCountUp";

/** Big mechanical numeric readout. Snaps in discrete steps. */
export default function Counter({ value, suffix = "", decimals = 0, className = "" }) {
  const { ref, text } = useCountUp(value, { decimals });

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {text}
      {suffix}
    </span>
  );
}
