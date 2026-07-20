import { Fingerprint, Code2, Clapperboard, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const HERO_EYEBROW = "DIGITAL AGENCY • DESIGN • DEVELOPMENT";

export const HERO_HEADING_LINES = [
  "Creating Digital Experiences",
  "That Move Brands Forward",
];

export const HERO_SUBHEADING =
  "We design and develop high-performance websites, custom digital solutions, and brand experiences that combine strategy, design, and technology to help businesses grow online.";

export type OrbitItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  angle: number; // degrees, static position on the ring
};

const ORBIT_LABELS = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Creating memorable visual systems that define powerful brands.",
    icon: Fingerprint,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Building fast, scalable websites and digital platforms.",
    icon: Code2,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Producing visual stories that connect brands with audiences.",
    icon: Clapperboard,
  },
  {
    id: "growth-marketing",
    title: "Growth Marketing",
    description: "Data-driven strategies that increase visibility and growth.",
    icon: TrendingUp,
  },
];

export const ORBIT_ITEMS: OrbitItem[] = ORBIT_LABELS.map((item, index) => ({
  ...item,
  angle: (index / ORBIT_LABELS.length) * 360 - 90,
}));

export const ORBIT_RADIUS = 250;
export const ORBIT_DURATION = 70; // seconds for one full revolution

export const AMBIENT_PARTICLES = [
  { x: 8, y: 15, size: 3, delay: 0 },
  { x: 88, y: 8, size: 2, delay: 0.6 },
  { x: 92, y: 60, size: 3, delay: 1.2 },
  { x: 15, y: 75, size: 2, delay: 1.8 },
  { x: 50, y: 95, size: 2, delay: 0.9 },
];