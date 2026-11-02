export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "leadership" | "professional" | "additional";
  summary: string;
  highlights: string[];
  tags: string[];
  imagePlaceholderLabel?: string;
  stakeholders?: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "president-duta-pnj",
    role: "President",
    organization: "Duta PNJ Batch 5 (Campus Ambassadors)",
    location: "Politeknik Negeri Jakarta, Depok",
    period: "August 2025 – September 2026",
    type: "leadership",
    summary:
      "Elected to direct the institutional student ambassador organization, leading organizational governance, media outreach, and institutional representation at the highest academic and governmental levels.",
    highlights: [
      "Led a 17-member executive board of campus ambassadors, overseeing strategic roadmaps, departmental execution, and cross-functional synergy.",
      "Directed digital branding initiatives across Instagram Reels and TikTok Live, driving organic audience growth of more than 1,000 active followers.",
      "Served as Master of Ceremonies for 20+ institutional and national-level events.",
      "Hosted high-profile proceedings including the FDPNI National Working Meeting (attended by the Minister of Education and directors of state polytechnics across Indonesia) and the PNJ–Hopu LZPU China International Partnership Launch.",
      "Represented Politeknik Negeri Jakarta across institutional summits, public diplomacy, and strategic partnership forums.",
    ],
    tags: ["Executive Leadership", "Public Speaking", "Strategic Branding", "Institutional Diplomacy"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DUTA PNJ BATCH 5 PRESIDENTIAL PHOTO / MC EVENT PHOTO]",
    stakeholders: ["Ministry of Education", "State Polytechnic Directors", "International University Partners"],
  },
  {
    id: "project-officer-grand-final",
    role: "Project Officer",
    organization: "Grand Final Duta PNJ Batch 6",
    location: "Politeknik Negeri Jakarta, Depok",
    period: "April 2026 – August 2026",
    type: "leadership",
    summary:
      "Spearheaded the flagship campus ambassador selection cycle and live Grand Final ceremony, coordinating high-level protocol, national media partners, and corporate sponsors.",
    highlights: [
      "Led end-to-end operational planning and execution for the entire recruitment funnel through to the live Grand Final production.",
      "Directed a cross-functional committee of 30+ personnel (20 core committee members and 10 senior volunteers).",
      "Coordinated live event operations, stage design, and venue logistics for approximately 300 seated attendees and VIPs.",
      "Managed strict institutional protocol for opening remarks delivered by the Minister of Higher Education, Science, and Technology, Prof. Brian Yuliarto, and university executive boards.",
      "Secured sponsorship funding and media visibility through outreach involving 8 corporate sponsors and 6 national media partners.",
      "Cultivated stakeholder relationships with organizations including PT Nindya, Azzura, Insta Beauty Center, Indozone, RRI, and Antara News.",
    ],
    tags: ["Event Production", "VIP Protocol", "Sponsorship & PR", "Team Governance"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DUTA PNJ BATCH 6 GRAND FINAL CEREMONY PHOTO]",
    stakeholders: ["Prof. Brian Yuliarto (Minister of Higher Education)", "PT Nindya", "Azzura", "Indozone", "RRI", "Antara News"],
  },
  {
    id: "logistics-lead-open-house",
    role: "Logistics Lead",
    organization: "Open House PNJ 2026",
    location: "Politeknik Negeri Jakarta, Depok",
    period: "December 2025 – April 2026",
    type: "leadership",
    summary:
      "Orchestrated site preparation, physical infrastructure, and visitor routing for PNJ's largest prospective student open house.",
    highlights: [
      "Led logistics preparation and infrastructure coordination for a two-day institutional open house welcoming nearly 1,500 prospective students from the Greater Jakarta area.",
      "Coordinated venue layouts, technical stage setups, departmental exhibition booths, and security routing.",
      "Supported interactive educational activities, including the immersive 'A Day as a PNJ Student' hands-on workshops.",
      "Collaborated closely with campus facilities and faculty leaders to ensure zero operational downtime during the event.",
    ],
    tags: ["Logistics Strategy", "Infrastructure", "Crowd Coordination", "Operations"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — OPEN HOUSE PNJ LOGISTICS & EXHIBITION PHOTO]",
  },
  {
    id: "arabic-instructor",
    role: "Arabic Language Instructor (Insya & Tarjamah)",
    organization: "Pesantren Modern Daarul Uluum Lido",
    location: "Bogor, Indonesia",
    period: "July 2023 – June 2024",
    type: "professional",
    summary:
      "Delivered rigorous linguistic and translation instruction, managing active classroom pedagogies and formal curriculum development for young learners.",
    highlights: [
      "Taught Arabic Composition (Insya) and Translation (Tarjamah) to 150+ 8th-grade students across 5 active classes.",
      "Conducted 10 intensive teaching sessions per week, designing structured pedagogical modules aligned with institutional standards.",
      "Authored comprehensive mid-term and final examination papers, evaluated student academic progress, and delivered individualized performance feedback.",
      "Cultivated high student engagement and structured discipline through active collaborative learning exercises.",
    ],
    tags: ["Pedagogy", "Curriculum Design", "Arabic Composition & Translation", "Public Communication"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — TEACHING & PEDAGOGICAL DOCUMENTATION PHOTO]",
  },
];

export const additionalExperiences: Array<{
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
}> = [
  {
    role: "Flag Hoister (Pengerek Bendera) & Core Member",
    organization: "PASKIBRAKA Kabupaten Bogor",
    period: "March 2021 – August 2021",
    location: "Bogor, Indonesia",
    description:
      "Selected through a competitive district-wide process to serve as core flag hoister for the National Flag-Raising Ceremony. Required supreme discipline, endurance, composure, and synchronized execution under high ceremonial stakes.",
  },
  {
    role: "Mentor Committee Member",
    organization: "EXPECTIK 2025 — HIMATIK PNJ",
    period: "November 2025",
    location: "Depok, Indonesia",
    description:
      "Supported student onboarding activities and facilitated team mentoring for incoming Informatics Engineering undergraduates.",
  },
  {
    role: "Event Committee Member",
    organization: "ITECHNO CUP 2025 — HIMATIK PNJ",
    period: "October 2025",
    location: "Depok, Indonesia",
    description:
      "Contributed to event coordination and operational execution for a prestigious national-level technology and programming competition.",
  },
  {
    role: "Event Committee Member",
    organization: "Olimpiade Politeknik 2025 — BEM Politeknik Negeri Jakarta",
    period: "July 2025",
    location: "Depok, Indonesia",
    description:
      "Assisted with event operations, participant management, and coordination during the inter-polytechnic sports and arts competition.",
  },
];

