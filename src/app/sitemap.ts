import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { GLOSSARY } from "@/content/glossary";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { TOOLS } from "@/content/tools";
import { CATEGORIES } from "@/content/categories";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();
  const latestPost = posts[0]?.updated ?? posts[0]?.date;

  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly", lastModified: Date | string = now) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/industries", 0.9),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}`, 0.85)),
    page("/pricing", 0.8),
    page("/tools", 0.8),
    ...TOOLS.map((t) => page(`/tools/${t.slug}`, 0.8)),
    page("/blog", 0.8, "weekly", latestPost ?? now),
    ...CATEGORIES.filter((c) => posts.some((p) => p.category === c.name)).map((c) => page(`/blog/category/${c.slug}`, 0.7, "weekly", latestPost ?? now)),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.7, "monthly", p.updated ?? p.date)),
    page("/glossary", 0.6),
    ...GLOSSARY.map((g) => page(`/glossary/${g.slug}`, 0.5)),
    page("/faq", 0.6),
    page("/about", 0.5),
    page("/contact", 0.6),
    page("/company", 0.6),
    page("/privacy", 0.2),
    page("/terms", 0.2),
  ];
}
