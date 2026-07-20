"use client";

import { motion, type Variants } from "framer-motion";
import type { TransformationPair } from "./data";

const rowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const problemVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0.35,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const solutionVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const TransformationRow = ({ pair }: { pair: TransformationPair }) => {
  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className="grid grid-cols-1 items-center gap-3 border-b border-border py-8 sm:grid-cols-[1fr_auto_1fr] sm:gap-6"
    >
      <motion.p
        variants={problemVariants}
        className="text-lg text-muted-foreground line-through decoration-muted-foreground/40 decoration-1 sm:text-xl"
      >
        {pair.problem}
      </motion.p>

      <motion.div
        variants={lineVariants}
        style={{ transformOrigin: "left" }}
        className="hidden h-px w-10 bg-primary sm:block"
      />

      <motion.p
        variants={solutionVariants}
        className="text-lg font-medium text-foreground sm:text-xl"
      >
        {pair.solution}
      </motion.p>
    </motion.div>
  );
};

export default TransformationRow;