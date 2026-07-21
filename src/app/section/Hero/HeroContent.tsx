"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { HERO_EYEBROW, HERO_HEADING_LINES, HERO_SUBHEADING } from "./hero-date";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs font-medium tracking-[0.2em] text-primary"
      >
        {HERO_EYEBROW}
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="mt-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl xl:text-6xl"
      >
        {HERO_HEADING_LINES.map((line, i) => (
          <span
            key={line}
            className={` ${i < 1 ? "block" : "block text-primary"}`}
          >
            {line}
          </span>
        ))}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
      >
        {HERO_SUBHEADING}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-10 flex items-center gap-4"
      >
        <Link
          href="/contact"
          className="group relative hidden rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 min-[440px]:inline-flex sm:px-7"
        >
          <span className="relative z-10">Start a Project</span>
          <span className="absolute inset-0 -z-0 rounded-full bg-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
        </Link>

        <Link
          href="/portfolio"
          className="rounded-full border border-border bg-card/40 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors duration-300 hover:border-primary/60 hover:text-primary"
        >
          View Our Work
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
