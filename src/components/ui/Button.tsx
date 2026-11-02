import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "electric";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  download?: string | boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      to,
      external = false,
      target,
      rel,
      download,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-mono text-sm tracking-wide font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8AB4FF]/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base font-semibold",
    }[size];

    const variantClasses = {
      primary:
        "bg-[#8AB4FF] text-[#08090D] font-semibold hover:bg-[#A6C8FF] hover:shadow-[0_0_25px_rgba(138,180,255,0.4)]",
      secondary:
        "bg-[#11141C] text-[#F1F3F7] border border-[#202A3B] hover:bg-[#202A3B] hover:border-[#8AB4FF]/40",
      outline:
        "bg-transparent text-[#F1F3F7] border border-[#8AB4FF]/50 hover:bg-[#8AB4FF]/10 hover:border-[#8AB4FF]",
      ghost:
        "bg-transparent text-[#C6D4E8] hover:text-[#F1F3F7] hover:bg-[#11141C]/80",
      electric:
        "bg-gradient-to-r from-[#8AB4FF] to-[#65C9AE] text-[#08090D] font-bold hover:shadow-[0_0_30px_rgba(101,201,174,0.35)]",
    }[variant];

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={cn(baseClasses, sizeClasses, variantClasses, className)}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          target={target || (external ? "_blank" : undefined)}
          rel={rel || (external ? "noopener noreferrer" : undefined)}
          download={typeof download === "string" ? download : undefined}
          className={cn(baseClasses, sizeClasses, variantClasses, className)}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={cn(baseClasses, sizeClasses, variantClasses, className)} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
