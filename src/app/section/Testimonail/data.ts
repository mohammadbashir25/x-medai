export const SECTION_EYEBROW = "CLIENT RESULTS";

export const SECTION_HEADING_LINES = ["Trusted by teams who", "measure everything."];

export const SECTION_SUBHEADING =
  "We ask every client what changed after launch — not what they thought of the pitch deck. This is what they told us.";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const FEATURED_TESTIMONIAL: Testimonial = {
  id: "solace-health",
  quote:
    "xMedia didn't just redesign our booking flow — they rebuilt how patients actually decide to book. Conversion moved before we'd even finished the quarter.",
  name: "Priya Anand",
  role: "Co-Founder",
  company: "Solace Health",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "meridian-capital",
    quote:
      "They cut our acquisition cost by more than a third and told us exactly why it was working. No guesswork — numbers we could defend to the board.",
    name: "Marcus Webb",
    role: "CMO",
    company: "Meridian Capital",
  },
  {
    id: "northline-outdoor",
    quote:
      "We went from a dated storefront to a brand people screenshot. Average order value doubled inside two months.",
    name: "Elena Frost",
    role: "Founder",
    company: "Northline Outdoor",
  },
  {
    id: "ferro-supply",
    quote:
      "Forty years in business, and no one had explained our own brand back to us that clearly. Our sales team actually uses it now.",
    name: "Tom Alavi",
    role: "Owner",
    company: "Ferro Supply Co.",
  },
  {
    id: "aperture-studio",
    quote:
      "Their writers sound like they've sat in our strategy meetings for years. Traffic tripled and the tone never once felt off.",
    name: "Jasmine Reyes",
    role: "Head of Content",
    company: "Aperture Studio",
  },
];

export const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();