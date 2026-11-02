# Naqib Zuhair Al-Hudri — Personal Portfolio

> **Production-ready, highly interactive personal portfolio website for Naqib Zuhair Al-Hudri**, Informatics Engineering undergraduate at Politeknik Negeri Jakarta (PNJ) and Asah AI Engineering Fellow (Dicoding & GoTo).

---

## 🧭 Professional Dimensions

This portfolio communicates three intersecting dimensions of professional identity:

1. **Software Engineering (Primary Core)**: Practical full-stack software development with React, TypeScript, Node.js, Express, PostgreSQL, Prisma ORM, and REST APIs.
2. **Technology & Applied AI**: Machine learning and deep learning applications with TensorFlow/Keras, LLM function/tool-calling orchestration, multi-provider fallbacks, and computer vision.
3. **Leadership & Communication**: Institutional governance as President of Duta PNJ Batch 5, Project Officer for national events, VIP protocol management (including cabinet ministers), and Master of Ceremonies for 20+ institutional events.

---

## 🎨 Creative Direction & Design System

- **Dark Futuristic Aesthetic**: Void Black (`#08090D`), Charcoal (`#11141C`), and Slate (`#202A3B`) with Electric Blue (`#8AB4FF`) primary accents, Silver (`#C6D4E8`), Violet (`#8266B5`), and Mint (`#65C9AE`).
- **Editorial Typography**:
  - Headlines: **Space Grotesk**
  - Body: **Inter**
  - Technical Labels & Meta: **IBM Plex Mono**
- **Motion & 3D Visuals**:
  - Interactive 3D futuristic geometric mesh powered by **Three.js** and **React Three Fiber**.
  - Graceful static SVG fallback when WebGL is unavailable or when `prefers-reduced-motion` is active.
  - Smooth inertia scrolling via **Lenis**.
  - Cinematic text reveals, magnetic buttons, and scroll triggers via **Motion**.
  - Custom desktop cursor with touch-device and reduced-motion detection.

---

## 🏛️ Website Architecture

### 1. Single Page Application Routes (React Router)
- `/` &mdash; Complete interactive homepage with 8 ordered sections:
  1. **Hero**: Eyebrow, cinematic headline reveal, key metrics, 3D interactive hero object + portrait card, and magnetic CTAs.
  2. **About**: Informatics Engineering background, Asah AI Engineering cohort, and split narrative layout.
  3. **Technical Expertise**: Filterable interactive cards covering Programming Languages, Frontend, Backend, Databases, AI/ML, and Networking & SQA.
  4. **Featured Projects**: Premium project cards with stats, tech tags, and links to detailed case studies.
  5. **Experience & Leadership**: Timeline showcasing presidential governance, event direction, and pedagogical instruction.
  6. **Beyond Technology**: The human dimension &mdash; MC hosting, campus representation, VIP protocols, and ceremonial discipline (PASKIBRAKA).
  7. **Achievements & Certifications**: Grid of 8 verified recognitions with interactive modal dialog previews.
  8. **Contact**: Interactive collaboration card, one-click email copy, direct message trigger, and CV download.
- `/projects/personal-finance-tracker` &mdash; Deep case study with system architecture, multi-provider LLM fallback, and WhatsApp Baileys integration.
- `/projects/edu-insight` &mdash; Case study on open government data intelligence presented at Web In Action (WIA) 2026.
- `/projects/rice-classification` &mdash; Deep learning CNN model case study achieving 98.15% test accuracy with TF-Lite and TF.js exports.
- `/projects/ruangin-pnj` &mdash; Institutional room reservation system with Tailwind CSS v4 dashboard and automated Katalon/JMeter SQA.
- `*` &mdash; Stylized 404 Not Found page with return-to-safety navigation.

---

## 📂 Source Structure

```
portfolio/
├── docs/                               # Official CV documents
│   ├── Naqib_Zuhair_Professional_CV.pdf
│   └── Naqib_Zuhair_Professional_CV.docx
├── public/
│   ├── documents/                      # Downloadable CV
│   │   └── Naqib_Zuhair_CV.pdf
│   ├── images/                         # Asset targets
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── leadership/
│   │   └── certificates/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── animations/                 # TextReveal, Magnetic, ScrollReveal
│   │   ├── layout/                     # Navbar, Footer, Layout
│   │   └── ui/                         # Button, Card, Badge, Modal, CustomCursor, Preloader, PlaceholderMedia, Icons
│   ├── data/                           # Structured TypeScript content models
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── achievements.ts
│   │   └── beyondTech.ts
│   ├── hooks/                          # useSmoothScroll, useReducedMotion
│   ├── lib/                            # utils (clsx + tailwind-merge)
│   ├── pages/                          # HomePage, ProjectDetailPage, NotFoundPage
│   ├── sections/                       # 8 Homepage Sections
│   ├── three/                          # HeroScene (R3F), FallbackGraphic (SVG)
│   ├── App.tsx                         # Router configuration
│   ├── index.css                       # Tailwind CSS v4 + Design tokens
│   └── main.tsx
├── ASSET_CHECKLIST.md                  # Comprehensive placeholder replacement guide
├── vercel.json                         # Vercel SPA rewrite configuration
└── vite.config.ts                      # Vite 8 + Tailwind v4 + dynamic chunking
```

---

## 📋 Asset Replacement Policy

To maintain professional authenticity, missing photographs, screenshots, and URLs use **designed architectural placeholders** with standard labels (e.g., `[REPLACE REQUIRED — PROFESSIONAL PORTRAIT]`, `[ADD GITHUB REPOSITORY URL]`).

Refer to **[ASSET_CHECKLIST.md](./ASSET_CHECKLIST.md)** for:
- Required vs. optional asset classification.
- Expected file destination paths.
- Priority rankings (P0 Urgent through P3 Low).
- Step-by-step replacement instructions.

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ (tested with Node.js 22+)
- npm or pnpm

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Start local Vite development server
npm run dev

# 3. Build for production (TypeScript check + Vite production bundle)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ☁️ Deployment to Vercel

The repository is configured for zero-configuration deployment to [Vercel](https://vercel.com):

1. Push this repository to GitHub/GitLab.
2. In the Vercel Dashboard, import the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Client-side routing is handled automatically via `vercel.json`:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```
8. Click **Deploy**.
