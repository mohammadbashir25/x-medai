"use client";

import { motion, type Variants } from "framer-motion";
import CTAButton from "./CTAButton";
import {
  CTA_HEADING_LINES,
  CTA_SUPPORTING_LINE,
  CTA_PRIMARY_LABEL,
  CTA_PRIMARY_HREF,
  CTA_SECONDARY_LABEL,
  CTA_SECONDARY_HREF,
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

const FinalCtaSection = () => {
  return (
    <section className="relative pt-16 pb-28 md:pt-20 md:pb-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          {/* ambient glow — slow, subtle pulse behind the panel content, gives the section its "elevated" contrast */}
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
          />

          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
          >
            {CTA_HEADING_LINES.map((line, i) => (
              <motion.span
                key={line}
                variants={lineVariants}
                className={`block ${i === 1 ? "text-primary" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {CTA_SUPPORTING_LINE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <CTAButton href={CTA_PRIMARY_HREF} variant="primary">
              {CTA_PRIMARY_LABEL}
            </CTAButton>
            <CTAButton href={CTA_SECONDARY_HREF} variant="secondary">
              {CTA_SECONDARY_LABEL}
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;