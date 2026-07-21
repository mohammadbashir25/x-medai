import { motion, type Variants } from "framer-motion";
import { getInitials, type Testimonial } from "./data";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const TestimonialCard = ({
  testimonial,
  offset = false,
}: {
  testimonial: Testimonial;
  offset?: boolean;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`h-full rounded-2xl border border-transparent bg-card p-6 transition-colors duration-300 hover:border-white/10 sm:p-7 ${
        offset ? "sm:mt-8" : ""
      }`}
    >
      <p className="text-[15px] leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-medium text-primary">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;