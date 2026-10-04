import type { Metadata } from "next";
import type { QA } from "@/content/types";
import { SERVICES } from "@/content/services";
import { SITE, absoluteUrl } from "./site";

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

export function ogImageUrl(title: string, kicker?: string) {
  const params = new URLSearchParams({ title });
  if (kicker) params.set("kicker", kicker);
  return `/og?${params.toString()}`;
}

export function pageMetadata({
  title,
  description,
  path,
  kicker,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  kicker?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Use the title as-is instead of applying the "| Automatix" template. */
  absoluteTitle?: boolean;
}): Metadata {
  const image = ogImageUrl(title.replace(/\s*\|\s*Automatix$/, ""), kicker);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe once "<" is escaped
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const organizationSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl("/og.png"),
  description: SITE.description,
  slogan: SITE.tagline,
  email: SITE.email,
  ...(SITE.phone ? { telephone: SITE.phone } : {}),
  foundingDate: SITE.founded,
  areaServed: { "@type": "Country", name: SITE.areaServed },
  knowsAbout: [
    "AI integration for small businesses",
    "Back-office automation",
    "Workflow automation",
    "Custom AI software",
    "Software integrations",
    "AI receptionists",
    "CRM and lead follow-up automation",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI integration services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
    })),
  },
  priceRange: "$900–$1,600 per month",
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
});

export const websiteSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
});

export const breadcrumbSchema = (items: { name: string; path: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqSchema = (faqs: QA[]): Json => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const serviceSchema = ({
  name,
  description,
  path,
  serviceType,
  audience,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  audience?: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: absoluteUrl(path),
  serviceType,
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: SITE.areaServed },
  ...(audience ? { audience: { "@type": "BusinessAudience", name: audience } } : {}),
});

export const articleSchema = ({
  title,
  description,
  path,
  date,
  updated,
  image,
  section,
  keywords,
  words,
  faqsAbout,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
  image: string;
  section?: string;
  keywords?: string[];
  words?: number;
  faqsAbout?: string[];
}): Json => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: absoluteUrl(path),
  mainEntityOfPage: absoluteUrl(path),
  datePublished: date,
  dateModified: updated ?? date,
  image: absoluteUrl(image),
  author: { "@type": "Organization", name: SITE.author.name, url: absoluteUrl("/about") },
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
  ...(section ? { articleSection: section } : {}),
  ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
  ...(words ? { wordCount: words } : {}),
  ...(faqsAbout?.length ? { about: faqsAbout.map((name) => ({ "@type": "Thing", name })) } : {}),
  isAccessibleForFree: true,
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".tldr", "h1"] },
});

export const definedTermSchema = ({
  term,
  description,
  path,
}: {
  term: string;
  description: string;
  path: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: term,
  description,
  url: absoluteUrl(path),
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: `${SITE.name} AI & Automation Glossary`,
    url: absoluteUrl("/glossary"),
  },
});

export const webAppSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Json => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name,
  description,
  url: absoluteUrl(path),
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (web browser)",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@id": ORG_ID },
});

export const itemListSchema = (name: string, items: { name: string; path: string }[]): Json => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    url: absoluteUrl(it.path),
  })),
});
