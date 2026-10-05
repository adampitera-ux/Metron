"use client";

import { PLANS as ALL_PLANS } from "@/content/plans";
import { useState } from "react";
import { Button } from "../ui";
import { AnimatedNumber, Slider, Stat } from "./Field";

const TASKS = [
  { key: "phones", label: "Answering calls & booking appointments", default: 10 },
  { key: "followup", label: "Following up on leads & quotes", default: 6 },
  { key: "reminders", label: "Reminders, confirmations & rescheduling", default: 4 },
  { key: "data", label: "Data entry between tools (CRM, invoicing)", default: 5 },
  { key: "reviews", label: "Requesting reviews & answering FAQs", default: 2 },
] as const;

const PLANS = ALL_PLANS.map((p) => ({ name: p.name, price: p.monthly }));

export default function RoiCalculator() {
  const [hours, setHours] = useState<Record<string, number>>(
    Object.fromEntries(TASKS.map((t) => [t.key, t.default])),
  );
  const [rate, setRate] = useState(25);
  const [automatable, setAutomatable] = useState(60);
  const [plan, setPlan] = useState(2);

  const weeklyHours = Object.values(hours).reduce((a, b) => a + b, 0);
  const savedHoursMonth = weeklyHours * 4.33 * (automatable / 100);
  const laborSaved = savedHoursMonth * rate;
  const cost = PLANS[plan].price;
  const net = laborSaved - cost;
  const roi = cost ? (net / cost) * 100 : 0;

  return (
    <div className="grid gap-6 rounded-[26px] border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] md:p-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-7">
        <p className="font-mono text-xs tracking-[0.12em] text-orange uppercase">Hours per week your team spends on…</p>
        {TASKS.map((t) => (
          <Slider
            key={t.key}
            label={t.label}
            value={hours[t.key]}
            onChange={(v) => setHours((h) => ({ ...h, [t.key]: v }))}
            min={0}
            max={40}
            format={(v) => `${v} hrs/week`}
          />
        ))}
        <Slider label="Fully loaded hourly cost of that time" hint="Wages + taxes + benefits, or the value of your own time." value={rate} onChange={setRate} min={10} max={150} format={(v) => `$${v}/hr`} />
        <Slider label="% of that work AI could handle" hint="Assumption — most teams start conservatively at 40–60%." value={automatable} onChange={setAutomatable} min={0} max={100} format={(v) => `${v}%`} />
        <div>
          <p className="text-[15.5px] font-medium text-fg-2">Compare against plan</p>
          <div className="mt-3 inline-flex flex-wrap gap-1 rounded-2xl border border-line bg-[#fafafa] p-1">
            {PLANS.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setPlan(i)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${plan === i ? "bg-fg text-white" : "text-muted hover:text-fg"}`}
              >
                {p.name} · ${p.price.toLocaleString()}/mo
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:sticky lg:top-28 lg:self-start">
        <Stat label="Hours freed up per month" value={savedHoursMonth} format={(n) => `${Math.round(n)} hrs`} />
        <Stat label="Labor value saved per month" value={laborSaved} />
        <Stat label="Net monthly benefit after plan cost" value={net} accent />
        <div className="rounded-[16px] border border-line bg-white p-5">
          <p className="text-sm text-muted-2">Estimated return on plan cost</p>
          <p className={`h-display mt-1.5 text-[30px] leading-[1.15] ${roi >= 0 ? "text-[#137a3a]" : "text-[#b42318]"}`}>
            <AnimatedNumber value={roi} format={(n) => `${Math.round(n)}%`} />
          </p>
        </div>
        <p className="px-1 text-[13px] leading-[1.5] text-muted-2">
          Time savings only — this doesn&apos;t count extra revenue from faster lead response. Estimates are based on your inputs.
        </p>
        <Button href="/contact" variant="orange" className="mt-1 w-full">
          Get A Custom Estimate
        </Button>
      </div>
    </div>
  );
}
