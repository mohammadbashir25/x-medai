"use client";

import { motion } from "framer-motion";
import { Workflow, LineChart, Layers, Eye, type LucideIcon } from "lucide-react";
import { values } from "../data/data";

const ICON_MAP: Record<string, LucideIcon> = {
  Workflow,
  LineChart,
  Layers,
  Eye,
};

const ValuesGrid = () => {
  return (
    <div className="py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 font-heading text-2xl font-semibold tracking-tight text-foreground md:mb-16"
      >
        What we stand for
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => {
          const Icon = ICON_MAP[value.icon] ?? Workflow;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={20} />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ValuesGrid;
