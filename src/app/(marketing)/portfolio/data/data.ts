export type PortfolioCategory = "Web Design" | "Branding" | "Development" | "Marketing";

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  year: string;
  image: string;
};

export const PORTFOLIO_CATEGORIES: Array<"All" | PortfolioCategory> = [
  "All",
  "Web Design",
  "Branding",
  "Development",
  "Marketing",
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "orbit-finance",
    title: "Orbit Finance",
    description: "Full product redesign that cut onboarding drop-off by 42%.",
    category: "Development",
    year: "2025",
    image: "/images/portfolio/project-1.jpg",
  },
  {
    id: "north-studio",
    title: "North Studio",
    description: "A visual identity system built for a boutique design house.",
    category: "Branding",
    year: "2025",
    image: "/images/portfolio/project-2.jpg",
  },
  {
    id: "verve-wellness",
    title: "Verve Wellness",
    description: "Editorial content strategy that tripled organic reach.",
    category: "Marketing",
    year: "2024",
    image: "/images/portfolio/project-3.jpg",
  },
  {
    id: "flux-commerce",
    title: "Flux Commerce",
    description: "A storefront rebuild engineered for scale and speed.",
    category: "Web Design",
    year: "2024",
    image: "/images/portfolio/project-4.jpg",
  },
  {
    id: "halo-health",
    title: "Halo Health",
    description: "Booking flow redesign that moved conversion within a quarter.",
    category: "Development",
    year: "2024",
    image: "/images/portfolio/project-5.jpg",
  },
  {
    id: "ferro-supply",
    title: "Ferro Supply Co.",
    description: "A forty-year-old brand, explained back to itself, clearly.",
    category: "Branding",
    year: "2023",
    image: "/images/portfolio/project-6.jpg",
  },
  {
    id: "aperture-studio",
    title: "Aperture Studio",
    description: "A content system that tripled traffic without losing tone.",
    category: "Marketing",
    year: "2023",
    image: "/images/portfolio/project-7.jpg",
  },
  {
    id: "meridian-capital",
    title: "Meridian Capital",
    description: "A marketing site rebuilt around one defensible metric: CAC.",
    category: "Web Design",
    year: "2023",
    image: "/images/portfolio/project-8.jpg",
  },
];
