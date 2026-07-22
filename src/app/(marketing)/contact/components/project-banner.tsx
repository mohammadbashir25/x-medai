"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectBanner } from "../data/data";

const ProjectBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {projectBanner.heading}
        </h2>

        <a
          href="#contact-form"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
        >
          {projectBanner.buttonLabel}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>

      <div className="mt-8 h-px w-full bg-border" />

      <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {projectBanner.description}
      </p>
    </motion.div>
  );
};

export default ProjectBanner;
