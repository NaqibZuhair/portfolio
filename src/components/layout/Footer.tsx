import React from "react";
import { ArrowUp, Mail, FileText } from "lucide-react";
import { profileData } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#202A3B] bg-[#08090D] pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#8AB4FF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#202A3B]/60">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#11141C] border border-[#202A3B] flex items-center justify-center">
                <span className="font-headline font-bold text-sm text-[#8AB4FF]">NZ</span>
              </div>
              <span className="font-headline text-lg font-bold tracking-tight text-[#F1F3F7]">
                NAQIB ZUHAIR AL-HUDRI
              </span>
            </div>
            <p className="text-sm text-[#C6D4E8] max-w-sm leading-relaxed">
              Software Engineer &middot; Applied AI &middot; Leadership. Building scalable software solutions, practical intelligent systems, and impactful collaboration.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#65C9AE] animate-ping" />
              <span className="font-mono text-xs text-[#65C9AE]">
                Available for internships &amp; high-impact engineering opportunities
              </span>
            </div>
          </div>

          {/* Quick Sitemap */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-mono text-[#C6D4E8]">
              <li>
                <a href="/#about" className="hover:text-[#8AB4FF] transition-colors">
                  01. About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-[#8AB4FF] transition-colors">
                  02. Technical Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-[#8AB4FF] transition-colors">
                  03. Featured Projects
                </a>
              </li>
              <li>
                <a href="/#leadership" className="hover:text-[#8AB4FF] transition-colors">
                  04. Leadership &amp; Impact
                </a>
              </li>
              <li>
                <a href="/#beyond-tech" className="hover:text-[#8AB4FF] transition-colors">
                  05. Beyond Technology
                </a>
              </li>
              <li>
                <a href="/#achievements" className="hover:text-[#8AB4FF] transition-colors">
                  06. Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              Connect Directly
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#11141C] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] hover:text-[#8AB4FF] hover:border-[#8AB4FF]/50 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#8AB4FF]" />
                LinkedIn
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#11141C] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] hover:text-[#8AB4FF] hover:border-[#8AB4FF]/50 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#8AB4FF]" />
                GitHub
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#11141C] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] hover:text-[#8AB4FF] hover:border-[#8AB4FF]/50 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 text-[#8AB4FF]" />
                Email
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Naqib_Zuhair_CV.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#11141C] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] hover:text-[#65C9AE] hover:border-[#65C9AE]/50 transition-all"
                aria-label="Download CV"
              >
                <FileText className="w-4 h-4 text-[#65C9AE]" />
                Download CV
              </a>
            </div>

            <p className="font-mono text-xs text-[#C6D4E8] pt-2">
              Based in Jakarta, Indonesia &middot; Politeknik Negeri Jakarta
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#C6D4E8]">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Engineered with Precision &amp; Purpose</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#8AB4FF] hover:text-[#F1F3F7] transition-colors p-1 cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
