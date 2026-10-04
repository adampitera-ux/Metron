import { BLOG_CATEGORIES, type BlogCategory } from "./types";

export type CategoryMeta = {
  name: BlogCategory;
  slug: string;
  description: string; // meta description + hub intro
  answer: string; // answer-first summary for the hub page
};

const META: Record<BlogCategory, Omit<CategoryMeta, "name" | "slug">> = {
  "AI for Small Business": {
    description: "Practical guides to using AI in a small or medium-sized business — what it can do, where to start, and how to integrate it without disrupting your team.",
    answer: "AI helps small businesses by taking over repetitive work — answering calls, following up with leads, scheduling, invoicing, data entry and reporting — so owners and teams can spend time on customers and growth. The best results come from starting with two or three high-volume workflows and connecting AI to the tools you already use.",
  },
  "Boring Businesses": {
    description: "How AI gives 'boring' businesses — trades, home services, laundromats, junk removal, storage and more — an unfair advantage in growth and margins.",
    answer: "\"Boring\" businesses — trades, home services and other essential local operators — are often the biggest winners with AI, because so much of their day is phones, scheduling, quotes, invoices and follow-up. Automating that work lets a small team serve far more customers without adding overhead.",
  },
  "Back Office & Admin": {
    description: "Automate invoicing, data entry, paperwork, scheduling, bookkeeping prep and reporting with AI — and give your team hours back every week.",
    answer: "Back-office automation uses AI and software integrations to handle invoicing, payment reminders, data entry, document processing, scheduling and reporting. It cuts admin hours, reduces errors and helps small businesses grow without hiring more office staff.",
  },
  "Sales & Customer Service": {
    description: "Answer every call, follow up on every quote, earn more reviews and reduce no-shows with AI receptionists, follow-up automation and chatbots.",
    answer: "AI improves sales and customer service for small businesses by answering calls and messages instantly, following up on quotes until customers decide, sending reminders that cut no-shows, and requesting reviews after every job — all in your business's voice.",
  },
  "Custom AI Software": {
    description: "When off-the-shelf apps don't fit: custom AI tools, internal assistants, dashboards, portals and integrations built around how your business works.",
    answer: "Custom AI software is a tool built around your specific process — such as a quoting calculator, an internal assistant trained on your SOPs, a dashboard, or an integration between systems that don't talk to each other. It makes sense when your workflow is unique or spreadsheets and manual copy-paste are slowing you down.",
  },
  "Industry Playbooks": {
    description: "Industry-specific AI playbooks for HVAC, plumbing, construction, trucking, manufacturing, property management, restaurants, dental, legal and more.",
    answer: "Every industry has its own high-volume, repetitive work. These playbooks show exactly which workflows to automate first in your trade — from emergency call handling in plumbing to bid follow-up in construction and paperwork in trucking.",
  },
  "AI Strategy & ROI": {
    description: "What AI automation costs, how to measure ROI, where to start, and how to keep your business data safe — straight answers for owners and operators.",
    answer: "A good AI strategy for a small business starts with the workflows that cost the most time or revenue, estimates the savings before building anything, uses business-grade tools with clear data rules, and measures results monthly. Small, focused wins compound faster than big, risky projects.",
  },
  "Websites & Search": {
    description: "Websites that convert, plus getting found on Google and in AI answers from ChatGPT, Perplexity and Google AI Overviews (AEO and GEO).",
    answer: "Your website should turn visitors into booked jobs and be easy for both Google and AI answer engines to understand. That means fast, mobile-friendly pages, clear service information, structured data, answer-first content, and instant follow-up on every form and call.",
  },
};

export const categorySlug = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const CATEGORIES: CategoryMeta[] = BLOG_CATEGORIES.map((name) => ({
  name,
  slug: categorySlug(name),
  ...META[name],
}));
