import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope, Roboto_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  // Google Search Console HTML-tag verification (set the content value in Vercel).
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: `${SITE.name} Blog` }] },
  },
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${manrope.variable} ${robotoMono.variable} antialiased`}
    >
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
