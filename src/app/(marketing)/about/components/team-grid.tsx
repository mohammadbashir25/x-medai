"use client";

import { motion } from "framer-motion";
import { team } from "../data/data";

const TeamGrid = () => {
  return (
    <div className="py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 font-heading text-2xl font-semibold tracking-tight text-foreground md:mb-16"
      >
        The people behind the work
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/40"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-0.5 text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
