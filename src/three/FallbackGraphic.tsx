import React from "react";
import { cn } from "../lib/utils";

export const FallbackGraphic: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center overflow-hidden",
        className
      )}
      aria-label="3D Abstract Futuristic Visual Representation"
    >
      {/* Radial glow background */}
      <div className="absolute w-72 h-72 rounded-full bg-[#8AB4FF]/15 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-60 h-60 rounded-full bg-[#8266B5]/20 blur-2xl pointer-events-none" />

      {/* SVG Geometric wireframe */}
      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-[320px] aspect-square text-[#8AB4FF] animate-[spin_40s_linear_infinite]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="120" stroke="#202A3B" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="150" cy="150" r="90" stroke="#8AB4FF" strokeWidth="1" strokeOpacity="0.4" />
        <polygon
          points="150,40 245,95 245,205 150,260 55,205 55,95"
          stroke="#8AB4FF"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        />
        <polygon
          points="150,70 219,110 219,190 150,230 81,190 81,110"
          stroke="#8266B5"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        <line x1="150" y1="40" x2="150" y2="260" stroke="#8AB4FF" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="55" y1="95" x2="245" y2="205" stroke="#8AB4FF" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="55" y1="205" x2="245" y2="95" stroke="#8AB4FF" strokeWidth="1" strokeOpacity="0.3" />

        {/* Central Core */}
        <circle cx="150" cy="150" r="28" fill="#11141C" stroke="#65C9AE" strokeWidth="2" />
        <circle cx="150" cy="150" r="10" fill="#8AB4FF" />
      </svg>
    </div>
  );
};

