"use client";

import { motion, type Variants } from "framer-motion";
import TransformationRow from "./TransformationRow";
import {
  SECTION_EYEBROW,
  SECTION_HEADING_LINES,
  SECTION_SUBHEADING,
  TRANSFORMATION_PAIRS,
  CLOSING_LINE,
} from "./data";

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ProblemSolutionSection = () => {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium tracking-[0.2em] text-primary"
        >
          {SECTION_EYEBROW}
        </motion.p>

        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-6 font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-foreground md:text-5xl"
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

      <div className="mx-auto mt-20 max-w-3xl px-6">
        {TRANSFORMATION_PAIRS.map((pair) => (
          <TransformationRow key={pair.id} pair={pair} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mx-auto mt-16 max-w-md px-6 text-center text-sm font-medium tracking-wide text-primary"
      >
        {CLOSING_LINE}
      </motion.p>
    </section>
  );
};

export default ProblemSolutionSection;