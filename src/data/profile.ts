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
    highlights: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
  metrics: Array<{
    label: string;
    value: string;
    context: string;
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
      "I am an Informatics Engineering undergraduate at Politeknik Negeri Jakarta with a strong interest in software engineering and applied artificial intelligence. I enjoy turning ideas into practical digital solutions, building reliable systems, and working with people from different backgrounds to bring projects to life.",
    highlights: [
      {
        title: "Software Engineering Core",
        description:
          "Developing full-stack web applications, REST APIs, and database schemas with React, TypeScript, Node.js, and PostgreSQL. Focused on clean component architecture and scalable code quality.",
        tag: "Architecture & Systems",
      },
      {
        title: "Applied AI & Intelligent Systems",
        description:
          "Exploring how machine learning workflows and multi-provider LLM tool-calling enhance real-world user experiences, developed through coursework and the Asah AI Engineering cohort.",
        tag: "Applied AI",
      },
      {
        title: "Leadership & Public Communication",
        description:
          "Facilitating team alignment, organizational governance, and stakeholder diplomacy. Experienced in directing large-scale event operations and commanding stages as Master of Ceremonies.",
        tag: "Team Leadership",
      },
    ],
  },
  metrics: [
    {
      value: "4",
      label: "Engineered Systems",
      context: "Full-stack & AI case studies",
    },
    {
      value: "20+",
      label: "Events Hosted as MC",
      context: "Institutional & national stages",
    },
    {
      value: "1,500+",
      label: "Attendees Coordinated",
      context: "Open House PNJ 2026 logistics",
    },
  ],
  resumeUrl: "/documents/Naqib_Zuhair_CV.pdf",
};
