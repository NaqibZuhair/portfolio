import React, { useState } from "react";
import { ExternalLink, Calendar, Eye, ChevronDown, ChevronUp, Award } from "lucide-react";
import { achievementsData, type AchievementItem } from "../../data/achievements";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { ScrollReveal } from "../animations/ScrollReveal";

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedAchievements = showAll
    ? achievementsData
    : achievementsData.filter((item) => item.featured);

  return (
    <section id="achievements" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
                <span>06 &mdash; Achievements &amp; Certifications</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
                Recognitions &amp; credentials.
              </h2>
              <p className="text-sm sm:text-base text-[#C6D4E8] max-w-xl font-mono">
                Curated milestones across deep learning, networking infrastructure, leadership, and public service.
              </p>
            </div>
            <div className="font-mono text-xs text-[#C6D4E8] bg-[#11141C] border border-[#202A3B] px-3.5 py-1.5 rounded-lg w-fit">
              Showing {displayedAchievements.length} of {achievementsData.length} Credentials
            </div>
          </div>
        </ScrollReveal>

        {/* Credentials Grid: 4 Highlighted Initially */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedAchievements.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.05}>
              <Card
                interactive
                onClick={() => setSelectedAchievement(item)}
                className="p-5 h-full flex flex-col justify-between border-[#202A3B] hover:border-[#8AB4FF]/50 cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedAchievement(item);
                  }
                }}
                aria-label={`View details for ${item.title}`}
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
                    <span className="font-mono text-[11px] text-[#C6D4E8] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#8AB4FF]" />
                      {item.date.split(" ")[0]}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-headline font-semibold text-base text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#8AB4FF] mb-3 truncate">
                    {item.issuer}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-[#C6D4E8] line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-3 border-t border-[#202A3B]/60 flex items-center justify-between font-mono text-xs text-[#C6D4E8] group-hover:text-[#8AB4FF] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" /> View Certificate
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Credentials Toggle Interaction */}
        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="secondary"
            size="md"
            rightIcon={
              showAll ? (
                <ChevronUp className="w-4 h-4 text-[#8AB4FF]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8AB4FF]" />
              )
            }
          >
            {showAll ? "Show Highlighted Only" : `View All Credentials (${achievementsData.length})`}
          </Button>
        </div>
      </div>

      {/* Accessible Certificate Lightbox Modal Preview */}
      {selectedAchievement && (
        <Modal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          title={selectedAchievement.title}
          subtitle={`${selectedAchievement.issuer} &middot; ${selectedAchievement.date}`}
          maxWidth="xl"
        >
          <div className="space-y-5">
            {/* Certificate Preview Frame: Preserves Original Aspect Ratio */}
            <div className="p-2 rounded-xl bg-[#08090D] border border-[#202A3B] flex items-center justify-center">
              {selectedAchievement.image ? (
                <img
                  src={selectedAchievement.image}
                  alt={`Certificate: ${selectedAchievement.title}`}
                  className={`w-full ${
                    selectedAchievement.aspectRatio === "portrait"
                      ? "max-h-[60vh] object-contain"
                      : "max-h-[60vh] object-contain"
                  }`}
                />
              ) : (
                <PlaceholderMedia
                  label={selectedAchievement.imagePlaceholderLabel}
                  expectedPath={`/images/certificates/${selectedAchievement.id}.jpg`}
                  aspectRatio={selectedAchievement.aspectRatio === "portrait" ? "3/4" : "16/9"}
                  type="certificate"
                  priority="required"
                  className="w-full max-h-[60vh] object-contain shadow-xl"
                />
              )}
            </div>

            {/* Credential Description */}
            <p className="text-sm text-[#F1F3F7] leading-relaxed font-sans">
              {selectedAchievement.description}
            </p>

            {/* Metadata Fields: Curriculum Commitment */}
            {selectedAchievement.hours && (
              <div className="p-3 rounded-lg bg-[#08090D] border border-[#202A3B] flex items-center justify-between text-xs font-mono">
                <span className="text-[#C6D4E8]">Curriculum Commitment:</span>
                <span className="text-[#8AB4FF] font-semibold">
                  {selectedAchievement.hours}
                </span>
              </div>
            )}

            {/* Optional Credential ID */}
            {selectedAchievement.credentialId && (
              <div className="p-3 rounded-lg bg-[#08090D] border border-[#202A3B] flex items-center justify-between text-xs font-mono">
                <span className="text-[#C6D4E8]">Credential ID:</span>
                <span className="text-[#65C9AE] font-semibold">
                  {selectedAchievement.credentialId}
                </span>
              </div>
            )}

            {/* Skills Acquired */}
            {selectedAchievement.skillsAcquired && (
              <div>
                <span className="font-mono text-xs text-[#C6D4E8] uppercase tracking-wider block mb-2">
                  Competencies:
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

            {/* Optional Verification Link */}
            {selectedAchievement.verificationUrl && (
              <div className="pt-3 border-t border-[#202A3B] flex items-center justify-between text-xs font-mono">
                <span className="text-[#C6D4E8]">Official Verification:</span>
                <a
                  href={selectedAchievement.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8AB4FF] hover:underline flex items-center gap-1"
                >
                  Verify Online <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};
