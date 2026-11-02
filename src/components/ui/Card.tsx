import React from "react";
import { cn } from "../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "solid" | "bordered";
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = "glass", interactive = false, ...props }, ref) => {
    const variantClasses = {
      default: "bg-[#11141C] border border-[#202A3B]",
      glass: "bg-[#11141C]/75 backdrop-blur-md border border-[#202A3B]/80",
      solid: "bg-[#08090D] border border-[#202A3B]",
      bordered: "bg-transparent border border-[#202A3B] hover:border-[#8AB4FF]/50",
    }[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300 relative overflow-hidden",
          variantClasses,
          interactive &&
            "hover:border-[#8AB4FF]/40 hover:bg-[#161B26]/80 hover:shadow-[0_12px_30px_-10px_rgba(138,180,255,0.12)] hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

