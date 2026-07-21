"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Project } from "./type";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="relative">
      {/* Glow behind the panel */}
      <div className="absolute -inset-6 rounded-3xl bg-[#48b500]/10 blur-3xl" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-[#1f201f]/60 backdrop-blur-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Project Image Placeholder */}
            <div className="relative aspect-[4/3] w-full bg-[#1f201f] border-b border-white/[0.06] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#48b500]/[0.06] to-transparent" />
              <span className="text-sm text-[#9ca3af] tracking-wide">
                {/* Replace with <Image src="..." alt={project.title} fill className="object-cover" /> */}
                Project Image — {project.title}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs uppercase tracking-[0.15em] text-[#48b500]">
                  {project.category}
                </span>
                <span className="text-xs text-[#9ca3af]">{project.year}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
                {project.title}
              </h3>

              <p className="text-[#9ca3af] leading-relaxed mb-6 max-w-md">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-[#9ca3af] bg-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#48b500] transition-colors duration-300"
              >
                View case study
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}