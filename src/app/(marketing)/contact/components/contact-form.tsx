"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { contactFormCopy } from "../data/data";

type Status = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: wire up to your actual endpoint / email service
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {contactFormCopy.heading}
      </h3>

      <form onSubmit={handleSubmit} className="mt-4 space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">
            {contactFormCopy.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange("name")}
            placeholder={contactFormCopy.namePlaceholder}
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-300 focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">
            {contactFormCopy.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange("email")}
            placeholder={contactFormCopy.emailPlaceholder}
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-300 focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">
            {contactFormCopy.messageLabel}
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={values.message}
            onChange={handleChange("message")}
            placeholder={contactFormCopy.messagePlaceholder}
            className="w-full resize-y rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-300 focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-300",
              "hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
            )}
          >
            {status === "submitting" ? contactFormCopy.submittingLabel : contactFormCopy.submitLabel}
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-primary"
              >
                {contactFormCopy.successMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
