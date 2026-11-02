import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setIsLoaded(true);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            onComplete?.();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [reducedMotion, onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#08090D] text-[#F1F3F7] p-6 selection:bg-none"
        >
          {/* Subtle background mesh */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
            {/* Monogram emblem */}
            <div className="mb-8 relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#11141C] border border-[#202A3B] flex items-center justify-center shadow-[0_0_30px_rgba(138,180,255,0.15)]">
                <span className="font-headline font-bold text-2xl tracking-tighter text-[#8AB4FF]">
                  NZ
                </span>
              </div>
              <div className="absolute -inset-1 rounded-2xl border border-[#8AB4FF]/20 animate-pulse pointer-events-none" />
            </div>

            {/* Name & Identity */}
            <h1 className="font-headline text-lg sm:text-xl font-bold tracking-tight text-center text-[#F1F3F7] mb-1">
              NAQIB ZUHAIR AL-HUDRI
            </h1>
            <p className="font-mono text-xs text-[#8AB4FF] tracking-wider uppercase mb-8">
              Software Engineer &middot; Applied AI &middot; Leadership
            </p>

            {/* System Status Line */}
            <div className="w-full flex items-center justify-between font-mono text-[11px] text-[#C6D4E8]/60 mb-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#8AB4FF]" />
                INITIALIZING CORE
              </span>
              <span className="text-[#8AB4FF] font-semibold">{progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-[#11141C] border border-[#202A3B] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#8AB4FF] via-[#8266B5] to-[#65C9AE]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Status log tick */}
            <p className="font-mono text-[10px] text-[#C6D4E8]/40 mt-3 text-center">
              Politeknik Negeri Jakarta &middot; Asah AI Engineering Cohort
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

