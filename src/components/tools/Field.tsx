"use client";

import { animate } from "motion/react";
import { useEffect, useRef } from "react";

export function Slider({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step = 1,
  format = (v) => String(v),
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  format?: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-[15.5px] font-medium text-fg-2">{label}</label>
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="w-28 rounded-lg border border-line bg-[#fafafa] px-2.5 py-1 text-right font-mono text-sm text-fg outline-none focus:border-orange"
          aria-label={label}
        />
      </div>
      {hint && <p className="mt-1 text-[13.5px] text-muted-2">{hint}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(value, max)}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`${label} slider`}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-orange [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange [&::-webkit-slider-thumb]:shadow-[0_0_0_5px_rgba(232,120,17,0.18)]"
        style={{ background: `linear-gradient(to right, var(--orange) ${pct}%, #e8e8e8 ${pct}%)` }}
      />
      <p className="mt-1.5 text-right text-xs text-muted-3">{format(value)}</p>
    </div>
  );
}

export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Number that tweens to its new value whenever it changes. */
export function AnimatedNumber({ value, format = usd }: { value: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const c = animate(prev.current, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = format(v)),
    });
    prev.current = value;
    return () => c.stop();
  }, [value, format]);
  return <span ref={ref}>{format(value)}</span>;
}

export function Stat({ label, value, format, accent = false }: { label: string; value: number; format?: (n: number) => string; accent?: boolean }) {
  return (
    <div className={`rounded-[16px] p-5 ${accent ? "bg-[#111] text-white" : "border border-line bg-white"}`}>
      <p className={`text-sm ${accent ? "text-white/65" : "text-muted-2"}`}>{label}</p>
      <p className={`h-display mt-1.5 text-[30px] leading-[1.15] ${accent ? "text-orange-light" : "text-fg"}`}>
        <AnimatedNumber value={value} format={format} />
      </p>
    </div>
  );
}
