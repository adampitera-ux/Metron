"use client";

import { useState } from "react";
import { Button } from "../ui";
import { Slider, Stat } from "./Field";

const pct = (v: number) => `${v}%`;

export default function MissedCallCalculator() {
  const [missed, setMissed] = useState(8);
  const [bookRate, setBookRate] = useState(40);
  const [ticket, setTicket] = useState(450);
  const [repeat, setRepeat] = useState(0);
  const [recover, setRecover] = useState(60);

  const jobsLostPerWeek = (missed * bookRate) / 100;
  const weekly = jobsLostPerWeek * ticket;
  const monthly = weekly * 4.33;
  const annual = weekly * 52 + jobsLostPerWeek * 52 * repeat;
  const recovered = (annual * recover) / 100;

  return (
    <div className="grid gap-6 rounded-[26px] border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] md:p-10 lg:grid-cols-[1fr_380px]">
      <div className="space-y-7">
        <Slider label="Missed calls per week" hint="Calls that go to voicemail or ring out — check your phone system's call log." value={missed} onChange={setMissed} min={0} max={60} />
        <Slider label="% of callers who would have booked" hint="Your normal phone-to-booking rate." value={bookRate} onChange={setBookRate} min={0} max={100} format={pct} />
        <Slider label="Average job / appointment value" value={ticket} onChange={setTicket} min={50} max={5000} step={25} format={(v) => `$${v.toLocaleString()}`} />
        <Slider label="Extra yearly value of a new customer (optional)" hint="Repeat visits, maintenance plans, referrals." value={repeat} onChange={setRepeat} min={0} max={5000} step={50} format={(v) => `$${v.toLocaleString()}`} />
        <Slider label="% of missed calls AI could recover" hint="Assumption for an AI receptionist + instant text-back. Adjust to be conservative." value={recover} onChange={setRecover} min={0} max={100} format={pct} />
      </div>

      <div className="flex flex-col gap-3 lg:sticky lg:top-28 lg:self-start">
        <Stat label="Estimated revenue lost per month" value={monthly} />
        <Stat label="Estimated revenue lost per year" value={annual} />
        <Stat label="Potentially recoverable with AI (per year)" value={recovered} accent />
        <p className="px-1 text-[13px] leading-[1.5] text-muted-2">
          Estimates only, based entirely on the numbers you enter. Actual results depend on your market, call mix and follow-up.
        </p>
        <Button href="/services/ai-receptionist" variant="orange" className="mt-1 w-full">
          Stop Missing Calls
        </Button>
      </div>
    </div>
  );
}
