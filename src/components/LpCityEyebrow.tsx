"use client";

import { useEffect, useState } from "react";
import { LOCATIONS } from "@/content/locations";

/**
 * Ad landing-page eyebrow with optional city message match.
 * Add ?city=houston (any slug from /locations) to an ad's final URL and the page
 * reads "AI for home service businesses in Houston". Unknown values are ignored.
 */
export default function LpCityEyebrow({ text }: { text: string }) {
  const [city, setCity] = useState("");
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("city")?.toLowerCase();
    const loc = LOCATIONS.find((l) => l.slug === v);
    if (loc) setCity(loc.city);
  }, []);
  return (
    <>
      {text}
      {city && <span className="text-fg"> in {city}</span>}
    </>
  );
}
