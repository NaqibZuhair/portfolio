import React from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiencesData } from "../../data/experience";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="space-y-2 mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              <span>04 &mdash; Leadership &amp; Impact</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
              Leading people. Creating impact.
            </h2>
            <p className="text-sm sm:text-base text-[#C6D4E8] max-w-2xl font-mono">
              Organizational governance, large-scale event operations, and pedagogical leadership.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact Editorial Timeline */}
        <div className="relative border-l border-[#202A3B] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiencesData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.08}>
              <div className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#08090D] border-2 border-[#8AB4FF]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF] mx-auto mt-0.5" />
                </div>

                {/* Compact Editorial Card */}
                <Card interactive className="p-6 border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all">
                  {/* Header: Role, Period, Org */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-[#F1F3F7]">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#8AB4FF] mt-0.5">
                        <span>{item.organization}</span>
                        <span>&middot;</span>
                        <span className="flex items-center gap-1 text-[#C6D4E8]">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <Badge variant="default" className="w-fit shrink-0">
                      <Calendar className="w-3 h-3 text-[#8AB4FF] mr-1" />
                      {item.period}
                    </Badge>
                  </div>

                  {/* One Concise Description */}
                  <p className="text-sm text-[#F1F3F7] leading-relaxed my-3 font-sans">
                    {item.description}
                  </p>

                  {/* Up to Three High-Impact Quantitative Achievements */}
                  <div className="space-y-2 pt-2 border-t border-[#202A3B]/60">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C6D4E8] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#65C9AE] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
