"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "./icons";

const EASE = [0.25, 0.1, 0.25, 1] as const;

/* ------------------------------------------------------------------ */
/* Fade-up reveal (Framer "appear" preset: opacity 0, y 15 → in view)  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 15,
  duration = 0.7,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "li";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* Word-by-word blur reveal (Framer text effect)                       */
/* ------------------------------------------------------------------ */
export type Word = { text: ReactNode; className?: string; br?: boolean };

const wordVariants: Variants = {
  hidden: { opacity: 0.001, filter: "blur(10px)", y: 10 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Turns "We Drive *Businesses*" into words, where *x* marks orange words. */
export function words(source: string): Word[] {
  const out: Word[] = [];
  for (const line of source.split("\n")) {
    const parts = line.trim().split(/\s+/);
    parts.forEach((p, i) => {
      const accent = p.startsWith("*") && p.endsWith("*");
      out.push({
        text: accent ? p.slice(1, -1) : p,
        className: accent ? "text-orange" : undefined,
        br: i === parts.length - 1,
      });
    });
  }
  if (out.length) out[out.length - 1].br = false;
  return out;
}

export function BlurWords({
  items,
  className,
  stagger = 0.08,
  delay = 0,
  onMount = false,
  as = "h2",
}: {
  items: Word[];
  className?: string;
  stagger?: number;
  delay?: number;
  onMount?: boolean;
  as?: "h1" | "h2" | "p";
}) {
  const Comp = motion[as];
  const trigger = onMount
    ? { animate: "show" }
    : {
        whileInView: "show",
        viewport: { once: true, margin: "0px 0px -80px 0px" },
      };
  return (
    <Comp
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {items.map((w, i) => (
        <span key={i}>
          <motion.span
            variants={wordVariants}
            className={`inline-block will-change-[filter,transform] ${w.className ?? ""}`}
          >
            {w.text}
          </motion.span>
          {w.br ? <br /> : " "}
        </span>
      ))}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* Button label that rolls up on hover (Framer duplicate-text hover)   */
/* ------------------------------------------------------------------ */
export function RollText({ children }: { children: ReactNode }) {
  return (
    <span className="relative block h-[22px] overflow-hidden leading-[22px] whitespace-nowrap">
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1/2">
        <span className="block">{children}</span>
        <span className="block" aria-hidden>
          {children}
        </span>
      </span>
    </span>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "orange" | "dark";
  arrow?: "up" | "down";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "dark",
  arrow = "up",
  className = "",
}: BtnProps) {
  const Arrow = arrow === "up" ? ArrowUpRight : ArrowDownRight;
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[7px] px-[27px] py-[15px] text-base transition-transform duration-300 active:scale-[0.98] ${
        variant === "orange" ? "btn-orange" : "btn-dark"
      } ${className}`}
    >
      <RollText>{children}</RollText>
      <span className="relative block size-4 overflow-hidden">
        <Arrow className="absolute inset-0 size-4 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
        <Arrow className="absolute inset-0 size-4 -translate-x-4 translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </a>
  );
}

/** Orange text link with arrow ("Book A Call") */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-2xl leading-[38px] text-orange"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-orange transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
      </span>
      <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Section header: pill badge + heading + optional subtitle            */
/* ------------------------------------------------------------------ */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg px-5 py-[6px] text-sm leading-[18px] text-fg-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)]">
      {children}
    </span>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  className = "",
}: {
  badge: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Reveal>
        <Badge>{badge}</Badge>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="h-display mt-6 text-[36px] leading-[1.25] text-fg capitalize md:text-[48px]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[500px] text-lg leading-[1.6] text-muted">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-[1260px] px-4 ${className}`}>{children}</div>
);
