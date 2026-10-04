"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
  "mt-1.5 h-[50px] w-full rounded-[10px] border border-line-strong bg-[#fafafa] px-4 text-base text-fg outline-none transition placeholder:text-muted-3 focus:border-orange focus:bg-white focus:ring-4 focus:ring-orange/15";

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
      interests,
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

  return (
    <form onSubmit={submit} className={compact ? "" : "rounded-[26px] border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] md:p-9"}>
      {/* honeypot — hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2 sm:gap-5"}`}>
        <label className="text-[14.5px] font-medium text-fg-2">
          Your name
          <input name="name" required autoComplete="name" placeholder="Jane Smith" className={input} />
        </label>
        <label className="text-[14.5px] font-medium text-fg-2">
          Business name
          <input name="business" required autoComplete="organization" placeholder="Smith Plumbing" className={input} />
        </label>
        <label className="text-[14.5px] font-medium text-fg-2">
          Work email
          <input name="email" type="email" required autoComplete="email" placeholder="jane@smithplumbing.com" className={input} />
        </label>
        <label className="text-[14.5px] font-medium text-fg-2">
          Phone {compact ? "" : "(optional)"}
          <input name="phone" type="tel" required={compact} autoComplete="tel" placeholder="(555) 555-0100" className={input} />
        </label>
        <label className={`text-[14.5px] font-medium text-fg-2 ${compact ? "" : "sm:col-span-2"}`}>
          Type of business
          <select name="industry" required defaultValue="" className={input}>
            <option value="" disabled>
              Select one
            </option>
            {BUSINESS_TYPES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>

      {!compact && (
        <>
          <fieldset className="mt-6">
            <legend className="text-[14.5px] font-medium text-fg-2">What would you like help with?</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {INTERESTS.map((i) => {
                const on = interests.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setInterests((xs) => (on ? xs.filter((x) => x !== i) : [...xs, i]))}
                    className={`rounded-full border px-4 py-2 text-[14px] transition-all ${
                      on ? "border-orange bg-[#fff4ea] text-orange" : "border-line bg-white text-muted hover:border-line-strong"
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <label className="mt-6 block text-[14.5px] font-medium text-fg-2">
            What&apos;s eating up the most time right now? (optional)
            <textarea
              name="message"
              rows={4}
              placeholder="e.g. We miss calls on job sites, invoices go out late, and we re-type every work order into QuickBooks."
              className={`${input} h-auto py-3`}
            />
          </label>
        </>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn-orange mt-6 h-[56px] w-full rounded-[10px] text-[17px] font-medium transition-transform active:scale-[0.99] disabled:opacity-70"
      >
        {state === "sending" ? "Sending…" : cta}
      </button>
      {error && <p className="mt-3 text-center text-[14.5px] text-[#b42318]">{error}</p>}
      <p className="mt-3 text-center text-[13px] leading-[1.5] text-muted-2">
        Free, no obligation. We reply within one business day. See our{" "}
        <a href="/privacy" className="underline hover:text-orange">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
