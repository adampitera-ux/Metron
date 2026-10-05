"use client";

import { SITE } from "./site";

/* ------------------------------------------------------------------ */
/* Client-side tracking + ad attribution                               */
/* ------------------------------------------------------------------ */

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

const gtag: Gtag = (...args) => window.gtag?.(...args);

const CLICK_IDS = ["gclid", "gbraid", "wbraid", "msclkid", "fbclid"] as const;
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const FIRST = "amx_attr_first";
const LAST = "amx_attr_last";

export type Attribution = Partial<Record<(typeof CLICK_IDS)[number] | (typeof UTM)[number], string>> & {
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

const safe = <T,>(fn: () => T, fallback: T): T => {
  try {
    return fn();
  } catch {
    return fallback;
  }
};

/** Store first-touch (90 days) and last-touch attribution from the current URL. */
export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const found: Attribution = {};
  for (const k of [...CLICK_IDS, ...UTM]) {
    const v = params.get(k);
    if (v) found[k] = v.slice(0, 200);
  }
  const hasData = Object.keys(found).length > 0;
  const external = document.referrer && !document.referrer.startsWith(window.location.origin);
  if (!hasData && !external) return;

  const record: Attribution = {
    ...found,
    landing_page: window.location.pathname,
    referrer: external ? document.referrer.slice(0, 300) : undefined,
    captured_at: new Date().toISOString(),
  };
  safe(() => {
    const first = localStorage.getItem(FIRST);
    const expired = first && Date.now() - Date.parse(JSON.parse(first).captured_at ?? 0) > 90 * 864e5;
    if (!first || expired) localStorage.setItem(FIRST, JSON.stringify(record));
    localStorage.setItem(LAST, JSON.stringify(record));
  }, undefined);
}

export function getAttribution(): { first?: Attribution; last?: Attribution } {
  return safe<{ first?: Attribution; last?: Attribution }>(
    () => ({
      first: JSON.parse(localStorage.getItem(FIRST) ?? "null") ?? undefined,
      last: JSON.parse(localStorage.getItem(LAST) ?? "null") ?? undefined,
    }),
    {},
  );
}

/** Fire GA4 + Google Ads lead conversion (with enhanced-conversion user data). */
export function trackLead({ email, phone, source }: { email?: string; phone?: string; source: string }) {
  if (email || phone) {
    gtag("set", "user_data", {
      ...(email ? { email: email.trim().toLowerCase() } : {}),
      ...(phone ? { phone_number: normalizePhone(phone) } : {}),
    });
  }
  gtag("event", "generate_lead", { form_source: source, currency: "USD", value: 1 });
  if (SITE.adsId && SITE.adsLeadLabel) {
    gtag("event", "conversion", { send_to: `${SITE.adsId}/${SITE.adsLeadLabel}` });
  }
}

export function trackCall(location: string) {
  gtag("event", "click_to_call", { location });
  if (SITE.adsId && SITE.adsCallLabel) {
    gtag("event", "conversion", { send_to: `${SITE.adsId}/${SITE.adsCallLabel}` });
  }
}

export function trackCta(label: string, location: string) {
  gtag("event", "cta_click", { label, location });
}

function normalizePhone(p: string) {
  const digits = p.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

/** Fired when someone clicks a plan's Buy button (before leaving for Stripe). */
export function trackCheckout(plan: string, value: number) {
  gtag("event", "begin_checkout", { currency: "USD", value, items: [{ item_id: plan, item_name: plan, price: value }] });
}
