import React from "react";
import { Mic, Megaphone, Crown, ShieldCheck, Sparkles, Check } from "lucide-react";
import { beyondTechPillars } from "../../data/beyondTech";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { Card } from "../ui/Card";
import { ScrollReveal } from "../animations/ScrollReveal";

export const BeyondTechSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "master-of-ceremonies":
        return <Mic className="w-5 h-5 text-[#8AB4FF]" />;
      case "diplomacy-representation":
        return <Crown className="w-5 h-5 text-[#8266B5]" />;
      case "event-production-vip":
        return <Megaphone className="w-5 h-5 text-[#65C9AE]" />;
      case "ceremonial-discipline":
        return <ShieldCheck className="w-5 h-5 text-[#8AB4FF]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8AB4FF]" />;
    }
  };

  return (
    <section id="beyond-tech" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="space-y-2 mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
              <span>05 &mdash; Beyond Technology</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
              Technology is what I build. Communication is how I connect.
            </h2>
            <p className="text-sm sm:text-base text-[#C6D4E8]/70 font-mono">
              The human dimension: public speaking, high-stakes protocol, diplomacy, and ceremonial discipline.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Storytelling Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beyondTechPillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 0.1}>
              <Card interactive className="p-6 sm:p-8 border-[#202A3B] flex flex-col justify-between h-full">
                <div className="space-y-5">
                  {/* Top pillar header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#08090D] border border-[#202A3B]">
                        {getIcon(pillar.id)}
                      </div>
                      <div>
                        <h3 className="font-headline text-xl font-bold text-[#F1F3F7]">
                          {pillar.title}
                        </h3>
                        <p className="font-mono text-xs text-[#8AB4FF] mt-0.5">{pillar.subtitle}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-headline text-2xl font-bold text-[#65C9AE]">
                        {pillar.metric}
                      </span>
                      <p className="font-mono text-[10px] text-[#C6D4E8]/50">
                        {pillar.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Visual placeholder for event/stage photo */}
                  <PlaceholderMedia
                    label={pillar.imagePlaceholderLabel}
                    expectedPath={`/public/images/leadership/${pillar.id}.jpg`}
                    aspectRatio="16/9"
                    type="photo"
                    priority="required"
                  />

                  {/* Narrative paragraph */}
                  <p className="text-sm text-[#C6D4E8]/80 leading-relaxed font-sans">
                    {pillar.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#202A3B]/60">
                    <div className="font-mono text-[11px] text-[#C6D4E8]/60 uppercase tracking-wider">
                      Notable Milestones:
                    </div>
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#C6D4E8]/80">
                        <Check className="w-3.5 h-3.5 text-[#65C9AE] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#202A3B]/40 flex items-center justify-between text-[11px] font-mono text-[#C6D4E8]/50">
                  <span>Authentic Track Record</span>
                  <span className="text-[#8AB4FF]">Verified Leadership</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
