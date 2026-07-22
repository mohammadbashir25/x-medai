"use client";

import { motion } from "framer-motion";
import CTAButton from "../../../section/CTA/CTAButton";
import { aboutHero } from "../data/data";

const AboutHero = () => {
  return (
    <div className="mx-auto max-w-3xl px-0 text-center    pt-8 pb-16 md:pt-12 md:pb-20">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
      >
        {aboutHero.badge}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
      >
        {aboutHero.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
      >
        {aboutHero.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-4"
      >
        <CTAButton href="/contact">{aboutHero.primaryButton}</CTAButton>
        <CTAButton href="/portfolio" variant="secondary">
          {aboutHero.secondaryButton}
        </CTAButton>
      </motion.div>
    </div>
  );
};

export default AboutHero;
