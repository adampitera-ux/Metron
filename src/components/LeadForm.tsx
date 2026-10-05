"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PLANS } from "@/content/plans";
import { getAttribution, trackLead } from "@/lib/track";

export const BUSINESS_TYPES = [
  "HVAC / Plumbing / Electrical",
  "Roofing / Construction / Remodeling",
  "Landscaping / Pool / Outdoor",
  "Cleaning / Pest Control / Junk Removal",
  "Auto Repair / Towing / Car Wash",
  "Trucking / Logistics / Moving",
  "Manufacturing / Distribution",
  "Property Management / Real Estate",
  "Dental / Medical / Med Spa",
  "Law / Accounting / Insurance",
  "Restaurant / Retail / Hospitality",
  "Other",
];

const INTERESTS = [
  "Back-office automation",
  "AI receptionist / phones",
  "Lead follow-up",
  "Custom AI software",
  "AI strategy & integration",
  "Website / SEO / AI search",
  "Reviews & reputation",
  "Not sure yet",
];

const input =
  "mt-2 h-12 w-full rounded-xl border border-line-strong bg-white px-4 text-[15px] text-fg shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none transition placeholder:text-muted-3 hover:border-[#cfcfcf] focus:border-orange focus:ring-4 focus:ring-orange/12";
const label = "block text-[13.5px] font-medium tracking-[0.01em] text-fg-2";
const opt = <span className="font-normal text-muted-3"> · Optional</span>;

function Step({ n, title, sub, children }: { n: number; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line pt-7 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-3.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-fg text-[12.5px] font-semibold text-white">{n}</span>
        <div>
          <h3 className="text-[16.5px] font-semibold leading-7 text-fg">{title}</h3>
          {sub && <p className="text-[13.5px] leading-snug text-muted-2">{sub}</p>}
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/**
 * Lead form used on /contact (variant "full") and ad landing pages ("compact").
 * Submits to /api/lead with ad attribution, fires the conversion, then
 * redirects to /thank-you.
 */
export default function LeadForm({
  variant = "full",
  source,
  cta = "Get My Free AI Audit",
  defaultInterest,
}: {
  variant?: "full" | "compact";
  source: string;
  cta?: string;
  defaultInterest?: string;
}) {
  const router = useRouter();
  const [interests, setInterests] = useState<string[]>(defaultInterest ? [defaultInterest] : []);
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const compact = variant === "compact";
  const [plan, setPlan] = useState("");

  // /contact?plan=growth — remember which plan they clicked on the pricing page.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("plan");
    const p = PLANS.find((x) => x.id === id);
    if (p) setPlan(`${p.name} plan`);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const f = new FormData(e.currentTarget);
    const data = {
      name: f.get("name"),
      business: f.get("business"),
      email: f.get("email"),
      phone: f.get("phone"),
      industry: f.get("industry"),
      message: f.get("message"),
      website: f.get("website"), // honeypot
      interests: plan ? [plan, ...interests] : interests,
      source,
      page: window.location.pathname,
      attribution: getAttribution(),
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      trackLead({ email: String(data.email ?? ""), phone: String(data.phone ?? ""), source });
      router.push(`/thank-you?from=${encodeURIComponent(source)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  const contactFields = (
    <div className={`grid gap-x-5 gap-y-5 ${compact ? "" : "sm:grid-cols-2"}`}>
      <label className={label}>
        Full name
        <input name="name" required autoComplete="name" placeholder="Jane Smith" className={input} />
      </label>
      <label className={label}>
        Business name
        <input name="business" required autoComplete="organization" placeholder="Smith Plumbing" className={input} />
      </label>
      <label className={label}>
        Work email
        <input name="email" type="email" required autoComplete="email" placeholder="jane@smithplumbing.com" className={input} />
      </label>
      <label className={label}>
        Phone{!compact && opt}
        <input name="phone" type="tel" required={compact} autoComplete="tel" placeholder="(555) 555-0100" className={input} />
      </label>
    </div>
  );

  const industryField = (
    <label className={label}>
      Type of business
      <div className="relative">
        <select name="industry" required defaultValue="" className={`${input} appearance-none pr-11 invalid:text-muted-3`}>
          <option value="" disabled>
            Select your industry
          </option>
          {BUSINESS_TYPES.map((o) => (
            <option key={o} className="text-fg">
              {o}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 20 20" fill="none" aria-hidden className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-muted-2">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );

  return (
    <form
      onSubmit={submit}
      className={compact ? "" : "relative rounded-[28px] border border-line bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_70px_-40px_rgba(0,0,0,0.3)] sm:p-8 md:p-10"}
    >
      {/* honeypot — hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {compact ? (
        <div className="space-y-5">
          {contactFields}
          {industryField}
        </div>
      ) : (
        <>
          <div className="mb-8">
            {plan && (
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-[#fff4ea] px-3.5 py-1.5 text-[13.5px] font-medium text-orange-deep">
                Selected: {plan}
              </p>
            )}
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-orange">{plan ? "Plan inquiry" : "Free AI audit request"}</p>
            <h2 className="h-display mt-2 text-[26px] leading-tight text-fg md:text-[28px]">Tell us about your business</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">Takes about a minute. A real person reviews every request.</p>
          </div>
          <div className="space-y-7">
            <Step n={1} title="Your details" sub="So we know who we're talking to.">
              {contactFields}
            </Step>
            <Step n={2} title="Your business">
              {industryField}
            </Step>
            <Step n={3} title="Where can we help?" sub="Pick as many as you like.">
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((i) => {
                  const on = interests.includes(i);
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setInterests((xs) => (on ? xs.filter((x) => x !== i) : [...xs, i]))}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13.5px] font-medium transition-all ${
                        on
                          ? "border-orange bg-[#fff4ea] text-orange-deep shadow-[0_0_0_3px_rgba(232,120,17,0.10)]"
                          : "border-line-strong bg-white text-fg-2 hover:border-[#c9c9c9] hover:bg-[#fafafa]"
                      }`}
                    >
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`size-3.5 transition-all ${on ? "w-3.5 opacity-100" : "w-0 opacity-0"}`}>
                        <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {i}
                    </button>
                  );
                })}
              </div>
              <label className={`${label} mt-6`}>
                What&apos;s taking up the most time right now?{opt}
                <textarea
                  name="message"
                  rows={4}
                  placeholder="e.g. We miss calls on job sites, invoices go out late, and we re-type every work order into QuickBooks."
                  className={`${input} h-auto resize-y py-3 leading-relaxed`}
                />
              </label>
            </Step>
          </div>
        </>
      )}

      <div className={compact ? "mt-6" : "mt-9 border-t border-line pt-7"}>
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-orange inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl text-[16.5px] font-medium transition-transform active:scale-[0.99] disabled:opacity-70"
        >
          {state === "sending" ? (
            <>
              <svg viewBox="0 0 24 24" className="size-5 animate-spin" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".3" strokeWidth="2.5" />
                <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              {cta}
              <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-[18px]">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
        {error && (
          <p role="alert" className="mt-3 rounded-lg border border-[#fecdca] bg-[#fef3f2] px-3.5 py-2.5 text-center text-[14px] text-[#b42318]">
            {error}
          </p>
        )}
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[12.5px] text-muted-2">
          {["Free, no obligation", "Reply within 1 business day", "We never share your info"].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5 text-orange">
                <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-center text-[12px] text-muted-3">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-orange">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
