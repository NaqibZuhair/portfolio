import React from "react";
import { GraduationCap, Brain, Users, Code, Award, CheckCircle2 } from "lucide-react";
import { profileData } from "../../data/profile";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { ScrollReveal } from "../animations/ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="space-y-2 mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              <span>01 &mdash; About Me</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
              More than just writing code.
            </h2>
            <p className="text-sm sm:text-base text-[#C6D4E8]/70 max-w-2xl font-mono">
              Engineering robust software systems while articulating ideas and mobilizing people.
            </p>
          </div>
        </ScrollReveal>

        {/* Split Layout: Editorial Narrative & Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#C6D4E8]/90 text-base sm:text-lg leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p>{profileData.aboutStory.intro}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-[#11141C] border border-[#202A3B] space-y-3">
                <div className="flex items-center gap-3 text-[#8AB4FF]">
                  <Code className="w-5 h-5 shrink-0" />
                  <h3 className="font-headline font-semibold text-lg text-[#F1F3F7]">
                    Primary Identity: Software Engineering
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#C6D4E8]/80 leading-relaxed">
                  {profileData.aboutStory.technical}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-6 rounded-2xl bg-[#11141C] border border-[#202A3B] space-y-3">
                <div className="flex items-center gap-3 text-[#65C9AE]">
                  <Brain className="w-5 h-5 shrink-0" />
                  <h3 className="font-headline font-semibold text-lg text-[#F1F3F7]">
                    Applied AI &amp; Intelligent Agents
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#C6D4E8]/80 leading-relaxed">
                  {profileData.aboutStory.aiAndInnovation}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-6 rounded-2xl bg-[#11141C] border border-[#202A3B] space-y-3">
                <div className="flex items-center gap-3 text-[#8266B5]">
                  <Users className="w-5 h-5 shrink-0" />
                  <h3 className="font-headline font-semibold text-lg text-[#F1F3F7]">
                    Leadership &amp; Stakeholder Communication
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#C6D4E8]/80 leading-relaxed">
                  {profileData.aboutStory.leadership}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Column: Portrait Placeholder & Credential Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delay={0.2}>
              <div className="p-4 rounded-2xl bg-[#11141C] border border-[#202A3B] space-y-4">
                <PlaceholderMedia
                  label="[REPLACE REQUIRED — PROFESSIONAL PORTRAIT / CAMPUS SPEECH PHOTO]"
                  expectedPath="/public/images/profile/naqib-zuhair.jpg"
                  aspectRatio="4/3"
                  type="photo"
                  priority="required"
                />

                {/* Structured Overview Checklist */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm">
                    <GraduationCap className="w-4 h-4 text-[#8AB4FF] shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#F1F3F7]">
                        Politeknik Negeri Jakarta
                      </div>
                      <div className="text-xs font-mono text-[#C6D4E8]/60">
                        {profileData.education.degree} (2024–2028 expected)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Brain className="w-4 h-4 text-[#65C9AE] shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#F1F3F7]">
                        Asah AI Engineering Cohort
                      </div>
                      <div className="text-xs font-mono text-[#C6D4E8]/60">
                        Dicoding &middot; GoTo Selected Fellow
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Award className="w-4 h-4 text-[#8266B5] shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#F1F3F7]">
                        President — Duta PNJ Batch 5
                      </div>
                      <div className="text-xs font-mono text-[#C6D4E8]/60">
                        Institutional Student Ambassador &middot; 20+ Events MC
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#202A3B]/60 flex items-center justify-between text-xs font-mono text-[#C6D4E8]/50">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65C9AE]" /> Verified Background
                  </span>
                  <span>Jakarta, ID</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

