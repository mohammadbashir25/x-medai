"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "./nav-links";
import {
  mobileMenuVariants,
  mobileListVariants,
  mobileItemVariants,
} from "./navbarVariants";

type MobileMenuProps = {
  links: NavLink[];
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ links, open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
        >
          <motion.nav
            variants={mobileListVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <motion.div key={link.name} variants={mobileItemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-3xl font-medium tracking-tight text-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={mobileItemVariants} className="mt-4">
              <Link
                href="/contact"
                onClick={onClose}
                className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:scale-105"
              >
                Start Project
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}