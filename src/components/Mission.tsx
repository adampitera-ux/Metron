"use client";

import { motion } from "motion/react";
import { BlurWords, Container, Reveal, TextLink, words } from "./ui";

const HEADING = words(`We Drive *Businesses*
To The *Forefront* Of The Industries
Through Comprehensive
AI *Automation.*`);

const BODY = words(
  "Our mission is to build intelligent, intuitive systems that reduce friction, cut costs, and help businesses move fast in an increasingly dynamic world.",
);

export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-24 pt-10 pb-[90px]">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-line bg-bg px-5 py-[6px] text-sm leading-[18px] text-fg-2">
            Our Mission
          </span>
        </Reveal>

        <BlurWords
          items={HEADING}
          stagger={0.07}
          className="h-display mt-12 max-w-[960px] text-[36px] leading-[1.25] text-fg sm:text-[48px] lg:text-[62px]"
        />

        <BlurWords
          as="p"
          items={BODY}
          stagger={0.025}
          delay={0.3}
          className="mt-14 max-w-[620px] text-lg leading-[1.6] text-muted"
        />

        <Reveal delay={0.2} className="mt-12">
          <TextLink href="/contact">Book A Call</TextLink>
        </Reveal>

        <Reveal delay={0.3} className="mt-[110px]">
          <motion.svg
            width="80"
            height="108"
            viewBox="0 0 113 153"
            fill="none"
            aria-hidden
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="arrow-g" x1="56" y1="0" x2="56" y2="153" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E46F03" />
                <stop offset="1" stopColor="#FFB168" />
              </linearGradient>
            </defs>
            <path
              fill="url(#arrow-g)"
              fillRule="evenodd"
              d="M54 2.5a2.5 2.5 0 0 1 5 0v141.776l49.508-49.508a2.5 2.5 0 1 1 3.535 3.535l-53.74 53.74a2.5 2.5 0 0 1-1.743.733 2.5 2.5 0 0 1-1.803-.732l-53.74-53.74a2.5 2.5 0 1 1 3.536-3.536l49.446 49.446z"
              clipRule="evenodd"
            />
          </motion.svg>
        </Reveal>
      </Container>
    </section>
  );
}
