import React from "react";
import { Mic, Megaphone, Crown, ShieldCheck, Sparkles, Camera } from "lucide-react";
import { beyondTechGallery, type VisualStoryItem } from "../../data/beyondTech";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animations/ScrollReveal";

export const BeyondTechSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "mc-fdpni":
        return <Mic className="w-4 h-4 text-[#8AB4FF]" />;
      case "ambassador-delegation":
        return <Crown className="w-4 h-4 text-[#8266B5]" />;
      case "grand-final-protocol":
        return <Megaphone className="w-4 h-4 text-[#65C9AE]" />;
      case "mc-open-house-pnj":
        return <Mic className="w-4 h-4 text-[#8AB4FF]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#8AB4FF]" />;
    }
  };

  return (
    <section id="beyond-tech" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] scroll-mt-28">
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
            <p className="text-sm sm:text-base text-[#C6D4E8] font-mono">
              Visual documentation: public speaking, stage protocol, diplomacy, and ceremonial discipline.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual Storytelling Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beyondTechGallery.map((item: VisualStoryItem, idx: number) => (
            <ScrollReveal key={item.id} delay={idx * 0.08}>
              <Card
                interactive
                className="overflow-hidden border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all flex flex-col justify-between group"
              >
                {/* Visual Photograph Frame: Preserving 16/9 Original Aspect Ratio */}
                <div className="p-3.5 bg-[#08090D]/60">
                  <div className="aspect-video overflow-hidden rounded-xl bg-[#11141C]">
                    <img
                      src={item.expectedPath}
                      alt={`${item.title} — ${item.event}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Editorial Caption Bar */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-[#08090D] border border-[#202A3B]">
                        {getIcon(item.id)}
                      </div>
                      <span className="font-headline font-semibold text-base text-[#F1F3F7]">
                        {item.title}
                      </span>
                    </div>
                    <Badge variant="electric" size="sm">
                      {item.tag}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C6D4E8] leading-relaxed font-sans">
                    {item.caption}
                  </p>

                  <div className="pt-2 border-t border-[#202A3B]/60 flex items-center justify-between text-[11px] font-mono text-[#C6D4E8]">
                    <span className="flex items-center gap-1.5 text-[#8AB4FF]">
                      <Camera className="w-3.5 h-3.5" />
                      {item.event}
                    </span>
                    <span className="text-[#65C9AE]">Event Documentation</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
