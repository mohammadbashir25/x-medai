"use client";

import { motion, type Variants } from "framer-motion";
import { PROCESS_LIGHT } from "../data/data";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const LightProcess = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-b border-white/5 pb-10 md:pb-14">
          <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
              {PROCESS_LIGHT.eyebrow}
            </p>

            <h2 className="font-heading text-2xl md:text-4xl font-medium leading-tight text-foreground">
              {PROCESS_LIGHT.heading}
            </h2>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
        >
          {PROCESS_LIGHT.steps.map((step) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="py-6 sm:px-6 sm:py-0"
            >
              <span className="font-heading text-xs text-primary/70">
                {step.index}
              </span>
              <h3 className="mt-2 font-heading text-base font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LightProcess;
