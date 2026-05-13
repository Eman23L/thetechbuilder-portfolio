"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export default function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldAnimate = value > 1;
  const [display, setDisplay] = useState(shouldAnimate ? 0 : value);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    if (!inView) {
      return;
    }

    const animationDuration = 1400;
    const start = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / animationDuration, 1);
      const nextValue = progress === 1 ? value : Math.round(value * progress);

      setDisplay(nextValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, shouldAnimate, value]);

  return (
    <span ref={ref} className="text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}
