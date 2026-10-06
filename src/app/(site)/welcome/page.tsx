import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/page/blocks";
import { CheckCircle } from "@/components/icons";
import { SITE } from "@/lib/site";

// Stripe Payment Links redirect here after a successful checkout.
export const metadata: Metadata = {
  title: "Welcome to Metron — Payment Received",
  robots: { index: false, follow: false },
};

const NEXT = [
  { t: "Check your email", b: "Your receipt and invoice from Stripe are on the way. Keep them for your records." },
  { t: "We reach out within 1 business day", b: "Someone from our team will contact you to schedule a short kickoff call." },
  { t: "We get to work", b: "On the kickoff call we gather what we need, confirm the plan and set your launch timeline." },
];

export default function Welcome() {
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
              Payment received. <span className="text-orange">Welcome aboard.</span>
            </h1>
            <p className="animate-rise mt-4 text-lg leading-[1.6] text-muted [animation-delay:180ms]">
              Thank you for choosing {SITE.name}. Questions in the meantime? Call{" "}
              <a href={`tel:${SITE.phoneE164}`} className="text-orange underline">
                {SITE.phone}
              </a>{" "}
              or email{" "}
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
        <p className="mt-10 text-center">
          <Link href="/" className="text-orange underline">
            Back to home
          </Link>
        </p>
      </Section>
    </>
  );
}
