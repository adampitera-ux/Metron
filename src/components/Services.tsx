"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Container, Reveal, SectionHeader } from "./ui";

/* ------------------------------------------------------------------ */
/* Card shell                                                          */
/* ------------------------------------------------------------------ */
function ServiceCard({
  title,
  body,
  children,
  delay,
}: {
  title: string;
  body: string;
  children: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay} y={30} className="h-full">
      <div className="card-shell h-full rounded-[25px]">
        <div className="relative h-full overflow-hidden rounded-[24px] bg-[radial-gradient(46%_31%_at_50%_0%,#ffffff_0%,#f5f5f5_100%)] px-8 pt-8 pb-[42px] text-center">
          {/* faint grid behind the title */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px] bg-center [mask-image:radial-gradient(ellipse_50%_80%_at_50%_0%,#000,transparent)]" />
          <h3 className="h-display relative text-[28px] leading-[1.25] text-fg capitalize lg:text-[30px]">
            {title}
          </h3>
          <div className="relative mt-[26px] h-[200px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_6px_24px_-14px_rgba(0,0,0,0.18)]">
            {/* soft vertical light streaks */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_120%_at_0%_50%,rgba(0,0,0,0.035),transparent),radial-gradient(40%_120%_at_100%_50%,rgba(0,0,0,0.035),transparent)]" />
            {children}
          </div>
          <p className="relative mx-auto mt-8 max-w-[320px] text-lg leading-[1.6] text-muted">
            {body}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Plan & Organize — hub with app icons flowing in                  */
/* ------------------------------------------------------------------ */
const HUB = { x: 150, y: 100 };
const RIGHT = [
  { x: 278, y: 34, icon: "/images/icons/archive.svg" },
  { x: 278, y: 100, icon: "/images/icons/folder.svg" },
  { x: 278, y: 166, icon: "/images/icons/board.svg" },
];
const LEFT = [
  { x: 0, y: 30, icon: "/images/icons/archive.svg" },
  { x: 0, y: 100, icon: "/images/icons/board.svg" },
  { x: 0, y: 170, icon: "/images/icons/folder.svg" },
];

function IconTile({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span
      className={`grid size-9 place-items-center rounded-lg border border-line bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.15)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={18} height={18} className="size-[18px]" />
    </span>
  );
}

function PlanVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-[200px] w-[300px]">
        <svg className="absolute inset-0" width="300" height="200" viewBox="0 0 300 200" fill="none">
          <defs>
            <linearGradient id="plan-l" x1="0" x2="1">
              <stop stopColor="#000" stopOpacity="0" />
              <stop offset="1" stopColor="#000" stopOpacity="0.14" />
            </linearGradient>
            <linearGradient id="plan-r" x1="1" x2="0">
              <stop stopColor="#000" stopOpacity="0.05" />
              <stop offset="1" stopColor="#000" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          {LEFT.map((p, i) => (
            <line key={`l${i}`} x1={p.x} y1={p.y} x2={HUB.x} y2={HUB.y} stroke="url(#plan-l)" />
          ))}
          {RIGHT.map((p, i) => (
            <line key={`r${i}`} x1={HUB.x} y1={HUB.y} x2={p.x} y2={p.y} stroke="url(#plan-r)" />
          ))}
          {/* glowing pulses running along the right-hand lines */}
          {RIGHT.map((p, i) => (
            <motion.circle
              key={`p${i}`}
              r="2.5"
              fill="#E87811"
              initial={{ cx: HUB.x, cy: HUB.y, opacity: 0 }}
              animate={{ cx: [HUB.x, p.x], cy: [HUB.y, p.y], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 * i + 0.9, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {/* icons travelling from the left edge into the hub */}
        {LEFT.map((p, i) => (
          <motion.div
            key={`t${i}`}
            className="absolute -mt-[18px] -ml-[18px]"
            initial={{ left: p.x, top: p.y, opacity: 0, scale: 0.8 }}
            animate={{
              left: [p.x, HUB.x],
              top: [p.y, HUB.y],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.6],
            }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.87, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
          >
            <IconTile src={p.icon} />
          </motion.div>
        ))}

        {RIGHT.map((p, i) => (
          <div key={`rt${i}`} className="absolute -mt-[18px] -ml-[18px]" style={{ left: p.x, top: p.y }}>
            <IconTile src={p.icon} />
          </div>
        ))}

        {/* hub */}
        <div className="absolute -mt-8 -ml-8 grid size-16 place-items-center" style={{ left: HUB.x, top: HUB.y }}>
          <motion.span
            className="absolute inset-0 rounded-full bg-orange/15"
            animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative grid size-[60px] place-items-center rounded-full border border-line bg-[radial-gradient(60%_60%_at_50%_20%,#ffffff,#f0f0f0)] shadow-[0_6px_18px_-8px_rgba(0,0,0,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icons/box.svg" alt="" width={26} height={28} className="h-7 w-auto" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Custom Projects — code editor with a typing line                 */
/* ------------------------------------------------------------------ */
const K = ({ children }: { children: ReactNode }) => <span className="text-orange">{children}</span>;
const TYPED = "response(msg){";

function CodeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // type forward, pause, erase, pause — on a loop
    let i = 0;
    let dir = 1;
    let hold = 0;
    const id = setInterval(() => {
      if (hold > 0) {
        hold--;
        return;
      }
      i += dir;
      if (i >= TYPED.length) {
        i = TYPED.length;
        dir = -1;
        hold = 14;
      } else if (i <= 0) {
        i = 0;
        dir = 1;
        hold = 6;
      }
      setN(i);
    }, 90);
    return () => clearInterval(id);
  }, [inView]);

  const lines: ReactNode[] = [
    <><K>Class</K> ChatBot{"{"}</>,
    <>&nbsp;&nbsp;address public owner;</>,
    <>&nbsp;&nbsp;int private response;</>,
    <>&nbsp;&nbsp;<K>constructor</K>(){"{"}</>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;owner = msg.sender;</>,
    <>&nbsp;&nbsp;{"}"}</>,
    <>
      &nbsp;&nbsp;<K>function</K> {TYPED.slice(0, n)}
      <motion.span
        className="ml-px inline-block h-[13px] w-[6px] translate-y-[2px] bg-orange"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </>,
  ];

  return (
    <div ref={ref} className="absolute inset-0 flex font-mono text-[12px] leading-[19.2px] font-medium">
      <div className="w-[62px] shrink-0 border-r border-line bg-[#f7f7f7] py-[27px] text-center text-muted-3">
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 py-[27px] pl-4 text-left whitespace-nowrap text-[#4a4a4a]">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.08 }}
          >
            {l}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Smart Automation — workflow steps lighting up in turn            */
/* ------------------------------------------------------------------ */
const STEPS = [
  { label: "Trigger", icon: "/images/icons/gear.png" },
  { label: "Prompts", icon: "/images/icons/chat.png" },
  { label: "Send Email", icon: "/images/icons/mail.png" },
];

function AutomationVisual() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-[9px]">
      {/* connector */}
      <span className="absolute top-1/2 left-1/2 h-[100px] w-px -translate-x-1/2 -translate-y-1/2 bg-line-strong" />
      {STEPS.map((s, i) => {
        const on = i === active;
        return (
          <motion.div
            key={s.label}
            animate={{ scale: on ? 1.04 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative flex h-[38px] w-[138px] items-center gap-2.5 rounded-lg border px-3 text-sm transition-[color,border-color,box-shadow] duration-500 ${
              on
                ? "border-orange/50 bg-white text-fg shadow-[0_0_0_3px_rgba(232,120,17,0.12),0_6px_20px_-8px_rgba(232,120,17,0.5)]"
                : "border-line bg-white text-muted-2"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.icon}
              alt=""
              width={16}
              height={16}
              className={`size-4 transition-[filter,opacity] duration-500 ${on ? "" : "opacity-60 grayscale"}`}
            />
            {s.label}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Capability pills                                                    */
/* ------------------------------------------------------------------ */
const PILLS = [
  { label: "AI-Driven Solutions", icon: "bolt" },
  { label: "Serverless Computing", icon: "server" },
  { label: "Cloud Integration", icon: "cloud" },
  { label: "Data Insight", icon: "drive" },
  { label: "Analytics", icon: "analytics" },
  { label: "API Security", icon: "shield" },
  { label: "Real-Time", icon: "cast" },
  { label: "Ad Targeting", icon: "pulse" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 pt-[120px] pb-[60px]">
      <Container>
        <SectionHeader
          badge="Our Services"
          title="Expertise That Drives Quality"
          subtitle="With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently."
        />

        <div className="mt-[60px] grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            delay={0}
            title="Plan & Organize"
            body="We enhance efficiency by integrating apps and reducing downtime."
          >
            <PlanVisual />
          </ServiceCard>
          <ServiceCard
            delay={0.12}
            title="Custom Projects"
            body="We created a versatile chatbot that understands diverse questions."
          >
            <CodeVisual />
          </ServiceCard>
          <ServiceCard
            delay={0.24}
            title="Smart Automation"
            body="We analyze operations and suggest AI solutions to boost efficiency."
          >
            <AutomationVisual />
          </ServiceCard>
        </div>

        <ul className="mx-auto mt-8 flex max-w-[980px] flex-wrap justify-center gap-x-5 gap-y-[21px]">
          {PILLS.map((p, i) => (
            <motion.li
              key={p.label}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
              className="card-shell rounded-[17px]"
            >
              <div className="flex items-center gap-3 rounded-2xl bg-[radial-gradient(56%_127%_at_6%_-53%,#ffffff_0%,#f5f5f5_100%)] px-6 py-[13px]">
                <span className="grid size-9 place-items-center rounded-full border border-line bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/icons/${p.icon}.svg`} alt="" width={16} height={16} className="size-4" />
                </span>
                <span className="h-display text-lg leading-[22px] text-fg-2 capitalize">{p.label}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
