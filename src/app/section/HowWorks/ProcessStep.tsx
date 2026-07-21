import { motion, type Variants } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "./data";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProcessStep = ({ step }: { step: ProcessStepType }) => {
  return (
    <motion.div
      variants={stepVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative -m-4 rounded-2xl border border-transparent p-4 pl-12 transition-colors duration-300 hover:border-white/10 sm:pl-4"
    >
      {/* connecting line — mobile: vertical, left rail */}
      <span
        aria-hidden="true"
        className="absolute left-4 top-1 h-full w-px bg-white/10 sm:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-4 top-1 h-2 w-2 -translate-x-[3.5px] rounded-full bg-primary sm:hidden"
      />

      <div className="flex items-baseline gap-3 sm:mb-6">
        <span className="font-heading text-sm text-primary/70 transition-colors duration-300 group-hover:text-primary">
          {step.number}
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
          {step.phase}
        </span>
      </div>

      <h3 className="font-heading text-lg font-medium leading-snug text-foreground sm:text-xl">
        {step.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;