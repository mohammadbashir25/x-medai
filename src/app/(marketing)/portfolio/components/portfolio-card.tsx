"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "../data/data";

type PortfolioCardProps = {
  item: PortfolioItem;
  index: number;
};

const PortfolioCard = ({ item, index }: PortfolioCardProps) => {
  return (
    <Link
      href={`/portfolio/${item.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${item.image})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Index marker */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.03 }}
          className="absolute left-4 top-4 font-heading text-xs text-white/70"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        {/* Reveal on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="mb-1 inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {item.category}
          </span>
          <h3 className="font-heading text-lg font-semibold text-white">
            {item.title}
          </h3>
        </div>

        {/* Corner accent */}
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>

      {/* Static body */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-heading text-base font-semibold text-foreground">
            {item.title}
          </h3>
          <span className="text-xs text-muted-foreground">{item.year}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioCard;