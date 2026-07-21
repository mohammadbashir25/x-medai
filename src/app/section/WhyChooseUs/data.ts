export const SECTION_EYEBROW = "WHY xMEDIA";

export const SECTION_HEADING_LINES = ["We don't sell services.", "We build systems."];

export const SECTION_SUBHEADING =
  "Most agencies hand off deliverables and move on. Ours keep compounding after launch.";

export type Pillar = {
  id: string;
  title: string;
  description: string;
};

export const PILLARS: Pillar[] = [
  {
    id: "one-system",
    title: "One system, not four vendors",
    description:
      "Web, brand, content and marketing built by one team that shares context — not four agencies passing the blame.",
  },
  {
    id: "built-to-convert",
    title: "Built to convert, not impress",
    description:
      "Every decision is weighed against one metric: does it move the number that actually pays your bills.",
  },
  {
    id: "engineered-to-scale",
    title: "Engineered to scale",
    description:
      "Systems built to hold at ten times the traffic — not just the version that survives a demo.",
  },
  {
    id: "accountable-past-launch",
    title: "Accountable past launch",
    description:
      "We track performance after delivery. If it stops working, that's still our problem.",
  },
];