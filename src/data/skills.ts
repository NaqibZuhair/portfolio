
export interface SkillCategory {
  id: string;
  title: string;
  shortTitle: string;
  core: string[];
  additional: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    shortTitle: "Programming",
    core: ["Python", "TypeScript", "JavaScript"],
    additional: ["PHP", "C++", "Java"],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    shortTitle: "Frontend",
    core: ["React", "Vite", "Tailwind CSS"],
    additional: [
      "HTML5 & Modern CSS",
      "Responsive UI/UX",
      "Component Design Systems",
    ],
  },
  {
    id: "backend-development",
    title: "Backend & APIs",
    shortTitle: "Backend",
    core: ["Node.js", "Express.js", "REST API Development"],
    additional: [
      "Laravel",
      "CodeIgniter 4",
      "WebSocket / Baileys",
    ],
  },
  {
    id: "databases-orm",
    title: "Databases & Cloud Storage",
    shortTitle: "Databases",
    core: ["PostgreSQL", "Prisma ORM", "Supabase", "Neon"],
    additional: ["MySQL", "Relational Schema Modeling"],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    shortTitle: "AI & ML",
    core: [
      "LLM Tool / Function Calling",
      "Prompt Engineering",
    ],
    additional: [
      "TensorFlow",
      "Keras",
      "CNN / Deep Learning",
      "Computer Vision",
      "NLP Foundations",
    ],
  },
  {
    id: "networking-testing",
    title: "Networking & Quality Assurance",
    shortTitle: "Network & QA",
    core: ["Software Testing"],
    additional: [
      "Git & GitHub",
      "Katalon Studio",
      "Apache JMeter",
      "Cisco Networking (VLAN / OSPF)",
      "IPv4 / IPv6 Subnetting",
    ],
  },
];
