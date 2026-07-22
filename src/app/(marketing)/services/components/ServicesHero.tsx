"use client";

import { motion, type Variants } from "framer-motion";
import { SERVICES_HERO } from "../data/data";

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-medium tracking-[0.2em]  text-primary"
        >
          {SERVICES_HERO.eyebrow}
        </motion.p>

        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl"
        >
          {SERVICES_HERO.headingLines.map((line, i) => (
            <motion.span
              key={line}
              variants={lineVariants}
              className={`block ${i === 1 ? "text-primary" : ""}`}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {SERVICES_HERO.subheading}
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;