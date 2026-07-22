"use client";

import { motion } from "framer-motion";
import { companyStory } from "../data/data";

const CompanyStory = () => {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 py-20 md:grid-cols-[minmax(0,240px)_1fr] md:gap-16 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-2xl font-semibold tracking-tight text-foreground md:sticky md:top-32 md:self-start"
      >
        {companyStory.heading}
      </motion.h2>

      <div className="space-y-6">
        {companyStory.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default CompanyStory;
