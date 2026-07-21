import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const CTAButton = ({ href, children, variant = "primary", className }: CTAButtonProps) => {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground",
          className
        )}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -z-0 rounded-full bg-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
    </Link>
  );
};

export default CTAButton;