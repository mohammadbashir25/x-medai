"use client";

import { motion, type Variants } from "framer-motion";
import ProcessStep from "./ProcessStep";
import {
  SECTION_EYEBROW,
  SECTION_HEADING_LINES,
  SECTION_SUBHEADING,
  PROCESS_STEPS,
} from "./data";

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const HowItWorksSection = () => {
  return (
    <section className="relative py-28 md:py-36">
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
        {/* desktop connecting line across all four columns */}
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-[13px] hidden h-px bg-white/10 sm:block"
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;