import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, suffix = "", label, duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          if (reduce) {
            setDisplay(value);
            return;
          }
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, started]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-bold text-navy sm:text-5xl inline-flex items-center justify-center [direction:ltr]">
        <span>{display}</span>
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-muted-ink sm:text-base">
        {label}
      </div>
    </div>
  );
}