import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { LinkCard, Section, SectionTitle } from "@/components/page/blocks";
import { CheckCircle } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thanks — We'll Be in Touch",
  robots: { index: false, follow: false },
};

const NEXT = [
  { t: "We review your details", b: "Within one business day, someone from our team looks at your business and the workflows you mentioned." },
  { t: "We book your free audit", b: "You'll get an email to pick a 30-minute time that works for you." },
  { t: "You get a clear plan", b: "We show you exactly what AI can take off your plate, what it costs, and what it saves." },
];

export default function ThankYou() {
  const reading = getAllPosts()
    .filter((p) => ["AI for Small Business", "Boring Businesses", "AI Strategy & ROI"].includes(p.category))
    .slice(0, 3);
  return (
    <>
      <section className="px-0 md:px-5">
        <div className="relative overflow-hidden bg-bg-soft pt-[160px] pb-20 text-center">
          <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_30%,#000_10%,transparent_80%)]" />
          <div className="relative mx-auto max-w-[680px] px-4">
            <span className="animate-rise mx-auto grid size-16 place-items-center rounded-full bg-[radial-gradient(70%_70%_at_30%_25%,#ffb168_0%,#e46f03_100%)] text-white shadow-[0_12px_30px_-10px_rgba(228,111,3,0.7)]">
              <CheckCircle className="size-8" />
            </span>
            <h1 className="animate-rise h-display mt-6 text-[40px] leading-[1.2] text-fg [animation-delay:100ms] md:text-[52px]">
              You&apos;re in. <span className="text-orange">Talk soon.</span>
            </h1>
            <p className="animate-rise mt-4 text-lg leading-[1.6] text-muted [animation-delay:180ms]">
              Thanks for reaching out. Check your inbox — and if it&apos;s urgent, email us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange underline">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-3">
          {NEXT.map((n, i) => (
            <div key={n.t} className="rounded-[20px] border border-line bg-[radial-gradient(70%_60%_at_0%_0%,#ffffff_0%,#f6f6f6_100%)] p-6">
              <span className="font-mono text-sm text-orange">0{i + 1}</span>
              <h2 className="h-display mt-2 text-[21px] text-fg">{n.t}</h2>
              <p className="mt-2 text-[15.5px] leading-[1.6] text-muted">{n.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {reading.length > 0 && (
        <Section className="pt-0">
          <SectionTitle kicker="While you wait" title="Get a head start" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reading.map((p) => (
              <LinkCard key={p.slug} href={`/blog/${p.slug}`} title={p.title} body={p.description} meta={p.category} />
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/" className="text-orange underline">
              Back to home
            </Link>
          </p>
        </Section>
      )}
    </>
  );
}
