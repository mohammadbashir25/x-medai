import { motion, type Variants } from "framer-motion";
import type { Pillar } from "./data";

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const PillarCard = ({ pillar }: { pillar: Pillar }) => {
  return (
    <motion.div
      variants={pillarVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative pl-12 lg:pl-0 lg:pt-8"
    >
      {/* desktop branch — short stub connecting this column down from the shared spine */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 hidden h-8 w-px bg-primary/30 lg:block"
      />

      {/* node marker — sits on the mobile vertical spine, or atop the desktop branch */}
      <span
        aria-hidden="true"
        className="absolute left-4 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125 lg:left-0 lg:top-0 lg:translate-x-[-3.5px]"
      />

      <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
        {pillar.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {pillar.description}
      </p>
    </motion.div>
  );
};

export default PillarCard;