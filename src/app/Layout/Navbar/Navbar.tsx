"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "./nav-links";
import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import { useScrolled } from "@/hooks/use-scrolled";
import {
  navbarVariants,
  logoVariants,
  navListVariants,
  ctaVariants,
} from "./navbarVariants";
import { cn } from "@/lib/utils"; // adjust path if your cn() util lives elsewhere
import XLogo from "@/app/components/ui/x-logo";

const Navbar = () => {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <div className="mx-auto max-w-7xl md:px-6 p-3 ">
          <div
            className={cn(
              "rounded-2xl border transition-all duration-500 ease-out",
              scrolled
                ? "border-border bg-card/70 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                : "border-transparent bg-transparent shadow-none",
            )}
          >
            <nav className="grid h-16 grid-cols-2 items-center px-4 md:h-[4.5rem] md:grid-cols-3 md:px-6">
              {/* Logo */}
              <motion.div variants={logoVariants}>
                <Link href="/" className="flex w-fit items-center gap-1">
                  <XLogo size="sm" variant="navbar" />
                  <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                    Media
                  </span>
                </Link>
              </motion.div>

              {/* Center nav */}
              <motion.div
                variants={navListVariants}
                className="hidden items-center justify-center gap-9 md:flex"
              >
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.name} link={link} />
                ))}
              </motion.div>

              {/* CTA + mobile toggle */}
              <div className="flex items-center justify-end gap-3">
                <motion.div variants={ctaVariants} className="hidden md:block">
                  <Link
                    href="/contact"
                    className="group relative rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">Start Project</span>
                    <span className="absolute inset-0 -z-0 rounded-full bg-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
                  </Link>
                </motion.div>

                <button
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => setOpen((prev) => !prev)}
                  className="relative z-[60] flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground md:hidden"
                >
                  <motion.span
                    initial={false}
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {open ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        links={NAV_LINKS}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Navbar;