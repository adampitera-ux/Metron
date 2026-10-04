"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";
import { BlurWords, Container, Reveal, words } from "./ui";

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const I = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="size-[18px]" {...s}>
    {children}
  </svg>
);

const INDUSTRIES: { slug: string; name: string; icon: ReactNode }[] = [
  { slug: "hvac", name: "HVAC", icon: <I><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9" /><circle cx="12" cy="12" r="3" /></I> },
  { slug: "plumbing", name: "Plumbers", icon: <I><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" /></I> },
  { slug: "electrical", name: "Electricians", icon: <I><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></I> },
  { slug: "roofing", name: "Roofers", icon: <I><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></I> },
  { slug: "landscaping", name: "Landscapers", icon: <I><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z" /><path d="M4 20c4-4 7-6 11-8" /></I> },
  { slug: "cleaning-services", name: "Cleaning Services", icon: <I><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" /><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></I> },
  { slug: "pest-control", name: "Pest Control", icon: <I><rect x="8" y="7" width="8" height="13" rx="4" /><path d="M12 7V4M9 4l1.5 2M15 4l-1.5 2M8 11H4M8 15H3M16 11h4M16 15h5" /></I> },
  { slug: "dental", name: "Dental Practices", icon: <I><path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 4 2 7 .4 2.5 1 6.5 2.5 6.5S9.5 17 12 17s3 4 4.5 4 2.1-4 2.5-6.5c.5-3 2-4 2-7C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z" /></I> },
  { slug: "law-firms", name: "Law Firms", icon: <I><path d="M12 3v18M7 21h10M5 7h14" /><path d="m5 7-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z" /></I> },
  { slug: "real-estate", name: "Real Estate", icon: <I><circle cx="8" cy="15" r="5" /><path d="m11.5 11.5 8.5-8.5M17 6l2 2M15 8l2 2" /></I> },
  { slug: "auto-repair", name: "Auto Repair", icon: <I><path d="M5 17h14v-5l-2-5H7l-2 5z" /><circle cx="8" cy="17" r="2" /><circle cx="16" cy="17" r="2" /><path d="M5 12h14" /></I> },
  { slug: "med-spas", name: "Med Spas", icon: <I><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" /></I> },
  { slug: "construction", name: "Construction", icon: <I><path d="M2 18h20M4 18v-3a8 8 0 0 1 16 0v3" /><path d="M10 7V5h4v2M12 7v4" /></I> },
  { slug: "painting", name: "Painters", icon: <I><rect x="3" y="3" width="15" height="6" rx="1.5" /><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3M10 14h4v7h-4z" /></I> },
  { slug: "garage-door", name: "Garage Doors", icon: <I><path d="M3 21V9l9-6 9 6v12" /><path d="M7 21v-8h10v8M7 16h10" /></I> },
  { slug: "pool-service", name: "Pool Service", icon: <I><path d="M2 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 14V5a2 2 0 0 1 4 0M16 14V5a2 2 0 0 0-4 0M8 9h8" /></I> },
  { slug: "moving", name: "Movers", icon: <I><rect x="3" y="7" width="11" height="9" rx="1" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></I> },
  { slug: "junk-removal", name: "Junk Removal", icon: <I><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" /></I> },
  { slug: "trucking-logistics", name: "Trucking & Logistics", icon: <I><path d="M2 6h12v10H2zM14 9h4l4 4v3h-8z" /><circle cx="6" cy="18" r="1.8" /><circle cx="18" cy="18" r="1.8" /></I> },
  { slug: "manufacturing", name: "Manufacturing", icon: <I><path d="M2 21V10l6 4V10l6 4V6h4l2 15z" /><path d="M7 18h2M12 18h2" /></I> },
  { slug: "property-management", name: "Property Management", icon: <I><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M2 21h20M8 8h2M8 12h2M8 16h2" /></I> },
  { slug: "accounting-firms", name: "Accounting Firms", icon: <I><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 6h8v3H8zM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" /></I> },
  { slug: "insurance-agencies", name: "Insurance Agencies", icon: <I><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></I> },
  { slug: "restaurants", name: "Restaurants", icon: <I><path d="M7 2v9a2 2 0 0 0 2 2v9M5 2v6M9 2v6M17 22V2c-2 2-3 5-3 8 0 2 1 3 3 3" /></I> },
];

const PILLARS = [
  {
    k: "01",
    title: "Grow Faster",
    body: "Answer every call, follow up with every lead in seconds, and show up when customers ask Google or ChatGPT who to hire.",
  },
  {
    k: "02",
    title: "Save Capital",
    body: "Automate the back office — invoicing, data entry, paperwork, scheduling, reporting — and connect your software instead of hiring more admin staff.",
  },
  {
    k: "03",
    title: "Focus On Your Craft",
    body: "Spend your time on the jobs, patients, and clients you're great at. We build, run, and maintain the AI behind the scenes.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="scroll-mt-24 pt-[110px] pb-[30px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-line bg-bg px-5 py-[6px] text-sm leading-[18px] text-fg-2">
              Who We Help
            </span>
          </Reveal>
          <BlurWords
            items={words("We Bring AI To *Every* Small &\nMedium-Sized *Business*")}
            stagger={0.06}
            className="h-display mt-6 max-w-[900px] text-[34px] leading-[1.25] text-fg sm:text-[44px] lg:text-[52px]"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[720px] text-lg leading-[1.6] text-muted">
              Whatever you do — fix furnaces, haul freight, build homes, run a clinic or manage
              properties — we integrate AI wherever it saves you money: the back office, the phones,
              follow-up, scheduling, paperwork, custom software and getting found online. You grow
              faster, spend less on admin, and focus on the work you do best.
            </p>
          </Reveal>
        </div>

        {/* Three pillars */}
        <div className="mt-[60px] grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.k} delay={0.1 * i} y={24}>
              <div className="group relative h-full overflow-hidden rounded-[22px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-7">
                <span className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-orange/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="font-mono text-sm text-orange">{p.k}</span>
                <h3 className="h-display mt-3 text-[26px] leading-[1.25] text-fg">{p.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Industries */}
        <Reveal delay={0.1} className="mt-[70px] text-center">
          <p className="h-display text-[22px] leading-[1.3] text-fg md:text-[26px]">
            Built for trades, contractors, logistics companies, clinics, firms and local businesses of every kind.
          </p>
          <p className="mt-2 text-base text-muted-2">
            Pick your industry to see exactly what we automate — or book a free audit for anything else.
          </p>
        </Reveal>

        <ul className="mx-auto mt-9 flex max-w-[1040px] flex-wrap justify-center gap-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.li
              key={ind.slug}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ delay: 0.04 * i, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pr-4 pl-2 text-[15px] text-fg-2 shadow-[0_2px_10px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/40 hover:text-fg hover:shadow-[0_8px_20px_-10px_rgba(232,120,17,0.45)]"
              >
                <span className="grid size-8 place-items-center rounded-full bg-[#fff4ea] text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                  {ind.icon}
                </span>
                {ind.name}
                <ArrowUpRight className="size-3.5 -translate-x-1 text-muted-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-orange group-hover:opacity-100" />
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * INDUSTRIES.length, duration: 0.45 }}
          >
            <Link
              href="/contact"
              className="btn-orange flex items-center gap-2 rounded-full py-2 pr-4 pl-4 text-[15px] font-medium"
            >
              Don&apos;t see yours? Ask us <ArrowUpRight className="size-3.5" />
            </Link>
          </motion.li>
        </ul>
      </Container>
    </section>
  );
}
