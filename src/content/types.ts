export type QA = { q: string; a: string };
export type Point = { title: string; body: string };

export type Service = {
  slug: string;
  name: string; // "AI Receptionist & Missed-Call Text-Back"
  shortName: string; // "AI Receptionist" (nav / cards)
  icon: "bolt" | "chat" | "flow" | "globe" | "search" | "star";
  summary: string; // 1 sentence, used on cards + meta description fallback
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140–160 chars
  headline: string; // H1
  answer: string; // 40–60 word answer-first definition paragraph (AEO "snippet bait")
  benefits: Point[]; // 4–6
  useCases: Point[]; // 4–6 concrete workflows
  process: Point[]; // 3–5 steps of how we deliver it
  deliverables: string[]; // 5–8 bullet items
  faqs: QA[]; // 5–7
  relatedIndustries: string[]; // industry slugs
  keywords: string[]; // primary + secondary target queries
};

export type Industry = {
  slug: string;
  name: string; // "HVAC"
  audience: string; // "HVAC companies"
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140–160 chars
  headline: string; // H1
  answer: string; // 40–60 word answer-first paragraph
  painPoints: Point[]; // 3–5
  automations: Point[]; // 5–7 specific AI workflows for this trade
  exampleMath: { title: string; body: string }; // illustrative ROI math, clearly labeled as an example
  tools: string[]; // software they commonly use that we integrate with
  faqs: QA[]; // 5–6
  relatedServices: string[]; // service slugs
  keywords: string[];
};

export type GlossaryTerm = {
  slug: string;
  term: string; // "Answer Engine Optimization (AEO)"
  short: string; // single-sentence definition (<= 30 words)
  body: string[]; // 2–4 paragraphs
  related: string[]; // other glossary slugs
};

export const BLOG_CATEGORIES = [
  "AI for Small Business",
  "Boring Businesses",
  "Back Office & Admin",
  "Sales & Customer Service",
  "Custom AI Software",
  "Industry Playbooks",
  "AI Strategy & ROI",
  "Websites & Search",
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogFrontmatter = {
  title: string;
  description: string; // 140–160 chars
  date: string; // ISO yyyy-mm-dd
  updated?: string;
  category: BlogCategory;
  tags: string[];
  tldr: string; // 2–3 sentence answer-first summary
  keyTakeaways?: string[]; // 3–5 one-line takeaways (rendered as a box + used in schema)
  cta?: "audit" | "readiness" | "missed-calls" | "roi"; // which CTA the post pushes hardest
  faqs?: QA[];
  relatedServices?: string[];
  relatedIndustries?: string[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  html: string;
  headings: { id: string; text: string }[];
  readingMinutes: number;
  words: number;
};
