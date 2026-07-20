export const SECTION_EYEBROW = "THE PROCESS";

export const SECTION_HEADING_LINES = ["A System, Not A Guess."];

export const SECTION_SUBHEADING =
  "Every project follows the same disciplined process — built to remove risk and compound results at every stage.";

export type ProcessStep = {
  id: string;
  number: string;
  phase: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    phase: "Discovery",
    title: "We learn the business, not just the brief.",
    description:
      "Goals, audience, competitors, and constraints — mapped before a single pixel is designed.",
  },
  {
    id: "architect",
    number: "02",
    phase: "Strategy",
    title: "We design the system before the surface.",
    description:
      "Information architecture, technical approach, and success metrics defined up front.",
  },
  {
    id: "build",
    number: "03",
    phase: "Execution",
    title: "We design and build in parallel, not stages.",
    description:
      "Interface and engineering move together — faster iteration, fewer disconnects.",
  },
  {
    id: "grow",
    number: "04",
    phase: "Growth",
    title: "We stay after launch to compound results.",
    description:
      "Performance, content, and marketing systems tuned against real data, continuously.",
  },
];