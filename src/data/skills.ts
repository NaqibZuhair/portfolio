export interface SkillItem {
  name: string;
  category: string;
  tag?: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Core languages used for systems programming, web applications, and data science pipelines.",
    skills: [
      { name: "Python", category: "programming", tag: "AI / Backend", featured: true },
      { name: "TypeScript", category: "programming", tag: "Full-Stack", featured: true },
      { name: "JavaScript", category: "programming", tag: "Frontend / Node.js", featured: true },
      { name: "PHP", category: "programming", tag: "Backend / MVC" },
      { name: "C++", category: "programming", tag: "Algorithms / Systems" },
      { name: "Java", category: "programming", tag: "OOP / Enterprise" },
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Modern, reactive user interfaces engineered with component architecture and responsive styling.",
    skills: [
      { name: "React", category: "frontend", tag: "UI Framework", featured: true },
      { name: "Vite", category: "frontend", tag: "Build Tooling", featured: true },
      { name: "Tailwind CSS", category: "frontend", tag: "Styling Engine", featured: true },
      { name: "HTML5 / Modern CSS", category: "frontend", tag: "Web Standards" },
      { name: "Responsive UI/UX", category: "frontend", tag: "Design Systems" },
    ],
  },
  {
    id: "backend-development",
    title: "Backend & API Development",
    description: "Scalable server architectures, RESTful API design, and modular service patterns.",
    skills: [
      { name: "Node.js", category: "backend", tag: "Runtime", featured: true },
      { name: "Express.js", category: "backend", tag: "Microservices", featured: true },
      { name: "Laravel", category: "backend", tag: "PHP Framework" },
      { name: "CodeIgniter 4", category: "backend", tag: "MVC Framework" },
      { name: "REST API Development", category: "backend", tag: "API Architecture", featured: true },
      { name: "WebSocket / Baileys", category: "backend", tag: "Real-time Messaging" },
    ],
  },
  {
    id: "databases-orm",
    title: "Databases & ORM",
    description: "Relational database modeling, query optimization, and modern schema management.",
    skills: [
      { name: "PostgreSQL", category: "database", tag: "Relational DB", featured: true },
      { name: "MySQL", category: "database", tag: "Relational DB" },
      { name: "Prisma ORM", category: "database", tag: "Type-safe ORM", featured: true },
      { name: "Supabase & Neon", category: "database", tag: "Cloud Serverless DB" },
    ],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    description: "Deep learning models, computer vision classifiers, prompt engineering, and LLM tool calling engines.",
    skills: [
      { name: "TensorFlow", category: "ai", tag: "Deep Learning", featured: true },
      { name: "Keras", category: "ai", tag: "Neural Networks", featured: true },
      { name: "Machine Learning", category: "ai", tag: "Supervised & Unsupervised", featured: true },
      { name: "Deep Learning", category: "ai", tag: "CNN / Transfer Learning", featured: true },
      { name: "Natural Language Processing (NLP)", category: "ai", tag: "Text & Speech" },
      { name: "Computer Vision", category: "ai", tag: "Image Classification", featured: true },
      { name: "Generative AI", category: "ai", tag: "LLM Orchestration", featured: true },
      { name: "Prompt Engineering", category: "ai", tag: "Context Optimization" },
      { name: "LLM Tool / Function Calling", category: "ai", tag: "Structured Execution", featured: true },
    ],
  },
  {
    id: "networking-testing",
    title: "Networking & Software Quality Assurance",
    description: "Enterprise networking infrastructure design and rigorous software testing suites.",
    skills: [
      { name: "IPv4 / IPv6", category: "networking", tag: "Addressing Architecture" },
      { name: "Subnetting & VLAN", category: "networking", tag: "Network Segmentation", featured: true },
      { name: "OSPF & STP", category: "networking", tag: "Routing & Switching" },
      { name: "WLAN & EtherChannel", category: "networking", tag: "Wireless & Aggregation" },
      { name: "Cisco Networking", category: "networking", tag: "Packet Tracer Labs", featured: true },
      { name: "Katalon Studio", category: "testing", tag: "Automated UI Testing", featured: true },
      { name: "Apache JMeter", category: "testing", tag: "Performance & Load Testing", featured: true },
      { name: "Git & GitHub", category: "tooling", tag: "Version Control", featured: true },
    ],
  },
];

