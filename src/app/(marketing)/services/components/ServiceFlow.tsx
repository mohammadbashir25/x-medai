"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SYSTEM_FLOW } from "../data/data";

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const SystemFlow = () => {
  const lastIndex = SYSTEM_FLOW.steps.length - 1;

  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium tracking-[0.2em] text-primary"
        >
          {SYSTEM_FLOW.eyebrow}
        </motion.p>

        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-5xl"
        >
          {SYSTEM_FLOW.headingLines.map((line) => (
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
          {SYSTEM_FLOW.subheading}
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-3 px-6 sm:flex-row sm:justify-center sm:gap-2"
      >
        {SYSTEM_FLOW.steps.map((step, index) => {
          const isLast = index === lastIndex;
          return (
            <div key={step} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-2">
              <motion.div
                variants={nodeVariants}
                className={`rounded-full border px-6 py-3 text-sm font-medium ${
                  isLast
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-card text-foreground/80"
                }`}
              >
                {step}
              </motion.div>

              {!isLast && (
                <motion.span variants={nodeVariants} className="text-muted-foreground/50">
                  <ArrowDown className="h-4 w-4 sm:hidden" />
                  <ArrowRight className="hidden h-4 w-4 sm:block" />
                </motion.span>
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SystemFlow;