export interface CompactExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  imagePlaceholderLabel?: string;
}

export const experiencesData: CompactExperience[] = [
  {
    id: "president-duta-pnj",
    role: "President",
    organization: "Duta PNJ Batch 5 (Campus Ambassadors)",
    period: "August 2025 – September 2026",
    location: "Politeknik Negeri Jakarta",
    description:
      "Led the 17-member student ambassador executive board, governing organizational strategy, digital outreach, and institutional representation.",
    achievements: [
      "Directed digital branding campaigns resulting in organic audience growth of more than 1,000 active followers.",
      "Served as Master of Ceremonies for 20+ institutional and national-level events, including the FDPNI National Working Meeting with the Minister of Education.",
      "Represented Politeknik Negeri Jakarta at high-level diplomatic milestones, including the PNJ–Hopu LZPU China International Partnership Launch.",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DUTA PNJ BATCH 5 PRESIDENTIAL PHOTO / MC EVENT PHOTO]",
  },
  {
    id: "project-officer-grand-final",
    role: "Project Officer",
    organization: "Grand Final Duta PNJ Batch 6",
    period: "April 2026 – August 2026",
    location: "Politeknik Negeri Jakarta",
    description:
      "Spearheaded recruitment operations and live stage execution for the flagship campus ambassador selection cycle.",
    achievements: [
      "Directed a 30+ person cross-functional committee (20 core members, 10 senior volunteers) for an audience of 300 seated attendees.",
      "Managed VIP protocol for keynote remarks by the Minister of Higher Education, Science, and Technology, Prof. Brian Yuliarto.",
      "Secured partnership sponsorship and media coverage across 8 corporate sponsors and 6 national media outlets.",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DUTA PNJ BATCH 6 GRAND FINAL CEREMONY PHOTO]",
  },
  {
    id: "logistics-lead-open-house",
    role: "Logistics Lead",
    organization: "Open House PNJ 2026",
    period: "December 2025 – April 2026",
    location: "Politeknik Negeri Jakarta",
    description:
      "Directed venue preparation, facility infrastructure, and event operations for the university's largest prospective student open house.",
    achievements: [
      "Coordinated venue infrastructure, exhibition booth setups, and crowd routing welcoming nearly 1,500 prospective students.",
      "Supported interactive educational programming, including the 'A Day as a PNJ Student' hands-on workshop track.",
      "Maintained zero operational downtime and seamless visitor routing across the two-day institutional event.",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — OPEN HOUSE PNJ LOGISTICS & EXHIBITION PHOTO]",
  },
  {
    id: "arabic-instructor",
    role: "Arabic Language Instructor",
    organization: "Pesantren Modern Daarul Uluum Lido",
    period: "July 2023 – June 2024",
    location: "Bogor, Indonesia",
    description:
      "Delivered structured Arabic composition (Insya) and translation (Tarjamah) instruction through active-learning pedagogies.",
    achievements: [
      "Taught 150+ students across five active classes, conducting 10 pedagogical sessions weekly.",
      "Authored customized curriculum lesson plans and comprehensive mid-term and final examination frameworks.",
      "Delivered continuous academic evaluations and individualized student performance progress reports.",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — TEACHING & PEDAGOGICAL DOCUMENTATION PHOTO]",
  },
];
