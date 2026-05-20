import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value embedded in a string from 0 to its final value
 * once the returned ref's element scrolls into view. Preserves any prefix or
 * suffix around the number (e.g. "500K+", "100%", "5/5").
 */
export function useCountUp(value: string, duration = 1000) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState(value);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isInt = !numStr.includes(".");

    setDisplay(`${prefix}0${suffix}`);

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const current = target * eased;
        const formatted = isInt
          ? Math.round(current).toString()
          : current.toFixed(1);
        setDisplay(`${prefix}${formatted}${suffix}`);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return { ref, display };
}
