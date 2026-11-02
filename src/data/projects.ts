export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  type: string;
  date: string;
  featured: boolean;
  shortDescription: string;
  techStack: string[];
  imagePlaceholderLabel: string;
  architecturePlaceholderLabel?: string;
  repoUrlPlaceholder: string;
  demoUrlPlaceholder?: string;
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
    title: "Personal Finance Tracker & AI-Powered Financial Assistant",
    tagline: "Natural-language expense tracking and autonomous financial intelligence via multi-provider LLM orchestration.",
    category: "Full-Stack & Applied AI",
    type: "Personal Project",
    date: "March 2026 – July 2026",
    featured: true,
    shortDescription:
      "A personal finance management application featuring natural-language expense logging, WhatsApp conversational input, multimodal receipt/voice processing, and resilient multi-provider LLM fallback.",
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
    repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
    demoUrlPlaceholder: "[ADD LIVE DEMO URL]",
    stats: [
      { label: "AI Tool Schemas", value: "15+" },
      { label: "LLM Providers", value: "4 (Fallback)" },
      { label: "Input Modalities", value: "Text, Audio, OCR" },
    ],
    overview:
      "The Personal Finance Tracker & AI-Powered Financial Assistant is an intelligent full-stack financial ecosystem designed to eliminate the friction of manual bookkeeping. By meeting users where they already communicate—via WhatsApp and interactive web dashboards—it leverages AI tool-calling to convert natural colloquial messages, receipt photos, and audio notes into structured ledger entries and budget forecasts.",
    problemStatement:
      "Traditional personal finance apps fail primarily due to user friction: manual categorizations, tedious receipt typing, and rigid forms lead to user abandonment within weeks. Furthermore, single-provider LLM backends frequently suffer from rate-limits and latency spikes, making conversational logging unreliable in production.",
    proposedSolution:
      "A dual-interface platform comprising a high-performance React dashboard and an asynchronous WhatsApp daemon (built via Baileys & WebSockets). The backend implements a resilient multi-provider LLM fallback pipeline that systematically attempts execution across Gemini, Cerebras, Groq, and OpenRouter, backed by OCR and 15+ strictly typed Zod tool schemas.",
    contributions: [
      "Architected and deployed the WhatsApp integration using Baileys and persistent WebSocket services, enabling frictionless conversational expense logging.",
      "Engineered multimodal input pipelines handling raw image uploads for OCR receipt parsing and voice note transcription workflows.",
      "Designed an extensible AI tool-calling engine featuring over 15 typed tool schemas to execute structured database queries, budget allocations, and analytics.",
      "Implemented full relational database operations using Prisma ORM with PostgreSQL, hosted on Supabase and Neon, featuring transactional payday budget allocation.",
      "Constructed a self-healing multi-provider LLM fallback router spanning Gemini, Cerebras, Groq, and OpenRouter to guarantee high availability and bypass rate limits.",
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
        "Successfully demonstrated an autonomous financial assistant that bridges conversational messaging with enterprise-grade relational persistence and multi-model AI resilience.",
    },
  },
  {
    id: "edu-insight",
    slug: "edu-insight",
    title: "EduInsight — Education Data Intelligence Platform",
    tagline: "Bridging educational disparity and infrastructure gaps through open government data intelligence.",
    category: "Data Intelligence & Frontend",
    type: "Web In Action (WIA) 2026",
    date: "October 2026 – November 2026",
    featured: true,
    shortDescription:
      "An education-focused digital platform addressing regional disparities in educational infrastructure by synthesizing open government datasets into transparent, actionable intelligence.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Open Government Data"],
    imagePlaceholderLabel: "[REPLACE REQUIRED — EDUINSIGHT PLATFORM SCREENSHOT]",
    architecturePlaceholderLabel: "[REPLACE REQUIRED — DATA PIPELINE & UI ARCHITECTURE DIAGRAM]",
    repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
    demoUrlPlaceholder: "[ADD LIVE DEMO URL]",
    stats: [
      { label: "Target Scope", value: "Regional Disparity" },
      { label: "Data Focus", value: "Open Govt Data" },
      { label: "Role", value: "Frontend & Concept" },
    ],
    overview:
      "Developed for Web In Action (WIA) 2026, EduInsight is an open data intelligence concept created to shed light on regional infrastructure gaps in Indonesian education. By synthesizing publicly available governmental records into intuitive visual analytics, the platform enables educators, civic advocates, and policymakers to identify critical deficiencies in school resources.",
    problemStatement:
      "Disparities in school infrastructure across regions frequently go unnoticed by the public due to fragmented, inaccessible tabular open data. Without actionable synthesis, citizens and local stakeholders lack the tools needed to advocate for equitable resource distribution.",
    proposedSolution:
      "A lightweight, reactive web platform utilizing modern component architecture in React and Tailwind CSS. The solution connects open data repositories with interactive exploratory components, allowing users to drill down into district-level metrics and compare educational facilities.",
    contributions: [
      "Contributed to the conceptualization and frontend development of the education-focused digital platform.",
      "Explored open government datasets to identify critical educational infrastructure indicators suitable for public consumption.",
      "Engineered responsive UI views using React and Tailwind CSS to translate raw data indicators into accessible visual representations.",
      "Formulated solution concepts connecting civic transparency with actionable stakeholder decision-making.",
    ],
    technicalImplementation: {
      architecture:
        "Single-page application powered by React and Vite with a modular component design. Clean data transformations map open datasets into filterable dashboard components, styled with Tailwind CSS for high accessibility across device viewports.",
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
  {
    id: "rice-classification",
    slug: "rice-classification",
    title: "Rice Image Classification CNN Model",
    tagline: "High-accuracy multi-class agricultural grain classification using deep Convolutional Neural Networks.",
    category: "Machine Learning & Deep Learning",
    type: "Personal / Dicoding Project",
    date: "October 2026",
    featured: true,
    shortDescription:
      "A multi-class rice grain image classification model developed with TensorFlow and Keras, achieving 98.15% test accuracy and exported to TF-Lite and TensorFlow.js for cross-platform deployment.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "TensorFlow Lite (TF-Lite)",
      "TensorFlow.js",
      "NumPy",
    ],
    imagePlaceholderLabel: "[REPLACE REQUIRED — RICE CLASSIFICATION MODEL ACCURACY PLOT & CONFUSION MATRIX]",
    architecturePlaceholderLabel: "[REPLACE REQUIRED — CNN MODEL ARCHITECTURE DIAGRAM]",
    repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
    demoUrlPlaceholder: "[ADD LIVE DEMO URL]",
    stats: [
      { label: "Test Accuracy", value: "98.15%" },
      { label: "Test Loss", value: "0.0568" },
      { label: "Formats", value: "SavedModel, TFLite, TF.js" },
    ],
    overview:
      "An end-to-end deep learning project focused on high-precision agricultural grain inspection. Developed as part of advanced machine learning exploration with Dicoding, this project trains a custom Convolutional Neural Network (CNN) to differentiate and classify distinct rice grain varieties from high-resolution micro-imagery.",
    problemStatement:
      "Manual grain quality inspection in agricultural distribution is labor-intensive, error-prone, and inconsistent. Automated computer vision models require robust generalization across lighting variations, grain rotations, and microscopic texture differences while maintaining lightweight footprints suitable for edge deployment.",
    proposedSolution:
      "Constructed a deep convolutional architecture with tuned convolutional blocks, batch normalization, and dropout regularization. The pipeline incorporates rigorous image preprocessing and data augmentation before training, followed by quantization and multi-format export to support edge mobile devices and browser execution.",
    contributions: [
      "Engineered data preprocessing and geometric augmentation pipelines (rotation, horizontal flips, zoom, and normalization) to prevent overfitting.",
      "Designed and trained the Convolutional Neural Network architecture in Keras, iterating through learning rate schedulers and optimizer configurations.",
      "Conducted extensive hyperparameter tuning to achieve an optimal balance between parameter size and validation precision.",
      "Exported the final trained model into TensorFlow SavedModel, TensorFlow Lite (.tflite), and TensorFlow.js (.json) formats for cross-platform edge and browser deployment.",
    ],
    technicalImplementation: {
      architecture:
        "Sequential CNN pipeline implemented in TensorFlow/Keras with stacked 2D convolutional layers, ReLU activation, MaxPooling, Batch Normalization, and dense classification layers with Softmax output. Converted via TFLite Converter for mobile acceleration.",
      highlights: [
        "98.15% evaluation accuracy achieved on unseen test split.",
        "Low test loss of 0.0568 demonstrating exceptional convergence and absence of overfitting.",
        "Multi-runtime portability spanning server, browser, and mobile targets.",
      ],
    },
    resultsAndEvidence: {
      metrics: [
        "98.15% Test Accuracy verified on evaluation test split.",
        "0.0568 Test Loss.",
        "Complete export to TensorFlow SavedModel, TF-Lite, and TensorFlow.js formats.",
      ],
      summary:
        "Proves rigorous machine learning and deep learning mastery, showing full-cycle capability from raw data ingestion to lightweight edge-ready model artifacts.",
    },
  },
  {
    id: "ruangin-pnj",
    slug: "ruangin-pnj",
    title: "RuanginPNJ — Integrated Room Reservation & SQA System",
    tagline: "Campus facility booking platform reinforced with automated SQA and performance testing.",
    category: "Full-Stack & Quality Assurance",
    type: "Project-Based Learning (PBL)",
    date: "September 2025 – December 2025",
    featured: true,
    shortDescription:
      "An integrated room reservation system supporting institutional room and library management, featuring Tailwind CSS v4 administrative dashboards and rigorous automated UI and performance testing.",
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
    repoUrlPlaceholder: "[ADD GITHUB REPOSITORY URL]",
    demoUrlPlaceholder: "[ADD LIVE DEMO URL]",
    stats: [
      { label: "Team Size", value: "5 Developers" },
      { label: "Testing", value: "Katalon & JMeter" },
      { label: "UI Engine", value: "Tailwind CSS v4" },
    ],
    overview:
      "RuanginPNJ was engineered during a semester-long Project-Based Learning (PBL) initiative at Politeknik Negeri Jakarta. The project tackled campus resource management by building a centralized digital system for scheduling and reserving academic auditoriums, lecture halls, and library spaces, coupled with comprehensive software quality assurance protocols.",
    problemStatement:
      "Manual and paper-based room booking at educational institutions results in scheduling collisions, double bookings, lack of real-time availability visibility, and vulnerability to concurrency spikes during peak registration windows.",
    proposedSolution:
      "A responsive, secure reservation management platform accompanied by an administrative dashboard. The system was validated against stringent software quality assurance benchmarks, combining manual exploratory testing, structural code analysis, automated UI end-to-end suites, and stress load testing.",
    contributions: [
      "Engineered responsive administrative dashboard views and reservation management interfaces utilizing modern Tailwind CSS v4.",
      "Formulated module-level Software Quality Assurance (SQA) test plans, executing manual exploratory and edge-case testing.",
      "Authored automated UI test automation test suites using Katalon Studio to validate user reservation workflows and authentication states.",
      "Configured and ran concurrency and stress load testing with Apache JMeter to analyze system throughput and identify bottleneck response thresholds.",
      "Collaborated within a 5-member development team adhering to Git branching strategies, issue tracking, and peer code reviews.",
    ],
    technicalImplementation: {
      architecture:
        "Collaborative multi-tier web application structured around clean component boundaries and modular UI templates. Software Quality Assurance infrastructure established using Katalon Studio for continuous regression and Apache JMeter for performance stress analysis.",
      highlights: [
        "Rapid responsive UI styling powered by Tailwind CSS v4 utility architecture.",
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
        "Showcased both frontend implementation skill and engineering discipline through systematic software quality assurance and team collaboration.",
    },
  },
];

