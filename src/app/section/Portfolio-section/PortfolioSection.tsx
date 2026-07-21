"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "./Project";
import ProjectList from "./ProjectList";
import ProjectShowcase from "./ProjectShowcase";

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="relative bg-[#0e0f0e] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#48b500]/[0.05] blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#48b500]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight max-w-xl">
              Work that speaks{" "}
              <span className="text-[#48b500]">for itself.</span>
            </h2>
          </div>

          <p className="text-[#9ca3af] leading-relaxed max-w-sm">
            A curated look at the products, brands, and campaigns we&apos;ve
            built — each one designed to move a real business metric.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <ProjectList
              projects={projects}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:sticky lg:top-24 self-start"
          >
            <ProjectShowcase project={activeProject} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}