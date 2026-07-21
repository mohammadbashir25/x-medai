import { motion } from "framer-motion";
import { getInitials, type Testimonial } from "./data";

const FeaturedTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-12 sm:px-14 sm:py-16"
    >
      {/* decorative oversized quote mark — purely typographic, sits behind the copy */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-6 z-0 select-none font-heading text-[9rem] font-semibold leading-none text-primary/10 sm:text-[12rem]"
      >
        &ldquo;
      </span>

      <span className="relative z-10 block text-[10px] font-medium uppercase tracking-[0.25em] text-primary/70">
        Featured
      </span>

      <p className="relative z-10 mt-6 font-heading text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.75rem]">
        {testimonial.quote}
      </p>

      <div className="relative z-10 mt-8 flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedTestimonial;