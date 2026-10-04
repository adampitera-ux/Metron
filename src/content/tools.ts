import type { QA } from "./types";

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  metaDescription: string;
  answer: string;
  how: { title: string; body: string }[];
  faqs: QA[];
};

export const TOOLS: Tool[] = [
  {
    slug: "ai-search-readiness-checker",
    name: "AI Search Readiness Checker",
    tagline: "See whether Google, ChatGPT and Perplexity can understand and cite your website.",
    metaDescription:
      "Free AI search readiness checker. Scan any website for schema markup, AI crawler access, llms.txt, sitemap, FAQ content and on-page signals in seconds.",
    answer:
      "The AI Search Readiness Checker scans a web page for the signals search engines and AI answer engines rely on: crawlable text, a clear title and H1, JSON-LD structured data, FAQ content, sitemap, robots.txt rules for AI crawlers like GPTBot and PerplexityBot, and llms.txt. It returns a score and a prioritized fix list.",
    how: [
      { title: "Enter your URL", body: "Paste your homepage or any service page. We fetch it the same way a crawler would." },
      { title: "We run 17 checks", body: "On-page basics, answer-friendly content structure, structured data, and AI crawler access rules." },
      { title: "Fix what matters first", body: "Results are grouped and weighted so the highest-impact gaps are obvious." },
    ],
    faqs: [
      { q: "Does a high score guarantee my business will appear in AI answers?", a: "No. Nobody can guarantee placement in ChatGPT, Perplexity or Google AI Overviews. The checker measures technical and on-page foundations that make it easier for engines to crawl, understand and cite your site; authority, reviews and third-party mentions also matter." },
      { q: "Which AI crawlers does the checker look for?", a: "It checks whether your robots.txt blocks GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended and Bingbot from your whole site. Blocking them may reduce your chances of being referenced in those products." },
      { q: "What is llms.txt and do I need it?", a: "llms.txt is an emerging, proposed convention: a plain-text file that summarizes your site for large language models. Support by AI providers isn't confirmed, so treat it as a low-effort extra rather than a requirement." },
      { q: "Do you store the URLs I check?", a: "No. The page is fetched once to run the checks and the result is returned to your browser. Nothing is saved." },
      { q: "Why does my site show very little readable text?", a: "If your site renders content with JavaScript only, crawlers that don't execute scripts may see an almost empty page. Server-rendered HTML is the safest way to make content visible to every engine." },
    ],
  },
  {
    slug: "missed-call-revenue-calculator",
    name: "Missed-Call Revenue Calculator",
    tagline: "Estimate how much revenue unanswered calls cost your business every month.",
    metaDescription:
      "Free missed-call revenue calculator for HVAC, plumbing, dental and other local businesses. Estimate monthly and yearly revenue lost to unanswered calls.",
    answer:
      "To estimate revenue lost to missed calls, multiply missed calls per week by the share of callers who would have booked, then by your average job value. Multiply by 52 for a yearly figure, and add any repeat-customer value. This calculator does the math and shows how much an AI receptionist might recover.",
    how: [
      { title: "Count missed calls", body: "Pull a week of call logs and count calls that went to voicemail or rang out." },
      { title: "Add your numbers", body: "Enter your booking rate and average ticket. Add lifetime value if customers come back." },
      { title: "See the gap", body: "Compare lost revenue with what an AI receptionist and instant text-back could recover." },
    ],
    faqs: [
      { q: "How do I find out how many calls I'm missing?", a: "Most business phone systems and VoIP providers show missed or unanswered calls in their call log or reporting dashboard. Review a typical week, and a busy-season week if your business is seasonal." },
      { q: "What booking rate should I use?", a: "Use your own historical rate of phone inquiries that turn into booked jobs or appointments. If you don't track it, start conservatively and adjust once you have data." },
      { q: "How does AI recover missed calls?", a: "An AI receptionist can answer calls 24/7, qualify the caller and book directly into your calendar. Missed-call text-back sends an instant text when a call isn't answered, so the customer can book by text instead of calling a competitor." },
      { q: "Is this estimate accurate?", a: "It's a model based entirely on the numbers you enter. It's useful for sizing the opportunity, but actual results depend on your market, call mix and how quickly leads are followed up." },
    ],
  },
  {
    slug: "ai-automation-roi-calculator",
    name: "AI Automation ROI Calculator",
    tagline: "Estimate the hours and payroll AI automation could free up — and your return on it.",
    metaDescription:
      "Free AI automation ROI calculator for small businesses. Estimate hours saved on calls, follow-ups, scheduling and data entry, and compare it to the cost.",
    answer:
      "AI automation ROI for a small business is the value of staff time freed up (hours saved × hourly cost) plus any extra revenue, minus the cost of the automation. This calculator estimates the time-savings portion for common tasks like answering calls, lead follow-up, reminders, data entry and review requests.",
    how: [
      { title: "Estimate weekly hours", body: "Enter roughly how many hours your team spends on each repetitive task." },
      { title: "Set your cost & assumptions", body: "Add the loaded hourly cost of that time and what share AI could realistically handle." },
      { title: "Compare to the plan", body: "See hours freed, labor value saved, and net benefit against our Standard or Enterprise plan." },
    ],
    faqs: [
      { q: "What tasks can AI automate in a small business?", a: "Common examples are answering and routing calls, booking appointments, lead follow-up by text and email, appointment reminders, review requests, FAQ answers, and copying data between your CRM, calendar and invoicing tools." },
      { q: "What percentage of admin work can AI handle?", a: "It varies by business and by task. Repetitive, rules-based work automates well, while edge cases still need a person. Many teams start with a conservative assumption and increase it as they measure results." },
      { q: "Does this include revenue from faster lead response?", a: "No — this calculator only counts time savings. Revenue gains from answering more calls and following up faster are additional; use the Missed-Call Revenue Calculator to estimate those." },
      { q: "How quickly can automation pay for itself?", a: "That depends on how much repetitive work you have and your labor costs. If the labor value saved each month exceeds the plan cost, the automation is net-positive from the first month — the calculator shows that comparison directly." },
    ],
  },
];
