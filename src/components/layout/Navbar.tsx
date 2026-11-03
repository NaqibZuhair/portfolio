import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { profileData } from "../../data/profile";
import { cn } from "../../lib/utils";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Leadership", href: "/#leadership" },
    { label: "Beyond Tech", href: "/#beyond-tech" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-t-0",
        scrolled
          ? "bg-[#08090D]/90 backdrop-blur-md border-b border-[#202A3B] py-3 shadow-[0_4px_20px_-4px_rgba(8,9,13,0.8)]"
          : "bg-transparent py-5 border-b border-transparent"
      )}
    >
      {/* Top subtle blue accent theme highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8AB4FF]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          to="/"
          className="group flex items-center gap-3 font-mono focus:outline-none"
          aria-label="Naqib Zuhair Homepage"
        >
          <div className="w-9 h-9 rounded-lg bg-[#11141C] border border-[#202A3B] flex items-center justify-center group-hover:border-[#8AB4FF] group-hover:shadow-[0_0_15px_rgba(138,180,255,0.3)] transition-all">
            <span className="font-headline font-bold text-sm text-[#8AB4FF]">NZ</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-headline text-sm font-bold tracking-tight text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors">
              NAQIB ZUHAIR
            </span>
            <span className="text-[10px] text-[#C6D4E8] font-mono tracking-wider uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#11141C]/80 border border-[#202A3B] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs font-mono text-[#C6D4E8] hover:text-[#8AB4FF] hover:bg-[#202A3B]/50 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Resume & Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Naqib_Zuhair_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#C6D4E8] hover:text-[#F1F3F7] bg-[#11141C] border border-[#202A3B] rounded-lg hover:border-[#8AB4FF]/50 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#8AB4FF]" />
            <span>CV</span>
          </a>

          <a
            href="/#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-mono font-semibold text-[#08090D] bg-[#8AB4FF] rounded-lg hover:bg-[#A6C8FF] hover:shadow-[0_0_20px_rgba(138,180,255,0.4)] transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#11141C] border border-[#202A3B] text-[#C6D4E8] hover:text-[#F1F3F7] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090D]/95 border-b border-[#202A3B] backdrop-blur-xl px-6 py-6 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-mono py-2 text-[#C6D4E8] hover:text-[#8AB4FF] border-b border-[#202A3B]/40"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Naqib_Zuhair_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-mono text-sm border border-[#202A3B] bg-[#11141C] text-[#F1F3F7]"
              >
                <FileText className="w-4 h-4 text-[#8AB4FF]" />
                Download CV
              </a>
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-mono text-sm font-semibold bg-[#8AB4FF] text-[#08090D]"
              >
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
