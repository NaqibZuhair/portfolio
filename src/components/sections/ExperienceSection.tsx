import React from "react";
import { Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";
import { experiencesData, additionalExperiences } from "../../data/experience";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="space-y-2 mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              <span>04 &mdash; Leadership &amp; Impact</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
              Leading people. Creating impact.
            </h2>
            <p className="text-sm sm:text-base text-[#C6D4E8]/70 max-w-2xl font-mono">
              Bridging engineering rigor with organizational governance, stakeholder alignment, and large-scale event operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline of Core Experiences */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-0 md:before:left-1/2 before:w-px before:bg-[#202A3B] before:pointer-events-none">
          {experiencesData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#08090D] border-2 border-[#8AB4FF] z-10 hidden md:block">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF] mx-auto mt-0.5 animate-pulse" />
                  </div>

                  {/* Experience Content Card */}
                  <div className="w-full md:w-1/2 pl-6 md:pl-0">
                    <Card
                      interactive
                      className="p-6 sm:p-8 border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all"
                    >
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <Badge variant={item.type === "leadership" ? "electric" : "violet"}>
                          {item.type === "leadership" ? "Organizational Leadership" : "Teaching & Pedagogy"}
                        </Badge>
                        <span className="flex items-center gap-1 font-mono text-xs text-[#C6D4E8]/60">
                          <Calendar className="w-3.5 h-3.5 text-[#8AB4FF]" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#F1F3F7]">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#8AB4FF] mb-4">
                        <span>{item.organization}</span>
                        <span>&middot;</span>
                        <span className="flex items-center gap-1 text-[#C6D4E8]/60">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-[#C6D4E8]/80 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Key highlights bullet list */}
                      <ul className="space-y-2 mb-6">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#C6D4E8]/70 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#65C9AE] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Visual placeholder for documentation */}
                      {item.imagePlaceholderLabel && (
                        <div className="mb-4">
                          <PlaceholderMedia
                            label={item.imagePlaceholderLabel}
                            expectedPath={`/public/images/leadership/${item.id}.jpg`}
                            aspectRatio="16/9"
                            type="photo"
                            priority="required"
                          />
                        </div>
                      )}

                      {/* Stakeholders or VIP Partners */}
                      {item.stakeholders && (
                        <div className="pt-4 border-t border-[#202A3B]/60">
                          <div className="font-mono text-[11px] text-[#C6D4E8]/50 uppercase tracking-wider mb-2">
                            Key Stakeholders &amp; VIPs Engaged:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.stakeholders.map((s, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded bg-[#08090D] border border-[#202A3B] text-[10px] font-mono text-[#8AB4FF]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>

                  {/* Empty side for balanced spacing */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Additional Organizational & Volunteer Leadership Grid */}
        <div className="mt-20 pt-16 border-t border-[#202A3B]/60">
          <ScrollReveal>
            <h3 className="font-headline text-2xl font-bold text-[#F1F3F7] mb-2 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#8AB4FF]" />
              Additional Leadership &amp; Community Service
            </h3>
            <p className="font-mono text-xs text-[#C6D4E8]/60 mb-8">
              PASKIBRAKA ceremonial service, departmental mentoring, and national competition committees.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalExperiences.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <Card interactive className="p-6 bg-[#11141C]/80 border-[#202A3B]">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-[#8AB4FF] font-semibold">
                      {exp.organization}
                    </span>
                    <span className="font-mono text-[11px] text-[#C6D4E8]/50">{exp.period}</span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[#F1F3F7] mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#C6D4E8]/70 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
