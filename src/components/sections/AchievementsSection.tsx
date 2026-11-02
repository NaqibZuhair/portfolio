import React, { useState } from "react";
import { ExternalLink, Calendar, Eye } from "lucide-react";
import { achievementsData, type AchievementItem } from "../../data/achievements";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Modal } from "../ui/Modal";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { ScrollReveal } from "../animations/ScrollReveal";

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  return (
    <section id="achievements" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
                <span>06 &mdash; Achievements &amp; Certifications</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
                Recognitions &amp; credentials.
              </h2>
              <p className="text-sm sm:text-base text-[#C6D4E8]/70 max-w-xl font-mono">
                Verified milestones across deep learning, networking architecture, institutional leadership, and civic service.
              </p>
            </div>
            <div className="font-mono text-xs text-[#C6D4E8]/60 bg-[#11141C] border border-[#202A3B] px-3.5 py-1.5 rounded-lg w-fit">
              8 Verified Recognitions
            </div>
          </div>
        </ScrollReveal>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05}>
              <Card
                interactive
                onClick={() => setSelectedAchievement(item)}
                className="p-5 h-full flex flex-col justify-between border-[#202A3B] hover:border-[#8AB4FF]/50 cursor-pointer group"
              >
                <div>
                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge
                      variant={
                        item.category === "fellowship"
                          ? "electric"
                          : item.category === "honor"
                          ? "violet"
                          : "mint"
                      }
                      size="sm"
                    >
                      {item.badge || item.category}
                    </Badge>
                    <span className="font-mono text-[11px] text-[#C6D4E8]/50 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#8AB4FF]" />
                      {item.date.split(" ")[0]}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-headline font-semibold text-base text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#8AB4FF]/90 mb-3">
                    {item.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#C6D4E8]/70 line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-3 border-t border-[#202A3B]/60 flex items-center justify-between font-mono text-xs text-[#C6D4E8]/60 group-hover:text-[#8AB4FF] transition-colors">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> View Credential
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Detail Modal Preview */}
      {selectedAchievement && (
        <Modal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          title={selectedAchievement.title}
          subtitle={`${selectedAchievement.issuer} &middot; ${selectedAchievement.date}`}
          maxWidth="lg"
        >
          <div className="space-y-5">
            {/* Certificate Placeholder / Image preview */}
            <PlaceholderMedia
              label={selectedAchievement.imagePlaceholderLabel}
              expectedPath={`/public/images/certificates/${selectedAchievement.id}.jpg`}
              aspectRatio="16/9"
              type="certificate"
              priority="required"
            />

            <p className="text-sm text-[#C6D4E8]/90 leading-relaxed font-sans">
              {selectedAchievement.description}
            </p>

            {/* Hours if applicable */}
            {selectedAchievement.hours && (
              <div className="p-3 rounded-lg bg-[#08090D] border border-[#202A3B] flex items-center justify-between text-xs font-mono">
                <span className="text-[#C6D4E8]/60">Curriculum Commitment:</span>
                <span className="text-[#8AB4FF] font-semibold">
                  {selectedAchievement.hours}
                </span>
              </div>
            )}

            {/* Skills Acquired */}
            {selectedAchievement.skillsAcquired && (
              <div>
                <span className="font-mono text-xs text-[#C6D4E8]/60 uppercase tracking-wider block mb-2">
                  Competencies Mastered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAchievement.skillsAcquired.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#08090D] border border-[#202A3B] text-xs font-mono text-[#F1F3F7]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Credential link placeholder */}
            {selectedAchievement.credentialUrlPlaceholder && (
              <div className="pt-3 border-t border-[#202A3B] flex items-center justify-between text-xs font-mono text-[#C6D4E8]/60">
                <span>Verification Link:</span>
                <span className="text-[#8AB4FF]">
                  {selectedAchievement.credentialUrlPlaceholder}
                </span>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};
