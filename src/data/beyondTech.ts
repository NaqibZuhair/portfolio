export interface BeyondTechPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  imagePlaceholderLabel: string;
  highlights: string[];
}

export const beyondTechPillars: BeyondTechPillar[] = [
  {
    id: "master-of-ceremonies",
    title: "Master of Ceremonies & Public Speaking",
    subtitle: "Commanding national stages with poise and articulacy",
    description:
      "Public speaking has shaped my professional identity as profoundly as writing code. Serving as Master of Ceremonies for more than 20 high-stakes institutional and national-level events taught me to read audiences, bridge intricate topics, and maintain flawless stage presence under television and live-broadcast scrutiny.",
    metric: "20+",
    metricLabel: "Major Events Hosted",
    imagePlaceholderLabel: "[REPLACE REQUIRED — MC STAGE PHOTO AT NATIONAL WORKING MEETING / DUTA PNJ]",
    highlights: [
      "FDPNI National Working Meeting (attended by the Minister of Education & State Polytechnic Directors)",
      "PNJ – Hopu LZPU China International Partnership Launch ceremony",
      "Formal institutional graduation ceremonies and academic inaugurations",
      "Interactive tech talks and student orientation forums",
    ],
  },
  {
    id: "diplomacy-representation",
    title: "Campus Ambassador & Representation",
    subtitle: "Championing institutional brand and public diplomacy",
    description:
      "As President of Duta PNJ (Campus Ambassadors), I spearheaded diplomatic engagement across academia, industry leaders, and prospective students. Leading digital storytelling across modern social media platforms resulted in organic expansion of over 1,000 engaged followers while elevating PNJ's prestige across national networks.",
    metric: "1,000+",
    metricLabel: "Organic Audience Growth",
    imagePlaceholderLabel: "[REPLACE REQUIRED — CAMPUS AMBASSADOR FORMAL DELEGATION PHOTO]",
    highlights: [
      "Official institutional representative for high-level partner delegations",
      "Directed short-form video branding strategy on Instagram and TikTok",
      "Mentored cohorts of campus ambassadors in stage presence and protocol",
      "Recipient of institutional Certificate of Appreciation from the PNJ Director",
    ],
  },
  {
    id: "event-production-vip",
    title: "Event Direction & VIP Protocols",
    subtitle: "Orchestrating large-scale productions with zero margin for error",
    description:
      "Directing events like the Grand Final Duta PNJ Batch 6 required synchronizing 30+ team members, 300 seated guests, and strict VIP protocols for ministerial attendees such as Prof. Brian Yuliarto. I manage live rundowns, multi-camera cues, and security protocols with precision.",
    metric: "300+",
    metricLabel: "Seated VIPs & Attendees",
    imagePlaceholderLabel: "[REPLACE REQUIRED — GRAND FINAL DUTA PNJ STAGE & COMMITTEE PHOTO]",
    highlights: [
      "VIP protocol management for Minister of Higher Education, Science, and Technology",
      "Directing 30+ cross-functional committee members across logistics, stage, and PR",
      "Sponsorship partnerships with 8 corporate sponsors and 6 national media outlets",
      "Collaborative operations with PT Nindya, Azzura, Insta Beauty Center, RRI, and Antara News",
    ],
  },
  {
    id: "ceremonial-discipline",
    title: "Discipline & High-Pressure Composure",
    subtitle: "Forged in national ceremonial service",
    description:
      "Serving as a core Flag Hoister (Pengerek Bendera) in PASKIBRAKA Kabupaten Bogor instilled an uncompromising standard of discipline, physical endurance, and ceremonial composure under intense public gaze. This foundation anchors my work ethic, attention to detail, and reliability in every technical and leadership undertaking.",
    metric: "100%",
    metricLabel: "Ceremonial Precision",
    imagePlaceholderLabel: "[REPLACE REQUIRED — PASKIBRAKA CEREMONIAL FLAG HOISTER PHOTO]",
    highlights: [
      "Selected through rigorous district-wide testing and physical endurance selection",
      "Executed flawless ceremonial hoisting at the National Flag-Raising Ceremony",
      "Awarded Official Commendation by the Regent of Bogor",
      "Pramuka Garuda (Penegak Rank) — highest rank in Indonesian Scouting",
    ],
  },
];

