"use client";

import { motion } from "framer-motion";
import CTAButton from "../../../section/CTA/CTAButton";
import { aboutCta } from "../data/data";

const AboutCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl px-0 py-24 text-center md:py-32"
    >
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {aboutCta.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
        {aboutCta.description}
      </p>
      <div className="mt-8 flex justify-center">
        <CTAButton href={aboutCta.buttonHref}>{aboutCta.buttonLabel}</CTAButton>
      </div>
    </motion.div>
  );
};

export default AboutCTA;
