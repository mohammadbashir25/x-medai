"use client";

import { motion } from "framer-motion";
import { timeline } from "../data/data";

const Timeline = () => {
  return (
    <div className="py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 font-heading text-2xl font-semibold tracking-tight text-foreground md:mb-16"
      >
        How we got here
      </motion.h2>

      <div className="relative mx-auto max-w-2xl">
        {/* Connecting line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background" />
              <p className="font-heading text-sm font-medium text-primary">{item.year}</p>
              <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
