import type { QA } from "./types";

export const GENERAL_FAQS: { category: string; items: QA[] }[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What does Automatix do?",
        a: "Automatix is an AI automation agency that helps small businesses use AI to grow and reduce the time and cost of back-office work. We build AI receptionists, lead follow-up, review automation, and workflow automations, and we refresh websites so they perform well in both traditional and AI search.",
      },
      {
        q: "What types of businesses do you work with?",
        a: "We focus on small, local service businesses, including HVAC, plumbing, electrical, roofing, landscaping, cleaning, pest control, dental practices, law firms, real estate, auto repair, and med spas. If your business handles a steady flow of calls, leads, appointments, or paperwork, there is a good chance automation can help.",
      },
      {
        q: "How do I get started with Automatix?",
        a: "Start by booking a free AI audit and consultation. We review how leads, calls, scheduling, and admin work move through your business, identify the best opportunities for automation, and recommend a plan before you commit to anything.",
      },
      {
        q: "Do I need technical knowledge to work with you?",
        a: "No. We handle the setup, integrations, and testing, and we explain everything in plain language. Your role is to share how your business runs and approve things like message templates and booking rules.",
      },
      {
        q: "How long does it take to see automations running?",
        a: "Timelines depend on how many workflows and tools are involved. Simpler automations such as missed-call text-back or review requests can often be set up quickly, while multi-system workflows take longer. We give you a specific timeline after the audit.",
      },
      {
        q: "Will I have to replace the software I already use?",
        a: "Usually not. We prefer to build on top of the CRM, scheduling, accounting, and phone tools you already use, as long as they can be connected through an integration or API. If something cannot be connected, we will explain your options.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    items: [
      {
        q: "How much does Automatix cost?",
        a: "Automatix offers two plans. The Standard plan is $900 per month and the Enterprise plan is $1,600 per month. A free AI audit and consultation is available to help you decide which plan fits your business.",
      },
      {
        q: "What is included in the Standard plan?",
        a: "The Standard plan, at $900 per month, is designed for small businesses. It includes a website refresh, answer engine optimization (AEO), generative engine optimization (GEO), and basic automations.",
      },
      {
        q: "What is included in the Enterprise plan?",
        a: "The Enterprise plan, at $1,600 per month, includes everything needed for businesses with more complex operations: expanded automation, analytics, priority support, custom workflows, and enhanced security.",
      },
      {
        q: "Which plan is right for my business?",
        a: "The Standard plan suits most small businesses that want a stronger website, better visibility in AI search, and core automations. The Enterprise plan is a better fit if you need custom or multi-system workflows, deeper analytics, or priority support. The free AI audit will give you a clear recommendation.",
      },
      {
        q: "Is the AI audit really free?",
        a: "Yes. The AI audit and consultation are free and come with no obligation to sign up. You will leave with a clear picture of where automation could save time in your business.",
      },
      {
        q: "Are there long-term contracts?",
        a: "Contract terms depend on the scope of work, and month-to-month options may be available. Ask us about terms during your free consultation so you know exactly what you are agreeing to before you start.",
      },
    ],
  },
  {
    category: "AI & Technology",
    items: [
      {
        q: "What AI tools do you use?",
        a: "We use established large language models, conversational AI platforms, and automation tools, selected based on the job and the software you already use. We focus on reliable, well-supported technology rather than locking you into a single vendor.",
      },
      {
        q: "Is my business and customer data secure?",
        a: "We limit access to only the systems and data each automation needs, use the security features of the platforms involved, and avoid storing data unnecessarily. The Enterprise plan includes enhanced security measures for businesses with stricter requirements.",
      },
      {
        q: "Can AI make mistakes?",
        a: "Yes. AI systems can misunderstand requests or produce incorrect information, so we design automations with guardrails, approved source information, error alerts, and human approval for sensitive actions. We also review performance after launch and adjust as needed.",
      },
      {
        q: "Will customers know they are interacting with AI?",
        a: "We recommend being transparent, and our AI receptionists and chat assistants can identify themselves as automated assistants. Disclosure rules vary by location, so we configure greetings to fit your situation.",
      },
      {
        q: "Will AI replace my staff?",
        a: "Our goal is to remove repetitive admin work so your team can focus on customers and higher-value tasks. Most small businesses use automation to handle growth and busy seasons without adding overhead.",
      },
      {
        q: "What happens if an automation stops working?",
        a: "Our automations include monitoring and error alerts, so failures are flagged rather than silently ignored. When something breaks, such as a connected app changing its settings, we investigate and fix the workflow.",
      },
    ],
  },
  {
    category: "AEO & SEO",
    items: [
      {
        q: "What is the difference between SEO, AEO, and GEO?",
        a: "SEO (search engine optimization) improves how a website ranks in traditional search results. AEO (answer engine optimization) structures content so it can be used as a direct answer, such as in featured snippets or voice results. GEO (generative engine optimization) focuses on how AI tools like ChatGPT, Perplexity, and Google AI Overviews understand and cite a business.",
      },
      {
        q: "Can you guarantee my business will show up in ChatGPT or Google AI Overviews?",
        a: "No. Nobody can guarantee placement in AI-generated answers or specific search rankings, because those systems are controlled by the companies that run them and change frequently. We improve the signals they rely on, including clear content, structured data, consistent business information, and genuine reviews.",
      },
      {
        q: "Does traditional SEO still matter now that people use AI search?",
        a: "Yes. Many AI answer tools draw on web search indexes and well-structured pages, so crawlability, helpful content, local SEO, and reputable mentions remain the foundation. AEO and GEO build on good SEO rather than replacing it.",
      },
      {
        q: "What is schema markup and why does my site need it?",
        a: "Schema markup is structured data, usually in JSON-LD format using the Schema.org vocabulary, that describes your business and content to search engines in a machine-readable way. It helps systems correctly identify your business, services, location, and FAQs, though it does not guarantee rankings or rich results.",
      },
      {
        q: "How important is my Google Business Profile?",
        a: "For local service businesses, your Google Business Profile is one of the most important online assets you have. It influences local map results, is often how customers call you directly from search, and is a common source of information for AI assistants describing local businesses.",
      },
      {
        q: "How do you measure results from AEO and GEO work?",
        a: "We track referral traffic from AI assistants in your analytics, periodically check how AI tools describe your business for priority queries, and monitor related signals such as Google Business Profile activity and calls. Because some AI exposure does not produce a click, these measurements are directional rather than exact.",
      },
    ],
  },
];
