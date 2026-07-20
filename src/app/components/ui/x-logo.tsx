import { useId } from "react";
import { cn } from "@/lib/utils"; // adjust path if your cn() util lives elsewhere

type XLogoSize = "sm" | "md" | "lg" | "xl";
type XLogoVariant = "navbar" | "hero";

type XLogoProps = {
  size?: XLogoSize;
  variant?: XLogoVariant;
  className?: string;
};

const SIZE_MAP: Record<XLogoSize, number> = {
  sm: 28,
  md: 36,
  lg: 56,
  xl: 96,
};

export const XLogo = ({ size = "md", variant = "navbar", className }: XLogoProps) => {
  const px = SIZE_MAP[size];

  return variant === "hero" ? (
    <XLogoHero px={px} className={className} />
  ) : (
    <XLogoNavbar px={px} className={className} />
  );
};

export default XLogo;

// ------------------------------------------------------------------
// Navbar variant — flat, sharp, minimal. No filters/gradients: cheap
// to render at small sizes and stays crisp at 32–40px.
// ------------------------------------------------------------------
const XLogoNavbar = ({ px, className }: { px: number; className?: string }) => {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="xMedia"
      className={cn("shrink-0", className)}
    >
      <path
        d="M18 18 L46 50 L18 82 H34 L54 58 L74 82 H90 L60 50 L90 18 H74 L54 42 L34 18 Z"
        fill="#48b500"
      />
    </svg>
  );
};

// ------------------------------------------------------------------
// Hero variant — layered, gradient-filled, glowing "energy core."
// useId() keeps gradient/filter ids unique per instance so multiple
// <XLogo variant="hero" /> on one page never collide.
// ------------------------------------------------------------------
const XLogoHero = ({ px, className }: { px: number; className?: string }) => {
  const uid = useId().replace(/:/g, "");

  const gradientId = `xlogo-grad-${uid}`;
  const glowId = `xlogo-glow-${uid}`;
  const highlightId = `xlogo-highlight-${uid}`;

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="xMedia"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6cc823" />
          <stop offset="55%" stopColor="#48b500" />
          <stop offset="100%" stopColor="#2f7a00" />
        </linearGradient>

        <radialGradient id={highlightId} cx="35%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#f8faf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f8faf8" stopOpacity="0" />
        </radialGradient>

        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* soft back layer — offset + blurred, gives the mark depth against the glass core */}
      <path
        d="M18 18 L46 50 L18 82 H34 L54 58 L74 82 H90 L60 50 L90 18 H74 L54 42 L34 18 Z"
        fill="#48b500"
        opacity="0.35"
        transform="translate(2 3)"
        filter={`url(#${glowId})`}
      />

      {/* main gradient-filled mark with glow */}
      <path
        d="M18 18 L46 50 L18 82 H34 L54 58 L74 82 H90 L60 50 L90 18 H74 L54 42 L34 18 Z"
        fill={`url(#${gradientId})`}
        filter={`url(#${glowId})`}
      />

      {/* glass highlight — sits on top, unclipped is fine since it's low-opacity and additive */}
      <path
        d="M18 18 L46 50 L18 82 H34 L54 58 L74 82 H90 L60 50 L90 18 H74 L54 42 L34 18 Z"
        fill={`url(#${highlightId})`}
      />
    </svg>
  );
};