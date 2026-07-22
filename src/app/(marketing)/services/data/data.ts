export type ServiceBlock = {
  id: string;
  index: string;
  title: string;
  statement: string;
  explanation: string;
  bullets: string[];
  image: string;
};

export const SERVICES_HERO = {
  eyebrow: "SERVICES",
  headingLines: ["One system.", "Four disciplines."],
  subheading:
    "Web, brand, content, and marketing — built by one team that shares context, not stitched together from four vendors.",
};

export const SERVICES: ServiceBlock[] = [
  {
    id: "web-development",
    index: "01",
    title: "Web Development",
    statement: "Websites built to convert, not just exist.",
    explanation:
      "We design and engineer sites around one job: turning visitors into customers, with performance and structure that scales past launch day.",
    bullets: [
      "Custom-built, not templated",
      "Optimized for speed and Core Web Vitals",
      "Conversion-focused UX from the first wireframe",
      "Scales cleanly as traffic grows",
      "Handed off with clean, documented code",
    ],
    image: "/web_development.png",
  },
  {
    id: "branding",
    index: "02",
    title: "Branding",
    statement: "A brand people remember and trust.",
    explanation:
      "We define how your business looks, sounds, and is understood across every touchpoint — not just a logo file in a folder.",
    bullets: [
      "Full visual identity system",
      "Messaging that's actually differentiated",
      "Guidelines your team can use without us",
      "Consistent across web, social, and print",
    ],
    image: "/branding.png",
  },
  {
    id: "content-creation",
    index: "03",
    title: "Content Creation",
    statement: "Content built to work, not just publish.",
    explanation:
      "Every piece is tied to a specific outcome — traffic, trust, or conversion — not a content calendar filled for its own sake.",
    bullets: [
      "Strategy set before a single word is written",
      "Long-form, social, and on-site content",
      "SEO built in, not bolted on after",
      "Editorial consistency across every channel",
    ],
    image: "/content_creation.png",
  },
  {
    id: "digital-marketing",
    index: "04",
    title: "Digital Marketing",
    statement: "Growth you can trace back to a number.",
    explanation:
      "Paid, organic, and lifecycle marketing run against measurable targets, with reporting that shows exactly what's working.",
    bullets: [
      "Channel strategy tied to CAC and LTV",
      "Continuous testing, not set-and-forget",
      "Clear reporting, no vanity metrics",
      "Budget reallocated toward what performs",
    ],
    image: "/growth_marketing.png",
  },
];

export const SYSTEM_FLOW = {
  eyebrow: "THE SYSTEM",
  headingLines: ["This isn't four services.", "It's one system."],
  subheading: "Each discipline feeds the next, so nothing you pay for works in isolation.",
  steps: ["Brand", "Website", "Content", "Marketing", "Growth"],
};

export type ProcessStepLight = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const PROCESS_LIGHT = {
  eyebrow: "HOW WE WORK",
  heading: "A process built for accountability, not paperwork.",
  steps: [
    {
      id: "understand",
      index: "01",
      title: "Understand",
      description: "We audit what's actually happening before proposing anything.",
    },
    {
      id: "build",
      index: "02",
      title: "Build",
      description: "Design and development move together, not in sequence.",
    },
    {
      id: "launch",
      index: "03",
      title: "Launch",
      description: "Shipped with tracking in place from day one.",
    },
    {
      id: "improve",
      index: "04",
      title: "Improve",
      description: "We stay on the data after launch, not just the invoice.",
    },
  ] satisfies ProcessStepLight[],
};

export const TRUST_STRIP = {
  heading: "No fluff. Just accountability.",
  points: [
    "One accountable team — not four agencies to coordinate.",
    "Every deliverable ties back to a measurable outcome.",
    "We stay engaged after launch, not just through it.",
  ],
};

export const SERVICES_CTA = {
  headingLines: ["Let's build the system,", "not just the site."],
  supporting: "Tell us what isn't working. We'll show you how the pieces fit together.",
  primaryLabel: "Book a Growth Audit",
  primaryHref: "/contact",
  secondaryLabel: "See recent work",
  secondaryHref: "/portfolio",
};