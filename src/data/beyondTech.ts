export interface VisualStoryItem {
  id: string;
  title: string;
  category: string;
  event: string;
  caption: string;
  tag: string;
  imagePlaceholderLabel: string;
  expectedPath: string;
}

export const beyondTechGallery: VisualStoryItem[] = [
  {
    id: "mc-fdpni",
    title: "Master of Ceremonies & Public Speaking",
    category: "Public Speaking",
    event: "FDPNI National Working Meeting",
    caption:
      "Hosting live proceedings before the Minister of Education and state polytechnic directors across Indonesia.",
    tag: "National Stage",
    imagePlaceholderLabel: "[REPLACE REQUIRED — MC STAGE PHOTO AT FDPNI NATIONAL WORKING MEETING]",
    expectedPath: "/public/images/leadership/mc-fdpni.jpg",
  },
  {
    id: "ambassador-delegation",
    title: "Institutional Diplomacy & Representation",
    category: "Diplomacy",
    event: "PNJ – Hopu LZPU China Partnership Launch",
    caption:
      "Representing Politeknik Negeri Jakarta during international bilateral academic cooperation ceremonies.",
    tag: "Global Partnership",
    imagePlaceholderLabel: "[REPLACE REQUIRED — CAMPUS AMBASSADOR DIPLOMATIC DELEGATION PHOTO]",
    expectedPath: "/public/images/leadership/ambassador-delegation.jpg",
  },
  {
    id: "grand-final-protocol",
    title: "Live Production & VIP Protocol",
    category: "Event Direction",
    event: "Grand Final Duta PNJ Batch 6",
    caption:
      "Managing live stage cues and ceremonial VIP protocol for keynote remarks by Minister Prof. Brian Yuliarto.",
    tag: "VIP Protocol",
    imagePlaceholderLabel: "[REPLACE REQUIRED — GRAND FINAL DUTA PNJ CEREMONY STAGE PHOTO]",
    expectedPath: "/public/images/leadership/grand-final-stage.png",
  },
  // {
  //   id: "paskibraka-ceremonial",
  //   title: "High-Pressure Composure & Drill",
  //   category: "Ceremonial Service",
  //   event: "PASKIBRAKA National Flag-Raising Ceremony",
  //   caption:
  //     "Executing synchronized ceremonial drill as core flag hoister under live district-wide scrutiny.",
  //   tag: "Ceremonial Honor",
  //   imagePlaceholderLabel: "[REPLACE REQUIRED — PASKIBRAKA CEREMONIAL FLAG HOISTER PHOTO]",
  //   expectedPath: "/public/images/leadership/paskibraka-flag-hoister.jpg",
  // },
  {
    id: "mc-open-house-pnj",
    title: "Master of Ceremonies & Public Speaking",
    category: "Public Speaking",
    event: "Open House PNJ 2026 — Day 2",
    caption:
    "Co-hosting the main auditorium program, engaging audiences, and facilitating partner presentations.",
    tag: "Main Stage",
    imagePlaceholderLabel:
      "[OPEN HOUSE PNJ 2026 — MASTER OF CEREMONIES DOCUMENTATION]",
    expectedPath: "/images/leadership/mc-open-house-pnj.JPG",
  },
];
