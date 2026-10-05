"use client";

import { BlurWords, Container, Reveal, TextLink, words } from "./ui";

const HEADING = words(`We Drive *Businesses*
To The *Forefront* Of Their Industries
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

      </Container>
    </section>
  );
}
