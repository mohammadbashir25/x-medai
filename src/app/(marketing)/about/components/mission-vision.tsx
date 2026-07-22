"use client";

import { motion } from "framer-motion";
import { missionVision } from "../data/data";

const cards = [missionVision.mission, missionVision.vision];

const MissionVision = () => {
  return (
    <div className="grid gap-6 py-20 md:grid-cols-2 md:gap-8 md:py-28">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/40 md:p-10"
        >
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {card.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionVision;
