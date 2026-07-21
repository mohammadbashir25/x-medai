"use client";

import { motion, type Variants } from "framer-motion";
import PillarCard from "./PillarCard";
import {
  SECTION_EYEBROW,
  SECTION_HEADING_LINES,
  SECTION_SUBHEADING,
  PILLARS,
} from "./data";

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const WhyChooseUsSection = () => {
  return (
    <section className="relative pt-16 pb-28 md:pt-20 md:pb-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium tracking-[0.2em] text-primary"
        >
          {SECTION_EYEBROW}
        </motion.p>

        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-5xl"
        >
          {SECTION_HEADING_LINES.map((line) => (
            <motion.span key={line} variants={lineVariants} className="block">
              {line}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {SECTION_SUBHEADING}
        </motion.p>
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto mt-20 max-w-6xl px-6"
      >
        {/* the system spine — one continuous line all four pillars branch from */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-4 top-2 w-px bg-primary/20 lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;