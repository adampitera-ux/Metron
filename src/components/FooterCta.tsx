"use client";

import { BlurWords, Reveal, TextLink, words } from "./ui";

export default function FooterCta() {
  return (
    <div className="relative flex flex-col items-center px-4 pt-[52px] pb-[56px] text-center">
      <Reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="Metron" width={101} height={30} />
      </Reveal>

      <BlurWords
        items={words("Let’s Turn Your\nDream Into Reality")}
        stagger={0.08}
        className="h-display mt-8 text-[40px] leading-[1.25] text-fg sm:text-[52px] lg:text-[62px]"
      />

      <Reveal delay={0.3}>
        <p className="mt-6 max-w-[300px] text-lg leading-[1.6] text-muted">
          We bring your vision to life with AI Automation. Let’s make it happen.
        </p>
      </Reveal>

      <Reveal delay={0.4} className="mt-6">
        <TextLink href="/contact">Book A Call</TextLink>
      </Reveal>
    </div>
  );
}
