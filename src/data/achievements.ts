export interface AchievementItem {
  id: string;
  title: string;
  image?: string;
  issuer: string;
  date: string;
  category: "certification" | "honor" | "fellowship";
  hours?: string;
  badge?: string;
  description: string;
  featured: boolean;
  aspectRatio: "landscape" | "portrait";
  credentialId?: string; // Set when official credential ID is issued
  verificationUrl?: string; // Set when official verification URL is active
  skillsAcquired?: string[];
  imagePlaceholderLabel: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "appreciation-director-pnj",
    image: "/images/certificates/appreciation-director-pnj.jpg",
    title: "Certificate of Appreciation — Director of Politeknik Negeri Jakarta",
    issuer: "Director of Politeknik Negeri Jakarta",
    date: "August 2026",
    category: "honor",
    badge: "Institutional Honor",
    featured: true,
    aspectRatio: "landscape",
    description:
      "Awarded official institutional commendation by the Director of PNJ for leadership as President of Duta PNJ Batch 5.",
    skillsAcquired: ["Organizational Governance", "Institutional Representation", "Strategic Leadership"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — CERTIFICATE OF APPRECIATION FROM PNJ DIRECTOR IMAGE]",
  },
  // {
  //   id: "asah-ai-engineering",
  //   title: "AI Engineering Cohort — Asah",
  //   issuer: "Dicoding and GoTo",
  //   date: "August 2026 – Present",
  //   category: "fellowship",
  //   badge: "Cohort Fellow",
  //   featured: true,
  //   aspectRatio: "landscape",
  //   description:
  //     "Selected for a structured AI engineering cohort covering software engineering foundations, Python, and prompt engineering.",
  //   skillsAcquired: ["Python", "Applied AI", "Prompt Engineering", "Software Engineering"],
  //   imagePlaceholderLabel: "[REPLACE REQUIRED — ASAH AI ENGINEERING COHORT ACCEPTANCE CERTIFICATE]",
  // },
  {
    id: "dicoding-deep-learning",
    image: "/images/certificates/dicoding-deep-learning.jpg",
    title: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "October 2026",
    category: "certification",
    hours: "110 Learning Hours",
    badge: "110 Hours",
    featured: true,
    aspectRatio: "landscape",
    description:
      "110-hour curriculum covering neural network architectures with TensorFlow/Keras, CNNs, NLP, and computer vision.",
    skillsAcquired: ["TensorFlow", "Keras", "Convolutional Neural Networks", "Computer Vision"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DICODING DEEP LEARNING CERTIFICATE IMAGE]",
  },
  {
    id: "ccna-srwe",
    image: "/images/certificates/ccna-srwe.jpg",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "February 2026",
    category: "certification",
    badge: "Cisco Academy",
    featured: true,
    aspectRatio: "landscape",
    description:
      "Enterprise networking certification covering OSPF, VLANs, STP, WLANs, and Layer 2 security configurations.",
    skillsAcquired: ["OSPF Routing", "VLANs & Trunking", "STP", "WLANs"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — CISCO CCNA SRWE CERTIFICATE IMAGE]",
  },
  {
    id: "dicoding-machine-learning",
    image: "/images/certificates/dicoding-machine-learning.jpg",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "October 2026",
    category: "certification",
    hours: "90 Learning Hours",
    badge: "90 Hours",
    featured: false,
    aspectRatio: "landscape",
    description:
      "Foundational training covering supervised and unsupervised learning, regression, classification, and model optimization.",
    skillsAcquired: ["Supervised Learning", "Classification", "Feature Engineering"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DICODING MACHINE LEARNING CERTIFICATE IMAGE]",
  },
  {
    id: "ccna-itn",
    image: "/images/certificates/ccna-itn.jpg",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "June 2025",
    category: "certification",
    badge: "Cisco Academy",
    featured: false,
    aspectRatio: "landscape",
    description:
      "Foundational networking qualification covering IPv4/IPv6 addressing, subnetting, and hands-on router CLI configurations.",
    skillsAcquired: ["IPv4 / IPv6 Subnetting", "Packet Tracer", "Router Configuration"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — CISCO CCNA ITN CERTIFICATE IMAGE]",
  },
  {
    id: "pramuka-garuda",
    image: "/images/certificates/pramuka-garuda.jpg",
    title: "Pramuka Garuda Award (Penegak Rank)",
    issuer: "Gerakan Pramuka Kwarcab Bogor",
    date: "March 2022",
    category: "honor",
    badge: "Scout Honor",
    featured: false,
    aspectRatio: "portrait",
    description:
      "Highest achievement rank in Indonesian Scouting (Penegak Rank) in recognition of leadership, personal integrity, and community service.",
    skillsAcquired: ["Integrity", "Community Service", "Team Governance"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — PRAMUKA GARUDA MEDAL & CERTIFICATE IMAGE]",
  },
  {
    id: "commendation-regent-bogor",
    image: "/images/certificates/paskibraka.jpg",
    title: "Official Commendation — Regent of Bogor",
    issuer: "Dispora & Regional Government of Bogor",
    date: "August 2021",
    category: "honor",
    badge: "Regent Commendation",
    featured: false,
    aspectRatio: "portrait",
    description:
      "Awarded official commendation by the Regent of Bogor for ceremonial execution as core Flag Hoister in PASKIBRAKA.",
    skillsAcquired: ["Ceremonial Precision", "High-Pressure Composure"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — REGENT OF BOGOR OFFICIAL COMMENDATION CERTIFICATE IMAGE]",
  },
];
