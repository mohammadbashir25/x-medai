"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { NavLink as NavLinkType } from "./nav-links";
import { navItemVariants } from "./navbarVariants"

export function NavLink({ link }: { link: NavLinkType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={navItemVariants} className="relative">
      <Link
        href={link.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        {link.name}
        <motion.span
          className="absolute -bottom-1 left-0 h-px w-full bg-primary"
          style={{ originX: 0 }}
          initial={false}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      </Link>
    </motion.div>
  );
}