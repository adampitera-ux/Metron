import type { GlossaryTerm } from "./types";

/**
 * Core AI engineering concepts, explained for business owners. Informed by
 * DeepLearning.AI's AI Engineering Skills Map (grounding models with data, agentic
 * systems, evaluation-driven development and operating AI in production).
 */
export const AI_GLOSSARY: GlossaryTerm[] = [
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    short:
      "Retrieval-augmented generation (RAG) is a technique where an AI looks up relevant information from your own documents or data before answering, so its responses are grounded in facts.",
    body: [
      "Large language models know a lot in general but nothing about your specific business: your prices, policies, service area or customer history. RAG solves this by retrieving the most relevant pieces of your information at the moment a question is asked and giving them to the model along with the question.",
      "In practice, your documents are split into small chunks and indexed so they can be searched by meaning. When a customer or employee asks something, the system finds the best-matching chunks and the AI writes an answer using them, often with a reference to where the information came from.",
      "For small businesses, RAG powers website chat assistants that answer from your actual FAQs and policies, and internal assistants that answer staff questions from SOPs. Keeping the source information accurate and up to date matters as much as the AI itself.",
    ],
    related: ["knowledge-base", "large-language-model", "ai-hallucination", "ai-guardrails", "fine-tuning"],
  },
  {
    slug: "ai-evals",
    term: "AI Evals (Evaluation)",
    short:
      "AI evals are structured tests that measure how well an AI system performs on real examples, so you can catch mistakes and improve it before and after it goes live.",
    body: [
      "Because AI output can vary, you can't tell if an AI system works just by trying it a few times. Evals are a set of realistic test cases, such as typical customer questions or documents, with a clear definition of a good answer, run every time the system changes.",
      "DeepLearning.AI's AI Engineering Skills Map highlights evaluation-driven development as one of the most important skills in building AI applications: running a disciplined loop of testing, reviewing errors and fixing the biggest problems first. Evals can be checked by code, by another AI model acting as a judge, or by people.",
      "For a business, evals answer practical questions: does the AI receptionist book the right appointment type, recognize emergencies, quote approved prices and hand off when it should? A system without evals is a system you're hoping works.",
    ],
    related: ["ai-guardrails", "human-in-the-loop", "ai-hallucination", "ai-agent"],
  },
  {
    slug: "ai-guardrails",
    term: "AI Guardrails",
    short:
      "AI guardrails are the rules, limits and checks that keep an AI system doing what it should, such as restricting what it can say, which data it can access and which actions need human approval.",
    body: [
      "Guardrails turn a capable but unpredictable AI model into a dependable business tool. They can include instructions about tone and topics, filters that block certain content, limits on which systems the AI can change, and approval steps before anything sensitive happens.",
      "Common guardrails for small-business AI include: only quote prices from an approved list, never give medical or legal advice, always route emergencies to a person, never share other customers' information, and require approval before sending refunds or contracts.",
      "Good guardrails are tested with evals and reviewed regularly. They're also a security measure, helping protect against attempts to trick the AI into ignoring its instructions.",
    ],
    related: ["ai-evals", "human-in-the-loop", "ai-agent", "prompt-engineering"],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    short:
      "Prompt engineering is the practice of writing and structuring instructions for an AI model so it reliably produces the output you want.",
    body: [
      "A prompt is everything the AI receives: instructions, context, examples and the task. Prompt engineering improves results by being specific about the role, the goal, the format, the constraints and what to do when information is missing.",
      "For business systems, prompts are usually written once and reused thousands of times, for example the instructions behind an AI receptionist or a lead follow-up assistant. That's why they're tested with real examples and refined over time.",
      "Prompting works hand in hand with grounding (giving the AI the right data), guardrails and evals. A great prompt can't fix missing or outdated information.",
    ],
    related: ["large-language-model", "rag", "ai-guardrails", "context-window", "fine-tuning"],
  },
  {
    slug: "ai-hallucination",
    term: "AI Hallucination",
    short:
      "An AI hallucination is when an AI model states something false or made up as if it were true, such as an incorrect price, policy or fact.",
    body: [
      "Language models generate the most likely next words based on patterns, not by looking up verified facts. When they lack the right information, they can produce confident answers that are wrong.",
      "Businesses reduce hallucinations by grounding the AI in their own approved information (RAG), instructing it to say 'I don't know' and hand off when unsure, limiting it to approved facts like a price list, and testing with evals.",
      "Any customer-facing AI should be designed so a wrong answer is unlikely and low-impact: sensitive topics go to a person, and important outputs are reviewed.",
    ],
    related: ["rag", "ai-guardrails", "ai-evals", "large-language-model"],
  },
  {
    slug: "context-window",
    term: "Context Window",
    short:
      "A context window is the amount of text, measured in tokens, that an AI model can consider at once, including instructions, conversation history and any documents provided.",
    body: [
      "Everything an AI uses to produce an answer has to fit in its context window. Larger windows let the model consider longer documents or conversations, but more context isn't always better: irrelevant information can distract the model and increase cost.",
      "Well-designed AI systems choose what goes into the context carefully: the right instructions, the most relevant retrieved information and only the conversation history that matters.",
    ],
    related: ["large-language-model", "rag", "prompt-engineering"],
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    short:
      "Fine-tuning is further training an existing AI model on your own examples so it learns a specific style, format or task more reliably.",
    body: [
      "Most small-business AI projects don't need fine-tuning. Good prompts, grounding the model in your data with RAG, and guardrails usually get better results faster and cheaper.",
      "Fine-tuning can make sense when you have many high-quality examples of the exact output you want and need very consistent formatting or tone at large volume.",
    ],
    related: ["large-language-model", "rag", "prompt-engineering"],
  },
  {
    slug: "human-in-the-loop",
    term: "Human-in-the-Loop",
    short:
      "Human-in-the-loop means designing an AI system so a person reviews, approves or takes over at key points, especially for decisions that are sensitive, costly or uncertain.",
    body: [
      "Fully automatic isn't always the goal. A human-in-the-loop design lets AI handle the repetitive work, such as drafting replies, collecting details and summarizing, while a person approves things like quotes, refunds, contracts or anything the AI isn't confident about.",
      "Common patterns include approval queues for drafted messages, automatic hand-offs when a customer asks for a person, and alerts when the AI detects an emergency or an unhappy customer.",
      "Over time, as evals show the AI handles a task reliably, more of it can be automated, while high-stakes decisions stay with people.",
    ],
    related: ["ai-guardrails", "ai-evals", "ai-agent", "workflow-automation"],
  },
];
