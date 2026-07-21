export interface Project {
  id: string;
  index: string; // e.g. "01"
  title: string;
  category: "Web Development" | "Branding" | "Content Creation" | "Digital Marketing";
  description: string;
  tags: string[];
  year: string;
}