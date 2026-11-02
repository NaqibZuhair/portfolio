import React from "react";
import { Image as ImageIcon, Camera, AlertCircle, FileCode, Award } from "lucide-react";
import { cn } from "../../lib/utils";

export interface PlaceholderMediaProps {
  label: string;
  expectedPath?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "auto";
  type?: "photo" | "project" | "diagram" | "certificate";
  priority?: "required" | "optional";
  className?: string;
  src?: string;
  alt?: string;
}

export const PlaceholderMedia: React.FC<PlaceholderMediaProps> = ({
  label,
  expectedPath,
  aspectRatio = "16/9",
  type = "project",
  priority = "required",
  className,
  src,
  alt = "Portfolio Visual Asset",
}) => {
  // If an actual image is provided and valid, display the real image with graceful fallback
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-xl border border-[#202A3B] bg-[#11141C]", className)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    );
  }

  // Type-specific icons
  const renderIcon = () => {
    switch (type) {
      case "photo":
        return <Camera className="w-8 h-8 text-[#8AB4FF]" />;
      case "certificate":
        return <Award className="w-8 h-8 text-[#65C9AE]" />;
      case "diagram":
        return <FileCode className="w-8 h-8 text-[#8266B5]" />;
      case "project":
      default:
        return <ImageIcon className="w-8 h-8 text-[#8AB4FF]" />;
    }
  };

  const aspectClass = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
    auto: "h-full min-h-[220px]",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-6 text-center rounded-xl overflow-hidden",
        "border border-dashed border-[#202A3B] bg-[#11141C]/80 backdrop-blur-sm",
        "transition-all duration-300 hover:border-[#8AB4FF]/40 hover:bg-[#11141C]",
        aspectClass,
        className
      )}
      role="img"
      aria-label={label}
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08090D]/50 to-[#08090D]/90 pointer-events-none" />

      {/* Priority Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border",
            priority === "required"
              ? "bg-[#8AB4FF]/10 text-[#8AB4FF] border-[#8AB4FF]/30"
              : "bg-[#8266B5]/10 text-[#8266B5] border-[#8266B5]/30"
          )}
        >
          <AlertCircle className="w-3 h-3" />
          {priority === "required" ? "Required Asset" : "Optional Asset"}
        </span>
      </div>

      {/* Icon + Futuristic Reticle */}
      <div className="relative z-10 mb-4 flex items-center justify-center">
        <div className="relative p-4 rounded-2xl bg-[#08090D] border border-[#202A3B] shadow-inner group-hover:border-[#8AB4FF]/40 transition-colors">
          {renderIcon()}
        </div>
      </div>

      {/* Main Visible Placeholder Label */}
      <div className="relative z-10 max-w-[85%]">
        <p className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-[#F1F3F7] uppercase px-3 py-1.5 rounded-md bg-[#08090D]/80 border border-[#202A3B]/80 mb-2">
          {label}
        </p>

        {expectedPath && (
          <p className="font-mono text-[11px] text-[#C6D4E8]/60 truncate max-w-full">
            Target path: <span className="text-[#8AB4FF]/80">{expectedPath}</span>
          </p>
        )}
      </div>

      {/* Corner bracket guides for architectural aesthetic */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#8AB4FF]/30 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#8AB4FF]/30 pointer-events-none" />
    </div>
  );
};

