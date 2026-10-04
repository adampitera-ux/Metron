"use client";

import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import { Brain, Team, ThumbsUp } from "./icons";
import { Button, Container, Reveal, SectionHeader } from "./ui";

const FEATURES: {
  title: string;
  body: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    title: "Smart Integration",
    body: "Implement AI solutions that align perfectly with your workflow—no disruption, just results that scale.",
    Icon: Brain,
  },
  {
    title: "Human-Centered AI",
    body: "Design automation that feels intuitive, prioritizing people while enhancing efficiency through intelligence.",
    Icon: ThumbsUp,
  },
  {
    title: "Built for Growth",
    body: "Partner with experts who evolve with you, ensuring your AI systems adapt as your business expands.",
    Icon: Team,
  },
];

/* Deterministic particle layout (avoids hydration mismatch). */
const PARTICLES = [
  { x: 22, y: 44, d: 5.2, delay: 0 },
  { x: 78, y: 18, d: 6.4, delay: 0.8 },
  { x: 64, y: 74, d: 4.8, delay: 1.6 },
  { x: 12, y: 80, d: 7.1, delay: 0.4 },
  { x: 88, y: 62, d: 5.7, delay: 2.1 },
  { x: 40, y: 22, d: 6.1, delay: 1.1 },
  { x: 52, y: 90, d: 5.4, delay: 2.6 },
  { x: 95, y: 30, d: 6.8, delay: 0.2 },
];

function FeatureVisual({
  Icon,
  seed,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  seed: number;
}) {
  return (
    <div className="relative h-[170px] overflow-hidden rounded-2xl border border-line bg-white">
      {/* grid lines that fade toward the edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:24px_24px] bg-center [mask-image:radial-gradient(ellipse_55%_65%_at_50%_50%,#000_20%,transparent_85%)]" />
      {/* floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute size-[3px] rounded-full bg-fg/40"
          style={{ left: `${(p.x + seed * 17) % 100}%`, top: `${p.y}%` }}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: p.d,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          whileHover={{ scale: 1.08, rotate: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative grid size-[76px] place-items-center rounded-full bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] text-white shadow-[0_10px_30px_-6px_rgba(228,111,3,0.55),inset_0_0_0_1px_rgba(255,255,255,0.25)]"
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-orange/50"
            animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: seed * 0.6 }}
          />
          <Icon className="size-8" />
        </motion.div>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 pt-[90px] pb-[120px]">
      <Container>
        <SectionHeader
          badge="Why Us"
          title={
            <>
              Experience The Benefits
              <br />
              Of Our Expertise
            </>
          }
          subtitle="That drives impactful gain powerful results"
        />

        <div className="mt-[90px] grid gap-8 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.12 * i} y={30}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="card-shell h-full rounded-[24px]"
              >
                <div className="h-full rounded-[23px] bg-[radial-gradient(46%_31%_at_50%_0%,#ffffff_0%,#f5f5f5_100%)] px-8 pt-8 pb-[42px] text-center">
                  <FeatureVisual Icon={f.Icon} seed={i} />
                  <h3 className="h-display mt-7 text-[28px] leading-[1.25] text-fg capitalize lg:text-[30px]">
                    {f.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[322px] text-lg leading-[1.6] text-muted">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-[60px] flex justify-center">
          <Button href="#pricing" variant="orange" arrow="down" className="w-[161px]">
            See Pricing
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
