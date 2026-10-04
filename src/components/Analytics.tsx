"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { SITE } from "@/lib/site";
import { captureAttribution, trackCall, trackCta } from "@/lib/track";

// Regions where consent is required before ad/analytics storage (EEA + UK + CH).
const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV",
  "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

/**
 * Loads GA4 + Google Ads (only when IDs are configured), sets Consent Mode v2
 * defaults, captures ad-click attribution, and tracks phone + CTA clicks.
 */
export default function Analytics() {
  const pathname = usePathname();
  const ids = [SITE.gaId, SITE.adsId].filter(Boolean);

  useEffect(() => {
    captureAttribution();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackCall(window.location.pathname);
      else if (href === "/contact" || href.startsWith("/contact?")) trackCta(a.textContent?.trim().slice(0, 40) ?? "", window.location.pathname);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!ids.length) return null;

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(CONSENT_REGIONS)},wait_for_update:500});
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});
gtag('js',new Date());
${ids.map((id) => `gtag('config','${id}'${id.startsWith("AW-") ? ",{allow_enhanced_conversions:true}" : ""});`).join("\n")}`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy="afterInteractive" />
    </>
  );
}
