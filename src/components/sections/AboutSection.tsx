import React from "react";
import { GraduationCap, Brain, Users, Code } from "lucide-react";
import { profileData } from "../../data/profile";
import { ScrollReveal } from "../animations/ScrollReveal";

export const AboutSection: React.FC = () => {
  const getHighlightIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-4 h-4 text-[#8AB4FF]" />;
      case 1:
        return <Brain className="w-4 h-4 text-[#65C9AE]" />;
      case 2:
      default:
        return <Users className="w-4 h-4 text-[#8266B5]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="space-y-2 mb-14">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              <span>01 &mdash; About Me</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
              More than just writing code.
            </h2>
            <p className="text-sm sm:text-base text-[#C6D4E8] max-w-2xl font-mono">
              Engineering reliable software systems while articulating ideas and mobilizing collaborative teams.
            </p>
          </div>
        </ScrollReveal>

        {/* Split Layout: Concise Narrative + 3 Identity Highlights & Portrait Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative Intro + 3 Short Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg text-[#F1F3F7] leading-relaxed font-sans font-normal">
                {profileData.aboutStory.intro}
              </p>
            </ScrollReveal>

            {/* 3 Identity Highlights */}
            <div className="space-y-3 pt-2">
              {profileData.aboutStory.highlights.map((h, idx) => (
                <ScrollReveal key={idx} delay={0.15 + idx * 0.08}>
                  <div className="p-4 rounded-xl bg-[#11141C] border border-[#202A3B] hover:border-[#8AB4FF]/50 transition-colors">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-[#08090D] border border-[#202A3B]">
                          {getHighlightIcon(idx)}
                        </div>
                        <h3 className="font-headline font-semibold text-base text-[#F1F3F7]">
                          {h.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-[#8AB4FF] px-2 py-0.5 rounded bg-[#08090D] border border-[#202A3B] uppercase">
                        {h.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#C6D4E8] leading-relaxed pl-9">
                      {h.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Portrait Card */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-[#202A3B] bg-[#08090D]">
                <img
                  src="/images/profile/naqib-about.JPG"
                  alt="Naqib Zuhair Al-Hudri during a campus leadership event"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Key Affiliations Snapshot */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm">
                    <GraduationCap className="w-4 h-4 text-[#8AB4FF] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#F1F3F7]">
                        Politeknik Negeri Jakarta
                      </div>
                      <div className="text-xs font-mono text-[#C6D4E8]">
                        {profileData.education.degree} (2024–2028 expected)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Brain className="w-4 h-4 text-[#65C9AE] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#F1F3F7]">
                        Asah AI Engineering Cohort
                      </div>
                      <div className="text-xs font-mono text-[#C6D4E8]">
                        Selected Fellow &middot; Dicoding &amp; GoTo
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#202A3B]/60 flex items-center justify-between text-xs font-mono text-[#C6D4E8]">
                  <span>Based in Jakarta, ID</span>
                  <span className="text-[#8AB4FF]">Active Learner &amp; Builder</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
