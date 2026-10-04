import "server-only";
import { getAllPosts } from "./blog";
import { GENERAL_FAQS } from "@/content/faqs";
import { GLOSSARY } from "@/content/glossary";
import { INDUSTRIES } from "@/content/industries";
import { SERVICES } from "@/content/services";
import { TOOLS } from "@/content/tools";
import { SITE, absoluteUrl } from "./site";

/**
 * llms.txt — an emerging, proposed convention (https://llmstxt.org) that gives
 * language models a concise, link-rich summary of a site in Markdown.
 */
export function buildLlmsTxt() {
  const posts = getAllPosts();
  const link = (title: string, path: string, note?: string) =>
    `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

  return `# ${SITE.name}

> ${SITE.description}

${SITE.name} is an AI automation agency for small businesses in the ${SITE.areaServed}. Plans: Standard ($900/month — website refresh, AEO, GEO and basic automations) and Enterprise ($1,600/month — expanded custom workflows, advanced analytics, priority support, enhanced security). Contact: ${SITE.email}${SITE.phone ? `, ${SITE.phone}` : ""}. A free AI audit is available at ${absoluteUrl("/contact")}.

## Services
${SERVICES.map((s) => link(s.name, `/services/${s.slug}`, s.summary)).join("\n")}

## Industries
${INDUSTRIES.map((i) => link(`AI automation for ${i.audience}`, `/industries/${i.slug}`)).join("\n")}

## Free tools
${TOOLS.map((t) => link(t.name, `/tools/${t.slug}`, t.tagline)).join("\n")}

## Guides
${posts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)).join("\n")}

## Glossary
${GLOSSARY.map((g) => link(g.term, `/glossary/${g.slug}`, g.short)).join("\n")}

## Optional
${link("Pricing", "/pricing")}
${link("FAQ", "/faq")}
${link("About", "/about")}
${link("Full text for LLMs", "/llms-full.txt")}
`;
}

/** Expanded version with the key answer-first content inline. */
export function buildLlmsFullTxt() {
  const posts = getAllPosts();
  const out: string[] = [buildLlmsTxt(), "\n---\n"];

  out.push("# Services in detail\n");
  for (const s of SERVICES) {
    out.push(`## ${s.name}\nURL: ${absoluteUrl(`/services/${s.slug}`)}\n\n${s.answer}\n`);
    out.push(s.faqs.map((f) => `**Q: ${f.q}**\nA: ${f.a}`).join("\n\n") + "\n");
  }

  out.push("# Industries in detail\n");
  for (const i of INDUSTRIES) {
    out.push(`## AI automation for ${i.audience}\nURL: ${absoluteUrl(`/industries/${i.slug}`)}\n\n${i.answer}\n`);
    out.push(i.automations.map((a) => `- ${a.title}: ${a.body}`).join("\n") + "\n");
  }

  out.push("# Frequently asked questions\n");
  for (const g of GENERAL_FAQS) {
    out.push(`## ${g.category}\n` + g.items.map((f) => `**Q: ${f.q}**\nA: ${f.a}`).join("\n\n") + "\n");
  }

  out.push("# Guide summaries\n");
  for (const p of posts) {
    out.push(`## ${p.title}\nURL: ${absoluteUrl(`/blog/${p.slug}`)}\n\n${p.tldr}\n`);
  }

  return out.join("\n");
}
