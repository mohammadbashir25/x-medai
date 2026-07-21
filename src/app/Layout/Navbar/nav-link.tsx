// src/app/components/navbar/nav-link.tsx  (adjust path to match your file)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavLinkItem = {
  name: string;
  href: string;
};

interface NavLinkProps {
  link: NavLinkItem;
}

export const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive =
    link.href === "/"
      ? pathname === "/"
      : pathname === link.href || pathname.startsWith(`${link.href}/`);

  return (
    <Link
      href={link.href}
      className={cn(
        "group relative text-sm font-medium transition-colors duration-300",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {link.name}

      {/* Active underline — persistent, animates between links */}
      {isActive && (
        <motion.span
          layoutId="active-nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {/* Hover underline — only shows on inactive links, fades in/out */}
      {!isActive && (
        <span
          className={cn(
            "absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-primary",
            "origin-center scale-x-0 opacity-0 transition-all duration-300",
            "group-hover:scale-x-100 group-hover:opacity-100",
          )}
        />
      )}
    </Link>
  );
};
