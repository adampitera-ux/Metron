import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Search and AI crawlers are explicitly welcomed so the site can be indexed by
 * Google/Bing and referenced by ChatGPT, Perplexity, Claude, Gemini and Copilot.
 */
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "AdsBot-Google", // Google Ads landing page checks — must never be blocked
  "AdsBot-Google-Mobile",
  "Bingbot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot",
  "Applebot-Extended",
  "DuckDuckBot",
  "Amazonbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/", disallow: ["/api/"] },
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
