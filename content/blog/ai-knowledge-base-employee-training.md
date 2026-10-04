---
title: "Build an AI Assistant That Knows Your Business: SOPs and Training"
description: "How to build an internal AI assistant trained on your SOPs, manuals and policies so staff and field techs get answers on demand. Includes an SOP template."
date: "2026-08-31"
category: "Custom AI Software"
tags:
  - knowledge base
  - SOPs
  - employee training
  - AI assistant
  - field service
tldr: "An internal AI assistant connects to your SOPs, manuals, price books and policies so employees can ask questions in plain English and get your company's answer, with a link to the source. It speeds up training and cuts interruptions, but it only works as well as your documents, so start by writing down your top 20 procedures in a consistent format."
keyTakeaways:
  - "An internal AI assistant answers staff questions using your documents, not generic internet knowledge."
  - "Good answers require good SOPs; write your most-asked procedures down first."
  - "Every answer should cite its source so staff can verify and managers can fix gaps."
  - "Limit access by role so sensitive documents stay with the people who need them."
  - "Start with one team and the 20 questions they ask most often."
cta: "audit"
faqs:
  - q: "What is an internal AI knowledge base?"
    a: "It is an AI assistant connected to your company's own documents, such as SOPs, manuals, policies and price sheets. Employees ask questions in plain language and the assistant answers using that material, ideally with a link to the source document. It works like a searchable, conversational version of your operations binder."
  - q: "Will the AI make up answers?"
    a: "It can if it is set up poorly. A well-built assistant is instructed to answer only from your documents, to cite its source and to say it does not know when the answer is not there. Reviewing questions it could not answer is also how you find gaps in your documentation."
  - q: "What documents should I start with?"
    a: "Start with the procedures your team asks about most: common service calls, safety steps, pricing rules, how to use your software and HR policies like time off. Equipment manuals and warranty terms are also high value for field teams. Twenty well-written SOPs beat two hundred messy ones."
  - q: "Can field technicians use it from their phones?"
    a: "Yes. Most internal assistants can be accessed through a mobile web page, a messaging app or a tool your team already uses, such as Microsoft Teams or Slack. For field crews, keep answers short and step-by-step, and allow photo or voice questions where practical."
  - q: "Is it safe to put company documents into an AI assistant?"
    a: "It can be, if you control where data is stored, use business-grade AI services that do not train on your data, and restrict documents by role. Keep payroll, personnel files and customer financial data out of a general staff assistant. For healthcare businesses, protected health information requires HIPAA-appropriate handling."
relatedServices:
  - custom-ai-software
  - ai-strategy
relatedIndustries:
  - hvac
  - plumbing
  - electrical
  - property-management
---

Every growing business hits the same wall. The owner or a senior tech knows how everything works, and everyone else interrupts them to ask. New hires shadow someone for weeks. The same questions come up every day: What's our warranty on this? How do I close out a job in the software? What do I do when the customer isn't home?

An AI assistant trained on your own documents can answer many of those questions instantly, at 6 a.m. in a customer's driveway or at 9 p.m. when the office is closed. This post explains how it works and what it takes to build one, and it gives you an SOP template to get your knowledge out of people's heads and into a form AI can use.

## What is an AI assistant that knows your business?

**It's an AI tool connected to your company's own documents, such as SOPs, manuals, policies and price sheets, that answers staff questions in plain English using your information and shows where the answer came from.** Think of it as your operations binder, except it talks back and fits in a technician's pocket.

Under the hood, it uses a [large language model](/glossary/large-language-model) for understanding questions and writing answers, plus a search layer over your [knowledge base](/glossary/knowledge-base). When someone asks a question, the system finds the relevant passages in your documents and has the AI answer only from those passages.

What it is not:

- It's not a public [AI chatbot](/glossary/ai-chatbot) on your website. This one is internal, for staff.
- It's not a general chatbot guessing from what it learned on the internet. It answers from your material.
- It's not a replacement for training. It's a backstop that makes training stick.

## Why would a small business need an internal AI knowledge base?

**Because the cost of knowledge living in a few people's heads shows up as interruptions, slow onboarding, inconsistent work and callbacks.** An assistant spreads that knowledge across the whole team.

Here's where it tends to help most:

| Who | Typical questions | What changes |
|---|---|---|
| Field techs | "What's the torque spec?" "What's our process for a failed inspection?" | Fewer calls to the senior tech or office |
| New hires | "How do I clock in?" "What do I wear on a commercial job?" | Faster ramp-up, less shadowing |
| Office staff | "What's our cancellation policy?" "How do we handle a warranty claim?" | Consistent answers to customers |
| Property managers | "What's the move-out inspection checklist?" "Who's our approved plumber for building C?" | Less hunting through email and drives |
| Managers | "What did we change in the safety procedure last month?" | One source of truth |

The value is easy to underestimate because interruptions are invisible. Here's an illustrative way to size it; the numbers are assumptions, so use your own.

Say a senior tech gets 10 questions a day, each costs about 6 minutes once you count the context switch, and an assistant handles half of them.

| Step | Calculation | Result |
|---|---|---|
| Questions avoided per day | 10 × 50% | 5 |
| Minutes saved per day | 5 × 6 | 30 minutes |
| Hours saved per month | 30 minutes × 21 workdays | 10.5 hours |
| Value at $50/hour loaded cost | 10.5 × $50 | $525/month |

That's one person. The bigger payoff is usually faster onboarding and fewer mistakes, which are harder to put a number on but often matter more.

## What documents should you feed the AI?

**Start with the documents your team actually uses or asks about most: core procedures, safety steps, pricing rules, software how-tos and HR policies.** Quality beats quantity. Twenty clear [SOPs](/glossary/sop) will usually serve you better than a shared drive full of outdated files dumped in all at once.

A good starting list:

1. Your top 10–20 service procedures (the jobs you do most often)
2. Safety procedures and required PPE by job type
3. Pricing rules, discount limits and warranty terms
4. How-to guides for your software (closing a job, adding photos, taking payment)
5. Customer communication scripts (arrival, delays, upsells, complaints)
6. HR basics: time off, clock-in rules, vehicle policy, expense policy
7. Equipment and manufacturer manuals for the gear you service most
8. Vendor and supplier contacts, account numbers and ordering steps

What to leave out of a general staff assistant: payroll, personnel files, customer financial data and anything only managers should see. Those can live in a separate, restricted assistant if needed.

### Clean up before you load

Old documents cause wrong answers. Before loading anything:

- Delete or archive outdated versions.
- Put a "last updated" date and an owner on every document.
- Resolve contradictions. If two documents give different answers, the AI will too.
- Turn tribal knowledge into written steps, which is where the template below comes in.

## What should a good SOP look like for AI?

**A good SOP is short, step-by-step, written for the person doing the work and structured the same way every time.** Consistent structure helps people skim and helps the AI find and quote the right section.

Here's a template you can copy. Fill one in for each procedure.

```
SOP TITLE: [Clear, searchable name, e.g., "No-Heat Call: Gas Furnace"]
SOP ID: [e.g., HVAC-014]        VERSION: [1.2]
OWNER: [Name / role]            LAST UPDATED: [YYYY-MM-DD]
APPLIES TO: [Roles, e.g., Service Techs, Apprentices]

PURPOSE
One or two sentences on why this procedure exists.

WHEN TO USE
The situations this covers. Also list what it does NOT cover.

BEFORE YOU START
- Tools and parts needed
- Safety requirements / PPE
- Information to confirm with the customer or office

STEPS
1. [Action, written as a command. One action per step.]
2. [Action]
   - If [condition], then [action].
3. [Action]

QUALITY CHECK
- What "done right" looks like
- Photos or readings required before leaving

CUSTOMER COMMUNICATION
- What to tell the customer (sample wording)
- When to call the office instead

COMMON MISTAKES
- [Mistake] → [How to avoid it]

ESCALATION
- Call [role/name] if [condition]
- After-hours contact: [number or process]

RELATED SOPs
- [SOP ID and title]
```

A few writing tips:

- **One action per step.** "Shut off power at the disconnect" is better than "Make sure everything is safe and powered down."
- **Use the words your team uses.** If techs say "the disco," include that alongside "disconnect" so searches match.
- **Include the "if, then."** Real jobs branch. Write the branches down.
- **Add sample customer wording.** For example: "I found the issue. It's a failed igniter. I have the part on the truck, and the repair is $X. Would you like me to go ahead?"

## How do you build and roll out the assistant?

**Build it in four stages: gather and clean documents, connect them to an AI assistant with access controls, test with real questions, then roll out to one team before expanding.** Most of the effort is in the documents, not the technology.

1. **Collect the questions.** For two weeks, have your senior people jot down every question they get. This becomes your test set and tells you which SOPs to write first.
2. **Write or clean the top 20 SOPs** using the template above.
3. **Connect the documents** to an assistant built on a business-grade AI service. Set it to answer only from your documents and cite the source.
4. **Set permissions by role.** Field techs, office staff and managers see different document sets.
5. **Test with the real questions** from step one. Fix wrong answers by fixing the documents, not by arguing with the AI.
6. **Put it where people already are.** A mobile web link, Microsoft Teams, Slack or even a text-message number for field crews.
7. **Review weekly at first.** Look at questions it couldn't answer. Each one is a missing or unclear SOP.

The assistant can also connect to live systems, for example to look up a customer's equipment history in your [field service management](/glossary/field-service-management) software. That's a step beyond documents and is where [connecting your business software](/blog/connect-your-business-software) comes in.

## How do you keep the AI from giving wrong answers?

**Instruct it to answer only from your documents, require it to cite its sources and have it say "I don't know" when the answer isn't there.** Then treat every "I don't know" as a to-do item for your documentation.

Practical guardrails:

- Show the source document and section with every answer.
- Flag safety-critical topics so the assistant always links to the full SOP rather than summarizing it.
- Keep a human escalation path: "If this doesn't match what you see, call the service manager."
- Review a sample of answers each week for the first month.
- Version your SOPs so you know what the AI was reading on a given date.

On data safety, use providers whose business terms say they won't train on your data, and know where documents are stored. Our post on [whether AI is safe for small business data](/blog/is-ai-safe-for-small-business-data) covers the questions to ask. Healthcare businesses should keep protected health information out unless the setup is HIPAA-appropriate.

## Can the same assistant help with onboarding and training?

**Yes. The same document set can power onboarding checklists, quick quizzes and role-specific "first week" guides, so new hires learn from the same source they'll use on the job.**

Ideas that work well:

- A day-by-day onboarding checklist that links to the relevant SOPs
- Short quizzes generated from SOPs, reviewed by a manager before use
- "Ride-along" summaries: the assistant explains a procedure before a new tech sees it live
- Refreshers when an SOP changes, sent only to the roles it affects

The goal isn't to replace your trainers. It's to make sure the senior tech spends time on judgment and skills, not on repeating the clock-in policy for the fifth time.

## What should you do next?

Start this week, even before any software: have your two most-interrupted people write down every question they get for ten working days. That list tells you exactly which SOPs to write and what your assistant needs to know. When you're ready to build, Automatix creates internal AI assistants as part of our [custom AI software](/services/custom-ai-software) work, connected to your documents and the tools your team already uses, with permissions set by role. [Book a free AI audit](/contact) and we'll look at where knowledge gets stuck in your business and what an assistant could take off your senior people's plates. For more ideas on where AI fits, see [what AI can do for your business](/blog/what-can-ai-do-for-my-business).
