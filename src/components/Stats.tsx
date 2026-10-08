"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { Reveal } from "./ui";

// Plain facts about how we work — no unverifiable performance claims.
const STATS = [
  { value: 24, decimals: 0, prefix: "", suffix: "/7", label: "Calls and leads answered" },
  { value: 4, decimals: 0, prefix: "", suffix: "", label: "Simple plans, flat monthly pricing" },
];

function Counter({
  value,
  decimals,
  prefix,
  suffix,
}: {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = prefix + v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="mx-auto mt-[80px] grid max-w-[560px] grid-cols-2 gap-y-6">
      {STATS.map((s, i) => (
        <Reveal
          key={s.label}
          delay={0.1 * i}
          className={`relative flex flex-col items-center py-6 text-center ${
            i > 0 ? "before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-line-strong before:to-transparent" : ""
          }`}
        >
          <span className="h-display text-[40px] leading-[1.25] text-fg md:text-[48px]">
            <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
          </span>
          <span className="mt-2 text-lg leading-[1.6] text-muted">{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
