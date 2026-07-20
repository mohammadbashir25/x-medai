"use client";

import XLogo from "../../components/ui/x-logo"; // adjust path if it lives elsewhere
import { motion } from "framer-motion";
import OrbitCard from "./OrbitedCard";
import { ORBIT_ITEMS, ORBIT_DURATION, AMBIENT_PARTICLES } from "./hero-date";

const HeroVisual = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center">
      {/* ---- CORE (all breakpoints) ---- */}
      <div className="relative flex h-[280px] w-full max-w-[300px] items-center justify-center sm:h-[560px] sm:max-w-[560px] lg:h-[760px] lg:max-w-[820px] lg:[--orbit-radius:220px] sm:[--orbit-radius:200px] xl:[--orbit-radius:250px]">
        <div
          aria-hidden="true"
          className="absolute h-[160px] w-[160px] rounded-full bg-primary/10 blur-[50px] sm:h-[340px] sm:w-[340px] sm:blur-[90px] lg:h-[480px] lg:w-[480px] lg:blur-[120px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-[120px] w-[120px] rounded-full bg-primary/15 blur-[30px] sm:h-[240px] sm:w-[240px] sm:blur-[55px] lg:h-[320px] lg:w-[320px] lg:blur-[70px]"
        />

        {/* particles + reference ring only from sm: up — mobile has no orbit to reference */}
        <div className="hidden sm:contents">
          {AMBIENT_PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
              className="absolute rounded-full bg-primary/60"
            />
          ))}

          <div
            aria-hidden="true"
            className="absolute rounded-full border border-primary/10"
            style={{
              width: "calc(var(--orbit-radius) * 2)",
              height: "calc(var(--orbit-radius) * 2)",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          }}
          className="relative z-20 flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-card/90 via-card/60 to-background/50 shadow-[0_0_50px_rgba(72,181,0,0.3)] backdrop-blur-xl sm:h-28 sm:w-28 sm:rounded-[2rem] sm:shadow-[0_0_70px_rgba(72,181,0,0.3)] lg:h-30 lg:w-30 lg:shadow-[0_0_90px_rgba(72,181,0,0.3)] xl:h-36 xl:w-36 xl:shadow-[0_0_90px_rgba(72,181,0,0.3)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 -top-4 h-14 w-14 rotate-45 bg-gradient-to-br from-white/15 to-transparent blur-md sm:-left-6 sm:-top-6 sm:h-24 sm:w-24"
          />

          <div className="sm:hidden">
            <XLogo size="md" variant="hero" />
          </div>
          <div className="hidden sm:block xl:hidden">
            <XLogo size="lg" variant="hero" />
          </div>
          <div className="hidden xl:block">
            <XLogo size="xl" variant="hero" />
          </div>
        </motion.div>

        {/* rotating orbit — sm: and up only */}
        <motion.div
          className="absolute inset-0 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            rotate: {
              duration: ORBIT_DURATION,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {ORBIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="absolute left-1/2 top-1/2 z-10"
              style={{
                transform: `rotate(${item.angle}deg) translate(var(--orbit-radius)) rotate(${-item.angle}deg)`,
              }}
            >
              <motion.div
                className="-translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <OrbitCard item={item} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---- MOBILE-ONLY: static grid, no orbit, no overlap risk ---- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-6 grid w-full grid-cols-2 gap-3 px-2 sm:hidden"
      >
        {ORBIT_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="flex items-center gap-2 rounded-xl border border-primary/20 bg-card/60 p-3 backdrop-blur-md"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10">
                <Icon className="h-3.5 w-3.5 text-primary" />
              </span>
              <span className="text-xs font-medium text-foreground">
                {item.title}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HeroVisual;
