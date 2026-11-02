import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cn } from "../../lib/utils";

export interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  delay = 0,
  as: Component = "h1",
}) => {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={cn("overflow-hidden inline-flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + index * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

