"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PORTFOLIO_CATEGORIES, type PortfolioCategory } from "../data/data";

type CategoryFilterProps = {
  active: "All" | PortfolioCategory;
  onChange: (category: "All" | PortfolioCategory) => void;
};

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {PORTFOLIO_CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="portfolio-filter-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
