"use client";

import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <div className="mx-auto max-w-3xl px-0  text-center  pt-8 pb-16 md:pt-12 md:pb-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        Our Work
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
      >
        Selected Projects That
        <br className="hidden sm:block" /> Define Our Craft
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
      >
        A curated look at the products, brands, and campaigns we&apos;ve
        built — each one designed to move a real business metric.
      </motion.p>
    </div>
  );
};

export default PortfolioHero;