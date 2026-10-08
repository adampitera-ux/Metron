import type { Industry } from "./types";

export const EXTRA_INDUSTRIES: Industry[] = [
  // ---------------------------------------------------------------------------
  // Chiropractors
  // ---------------------------------------------------------------------------
  {
    slug: "chiropractors",
    name: "Chiropractors",
    audience: "chiropractic practices",
    metaTitle: "AI Automation for Chiropractors | Metron",
    metaDescription:
      "AI automation for chiropractic practices: 24/7 booking, appointment reminders that cut no-shows, care-plan follow-up, intake paperwork and review requests.",
    headline: "AI Automation for Chiropractors: Fuller Schedules, Fewer No-Shows",
    answer:
      "AI helps a chiropractic practice by answering calls and booking new patients around the clock, sending reminders that reduce no-shows, following up with patients who fall off their care plan, collecting intake forms before the first visit, and asking happy patients for reviews. Your front desk spends less time on the phone and more time with patients in the office.",
    painPoints: [
      {
        title: "The front desk can't answer every call",
        body: "While staff check patients in and out, the phone keeps ringing. New patients who reach voicemail often call the next practice on their list.",
      },
      {
        title: "No-shows leave gaps in the schedule",
        body: "Missed adjustments are lost revenue you can't get back, and manual reminder calls take time your team doesn't have.",
      },
      {
        title: "Patients drop off their care plans",
        body: "Patients start strong, feel better, then stop booking. Without a system to follow up, they quietly disappear before finishing treatment.",
      },
      {
        title: "Intake paperwork slows down first visits",
        body: "New patients fill out forms in the waiting room and staff re-type the details, which delays the schedule and invites errors.",
      },
    ],
    automations: [
      {
        title: "AI receptionist and online booking",
        body: "An AI assistant answers calls, texts and website chats, answers common questions about insurance and first visits, and books new patients into open slots in your scheduling system.",
      },
      {
        title: "Appointment reminders and easy rescheduling",
        body: "Patients get text reminders with a simple way to confirm or reschedule, so cancellations turn into rebooked visits instead of empty slots.",
      },
      {
        title: "Care-plan follow-up",
        body: "When a patient misses their next recommended visit, the system sends a friendly check-in and a booking link, and flags long-inactive patients for a personal call.",
      },
      {
        title: "Digital intake before the first visit",
        body: "New patients receive intake and consent forms by text or email before they arrive, and their answers flow into your records instead of being re-typed.",
      },
      {
        title: "Automated review requests",
        body: "After a visit, patients who had a good experience get a short text asking for a Google review, which helps you show up in local search.",
      },
      {
        title: "Reactivation campaigns",
        body: "Past patients who haven't been in for months get a well-timed message inviting them back for a check-up or a new concern.",
      },
    ],
    exampleMath: {
      title: "Example: what fewer no-shows can be worth",
      body: "For example, if your practice sees 6 no-shows a week and better reminders recover 3 of them at an average visit value of $65, that is about $195 a week, or roughly $10,140 a year. These are illustrative assumptions only; use your own numbers.",
    },
    tools: ["ChiroTouch", "Jane App", "ChiroFusion", "Google Calendar", "Google Business Profile", "QuickBooks"],
    faqs: [
      {
        q: "Can AI book appointments directly into my practice software?",
        a: "Often, yes. Many chiropractic scheduling platforms offer an API, online booking or calendar sync we can connect to. If a direct connection isn't available, we set up a booking flow that your staff can confirm with one click.",
      },
      {
        q: "Is patient information kept private?",
        a: "We limit access to only the data each workflow needs and use the security features of the platforms involved. If your practice handles protected health information, we discuss compliance requirements up front and use tools appropriate for that data.",
      },
      {
        q: "Will patients know they are talking to AI?",
        a: "We recommend being transparent. The assistant can introduce itself as your practice's virtual assistant and hand off to a team member whenever a patient asks for a person or has a clinical question.",
      },
      {
        q: "Does it give medical advice?",
        a: "No. The assistant handles scheduling, logistics and general practice questions. Anything clinical is routed to your team.",
      },
      {
        q: "Which Metron plan fits a chiropractic practice?",
        a: "Most practices start with the Scale plan, which includes the AI receptionist, booking and reminders, review requests and CRM integration. The free AI audit will confirm the best fit.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI for chiropractors",
      "chiropractic practice automation",
      "chiropractor appointment reminders",
      "AI receptionist for chiropractors",
      "reduce no-shows chiropractic",
    ],
  },

  // ---------------------------------------------------------------------------
  // Veterinary clinics
  // ---------------------------------------------------------------------------
  {
    slug: "veterinary-clinics",
    name: "Veterinary Clinics",
    audience: "veterinary clinics",
    metaTitle: "AI Automation for Veterinary Clinics | Metron",
    metaDescription:
      "AI automation for vet clinics: answer every call, book appointments 24/7, automate vaccine and wellness reminders, handle refill requests and collect reviews.",
    headline: "AI Automation for Veterinary Clinics: Calmer Phones, More Booked Visits",
    answer:
      "AI helps a veterinary clinic by answering routine calls and messages, booking appointments online around the clock, sending vaccine and wellness reminders, collecting prescription refill requests in a structured way, and following up after visits. Your team spends less time on the phone and more time caring for animals and their owners.",
    painPoints: [
      {
        title: "Phones ring nonstop",
        body: "Hours, directions, pricing and refill questions tie up front-desk staff who are also checking in pets and handling payments.",
      },
      {
        title: "Wellness and vaccine visits slip",
        body: "Pet owners mean to come back for boosters and annual exams, but without timely reminders those visits get pushed off for months.",
      },
      {
        title: "Refill requests arrive in every format",
        body: "Calls, emails and voicemails with partial information mean staff chase details before a vet can even review the request.",
      },
      {
        title: "After-hours callers go elsewhere",
        body: "Owners who call after closing for a non-emergency appointment often book with whichever clinic answers first.",
      },
    ],
    automations: [
      {
        title: "AI phone and chat assistant",
        body: "Routine questions about hours, services and pricing are answered instantly, and callers can book, reschedule or leave a structured message without waiting on hold.",
      },
      {
        title: "Online booking with reminders",
        body: "Owners book into open slots 24/7 and receive confirmations and reminders by text, with an easy option to reschedule.",
      },
      {
        title: "Vaccine and wellness recall reminders",
        body: "Based on your records, owners get timely reminders when boosters, dental cleanings or annual exams are due, with a link to book.",
      },
      {
        title: "Structured refill requests",
        body: "A simple form or text flow collects the pet, medication, dosage and pharmacy details your team needs, then routes the request for vet approval.",
      },
      {
        title: "Emergency routing",
        body: "Callers describing urgent symptoms are immediately given your emergency instructions or the nearest emergency hospital, and your team is alerted. The AI never triages medical conditions.",
      },
      {
        title: "Post-visit follow-up and reviews",
        body: "After an appointment, owners receive care instructions you approve, a check-in message and, when appropriate, a request for a Google review.",
      },
    ],
    exampleMath: {
      title: "Example: what recovered wellness visits can add up to",
      body: "For example, if timely reminders bring back 15 more wellness visits a month at an average invoice of $150, that is about $2,250 a month, or roughly $27,000 a year. These are illustrative assumptions only; use your own figures.",
    },
    tools: ["ezyVet", "Cornerstone", "AVImark", "Vetspire", "PetDesk", "Google Business Profile"],
    faqs: [
      {
        q: "Can AI handle emergency calls?",
        a: "No. The assistant is set up to recognize urgent situations and immediately give your emergency instructions or the nearest emergency hospital, and to alert your staff. It does not assess medical conditions.",
      },
      {
        q: "Does it connect to my practice management software?",
        a: "We integrate where your software allows it, through an API, booking tool or calendar sync. We confirm what your specific system supports during the free audit.",
      },
      {
        q: "Can it approve prescription refills?",
        a: "No. It collects the information your team needs in a consistent format and routes the request. A veterinarian always reviews and approves refills.",
      },
      {
        q: "Will our clients find it impersonal?",
        a: "The goal is to remove hold times and phone tag, not your personal touch. Owners can always reach a person, and your team gets more time for the conversations that matter.",
      },
      {
        q: "How long does it take to set up?",
        a: "A phone assistant and reminder flow can often go live within a few weeks. Deeper integrations take longer and are tested before launch.",
      },
    ],
    relatedServices: ["ai-receptionist", "ai-automation", "review-automation", "lead-follow-up"],
    keywords: [
      "AI for veterinary clinics",
      "vet clinic automation",
      "veterinary appointment reminders",
      "AI receptionist veterinary",
      "vet practice phone automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Salons & barbershops
  // ---------------------------------------------------------------------------
  {
    slug: "salons-barbershops",
    name: "Salons & Barbershops",
    audience: "salons and barbershops",
    metaTitle: "AI Automation for Salons & Barbershops | Metron",
    metaDescription:
      "AI automation for salons and barbershops: book clients 24/7, cut no-shows with reminders, fill last-minute openings, rebook regulars and grow Google reviews.",
    headline: "AI Automation for Salons & Barbershops: A Full Chair, Every Day",
    answer:
      "AI helps a salon or barbershop by answering calls and messages while stylists are busy, booking clients online 24/7, sending reminders that cut no-shows, filling last-minute cancellations from a waitlist, reminding regulars when they're due for their next cut, and asking happy clients for reviews. Stylists stay focused on the client in the chair.",
    painPoints: [
      {
        title: "Nobody can answer the phone mid-service",
        body: "Stylists and barbers have their hands full. Calls go to voicemail and new clients book somewhere that answered.",
      },
      {
        title: "No-shows and late cancellations",
        body: "An empty chair is lost income for the stylist and the shop, and it's hard to fill the slot on short notice.",
      },
      {
        title: "Regulars drift between visits",
        body: "Clients mean to rebook but forget, stretching the time between visits or trying another shop.",
      },
      {
        title: "DMs and texts pile up",
        body: "Booking requests come in through Instagram, Facebook, texts and calls, and keeping track of all of them is a job in itself.",
      },
    ],
    automations: [
      {
        title: "24/7 booking assistant",
        body: "An AI assistant answers calls, texts and website chats, shares services and prices you approve, and books clients directly into your calendar.",
      },
      {
        title: "Reminders with deposit or policy notes",
        body: "Clients get confirmation and reminder texts that include your cancellation policy, with a quick way to confirm or reschedule.",
      },
      {
        title: "Waitlist and last-minute fill",
        body: "When someone cancels, clients on the waitlist get an instant text offering the open slot, first come, first served.",
      },
      {
        title: "Rebooking nudges",
        body: "Based on each client's usual cycle, the system reminds them when they're due for their next appointment and links them straight to booking.",
      },
      {
        title: "Review requests after visits",
        body: "Happy clients get a short message asking for a Google review, which helps your shop show up first in local search.",
      },
      {
        title: "Win-back messages",
        body: "Clients who haven't visited in a while get a friendly invitation to come back, timed so it feels personal rather than spammy.",
      },
    ],
    exampleMath: {
      title: "Example: what filling empty chairs is worth",
      body: "For example, if your shop has 8 no-shows or late cancellations a week and reminders plus a waitlist fill 4 of them at an average ticket of $45, that is $180 a week, or about $9,360 a year. These numbers are illustrative assumptions only.",
    },
    tools: ["Square Appointments", "Vagaro", "Booksy", "GlossGenius", "Fresha", "Instagram", "Google Business Profile"],
    faqs: [
      {
        q: "Does it work with Square, Vagaro, Booksy or Fresha?",
        a: "We connect to popular salon booking platforms where their integrations allow, and otherwise route bookings through your existing booking link so nothing changes for your team.",
      },
      {
        q: "Can it answer Instagram and Facebook messages?",
        a: "Yes, in many cases. We can connect the assistant to business messaging channels so common questions and booking requests get an instant reply.",
      },
      {
        q: "Will it double-book my stylists?",
        a: "No. Bookings go into your calendar based on real availability for each stylist, the same way your online booking works today.",
      },
      {
        q: "Is this only for big salons?",
        a: "No. Solo barbers and small shops often benefit the most, because there's nobody else to answer the phone while they work.",
      },
      {
        q: "Which plan should a salon start with?",
        a: "Shops that mainly need more visibility often start with Growth. Shops that want booking, reminders, waitlist fill and review requests usually choose Scale.",
      },
    ],
    relatedServices: ["ai-receptionist", "review-automation", "lead-follow-up", "aeo-geo"],
    keywords: [
      "AI for salons",
      "barbershop automation",
      "salon booking automation",
      "salon no-show reminders",
      "AI receptionist for salons",
    ],
  },

  // ---------------------------------------------------------------------------
  // Gyms & fitness studios
  // ---------------------------------------------------------------------------
  {
    slug: "gyms-fitness-studios",
    name: "Gyms & Fitness Studios",
    audience: "gyms and fitness studios",
    metaTitle: "AI Automation for Gyms & Fitness Studios | Metron",
    metaDescription:
      "AI automation for gyms and studios: instant replies to trial leads, class booking and reminders, member check-ins, win-back campaigns and review requests.",
    headline: "AI Automation for Gyms & Fitness Studios: Convert More Trials, Keep More Members",
    answer:
      "AI helps a gym or fitness studio by replying to new leads within seconds, booking free trials and intro classes, sending class reminders, checking in with members who stop showing up, running win-back campaigns for cancelled members, and collecting reviews. Your team spends less time chasing leads and more time coaching.",
    painPoints: [
      {
        title: "Trial leads go cold fast",
        body: "Someone fills out a form at 9pm. If nobody responds until the next afternoon, their motivation and attention have moved on.",
      },
      {
        title: "Members quietly stop coming",
        body: "Attendance drops before a cancellation. Without a system that notices, you only find out when they cancel.",
      },
      {
        title: "Staff juggle sales and coaching",
        body: "Front-desk and coaching staff are expected to follow up with leads between classes, so follow-up is inconsistent.",
      },
      {
        title: "Former members are never asked back",
        body: "Cancelled members are often open to returning, but nobody reaches out at the right time with the right offer.",
      },
    ],
    automations: [
      {
        title: "Instant lead response",
        body: "New web, ad and social leads get a personal-feeling text within seconds that answers questions and books them into a trial or intro session.",
      },
      {
        title: "Trial-to-member follow-up",
        body: "After a trial visit, prospects receive a timed sequence that answers common objections and invites them to start a membership.",
      },
      {
        title: "Class reminders and waitlists",
        body: "Members get class reminders, and open spots from cancellations are offered automatically to the waitlist.",
      },
      {
        title: "Attendance drop alerts",
        body: "When a member's visits fall off, the system sends a friendly check-in and alerts a coach so someone can reach out personally.",
      },
      {
        title: "Win-back campaigns",
        body: "Former members receive well-timed messages with your current offers, inviting them to come back.",
      },
      {
        title: "Reviews and referrals",
        body: "Happy members are asked for Google reviews and invited to bring a friend, turning your best members into your best marketing.",
      },
    ],
    exampleMath: {
      title: "Example: what faster trial follow-up can add",
      body: "For example, if you get 40 trial leads a month and faster, consistent follow-up converts 4 more of them into members paying $120 a month, that is $480 in new monthly revenue, which adds up quickly as those members stay. These are illustrative assumptions only.",
    },
    tools: ["Mindbody", "Glofox", "ClubReady", "Wodify", "PushPress", "Zen Planner", "Google Business Profile"],
    faqs: [
      {
        q: "Does it work with Mindbody, Glofox or Wodify?",
        a: "We integrate with common gym platforms where their APIs or automation tools allow, or route bookings through your existing links. We confirm the details during the free audit.",
      },
      {
        q: "Will members get too many messages?",
        a: "No. We set frequency limits and only message members when it's useful, such as reminders, check-ins and relevant offers.",
      },
      {
        q: "Can it handle cancellations?",
        a: "It can route cancellation requests to your team and, if you choose, offer alternatives like a freeze. Final account changes stay with your staff.",
      },
      {
        q: "Is it only for big gyms?",
        a: "No. Boutique studios and small gyms often see the biggest impact because they don't have dedicated sales staff.",
      },
      {
        q: "How fast can it be set up?",
        a: "Lead response and reminders can often launch within a few weeks. Integrations with your membership software are tested before going live.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-receptionist", "review-automation", "ai-automation"],
    keywords: [
      "AI for gyms",
      "fitness studio automation",
      "gym lead follow-up",
      "gym member retention automation",
      "AI for personal training studios",
    ],
  },

  // ---------------------------------------------------------------------------
  // Towing
  // ---------------------------------------------------------------------------
  {
    slug: "towing",
    name: "Towing",
    audience: "towing companies",
    metaTitle: "AI Automation for Towing Companies | Metron",
    metaDescription:
      "AI automation for towing companies: answer every call 24/7, capture location and vehicle details, text ETAs, speed up dispatch and automate invoicing.",
    headline: "AI Automation for Towing Companies: Never Miss a Call, Day or Night",
    answer:
      "AI helps a towing company by answering every call around the clock, capturing the caller's location, vehicle and situation, texting customers ETAs and driver updates, sending jobs to dispatch with clean details, and automating invoices and payment links. You win more calls and spend less time on the phone and paperwork.",
    painPoints: [
      {
        title: "A missed call is a missed tow",
        body: "Stranded drivers call the next number on the list in seconds. If you can't pick up, the job is gone.",
      },
      {
        title: "Drivers and dispatchers are stretched",
        body: "The person answering the phone is often also driving or dispatching, which leads to rushed calls and missing details.",
      },
      {
        title: "Customers keep calling for updates",
        body: "Anxious callers want to know when the truck will arrive, and each update call ties up the line.",
      },
      {
        title: "Billing and paperwork lag behind",
        body: "Motor club jobs, cash calls and impound releases each need different paperwork, and invoices get sent late.",
      },
    ],
    automations: [
      {
        title: "24/7 AI call answering",
        body: "Every call is answered immediately, even at 3am, with your greeting and questions, so no caller hits voicemail.",
      },
      {
        title: "Structured job intake",
        body: "The assistant collects location, vehicle type, the problem, destination and contact details, and can text the caller a link to share their exact location.",
      },
      {
        title: "Instant dispatch handoff",
        body: "Each job is sent to your dispatch system or on-call driver by text with all details in one clean summary.",
      },
      {
        title: "ETA and status texts",
        body: "Customers get automatic texts with the driver's ETA and updates, cutting down on 'where's my truck?' calls.",
      },
      {
        title: "Invoicing and payment links",
        body: "When a job is completed, the customer receives an invoice with a secure payment link, and the record syncs to your accounting.",
      },
      {
        title: "Review requests",
        body: "After a good experience, customers are asked for a Google review, which matters a lot when people search 'tow truck near me'.",
      },
    ],
    exampleMath: {
      title: "Example: what answering every call is worth",
      body: "For example, if you miss 5 calls a week, 3 of those would have booked, and your average tow is $150, that is about $450 a week, or roughly $23,400 a year in recovered jobs. These are illustrative assumptions only; try our missed-call calculator with your own numbers.",
    },
    tools: ["Towbook", "Omadi", "Beacon Software", "TowManager", "QuickBooks", "Google Business Profile"],
    faqs: [
      {
        q: "Can the AI dispatch trucks?",
        a: "It can collect all the job details and send them to your dispatch system or on-call driver instantly. Assigning trucks stays with your dispatcher unless you choose to automate simple rules.",
      },
      {
        q: "Does it work with Towbook or Omadi?",
        a: "We integrate where those platforms allow, or send structured job details by text or email so dispatch works the way it does today.",
      },
      {
        q: "What about motor club calls?",
        a: "Motor club jobs usually come through their own systems. The AI focuses on your direct calls, which are often your most profitable work.",
      },
      {
        q: "Can it quote prices?",
        a: "Yes, if you give it approved pricing rules, such as base rates and per-mile charges. Unusual jobs are flagged for a person to quote.",
      },
      {
        q: "Which plan fits a towing company?",
        a: "Most towing companies choose Scale for the 24/7 AI receptionist, missed-call text-back and review automation.",
      },
    ],
    relatedServices: ["ai-receptionist", "ai-automation", "review-automation", "lead-follow-up"],
    keywords: [
      "AI for towing companies",
      "towing call answering service",
      "tow company dispatch automation",
      "24/7 answering for towing",
      "towing invoicing automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Flooring
  // ---------------------------------------------------------------------------
  {
    slug: "flooring",
    name: "Flooring",
    audience: "flooring contractors",
    metaTitle: "AI Automation for Flooring Contractors | Metron",
    metaDescription:
      "AI automation for flooring companies: instant lead response, booked measure appointments, estimate follow-up, install reminders and Google review requests.",
    headline: "AI Automation for Flooring Contractors: Book More Measures, Close More Estimates",
    answer:
      "AI helps a flooring company by responding to new leads instantly, booking in-home measure appointments, following up on estimates until the customer decides, sending install-day reminders and prep instructions, and asking happy customers for reviews. Your team spends less time chasing and more time installing.",
    painPoints: [
      {
        title: "Leads shop several installers at once",
        body: "Homeowners request quotes from multiple companies. The first to respond and book a measure usually wins.",
      },
      {
        title: "Estimates sit without follow-up",
        body: "After a measure and estimate, homeowners go quiet. Without steady follow-up, many jobs never close.",
      },
      {
        title: "Install day surprises",
        body: "Furniture not moved, pets loose or rooms not ready create delays that cost your crews time.",
      },
      {
        title: "Showroom and phone traffic compete",
        body: "Staff helping customers in the showroom can't always answer the phone or reply to web inquiries quickly.",
      },
    ],
    automations: [
      {
        title: "Instant lead reply and booking",
        body: "New inquiries get a fast, friendly reply that asks about rooms, square footage and flooring type, then books a measure appointment.",
      },
      {
        title: "Estimate follow-up sequences",
        body: "After an estimate is sent, a timed series of messages answers common questions, shares financing options you offer and prompts a decision.",
      },
      {
        title: "Install prep reminders",
        body: "Customers receive reminders with your prep checklist, such as clearing furniture and arranging pets, so crews can start on time.",
      },
      {
        title: "Website chat for product questions",
        body: "An AI assistant answers common questions about materials, timelines and your process using information you approve.",
      },
      {
        title: "Review and referral requests",
        body: "After the job, happy customers are asked for a review and photos, which build trust with the next homeowner.",
      },
      {
        title: "Past-customer outreach",
        body: "Previous customers receive timely offers for other rooms or maintenance, bringing back repeat work.",
      },
    ],
    exampleMath: {
      title: "Example: what better estimate follow-up can add",
      body: "For example, if you send 30 estimates a month and consistent follow-up closes 3 more at an average job of $4,000, that is $12,000 in additional monthly revenue. These numbers are illustrative assumptions only.",
    },
    tools: ["RFMS", "Measure Square", "Jobber", "Housecall Pro", "QuickBooks", "Google Business Profile"],
    faqs: [
      {
        q: "Can it book measure appointments on my calendar?",
        a: "Yes. The assistant books into the calendar or field-service tool you use, based on your real availability.",
      },
      {
        q: "Will it quote prices?",
        a: "Only if you want it to and only from ranges you approve. Most flooring companies prefer to give exact pricing after the measure.",
      },
      {
        q: "Does it work for commercial flooring too?",
        a: "Yes. Commercial bids follow a different cycle, so we set up follow-up that fits longer decision timelines.",
      },
      {
        q: "How soon will I see results?",
        a: "Faster lead response usually shows up in booked appointments within the first few weeks. Estimate follow-up results build over a full sales cycle.",
      },
      {
        q: "Which plan fits a flooring contractor?",
        a: "Growth is a good fit if you mainly need to be found online. Scale adds instant lead follow-up, booking and review automation.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-receptionist", "review-automation", "website-refresh"],
    keywords: [
      "AI for flooring contractors",
      "flooring company lead follow-up",
      "flooring estimate follow-up",
      "flooring business automation",
      "flooring marketing automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Solar installers
  // ---------------------------------------------------------------------------
  {
    slug: "solar-installers",
    name: "Solar Installers",
    audience: "solar installers",
    metaTitle: "AI Automation for Solar Installers | Metron",
    metaDescription:
      "AI automation for solar companies: qualify leads instantly, book site surveys, follow up on proposals, keep customers updated through permitting and install.",
    headline: "AI Automation for Solar Installers: Qualify Faster, Close More Proposals",
    answer:
      "AI helps a solar installer by responding to leads in seconds, qualifying homeowners on roof, ownership and utility bill before a rep's time is spent, booking site surveys, following up on proposals through a long decision cycle, and keeping customers updated through permitting, install and utility interconnection. Reps focus on qualified homeowners and projects move with fewer status calls.",
    painPoints: [
      {
        title: "Lead quality varies widely",
        body: "Renters, shaded roofs and very low bills waste survey and sales time when leads aren't qualified first.",
      },
      {
        title: "Long, multi-step decisions",
        body: "Homeowners compare quotes, financing and incentives over weeks. Without follow-up, good proposals go cold.",
      },
      {
        title: "Customers worry during permitting",
        body: "Permits, inspections and utility approvals take time, and customers call often asking what's happening.",
      },
      {
        title: "Paperwork across many parties",
        body: "Contracts, utility forms, financing documents and permits involve multiple parties and are easy to lose track of.",
      },
    ],
    automations: [
      {
        title: "Instant lead response and qualification",
        body: "New leads get a fast reply that asks about homeownership, roof, shading and average utility bill, then routes qualified homeowners to a rep.",
      },
      {
        title: "Site survey scheduling",
        body: "Qualified homeowners book a site survey or consultation directly into your team's calendar, with reminders to reduce no-shows.",
      },
      {
        title: "Proposal follow-up",
        body: "After a proposal, a timed sequence answers common questions about financing, incentives and timelines and prompts the homeowner to move forward.",
      },
      {
        title: "Project status updates",
        body: "Customers receive automatic updates at each milestone, such as permit submitted, install scheduled and inspection passed, reducing status calls.",
      },
      {
        title: "Document collection",
        body: "The system requests and tracks the documents you need from homeowners, such as utility bills and signed forms, with reminders until they're in.",
      },
      {
        title: "Referral and review requests",
        body: "After activation, happy customers are asked for reviews and referrals, often your best source of new leads.",
      },
    ],
    exampleMath: {
      title: "Example: what qualifying leads first can save",
      body: "For example, if your reps run 60 consultations a month and better qualification removes 15 that were never a fit, at 2 hours each that is 30 hours a month back for qualified homeowners. These figures are illustrative assumptions only.",
    },
    tools: ["Aurora Solar", "OpenSolar", "Enerflo", "JobNimbus", "HubSpot", "Salesforce"],
    faqs: [
      {
        q: "Can the AI explain incentives and tax credits?",
        a: "It can share general information you approve and direct homeowners to your reps for specifics. Incentive rules change and vary by location, so detailed answers should come from your team.",
      },
      {
        q: "Does it integrate with Aurora, OpenSolar or my CRM?",
        a: "We connect to your CRM and design tools where their APIs allow, so lead details and stages stay in sync.",
      },
      {
        q: "Will it replace my sales reps?",
        a: "No. It handles first response, qualification, scheduling and follow-up so your reps spend their time with homeowners who are ready to talk.",
      },
      {
        q: "Can it work with purchased leads?",
        a: "Yes. Fast, consistent follow-up matters even more with purchased leads, where speed often decides who gets the conversation.",
      },
      {
        q: "Which plan fits a solar installer?",
        a: "Scale covers lead follow-up, booking, CRM integration and reviews. Enterprise adds custom tools and deeper back-office automation for larger teams.",
      },
    ],
    relatedServices: ["lead-follow-up", "ai-automation", "custom-ai-software", "review-automation"],
    keywords: [
      "AI for solar installers",
      "solar lead qualification automation",
      "solar sales follow-up",
      "solar company CRM automation",
      "solar customer updates automation",
    ],
  },

  // ---------------------------------------------------------------------------
  // Handyman services
  // ---------------------------------------------------------------------------
  {
    slug: "handyman",
    name: "Handyman Services",
    audience: "handyman businesses",
    metaTitle: "AI Automation for Handyman Businesses | Metron",
    metaDescription:
      "AI automation for handyman businesses: answer calls on the job, collect photos for quotes, book visits, send reminders and invoices, and grow reviews.",
    headline: "AI Automation for Handyman Businesses: Book More Jobs Without Stopping Work",
    answer:
      "AI helps a handyman business by answering calls and texts while you're on a job, collecting job details and photos so you can quote faster, booking visits into your calendar, sending reminders and invoices, and asking happy customers for reviews. You get back the evenings you used to spend returning calls and doing paperwork.",
    painPoints: [
      {
        title: "You can't answer while you work",
        body: "When your hands are full on a job, calls go to voicemail, and many callers don't leave a message.",
      },
      {
        title: "Quoting takes back-and-forth",
        body: "Small jobs need photos and details before you can price them, which means multiple calls and texts per lead.",
      },
      {
        title: "Evenings go to admin",
        body: "Returning calls, scheduling, sending invoices and chasing payments eat into time after work.",
      },
      {
        title: "Inconsistent repeat business",
        body: "Customers who loved your work forget to call you next time and search again instead.",
      },
    ],
    automations: [
      {
        title: "Missed-call text-back and AI answering",
        body: "Missed calls get an instant text reply, and an AI assistant can answer questions and collect job details around the clock.",
      },
      {
        title: "Photo-based job intake",
        body: "Customers are asked to text photos and a description of the job, giving you what you need to quote without a site visit for small jobs.",
      },
      {
        title: "Booking and reminders",
        body: "Customers pick an available time that fits your schedule and get reminders before you arrive.",
      },
      {
        title: "Invoices and payment links",
        body: "Invoices with a payment link go out as soon as the job is done, and reminders follow up on unpaid balances.",
      },
      {
        title: "Review requests",
        body: "Happy customers are asked for a Google review, helping you stand out in local search.",
      },
      {
        title: "Seasonal check-ins",
        body: "Past customers receive timely reminders for seasonal jobs like gutter cleaning, caulking or winter prep.",
      },
    ],
    exampleMath: {
      title: "Example: what answering every lead is worth",
      body: "For example, if you miss 6 calls a week, 2 of those would have booked, and your average job is $250, that is $500 a week, or roughly $26,000 a year in recovered work. These are illustrative assumptions only.",
    },
    tools: ["Jobber", "Housecall Pro", "Square", "QuickBooks", "Google Calendar", "Google Business Profile"],
    faqs: [
      {
        q: "I'm a one-person business. Is this worth it?",
        a: "Often more so. Solo operators lose the most work to missed calls because there's nobody else to answer.",
      },
      {
        q: "Can it give quotes?",
        a: "It can share starting prices or ranges you approve for common jobs, and collect photos so you can send an exact quote quickly.",
      },
      {
        q: "Does it work with Jobber or Housecall Pro?",
        a: "Yes, we can connect to common field-service tools where their integrations allow, so bookings and customers stay in one place.",
      },
      {
        q: "Will customers know it's automated?",
        a: "We recommend transparency. The assistant can identify itself as your virtual assistant and hand off to you whenever needed.",
      },
      {
        q: "Which plan should I start with?",
        a: "Launch or Growth if you mainly need a professional website and to be found online. Scale adds AI answering, missed-call text-back and review requests.",
      },
    ],
    relatedServices: ["ai-receptionist", "review-automation", "ai-automation", "website-refresh"],
    keywords: [
      "AI for handyman business",
      "handyman answering service",
      "handyman booking automation",
      "handyman invoicing automation",
      "missed call text back handyman",
    ],
  },

  // ---------------------------------------------------------------------------
  // Tree service
  // ---------------------------------------------------------------------------
  {
    slug: "tree-service",
    name: "Tree Service",
    audience: "tree service companies",
    metaTitle: "AI Automation for Tree Service Companies | Metron",
    metaDescription:
      "AI automation for tree services: capture storm-surge calls, collect photos for estimates, book assessments, follow up on quotes and request reviews.",
    headline: "AI Automation for Tree Service Companies: Handle Storm Surges Without Missing Work",
    answer:
      "AI helps a tree service company by answering every call during storm surges, collecting photos and details so you can prioritize and estimate, booking on-site assessments, following up on quotes, sending crew-arrival reminders and requesting reviews. You capture more of the work that comes in when demand spikes.",
    painPoints: [
      {
        title: "Storms overwhelm the phones",
        body: "After a storm, calls spike at the exact moment your crews are busiest, and many callers never get through.",
      },
      {
        title: "Estimates need eyes on the job",
        body: "Without photos and details, every lead needs a site visit before you can prioritize or quote.",
      },
      {
        title: "Quotes go unanswered",
        body: "Homeowners collect several quotes and forget to respond, leaving good jobs undecided.",
      },
      {
        title: "Scheduling around weather",
        body: "Rain and wind push jobs around, and rescheduling customers by phone takes hours.",
      },
    ],
    automations: [
      {
        title: "24/7 call and text answering",
        body: "Every caller is answered immediately, with questions about the tree, the situation and urgency, so emergencies rise to the top.",
      },
      {
        title: "Photo intake for estimates",
        body: "Customers are asked to text photos of the tree and the area, letting you triage and often quote before visiting.",
      },
      {
        title: "Assessment booking",
        body: "Customers schedule on-site assessments directly into your calendar based on your availability and service area.",
      },
      {
        title: "Quote follow-up",
        body: "After a quote, a timed sequence of messages checks in and makes it easy for the customer to approve.",
      },
      {
        title: "Weather reschedule messages",
        body: "When weather forces changes, affected customers are notified and offered new times automatically.",
      },
      {
        title: "Review requests",
        body: "After the job, customers are asked for a review, helping you win more of the next storm's searches.",
      },
    ],
    exampleMath: {
      title: "Example: what capturing storm calls can add",
      body: "For example, if a storm brings 50 calls in two days and you normally miss 20 of them, capturing just 8 more jobs at an average of $900 is $7,200 in work from a single storm. These figures are illustrative assumptions only.",
    },
    tools: ["Arborgold", "SingleOps", "Jobber", "QuickBooks", "Google Business Profile"],
    faqs: [
      {
        q: "Can it tell real emergencies from routine jobs?",
        a: "It asks clear questions, such as whether a tree is on a house, car or power line, and flags urgent jobs to you immediately. Anything involving power lines is directed to the utility and emergency services.",
      },
      {
        q: "Does it work with Arborgold or SingleOps?",
        a: "We integrate with tree-care software where it allows, or route jobs and customers into the tools you already use.",
      },
      {
        q: "Can it give prices?",
        a: "Only ranges you approve. Most tree work depends on size, access and risk, so final quotes stay with your estimator.",
      },
      {
        q: "What happens during a big storm?",
        a: "The AI answers every call at once, so nobody waits on hold, and your team gets a prioritized list of jobs with photos.",
      },
      {
        q: "Which plan fits a tree service?",
        a: "Scale is the usual fit, with 24/7 AI answering, lead follow-up, booking and review automation.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "review-automation", "ai-automation"],
    keywords: [
      "AI for tree service companies",
      "tree service answering service",
      "tree removal lead follow-up",
      "tree service estimate automation",
      "storm calls answering service",
    ],
  },

  // ---------------------------------------------------------------------------
  // Appliance repair
  // ---------------------------------------------------------------------------
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    audience: "appliance repair companies",
    metaTitle: "AI Automation for Appliance Repair Companies | Metron",
    metaDescription:
      "AI automation for appliance repair: book service calls 24/7, collect model numbers upfront, send arrival windows, track parts follow-ups and request reviews.",
    headline: "AI Automation for Appliance Repair: Better-Prepared Techs, Fewer Return Trips",
    answer:
      "AI helps an appliance repair company by answering calls and booking service visits around the clock, collecting the brand, model number and symptoms before the tech arrives, sending arrival windows, following up when parts come in, and asking for reviews. Techs show up prepared, and fewer jobs need a second trip.",
    painPoints: [
      {
        title: "Techs arrive without key details",
        body: "Without the model number and symptoms upfront, techs can't bring the right parts, which leads to return trips.",
      },
      {
        title: "Parts delays create phone tag",
        body: "Customers waiting on parts call for updates, and scheduling the return visit takes several calls.",
      },
      {
        title: "Calls during jobs go unanswered",
        body: "Small teams can't always answer while working, and customers with a broken fridge won't wait.",
      },
      {
        title: "Warranty work adds paperwork",
        body: "Manufacturer and home-warranty jobs come with authorizations and claims that eat office time.",
      },
    ],
    automations: [
      {
        title: "24/7 booking with symptom intake",
        body: "Customers book service visits anytime, and the assistant collects the appliance type, brand, model number, symptoms and photos of the label.",
      },
      {
        title: "Arrival windows and on-the-way texts",
        body: "Customers get confirmations, reminders and 'tech on the way' messages, cutting down on no-access visits.",
      },
      {
        title: "Parts-arrived follow-up",
        body: "When a part arrives, the customer is notified and offered return-visit times automatically.",
      },
      {
        title: "Warranty paperwork assistance",
        body: "AI drafts claim details from job notes in the format each warranty company expects, for your office to review and submit.",
      },
      {
        title: "Invoices and payment links",
        body: "Invoices go out right after the job with a secure payment link, and unpaid balances get polite reminders.",
      },
      {
        title: "Review and maintenance reminders",
        body: "Customers are asked for reviews and later reminded about maintenance like dryer vent or refrigerator coil cleaning.",
      },
    ],
    exampleMath: {
      title: "Example: what fewer return trips can save",
      body: "For example, if collecting model numbers upfront prevents 6 return trips a month at roughly $90 of tech time and fuel each, that is about $540 a month, or $6,480 a year, plus faster repairs for customers. These are illustrative assumptions only.",
    },
    tools: ["ServiceTitan", "Fieldpulse", "Housecall Pro", "Jobber", "QuickBooks", "Google Business Profile"],
    faqs: [
      {
        q: "Can it diagnose the appliance?",
        a: "No. It collects symptoms, error codes and model details so your technician can diagnose faster and bring the likely parts.",
      },
      {
        q: "Does it work with my field-service software?",
        a: "We connect to common field-service platforms where their integrations allow, so bookings flow into your schedule.",
      },
      {
        q: "Can it handle home-warranty jobs?",
        a: "It can collect warranty details at booking and help prepare claim paperwork, but authorizations and submissions stay with your office.",
      },
      {
        q: "Will it quote repair prices?",
        a: "It can share your service-call fee and general policies. Repair pricing comes after diagnosis.",
      },
      {
        q: "Which plan fits an appliance repair company?",
        a: "Scale fits most shops, covering AI booking, reminders and reviews. Enterprise adds back-office automation for warranty paperwork and invoicing at volume.",
      },
    ],
    relatedServices: ["ai-receptionist", "ai-automation", "review-automation", "custom-ai-software"],
    keywords: [
      "AI for appliance repair",
      "appliance repair booking automation",
      "appliance repair answering service",
      "appliance repair business software automation",
      "appliance repair scheduling",
    ],
  },

  // ---------------------------------------------------------------------------
  // Locksmiths
  // ---------------------------------------------------------------------------
  {
    slug: "locksmiths",
    name: "Locksmiths",
    audience: "locksmith businesses",
    metaTitle: "AI Automation for Locksmiths | Metron",
    metaDescription:
      "AI automation for locksmiths: answer lockout calls 24/7, collect location and job details, text ETAs, send invoices and build a trusted local review profile.",
    headline: "AI Automation for Locksmiths: Answer Every Lockout, Build Local Trust",
    answer:
      "AI helps a locksmith business by answering every call around the clock, collecting the location and job type, sending customers ETAs, routing jobs to the on-call tech, sending invoices with payment links and requesting reviews. You capture more urgent jobs and build the kind of review profile that helps customers choose a legitimate local locksmith.",
    painPoints: [
      {
        title: "Lockouts don't wait",
        body: "Locked-out customers call several numbers fast. If you don't answer, they take the first locksmith who does.",
      },
      {
        title: "Customers worry about scams",
        body: "Many people are wary of unfamiliar locksmiths, so clear communication, upfront policies and real reviews matter.",
      },
      {
        title: "Phone calls interrupt jobs",
        body: "Techs are on the road and on jobs, and answering every call while working is unsafe and inconsistent.",
      },
      {
        title: "Commercial work needs follow-up",
        body: "Rekeys, access control and master key systems involve quotes and follow-up that slip when you're busy.",
      },
    ],
    automations: [
      {
        title: "24/7 AI call answering",
        body: "Every call is answered instantly with your business name and a clear explanation of your service fee and process.",
      },
      {
        title: "Job intake and location capture",
        body: "The assistant collects the job type, address and contact details and can text a link to share the customer's exact location.",
      },
      {
        title: "On-call routing and ETAs",
        body: "Jobs are sent to the on-call tech with all details, and customers receive an ETA text so they know help is coming.",
      },
      {
        title: "Commercial quote follow-up",
        body: "Quotes for rekeys and access control get timed follow-ups so commercial jobs don't slip through.",
      },
      {
        title: "Invoices and payment links",
        body: "Customers receive an itemized invoice and payment link when the job is done, which also supports transparency.",
      },
      {
        title: "Review requests",
        body: "Happy customers are asked for Google reviews, building a local reputation that helps you stand out from questionable listings.",
      },
    ],
    exampleMath: {
      title: "Example: what answering every lockout is worth",
      body: "For example, if you miss 4 calls a week, 3 would have booked, and your average job is $130, that is about $390 a week, or roughly $20,280 a year. These are illustrative assumptions only.",
    },
    tools: ["ServiceTitan", "Jobber", "Housecall Pro", "Square", "QuickBooks", "Google Business Profile"],
    faqs: [
      {
        q: "Can it quote prices?",
        a: "It can explain your service-call fee and typical ranges you approve. Final prices depend on the lock and situation, which your tech confirms on site.",
      },
      {
        q: "How does it help with scam concerns?",
        a: "It answers with your real business name, explains your pricing and process clearly, and sends ETAs and itemized invoices, which all help customers trust you.",
      },
      {
        q: "Does it work for automotive lockouts?",
        a: "Yes. It can collect the vehicle make, model and year so your tech arrives with the right tools.",
      },
      {
        q: "What if I'm the only tech?",
        a: "That's where it helps most. The AI handles the call while you're driving or working, and you get a clean summary to act on.",
      },
      {
        q: "Which plan fits a locksmith?",
        a: "Scale is the usual fit, with 24/7 AI answering, missed-call text-back and review automation.",
      },
    ],
    relatedServices: ["ai-receptionist", "review-automation", "ai-automation", "aeo-geo"],
    keywords: [
      "AI for locksmiths",
      "locksmith answering service",
      "24/7 locksmith call answering",
      "locksmith dispatch automation",
      "locksmith marketing",
    ],
  },

  // ---------------------------------------------------------------------------
  // Physical therapy
  // ---------------------------------------------------------------------------
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    audience: "physical therapy clinics",
    metaTitle: "AI Automation for Physical Therapy Clinics | Metron",
    metaDescription:
      "AI automation for PT clinics: book evaluations 24/7, cut no-shows, keep patients on their plan of care, collect intake forms and reduce front-desk phone time.",
    headline: "AI Automation for Physical Therapy Clinics: Keep Patients on Their Plan of Care",
    answer:
      "AI helps a physical therapy clinic by answering calls and booking evaluations around the clock, sending reminders that reduce no-shows, following up when patients miss visits in their plan of care, collecting intake and insurance information before the first appointment, and requesting reviews. Front-desk staff spend less time on the phone and patients are more likely to finish treatment.",
    painPoints: [
      {
        title: "Patients drop off before finishing",
        body: "Patients often stop coming once they feel a little better, which hurts outcomes and leaves visits on the table.",
      },
      {
        title: "No-shows disrupt therapist schedules",
        body: "Missed visits leave therapists idle and are hard to fill on short notice.",
      },
      {
        title: "Referrals need fast follow-up",
        body: "When a physician refers a patient, the clinic that calls back first usually gets the evaluation.",
      },
      {
        title: "Insurance details slow intake",
        body: "Collecting insurance cards, forms and history at the front desk slows check-in and creates rework.",
      },
    ],
    automations: [
      {
        title: "AI receptionist and evaluation booking",
        body: "Calls, texts and web inquiries are answered instantly, and new patients book evaluations into open slots.",
      },
      {
        title: "Referral follow-up",
        body: "Incoming referrals trigger a prompt outreach to the patient to schedule, with reminders until they book.",
      },
      {
        title: "Reminders and rescheduling",
        body: "Patients receive visit reminders with easy rescheduling, reducing no-shows and late cancellations.",
      },
      {
        title: "Plan-of-care adherence nudges",
        body: "When a patient misses a recommended visit, the system checks in and offers times to rebook, and flags the patient for staff follow-up.",
      },
      {
        title: "Digital intake and insurance capture",
        body: "New patients complete forms and upload insurance card photos before the first visit, ready for your team to verify.",
      },
      {
        title: "Discharge follow-up and reviews",
        body: "After discharge, patients receive a check-in and, when appropriate, a request for a review.",
      },
    ],
    exampleMath: {
      title: "Example: what better plan-of-care adherence can mean",
      body: "For example, if your clinic has 120 active patients and adherence follow-up brings back an average of 1 extra visit for 20 of them each month at $100 per visit, that is $2,000 a month in visits that would have been missed. These are illustrative assumptions only.",
    },
    tools: ["WebPT", "Prompt Health", "Raintree", "Clinicient", "Google Business Profile"],
    faqs: [
      {
        q: "Is patient data protected?",
        a: "We design workflows to use only the data they need and choose tools suitable for healthcare data. If you handle protected health information, we review compliance requirements with you before anything goes live.",
      },
      {
        q: "Does it integrate with WebPT or Prompt?",
        a: "We connect where your EMR and scheduling platform allow, through APIs, booking tools or calendar sync. We confirm specifics during the free audit.",
      },
      {
        q: "Will it give exercise or medical advice?",
        a: "No. It handles scheduling, reminders and logistics. Clinical questions are routed to your therapists.",
      },
      {
        q: "Can it verify insurance?",
        a: "It can collect insurance details and card photos. Eligibility verification stays with your team or your existing verification tools.",
      },
      {
        q: "Which plan fits a PT clinic?",
        a: "Scale fits most clinics, covering the AI receptionist, booking, reminders and reviews. Multi-location clinics often add Enterprise for custom workflows and reporting.",
      },
    ],
    relatedServices: ["ai-receptionist", "lead-follow-up", "ai-automation", "review-automation"],
    keywords: [
      "AI for physical therapy clinics",
      "physical therapy no-show reduction",
      "PT clinic automation",
      "physical therapy patient retention",
      "AI receptionist physical therapy",
    ],
  },
];
