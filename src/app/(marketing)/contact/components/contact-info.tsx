"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { contactLocation, contactSchedule } from "../data/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const ContactInfo = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {contactLocation.heading}
        </h3>
        <div className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
          {contactLocation.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {contactSchedule.heading}
        </h3>

        <p className="mt-4 text-sm font-medium text-foreground">
          {contactSchedule.hoursLabel}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {contactSchedule.hours}
          <br />
          {contactSchedule.hoursTime}
        </p>

        <p className="mt-6 text-sm font-medium text-foreground">
          {contactSchedule.callLabel}
        </p>
        <a
          href={`tel:${contactSchedule.phone.replace(/[^\d+]/g, "")}`}
          className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-300 hover:text-accent"
        >
          <Phone size={14} />
          {contactSchedule.phone}
        </a>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
