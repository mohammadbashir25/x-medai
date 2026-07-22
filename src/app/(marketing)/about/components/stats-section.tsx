"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/data";

// Splits "120+" -> { number: 120, suffix: "+" }, "98%" -> { number: 98, suffix: "%" }
const parseStatValue = (value: string) => {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
};

const StatItem = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const { number, suffix } = parseStatValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(number * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, number]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-8 rounded-2xl border border-border bg-card px-6 py-12 md:grid-cols-4 md:py-16"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </motion.div>
  );
};

export default StatsSection;
