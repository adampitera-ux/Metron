"use client";

import { motion } from "motion/react";
import { Sparkle } from "./icons";
import { BlurWords, Button, type Word } from "./ui";

const HEADLINE: Word[] = [
  { text: "Automation", className: "text-orange" },
  { text: "Agency", className: "text-orange", br: true },
  { text: "Beyond" },
  {
    text: <Sparkle className="mx-[0.05em] inline-block size-[0.62em] -translate-y-[0.06em]" />,
    className: "text-fg",
  },
  { text: "Limits.", br: true },
  { text: "Amplified", className: "text-orange" },
  { text: "With", className: "text-orange" },
  { text: "AI.", className: "text-orange" },
];

const SUBTITLE: Word[] = "Take your business to the next level"
  .split(" ")
  .map((text) => ({ text }));

export default function Hero() {
  return (
    <section id="top" className="relative px-0 pt-0 md:px-5">
      <div className="relative overflow-hidden bg-bg-soft pt-[170px] pb-24 md:pt-[176px] md:pb-[120px]">
        {/* dot matrix, fading to the edges */}
        <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_35%,#000_10%,transparent_80%)]" />
        {/* soft orange glow behind the headline */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-[180px] left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,177,104,0.28),transparent)]"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* white fade at top/bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-soft to-transparent" />

        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 rounded-[33px] border border-line bg-white py-[7px] pr-[15px] pl-[10px] shadow-[0_4px_16px_-8px_rgba(0,0,0,0.12)]"
          >
            <span className="relative grid size-5 place-items-center">
              <span className="animate-ping-slow absolute size-2.5 rounded-full bg-[#22c55e]/60" />
              <span className="relative size-2.5 rounded-full bg-[#16a34a] shadow-[0_0_0_3px_rgba(22,163,74,0.18)]" />
            </span>
            <span className="text-sm leading-[14px] text-muted">
              Now booking free AI audits
            </span>
          </motion.div>

          <BlurWords
            as="h1"
            onMount
            delay={0.2}
            stagger={0.09}
            items={HEADLINE}
            className="h-display mt-[25px] text-[44px] leading-[1.25] text-fg sm:text-[60px] lg:text-[72px]"
          />

          <BlurWords
            as="p"
            onMount
            delay={1.0}
            stagger={0.05}
            items={SUBTITLE}
            className="mt-[27px] text-lg leading-[1.6] text-muted"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            className="mt-[50px]"
          >
            <Button href="#why-us" arrow="down" className="w-[160px]">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

