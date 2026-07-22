"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ServiceBlock as ServiceBlockType } from "./data/data";
import { cn } from "@/lib/utils";

const ServiceBlock = ({
  service,
  reversed,
  tinted,
}: {
  service: ServiceBlockType;
  reversed: boolean;
  tinted: boolean;
}) => {
  return (
    <div className={cn("relative", tinted && "bg-card/30")}>
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div
          className={cn(
            "flex flex-col items-center gap-10 lg:flex-row lg:gap-16",
            reversed && "lg:flex-row-reverse"
          )}
        >
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <span className="font-heading text-sm text-primary/70">{service.index}</span>

            <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
              {service.title}
            </h3>

            <p className="mt-3 text-lg font-medium leading-snug text-foreground/90">
              {service.statement}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {service.explanation}
            </p>

            <ul className="mt-6 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl  ">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="w-full h-full hover:scale-102 transition-transform duration-300 ease-in-out "
                
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;