"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CIRCLE_SIZE = 32;
const DOT_SIZE = 6;

const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const [hoveringLink, setHoveringLink] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 32, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 32, mass: 0.5 });

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const target = event.target as HTMLElement;
      setHoveringLink(!!target.closest("a, button"));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* center dot — snaps instantly, no spring lag */}
      <motion.div
        aria-hidden="true"
        style={{ x: mouseX, y: mouseY, width: DOT_SIZE, height: DOT_SIZE }}
        animate={{ scale: hoveringLink ? 0 : 1 }}
        transition={{ scale: { duration: 0.2 } }}
        className="pointer-events-none fixed left-0 top-0 z-[71] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
      />

      {/* outer ring — trails behind on the spring */}
      <motion.div
        aria-hidden="true"
        style={{ x: springX, y: springY, width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
        animate={{ scale: hoveringLink ? 1.6 : 1 }}
        transition={{ scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
        className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-primary/10 mix-blend-difference"
      />
    </>
  );
};

export default CursorGlow;