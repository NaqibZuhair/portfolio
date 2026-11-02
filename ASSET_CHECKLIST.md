# Naqib Zuhair Al-Hudri Portfolio — Asset & Documentation Checklist

This checklist tracks all required and optional assets for the personal portfolio website.
As personal photographs, project screenshots, diagrams, and live links become available, place the files in the corresponding paths listed below and update the status in this document.

| Priority | Asset Name | Associated Section | Expected File Location | Current Status | Notes / Instructions |
|:---|:---|:---|:---|:---|:---|
| **P0 - Urgent** | Professional Headshot / Portrait | Hero & About Sections | `/public/images/profile/naqib-zuhair.jpg` | ⏳ Placeholder Active | Professional high-res portrait with neutral or dark studio lighting. Replaces `[REPLACE REQUIRED — PROFESSIONAL PORTRAIT]`. |
| **P0 - Urgent** | Personal Finance Tracker Mockup | Featured Projects & Project Detail | `/public/images/projects/personal-finance-tracker.png` | ⏳ Placeholder Active | Web dashboard screenshot showing transactions & WhatsApp expense sync. |
| **P0 - Urgent** | Personal Finance AI Architecture | Project Detail (`/projects/personal-finance-tracker`) | `/public/images/projects/finance-tracker-architecture.png` | ⏳ Placeholder Active | Diagram illustrating WhatsApp Baileys, multi-provider LLM fallback, and Prisma/PostgreSQL. |
| **P1 - High** | Rice Classification Accuracy & Confusion Matrix | Featured Projects & Project Detail (`/projects/rice-classification`) | `/public/images/projects/rice-classification-matrix.png` | ⏳ Placeholder Active | Training curves (98.15% accuracy, 0.0568 loss) or confusion matrix. |
| **P1 - High** | RuanginPNJ Dashboard Screenshot | Featured Projects & Project Detail (`/projects/ruangin-pnj`) | `/public/images/projects/ruangin-pnj-dashboard.png` | ⏳ Placeholder Active | Admin dashboard and reservation interface built with Tailwind CSS v4. |
| **P1 - High** | EduInsight Platform Concept Screen | Featured Projects & Project Detail (`/projects/edu-insight`) | `/public/images/projects/edu-insight-platform.png` | ⏳ Placeholder Active | UI mockup or screen from Web In Action (WIA) 2026 presentation. |
| **P1 - High** | Duta PNJ Presidential / MC Event Photo | Experience & Beyond Technology | `/public/images/leadership/duta-pnj-president.jpg` | ⏳ Placeholder Active | Stage photo from FDPNI National Working Meeting or PNJ-Hopu LZPU Launch. |
| **P1 - High** | Grand Final Duta PNJ Batch 6 Photo | Experience & Beyond Technology | `/public/images/leadership/grand-final-batch-6.jpg` | ⏳ Placeholder Active | Event stage / committee photo with VIP guests (Minister Prof. Brian Yuliarto). |
| **P2 - Medium** | Open House PNJ 2026 Logistics Photo | Experience Section | `/public/images/leadership/open-house-pnj-2026.jpg` | ⏳ Placeholder Active | Event crowd coordination or logistics management photo (1,500 attendees). |
| **P2 - Medium** | Arabic Instructor Classroom Photo | Experience Section | `/public/images/leadership/pesantren-teaching.jpg` | ⏳ Placeholder Active | Classroom or teaching documentation at Pesantren Modern Daarul Uluum Lido. |
| **P2 - Medium** | PASKIBRAKA Ceremonial Photo | Beyond Technology Section | `/public/images/leadership/paskibraka-flag-hoister.jpg` | ⏳ Placeholder Active | Ceremonial flag hoister documentation at Kabupaten Bogor. |
| **P2 - Medium** | Certificate of Appreciation (PNJ Director) | Achievements & Certifications | `/public/images/certificates/cert-director-pnj.jpg` | ⏳ Placeholder Active | Official certificate scan from Politeknik Negeri Jakarta Director (August 2026). |
| **P2 - Medium** | Asah AI Engineering Certificate / Badge | Achievements & Certifications | `/public/images/certificates/cert-asah-ai.jpg` | ⏳ Placeholder Active | Dicoding and GoTo Asah cohort credential. |
| **P2 - Medium** | Dicoding Deep Learning Certificate | Achievements & Certifications | `/public/images/certificates/cert-deep-learning.jpg` | ⏳ Placeholder Active | 110-hour Deep Learning course certificate from Dicoding. |
| **P2 - Medium** | Dicoding Machine Learning Certificate | Achievements & Certifications | `/public/images/certificates/cert-machine-learning.jpg` | ⏳ Placeholder Active | 90-hour ML for Beginners certificate from Dicoding. |
| **P2 - Medium** | Cisco CCNA: SRWE Certificate | Achievements & Certifications | `/public/images/certificates/cert-ccna-srwe.jpg` | ⏳ Placeholder Active | Switching, Routing, and Wireless Essentials certificate from Cisco Academy. |
| **P2 - Medium** | Cisco CCNA: ITN Certificate | Achievements & Certifications | `/public/images/certificates/cert-ccna-itn.jpg` | ⏳ Placeholder Active | Introduction to Networks certificate from Cisco Academy. |
| **P2 - Medium** | Pramuka Garuda & Regent Commendation | Achievements & Certifications | `/public/images/certificates/cert-pramuka-regent.jpg` | ⏳ Placeholder Active | Penegak Rank Pramuka Garuda award and Bogor Regent commendation. |
| **P3 - Low** | GitHub Project Repositories URLs | All Projects & Contact | Source Code Data files | ⏳ Set as Placeholder | Update `repoUrlPlaceholder` in `src/data/projects.ts` when repos are public. |
| **P3 - Low** | Live Project Deployments URLs | All Projects | Source Code Data files | ⏳ Set as Placeholder | Update `demoUrlPlaceholder` in `src/data/projects.ts` when live demo links are ready. |
| **P3 - Low** | Downloadable PDF Resume | Hero & Contact Sections | `/public/documents/Naqib_Zuhair_CV.pdf` | ✅ Ready (`docs/` source copied) | Sourced directly from official CV in `/docs`. |

---

### How to Replace Placeholders
1. Save the high-resolution image file to the corresponding folder in `/public/images/...`.
2. Open the corresponding component or data file in `src/data/`.
3. Set the image path property (e.g. `imageUrl: "/images/profile/naqib-zuhair.jpg"`).
4. Run `npm run build` to verify the asset is loaded without errors.

