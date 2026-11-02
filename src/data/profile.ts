export interface ProfileData {
  name: string;
  eyebrow: string;
  headline: string;
  identity: string;
  shortDescription: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  cohort: {
    title: string;
    organizers: string;
    period: string;
    focus: string;
  };
  aboutStory: {
    intro: string;
    technical: string;
    aiAndInnovation: string;
    leadership: string;
  };
  metrics: Array<{
    label: string;
    value: string;
    description: string;
  }>;
  resumeUrl: string;
}

export const profileData: ProfileData = {
  name: "Naqib Zuhair Al-Hudri",
  eyebrow: "INFORMATICS ENGINEER · POLITEKNIK NEGERI JAKARTA",
  headline: "Building digital experiences through technology.",
  identity: "Software Engineer | Technology & Leadership",
  shortDescription:
    "Exploring the intersection of software engineering, emerging technologies, and meaningful human collaboration.",
  location: "Jakarta, Indonesia",
  email: "naqib.zuhair.alhudri@gmail.com",
  linkedin: "https://linkedin.com/in/naqibzuhair",
  // TODO: [ADD GITHUB REPOSITORY URL] - Update with actual GitHub profile URL
  github: "https://github.com/naqibzuhair",
  education: {
    degree: "Applied Bachelor's Degree (D4) in Informatics Engineering",
    institution: "Politeknik Negeri Jakarta (PNJ)",
    location: "Depok, Indonesia",
    period: "August 2024 – September 2028 (Expected)",
  },
  cohort: {
    title: "AI Engineering Cohort – Asah",
    organizers: "Dicoding and GoTo",
    period: "August 2026 – Present",
    focus: "Software engineering foundations, Python, prompt engineering & applied AI systems",
  },
  aboutStory: {
    intro:
      "I am an Informatics Engineering undergraduate at Politeknik Negeri Jakarta with a relentless curiosity for how robust systems and intuitive interfaces converge. My journey spans full-stack software development, applied artificial intelligence, and organizational leadership.",
    technical:
      "My primary professional identity is grounded in software engineering. From architecting responsive modern web platforms to designing backend microservices, REST APIs, and database schemas with PostgreSQL and Prisma, I focus on building reliable, scalable, and maintainable software solutions.",
    aiAndInnovation:
      "Through the Asah AI Engineering Cohort by Dicoding & GoTo, I dive deep into deep learning, computer vision, natural language processing, and LLM tool/function calling engines. I believe modern software should intelligently adapt to human intent rather than merely parsing inputs.",
    leadership:
      "Beyond technical engineering, I actively lead teams and engage communities. As President of Duta PNJ Batch 5 and Project Officer for high-profile national events, I have hosted VIP dignitaries including government ministers, directed 30+ person cross-functional committees, and bridged technical complexity with clear, empathetic communication.",
  },
  metrics: [
    {
      value: "98.15%",
      label: "Model Accuracy",
      description: "Rice grain CNN image classification model test accuracy",
    },
    {
      value: "15+",
      label: "AI Tool Schemas",
      description: "Custom function calling schemas in AI finance assistant",
    },
    {
      value: "20+",
      label: "Events Hosted as MC",
      description: "Institutional & national events with high-level dignitaries",
    },
    {
      value: "1,500+",
      label: "Event Attendees",
      description: "Students & stakeholders coordinated across major events",
    },
  ],
  resumeUrl: "/documents/Naqib_Zuhair_CV.pdf",
};

