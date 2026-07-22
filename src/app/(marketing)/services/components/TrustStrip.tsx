"use client";

import { motion, type Variants } from "framer-motion";
import { TRUST_STRIP } from "../data/data";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const TrustStrip = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          {TRUST_STRIP.heading}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {TRUST_STRIP.points.map((point) => (
            <motion.p
              key={point}
              variants={itemVariants}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {point}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;