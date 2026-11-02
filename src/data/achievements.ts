export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "certification" | "honor" | "fellowship";
  hours?: string;
  description: string;
  skillsAcquired?: string[];
  imagePlaceholderLabel: string;
  credentialUrlPlaceholder?: string;
  badge?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "appreciation-director-pnj",
    title: "Certificate of Appreciation — Director of Politeknik Negeri Jakarta",
    issuer: "Director of Politeknik Negeri Jakarta",
    date: "August 2026",
    category: "honor",
    badge: "Institutional Honor",
    description:
      "Received official institutional recognition from the Director of Politeknik Negeri Jakarta for leadership and outstanding contributions as President of Duta PNJ Batch 5.",
    skillsAcquired: ["Organizational Governance", "Institutional Representation", "Strategic Leadership"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — CERTIFICATE OF APPRECIATION FROM PNJ DIRECTOR IMAGE]",
  },
  {
    id: "asah-ai-engineering",
    title: "AI Engineering Cohort — Asah",
    issuer: "Dicoding and GoTo",
    date: "August 2026 – Present",
    category: "fellowship",
    badge: "Elite Cohort",
    description:
      "Selected for a highly competitive structured AI Engineering development program covering software engineering foundations, Python programming, version control, and advanced prompt engineering.",
    skillsAcquired: ["Software Engineering Foundations", "Python", "Prompt Engineering", "Applied AI Workflows"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — ASAH AI ENGINEERING COHORT ACCEPTANCE & COMPLETION CERTIFICATE]",
  },
  {
    id: "dicoding-deep-learning",
    title: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "October 2026",
    category: "certification",
    hours: "110 Learning Hours",
    badge: "110 Hours",
    description:
      "Completed comprehensive training covering neural network architectures using TensorFlow and Keras, computer vision, natural language processing, RNN/LSTM networks, time-series forecasting, and generative models.",
    skillsAcquired: ["TensorFlow", "Keras", "Convolutional Neural Networks", "NLP & Computer Vision", "RNN/LSTM"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DICODING DEEP LEARNING CERTIFICATE IMAGE]",
    credentialUrlPlaceholder: "[ADD CERTIFICATE CREDENTIAL URL]",
  },
  {
    id: "dicoding-machine-learning",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "October 2026",
    category: "certification",
    hours: "90 Learning Hours",
    badge: "90 Hours",
    description:
      "Mastered foundational machine learning paradigms covering supervised and unsupervised learning, regression, classification algorithms, clustering, feature engineering, and model evaluation metrics.",
    skillsAcquired: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Optimization"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — DICODING MACHINE LEARNING CERTIFICATE IMAGE]",
    credentialUrlPlaceholder: "[ADD CERTIFICATE CREDENTIAL URL]",
  },
  {
    id: "ccna-srwe",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "February 2026",
    category: "certification",
    badge: "Cisco Academy",
    description:
      "Completed advanced enterprise networking training covering network switching, routing protocols, and wireless infrastructure.",
    skillsAcquired: ["OSPF", "VLANs & Trunking", "STP", "WLANs", "EtherChannel", "FHRP", "Layer 2 Security"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — CISCO CCNA SRWE CERTIFICATE IMAGE]",
    credentialUrlPlaceholder: "[ADD CISCO BADGE URL]",
  },
  {
    id: "ccna-itn",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "June 2025",
    category: "certification",
    badge: "Cisco Academy",
    description:
      "Foundational networking qualification covering IPv4 and IPv6 network addressing, subnet calculation, Ethernet protocols, and hands-on router/switch CLI configurations through 50+ Cisco Packet Tracer lab simulations.",
    skillsAcquired: ["IPv4 / IPv6 Subnetting", "Packet Tracer", "Router & Switch Config", "Network Topologies"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — CISCO CCNA ITN CERTIFICATE IMAGE]",
    credentialUrlPlaceholder: "[ADD CISCO BADGE URL]",
  },
  {
    id: "pramuka-garuda",
    title: "Pramuka Garuda Award (Penegak Rank)",
    issuer: "Gerakan Pramuka Kwartir Cabang Kabupaten Bogor",
    date: "March 2022",
    category: "honor",
    badge: "Highest Scout Honor",
    description:
      "Awarded the highest national achievement rank in Indonesian Scouting (Penegak Rank) by Kwarcab Kabupaten Bogor in recognition of leadership, personal integrity, community service, and civic excellence.",
    skillsAcquired: ["Integrity & Discipline", "Community Leadership", "Survival & Team Problem Solving"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — PRAMUKA GARUDA MEDAL & CERTIFICATE IMAGE]",
  },
  {
    id: "commendation-regent-bogor",
    title: "Official Commendation — Regent of Bogor",
    issuer: "Regional Government & Youth and Sports Agency (Dispora) Bogor",
    date: "August 2021",
    category: "honor",
    badge: "Regent Commendation",
    description:
      "Awarded official commendation by the Regent of Bogor for exceptional discipline, leadership, and ceremonial execution as a core Flag Hoister (Pengerek Bendera) in PASKIBRAKA Kabupaten Bogor.",
    skillsAcquired: ["Civic Duty", "Flawless Execution", "High-Pressure Composure"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — REGENT OF BOGOR OFFICIAL COMMENDATION CERTIFICATE IMAGE]",
  },
];

