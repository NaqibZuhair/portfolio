import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "electric" | "violet" | "mint" | "outline" | "subtle";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "default",
  size = "sm",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs sm:text-sm",
  }[size];

  const variantClasses = {
    default: "bg-[#202A3B]/60 text-[#C6D4E8] border border-[#202A3B]",
    electric: "bg-[#8AB4FF]/10 text-[#8AB4FF] border border-[#8AB4FF]/30",
    violet: "bg-[#8266B5]/15 text-[#C6D4E8] border border-[#8266B5]/40",
    mint: "bg-[#65C9AE]/10 text-[#65C9AE] border border-[#65C9AE]/30",
    outline: "bg-transparent text-[#C6D4E8] border border-[#202A3B]",
    subtle: "bg-[#11141C] text-[#C6D4E8]/80",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-mono tracking-wide font-medium transition-colors",
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

