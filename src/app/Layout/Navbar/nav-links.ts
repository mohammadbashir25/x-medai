export type NavLink = {
  name: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];