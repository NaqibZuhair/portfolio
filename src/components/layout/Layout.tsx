import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "../ui/CustomCursor";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useSmoothScroll();

  // Scroll to anchor or top on navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090D] text-[#F1F3F7] relative selection:bg-[#8AB4FF]/20 selection:text-[#8AB4FF]">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 w-full pt-16 sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

