export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  image?: string;
  tagline: string;
  category: string;
  type: string;
  date: string;
  featured: boolean;
  shortDescription: string;
  techStack: string[];
  repoUrl?: string;
  imagePlaceholderLabel: string;
  architecturePlaceholderLabel?: string;
  repoUrlPlaceholder: string;
  liveDemoUrl?: string; // Only set when actual working URL exists
  stats?: Array<{ label: string; value: string }>;
  overview: string;
  problemStatement: string;
  proposedSolution: string;
  contributions: string[];
  technicalImplementation: {
    architecture: string;
    highlights: string[];
  };
  resultsAndEvidence: {
    metrics: string[];
    summary: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: "personal-finance-tracker",
    slug: "personal-finance-tracker",
    image: "/images/projects/personal-finance-tracker.png",
    title: "Personal Finance Tracker & AI-Powered Financial Assistant",
    tagline: "Natural-language expense tracking and autonomous financial intelligence via multi-provider LLM orchestration.",
    category: "Full-Stack & Applied AI",
    type: "Personal Project",
    date: "March 2026 – July 2026",
    featured: true,
    shortDescription:
      "A flagship personal finance application featuring natural-language expense logging via WhatsApp (Baileys), multimodal receipt and voice processing, and a resilient multi-provider LLM fallback pipeline.",
    techStack: [
      "React 19",
      "TypeScript 5.7",
      "Vite 6",
      "Tailwind CSS 4",
      "Node.js 22",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Neon",
      "Zod",
      "Baileys",
      "LLM APIs (Gemini, Groq, Cerebras, OpenRouter)",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — PERSONAL FINANCE TRACKER SCREENSHOT]",
    architecturePlaceholderLabel: "[REPLACE REQUIRED — AI AGENT & SYSTEM ARCHITECTURE DIAGRAM]",
    repoUrl: "https://github.com/NaqibZuhair/personal-finance-tracker",
    repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
    stats: [
      { label: "AI Tool Schemas", value: "15+" },
      { label: "LLM Providers", value: "4 (Fallback)" },
      { label: "Input Modalities", value: "Text, Audio, OCR" },
    ],
    overview:
      "The Personal Finance Tracker & AI-Powered Financial Assistant is a full-stack financial ecosystem designed to eliminate manual bookkeeping friction. By meeting users through WhatsApp conversational chat and an interactive web dashboard, it utilizes an AI tool-calling engine to translate everyday conversational inputs, receipt images, and voice notes into structured PostgreSQL ledger entries.",
    problemStatement:
      "Manual personal finance tracking often fails due to input friction and tedious form-filling. Furthermore, single-provider LLM APIs encounter rate-limit spikes and temporary outages, making conversational logging fragile in production.",
    proposedSolution:
      "A dual-interface architecture combining a high-performance React dashboard and an asynchronous WhatsApp messaging service (via Baileys and WebSockets). The backend executes structured queries via 15+ Zod tool schemas, governed by a dynamic fallback router spanning Gemini, Cerebras, Groq, and OpenRouter for high availability.",
    contributions: [
      "Architected the WhatsApp messaging integration using the Baileys library and WebSocket-based services for conversational logging.",
      "Engineered multimodal input pipelines handling image uploads for OCR receipt parsing and audio voice note transcriptions.",
      "Designed an extensible AI tool-calling engine featuring over 15 typed tool schemas for structured CRUD, payday allocation, and budget checks.",
      "Implemented transactional database operations using Prisma ORM with PostgreSQL, hosted across Supabase and Neon.",
      "Built a self-healing multi-provider LLM router to dynamically fallback across Gemini, Cerebras, Groq, and OpenRouter.",
    ],
    technicalImplementation: {
      architecture:
        "Client layer built with React 19 and Tailwind CSS v4 communicating with a Node.js 22 / Express.js REST API and WebSocket daemon. The AI engine parses conversational payloads against Zod validation schemas, delegating database reads and writes through Prisma ORM to PostgreSQL.",
      highlights: [
        "Multi-provider orchestration: dynamic load routing between Gemini Pro, Groq (Llama), Cerebras, and OpenRouter.",
        "Strict Schema Safety: Zod-validated input contracts preventing hallucinated database write parameters.",
        "Real-time sync: Instant WebSocket notifications update the web client as soon as a WhatsApp transaction is logged.",
      ],
    },
    resultsAndEvidence: {
      metrics: [
        "Zero data loss across transaction logging via strict Prisma transactions.",
        "Sub-second AI response latency achieved using Cerebras and Groq inference endpoints.",
        "Over 15 distinct functional tool actions supporting split expenses, payday allocations, and threshold warnings.",
      ],
      summary:
        "Demonstrated an autonomous financial assistant bridging conversational messaging with enterprise relational persistence and multi-model AI resilience.",
    },
  },
  {
    id: "edu-insight",
    slug: "edu-insight",
    image: "/images/projects/edu-insight.png",
    title: "EduInsight — Education Data Intelligence Platform",
    tagline: "Bridging educational disparity and infrastructure gaps through open government data intelligence.",
    category: "Data Intelligence & Frontend",
    type: "Web In Action (WIA) 2026",
    date: "October 2026 – November 2026",
    featured: true,
    shortDescription:
      "An education data intelligence concept developed for Web In Action 2026, synthesizing open government data to analyze regional educational infrastructure disparities and support public transparency.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Open Government Data"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — EDUINSIGHT PLATFORM SCREENSHOT]",
    architecturePlaceholderLabel: "[REPLACE REQUIRED — DATA PIPELINE & UI ARCHITECTURE DIAGRAM]",
    repoUrl: "https://github.com/NaqibZuhair/edu-insight",
    repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
    stats: [
      { label: "Target Scope", value: "Regional Disparity" },
      { label: "Data Focus", value: "Open Govt Data" },
      { label: "Role", value: "Frontend & Concept" },
    ],
    overview:
      "Developed for Web In Action (WIA) 2026, EduInsight is an open data intelligence concept created to address regional infrastructure gaps in education. By synthesizing publicly available governmental records into intuitive visual analytics, the platform enables educators and civic stakeholders to identify infrastructure deficiencies.",
    problemStatement:
      "Regional school infrastructure disparities frequently go unnoticed by the public due to fragmented, inaccessible tabular open datasets. Without accessible data synthesis, communities lack clear indicators to advocate for equitable resources.",
    proposedSolution:
      "A lightweight web platform utilizing modern component architecture in React and Tailwind CSS. The solution connects open data repositories with exploratory dashboard views, allowing users to inspect district-level metrics and compare educational facilities.",
    contributions: [
      "Contributed to frontend development and interface conceptualization using React and Tailwind CSS.",
      "Explored open government datasets to identify critical educational infrastructure indicators.",
      "Engineered responsive UI views to translate raw indicators into accessible visual representations.",
      "Formulated solution concepts connecting civic transparency with actionable stakeholder decision-making.",
    ],
    technicalImplementation: {
      architecture:
        "Single-page application powered by React and Vite with a modular component design. Clean data transformations map open datasets into filterable dashboard components, styled with Tailwind CSS for accessible responsive layouts.",
      highlights: [
        "Exploratory filtering based on regional educational markers.",
        "Modern semantic markup prioritizing clarity and low-bandwidth accessibility.",
        "Strict adherence to verified project scope without fabricated completion claims.",
      ],
    },
    resultsAndEvidence: {
      metrics: [
        "Presented at Web In Action (WIA) 2026.",
        "Actionable concept linking public transparency with educational policy awareness.",
      ],
      summary:
        "A focused proof-of-concept demonstrating how modern frontend engineering can transform opaque public data into civic empowerment.",
    },
  },
  // {
  //   id: "rice-classification",
  //   slug: "rice-classification",
  //   title: "Rice Image Classification CNN Model",
  //   tagline: "A personal machine learning exploration project classifying multi-class rice grain varieties using Convolutional Neural Networks.",
  //   category: "Machine Learning & Deep Learning",
  //   type: "Personal Learning / Dicoding Project",
  //   date: "October 2026",
  //   featured: true,
  //   shortDescription:
  //     "A personal machine learning exploration project developed with TensorFlow and Keras, training a Convolutional Neural Network to classify multi-class rice grains and exporting edge-ready TF-Lite and TensorFlow.js models.",
  //   techStack: [
  //     "Python",
  //     "TensorFlow",
  //     "Keras",
  //     "TensorFlow Lite (TF-Lite)",
  //     "TensorFlow.js",
  //     "NumPy",
  //   ],
  //   imagePlaceholderLabel: "[REPLACE REQUIRED — RICE CLASSIFICATION MODEL ACCURACY PLOT & CONFUSION MATRIX]",
  //   architecturePlaceholderLabel: "[REPLACE REQUIRED — CNN MODEL ARCHITECTURE DIAGRAM]",
  //   repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
  //   stats: [
  //     { label: "Evaluation Accuracy", value: "98.15%" },
  //     { label: "Evaluation Loss", value: "0.0568" },
  //     { label: "Export Formats", value: "TF-Lite & TF.js" },
  //   ],
  //   overview:
  //     "A personal deep learning study project focused on agricultural grain image classification. Developed during machine learning coursework with Dicoding, this project evaluates the performance of a custom Convolutional Neural Network (CNN) in categorizing distinct rice grain varieties from sample imagery.",
  //   problemStatement:
  //     "Understanding image classification fundamentals requires exploring feature extraction, spatial convolutions, and model regularization. The goal was to build a disciplined training pipeline capable of generalizing across varied grain orientations and lighting conditions.",
  //   proposedSolution:
  //     "Constructed a sequential convolutional architecture with batch normalization, pooling, and dropout regularization. The workflow incorporates dataset preprocessing and image augmentation, followed by evaluation on an unseen test split and multi-format model export for browser and mobile runtimes.",
  //   contributions: [
  //     "Implemented dataset preprocessing and geometric data augmentation pipelines (rotation, flips, zoom, and normalization).",
  //     "Configured and trained the CNN architecture in Keras, experimenting with optimizers and learning rate parameters.",
  //     "Evaluated model convergence through validation loss and accuracy curves.",
  //     "Exported the final model to TensorFlow SavedModel, TensorFlow Lite (.tflite), and TensorFlow.js (.json) formats for cross-platform experimentation.",
  //   ],
  //   technicalImplementation: {
  //     architecture:
  //       "Sequential CNN pipeline implemented in TensorFlow/Keras with stacked 2D convolutional layers, ReLU activation, MaxPooling, Batch Normalization, and dense classification layers with Softmax output. Converted via TFLite Converter for mobile acceleration.",
  //     highlights: [
  //       "Achieved 98.15% evaluation accuracy on the experimental test dataset.",
  //       "Evaluation test loss of 0.0568 indicating steady convergence on the sample data.",
  //       "Exported cross-platform formats spanning TF SavedModel, TF-Lite, and TensorFlow.js.",
  //     ],
  //   },
  //   resultsAndEvidence: {
  //     metrics: [
  //       "98.15% evaluation accuracy verified on the held-out test split.",
  //       "0.0568 evaluation loss.",
  //       "Model successfully converted to TensorFlow Lite and TensorFlow.js formats.",
  //     ],
  //     summary:
  //       "A practical coursework exploration demonstrating foundational competency in deep learning workflows, model training, evaluation metrics, and edge export formats.",
  //   },
  // },
  {
    id: "ruangin-pnj",
    slug: "ruangin-pnj",
    image: "/images/projects/ruangin-pnj.jpg",
    title: "RuanginPNJ — Integrated Room Reservation & SQA System",
    tagline: "Campus facility booking platform reinforced with automated SQA and performance testing.",
    category: "Full-Stack & Quality Assurance",
    type: "Project-Based Learning (PBL)",
    date: "September 2025 – December 2025",
    featured: true,
    shortDescription:
      "An integrated room reservation system supporting institutional room and library management, featuring Tailwind CSS v4 administrative dashboards, Katalon Studio automated UI tests, and Apache JMeter performance testing.",
    techStack: [
      "Tailwind CSS v4",
      "Katalon Studio",
      "Apache JMeter",
      "Git",
      "GitHub",
      "Web Technologies",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — RUANGINPNJ DASHBOARD SCREENSHOT]",
    architecturePlaceholderLabel: "[REPLACE REQUIRED — SQA TEST PLAN & JMETER LOAD GRAPH]",
    repoUrl: "https://github.com/Shidqisep/PBL-RuanginPNJ",
    repoUrlPlaceholder: "https://github.com/Shidqisep/PBL-RuanginPNJ",
    stats: [
      { label: "Team Size", value: "5 Developers" },
      { label: "Testing", value: "Katalon & JMeter" },
      { label: "UI Engine", value: "Tailwind CSS v4" },
    ],
    overview:
      "RuanginPNJ was engineered during a semester-long Project-Based Learning (PBL) initiative at Politeknik Negeri Jakarta. The project addressed institutional space management by developing a centralized system for reserving auditorium and library facilities, paired with software quality assurance benchmarking.",
    problemStatement:
      "Manual room booking at campus facilities risks scheduling collisions and lack of real-time visibility. Software solutions must undergo rigorous automated quality assurance to ensure interface reliability and concurrency resilience.",
    proposedSolution:
      "A responsive reservation platform with an administrative dashboard built using Tailwind CSS v4. The system was validated against structured quality assurance protocols combining manual testing, automated UI test scripts in Katalon Studio, and load stress testing via Apache JMeter.",
    contributions: [
      "Developed responsive administrative dashboard views and reservation management interfaces using Tailwind CSS v4.",
      "Formulated module-level software quality assurance (SQA) test plans and performed manual exploratory testing.",
      "Authored automated UI test automation suites using Katalon Studio to validate reservation and authentication workflows.",
      "Conducted concurrency stress testing with Apache JMeter to analyze system throughput and response thresholds.",
      "Collaborated within a 5-member development team adhering to Git branching, issue tracking, and peer reviews.",
    ],
    technicalImplementation: {
      architecture:
        "Multi-tier web application structured around clean component boundaries and modular UI templates. Software Quality Assurance infrastructure established using Katalon Studio for regression and Apache JMeter for performance stress analysis.",
      highlights: [
        "Responsive administrative dashboard powered by Tailwind CSS v4.",
        "Automated regression coverage reducing manual validation time for critical booking flows.",
        "Performance benchmarks establishing response times and peak concurrency tolerances.",
      ],
    },
    resultsAndEvidence: {
      metrics: [
        "5-member collaborative project successfully delivered on schedule for PBL evaluation.",
        "Full test coverage across core booking cycles via Katalon Studio and JMeter.",
        "Zero critical regressions during final system demonstration.",
      ],
      summary:
        "Demonstrated frontend implementation discipline alongside systematic software quality assurance and cross-functional team collaboration.",
    },
  },
];
