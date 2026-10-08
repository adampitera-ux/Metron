"use client";

import { useEffect, useRef } from "react";
import { trackBooking } from "@/lib/track";

type CalFn = ((...args: unknown[]) => void) & { q?: unknown[][]; ns?: Record<string, CalFn>; loaded?: boolean };
declare global {
  interface Window {
    Cal?: CalFn;
  }
}

/** Load Cal.com's official embed script once (their standard loader snippet). */
function loadCal() {
  if (window.Cal) return window.Cal;
  const queue = (fn: CalFn, args: unknown[]) => (fn.q = fn.q || []).push(args);
  const cal = function (...args: unknown[]) {
    const c = window.Cal!;
    if (!c.loaded) {
      c.ns = {};
      c.q = c.q || [];
      const s = document.createElement("script");
      s.src = "https://app.cal.com/embed/embed.js";
      s.async = true;
      document.head.appendChild(s);
      c.loaded = true;
    }
    if (args[0] === "init") {
      const ns = args[1] as string | undefined;
      const api: CalFn = function (...a: unknown[]) {
        queue(api, a);
      } as CalFn;
      api.q = api.q || [];
      if (typeof ns === "string") {
        c.ns![ns] = c.ns![ns] || api;
        queue(c.ns![ns], args);
        queue(c, ["initNamespace", ns]);
      } else queue(c, args);
      return;
    }
    queue(c, args);
  } as CalFn;
  window.Cal = cal;
  return cal;
}

/** Ethan's calendar, styled with Metron's brand orange. */
export default function CalEmbed({ calLink }: { calLink: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.ready) return;
    el.dataset.ready = "1";
    const Cal = loadCal();
    Cal("init", "metron", { origin: "https://cal.com" });
    const ns = window.Cal!.ns!.metron;
    ns("inline", { elementOrSelector: el, calLink, config: { layout: "month_view", theme: "light" } });
    // Count a booked call as a conversion (guarded so v1 + v2 events don't double count).
    let counted = false;
    const onBooked = () => {
      if (counted) return;
      counted = true;
      trackBooking(window.location.pathname);
    };
    ns("on", { action: "bookingSuccessfulV2", callback: onBooked });
    ns("on", { action: "bookingSuccessful", callback: onBooked });
    ns("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: { light: { "cal-brand": "#e87811", "cal-brand-emphasis": "#e46f03", "cal-brand-text": "#ffffff" } },
    });
  }, [calLink]);

  return <div ref={ref} className="h-[680px] w-full overflow-y-auto overscroll-contain" />;
}
