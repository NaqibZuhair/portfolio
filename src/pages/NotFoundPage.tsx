import React from "react";
import { Terminal, Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden bg-[#08090D]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8AB4FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full p-8 rounded-2xl bg-[#11141C] border border-[#202A3B] text-center relative z-10 space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#08090D] border border-[#202A3B] flex items-center justify-center mx-auto text-[#8AB4FF]">
          <Terminal className="w-8 h-8 animate-pulse" />
        </div>

        <div>
          <span className="font-mono text-xs text-[#8AB4FF] uppercase tracking-widest block mb-2">
            ERR://404_ROUTE_UNDEFINED
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#F1F3F7]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#C6D4E8]/70 mt-3 font-mono leading-relaxed">
            The requested digital coordinate does not exist or has been relocated within the workspace.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button to="/#projects" variant="secondary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Explore Projects
          </Button>
        </div>
      </div>
    </div>
  );
};
