"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const DEFAULT_PHONE_NUMBER = "15551234567";
const DEFAULT_MESSAGE = "Hi xMedia, I'd like to talk about a project.";

type WhatsAppButtonProps = {
  phoneNumber?: string;
  defaultMessage?: string;
};

const WhatsAppButton = ({
  phoneNumber = DEFAULT_PHONE_NUMBER,
  defaultMessage = DEFAULT_MESSAGE,
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group sm:bottom-8 sm:right-8">
      
      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"

        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}

        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}

        className="relative flex h-14 w-14 items-center justify-center rounded-full
        border border-white/10 
        bg-secondary text-foreground
        shadow-[0_8px_24px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:bg-primary hover:text-primary-foreground
        hover:shadow-[0_0_25px_rgba(72,181,0,0.5)]"
      >
        {/* Subtle pulse (NOT infinite spam) */}
        <motion.span
          className="absolute inset-0 rounded-full border border-primary/40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 3, // 👈 important (calm UX)
            ease: "easeOut",
          }}
        />

        {/* Icon */}
        <FaWhatsapp size={26} />
      </motion.a>

      {/* Tooltip (ONLY on hover) */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 rounded-md 
        bg-secondary px-3 py-1.5 text-sm text-foreground shadow-lg 
        opacity-0 transition-all duration-200 group-hover:flex group-hover:opacity-100"
      >
        Chat with us
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;