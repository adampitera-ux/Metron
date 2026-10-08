import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { SITE } from "@/lib/site";
import CalEmbed from "./CalEmbed";

export const CAL_URL = "https://cal.com/ethanharris";
// Embed the 30-minute meeting directly so visitors land straight on the calendar.
const CAL_EVENT = `${CAL_URL}/30min`;
const PHOTO = "/images/ethan.jpg";

/** "Talk to our sales agent" — Ethan's photo plus his live Cal.com booking calendar. */
export default function BookWithEthan() {
  // Show the photo once public/images/ethan.jpg exists; until then, a clean monogram.
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", PHOTO));

  return (
    <section id="book" className="scroll-mt-28">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-line bg-white px-5 py-[6px] text-sm text-fg-2">
            Book a call
          </span>
          <h2 className="h-display mt-5 text-[38px] leading-[1.15] text-fg md:text-[56px]">
            Talk to Our <span className="text-orange">Sales Agent</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.6] text-muted">
            Skip the back-and-forth. Pick a time that works for you and talk directly with Ethan.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[460px_1fr]">
          <div className="flex flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.35)] lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full bg-[radial-gradient(90%_70%_at_30%_20%,#fff1e4_0%,#f3f3f3_70%)]">
              {hasPhoto ? (
                <Image src={PHOTO} alt="Ethan Harris" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover object-[50%_18%]" />
              ) : (
                <span className="h-display absolute inset-0 grid place-items-center text-[120px] text-fg/80">EH</span>
              )}
            </div>
            <div className="p-7">
              <p className="h-display text-[30px] text-fg">Ethan Harris</p>
              <p className="mt-1 text-[15px] text-muted">Sales, {SITE.name}</p>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-fg-2">
                I&apos;ll learn how your business runs, show you where AI and a better website can win you more
                customers, and recommend the plan that fits.
              </p>
              <a
                href={CAL_EVENT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-[15px] font-medium text-orange underline-offset-2 hover:underline"
              >
                Open calendar in a new tab ↗
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-line bg-white p-2 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.35)] md:p-4">
            <CalEmbed calLink="ethanharris/30min" />
          </div>
        </div>
      </div>
    </section>
  );
}
