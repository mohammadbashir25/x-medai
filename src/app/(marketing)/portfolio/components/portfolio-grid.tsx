"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_ITEMS, type PortfolioCategory } from "../data/data";
import CategoryFilter from "./category-filter";
import PortfolioCard from "./portfolio-card";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | PortfolioCategory>("All");

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <div>
      <div className="mb-12 md:mb-16">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="mb-8 flex items-center justify-between border-b border-border/60 pb-4">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{filteredItems.length}</span>{" "}
          project{filteredItems.length !== 1 ? "s" : ""}
        </p>
        <p className="font-heading text-sm text-muted-foreground">
          {String(filteredItems.length).padStart(2, "0")} /{" "}
          {String(PORTFOLIO_ITEMS.length).padStart(2, "0")}
        </p>
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PortfolioCard item={item} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="py-20 text-center text-muted-foreground">
          No projects in this category yet.
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
