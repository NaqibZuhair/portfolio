import React, { useState } from "react";
import { FileText, Send, Check, Copy, ArrowUpRight } from "lucide-react";
import { profileData } from "../../data/profile";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Magnetic } from "../animations/Magnetic";
import { ScrollReveal } from "../animations/ScrollReveal";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8AB4FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-[#8266B5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider mb-2">
              <span>07 &mdash; Contact &amp; Collaboration</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F1F3F7] tracking-tight">
              Have an idea? Let's build something meaningful.
            </h2>
            <p className="text-base sm:text-lg text-[#C6D4E8]/80 max-w-2xl mx-auto font-sans leading-relaxed pt-2">
              Whether you are looking for a dedicated software engineer, exploring applied AI engineering, or seeking a proven leader and communicator for impactful initiatives—let's connect.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Interaction Card */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 sm:p-12 border-[#202A3B] bg-[#11141C]/80 backdrop-blur-xl shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#65C9AE]/10 text-[#65C9AE] border border-[#65C9AE]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65C9AE] animate-ping" />
                  Open to Opportunities
                </span>
              </div>

              {/* Direct Email Pill with Copy */}
              <div className="space-y-6 pt-4 text-center">
                <p className="font-mono text-xs text-[#C6D4E8]/60 uppercase tracking-widest">
                  Direct Inquiries &amp; Correspondences
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-headline text-xl sm:text-2xl lg:text-3xl font-bold text-[#8AB4FF] hover:text-[#A6C8FF] transition-colors underline decoration-[#8AB4FF]/40 underline-offset-8"
                  >
                    {profileData.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-[#08090D] border border-[#202A3B] text-[#C6D4E8] hover:text-[#8AB4FF] hover:border-[#8AB4FF]/50 transition-all cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#65C9AE]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copied && (
                  <p className="font-mono text-xs text-[#65C9AE] animate-in fade-in">
                    Email copied to clipboard!
                  </p>
                )}

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                  <Magnetic strength={0.3}>
                    <Button
                      href={`mailto:${profileData.email}?subject=Collaboration%20Inquiry%20-%20Naqib%20Zuhair`}
                      size="lg"
                      variant="primary"
                      leftIcon={<Send className="w-4 h-4" />}
                    >
                      Send Message
                    </Button>
                  </Magnetic>

                  <Magnetic strength={0.3}>
                    <Button
                      href={profileData.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Naqib_Zuhair_CV.pdf"
                      size="lg"
                      variant="outline"
                      leftIcon={<FileText className="w-4 h-4 text-[#8AB4FF]" />}
                    >
                      Download Official CV
                    </Button>
                  </Magnetic>
                </div>

                {/* Verified Social Profiles Strip */}
                <div className="pt-8 border-t border-[#202A3B]/60 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#08090D] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] hover:text-[#8AB4FF] hover:border-[#8AB4FF]/40 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#8AB4FF]" />
                    <span>linkedin.com/in/naqibzuhair</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C6D4E8]/40" />
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#08090D] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] hover:text-[#8AB4FF] hover:border-[#8AB4FF]/40 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-[#8AB4FF]" />
                    <span>github.com/naqibzuhair</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C6D4E8]/40" />
                  </a>
                </div>

                {/* Location Stamp */}
                <p className="font-mono text-xs text-[#C6D4E8]/50 pt-2">
                  Politeknik Negeri Jakarta &middot; Jakarta, Indonesia (UTC+7)
                </p>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
