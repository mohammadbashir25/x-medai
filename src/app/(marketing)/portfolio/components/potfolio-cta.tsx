"use client";

import { motion } from "framer-motion";
import CTAButton from "../../../section/CTA/CTAButton";

const PortfolioCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl px-0 py-24 text-center md:py-32"
    >
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Have a project in mind?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
        Tell us where it&apos;s stuck, or where it hasn&apos;t started.
        We&apos;ll take it from there.
      </p>
      <div className="mt-8 flex justify-center">
        <CTAButton href="/contact">Start a Project</CTAButton>
      </div>
    </motion.div>
  );
};

export default PortfolioCTA;