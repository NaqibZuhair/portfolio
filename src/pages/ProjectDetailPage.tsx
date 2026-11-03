import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Layers,
  Terminal,
  Cpu,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { projectsData } from "../data/projects";
import { PlaceholderMedia } from "../components/ui/PlaceholderMedia";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { ScrollReveal } from "../components/animations/ScrollReveal";
import { GithubIcon } from "../components/ui/Icons";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return <Navigate to="/404" replace />;
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <article className="py-12 sm:py-16 relative bg-[#08090D] min-h-screen">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#8AB4FF]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb & Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#8AB4FF] hover:text-[#A6C8FF] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          <span className="font-mono text-xs text-[#C6D4E8]">
            Case Study {projectIndex + 1} of {projectsData.length}
          </span>
        </div>

        {/* Project Header */}
        <header className="space-y-4 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="electric">{project.category}</Badge>
            <span className="font-mono text-xs text-[#C6D4E8] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8AB4FF]" />
              {project.date}
            </span>
            <span className="font-mono text-xs text-[#C6D4E8]/60">&middot;</span>
            <span className="font-mono text-xs text-[#8266B5]">{project.type}</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F3F7] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#C6D4E8] max-w-3xl font-sans leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#11141C] border border-[#202A3B] flex flex-col justify-center"
                >
                  <div className="font-headline text-2xl font-bold text-[#8AB4FF]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-[#C6D4E8]">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Primary Project Visual Mockup */}
        <section className="mb-16">
          <PlaceholderMedia
            label={project.imagePlaceholderLabel}
            expectedPath={`/public/images/projects/${project.slug}.png`}
            aspectRatio="16/9"
            type="project"
            priority="required"
            className="shadow-2xl border-[#8AB4FF]/30"
          />
        </section>

        {/* Case Study Structured Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Overview */}
            <ScrollReveal>
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-[#8AB4FF] uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>01. Project Overview</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-[#F1F3F7]">Overview</h2>
                <p className="text-base text-[#F1F3F7] leading-relaxed font-sans">
                  {project.overview}
                </p>
              </section>
            </ScrollReveal>

            {/* 2. Problem Statement */}
            <ScrollReveal>
              <section className="p-6 sm:p-8 rounded-2xl bg-[#11141C] border border-[#202A3B] space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-[#8266B5] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>02. The Challenge</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-[#F1F3F7]">
                  Problem Statement
                </h2>
                <p className="text-sm sm:text-base text-[#C6D4E8] leading-relaxed">
                  {project.problemStatement}
                </p>
              </section>
            </ScrollReveal>

            {/* 3. Proposed Solution */}
            <ScrollReveal>
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-[#65C9AE] uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>03. The Strategy</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-[#F1F3F7]">
                  Proposed Solution
                </h2>
                <p className="text-base text-[#F1F3F7] leading-relaxed font-sans">
                  {project.proposedSolution}
                </p>
              </section>
            </ScrollReveal>

            {/* 4. Personal Contributions */}
            <ScrollReveal>
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-[#8AB4FF] uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>04. Engineering Scope</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-[#F1F3F7]">
                  Key Contributions &amp; Implementation
                </h2>
                <div className="space-y-3">
                  {project.contributions.map((contribution, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#11141C] border border-[#202A3B] flex items-start gap-3.5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#65C9AE] shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-[#C6D4E8] leading-relaxed">
                        {contribution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* 5. Technical Architecture & Diagram */}
            <ScrollReveal>
              <section className="space-y-5">
                <div className="flex items-center gap-2 text-sm font-mono text-[#8AB4FF] uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>05. System Architecture</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-[#F1F3F7]">
                  Technical Implementation
                </h2>
                <p className="text-base text-[#C6D4E8] leading-relaxed">
                  {project.technicalImplementation.architecture}
                </p>

                {/* Architecture Diagram Placeholder */}
                {project.architecturePlaceholderLabel && (
                  <PlaceholderMedia
                    label={project.architecturePlaceholderLabel}
                    expectedPath={`/public/images/projects/${project.slug}-architecture.png`}
                    aspectRatio="16/9"
                    type="diagram"
                    priority="required"
                  />
                )}

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.technicalImplementation.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#11141C] border border-[#202A3B] text-xs font-mono text-[#C6D4E8] leading-relaxed"
                    >
                      <span className="text-[#8AB4FF] font-semibold block mb-1">
                        &mdash; Component {i + 1}
                      </span>
                      {h}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* 6. Results and Evidence */}
            <ScrollReveal>
              <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#11141C] to-[#08090D] border border-[#202A3B] space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-[#65C9AE] uppercase tracking-wider">
                  <BarChart3 className="w-4 h-4" />
                  <span>06. Impact &amp; Evaluation</span>
                </div>
                <h2 className="font-headline text-2xl font-bold text-[#F1F3F7]">
                  Results &amp; Evidence
                </h2>
                <div className="space-y-2">
                  {project.resultsAndEvidence.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm font-mono text-[#F1F3F7]">
                      <span className="w-2 h-2 rounded-full bg-[#65C9AE] mt-1.5 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#C6D4E8] pt-2 border-t border-[#202A3B]/60 leading-relaxed">
                  {project.resultsAndEvidence.summary}
                </p>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Column: Tech Stack & Project Links */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Tech Stack Card */}
            <Card className="p-6 border-[#202A3B] bg-[#11141C] sticky top-24 space-y-6">
              <div>
                <h3 className="font-headline text-lg font-bold text-[#F1F3F7] mb-3">
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#08090D] border border-[#202A3B] text-xs font-mono text-[#C6D4E8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Metadata */}
              <div className="pt-4 border-t border-[#202A3B] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#C6D4E8]">Timeline:</span>
                  <span className="text-[#F1F3F7] font-semibold">{project.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#C6D4E8]">Initiative:</span>
                  <span className="text-[#8AB4FF] font-semibold">{project.type}</span>
                </div>
              </div>

              {/* Repository & Demo Actions */}
              <div className="pt-4 border-t border-[#202A3B] space-y-3">
                <h4 className="font-mono text-xs text-[#C6D4E8] uppercase tracking-wider">
                  Source &amp; Live Links
                </h4>

                {/* Non-navigating Pending Repository Button */}
                <div
                  className="p-3 rounded-lg bg-[#08090D] border border-dashed border-[#202A3B] text-xs font-mono text-[#C6D4E8] flex items-center gap-2 cursor-default select-none"
                  title="Repository URL pending public upload"
                  role="status"
                >
                  <GithubIcon className="w-4 h-4 text-[#8AB4FF] shrink-0" />
                  <span className="truncate">{project.repoUrlPlaceholder}</span>
                </div>

                {/* Only render live demo if a real working URL is provided */}
                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    external
                    variant="secondary"
                    className="w-full"
                    rightIcon={<ExternalLink className="w-4 h-4 text-[#65C9AE]" />}
                  >
                    Launch Live Demo
                  </Button>
                )}
              </div>

              {/* Contact Lead CTA */}
              <div className="pt-2">
                <Button href="/#contact" variant="primary" className="w-full">
                  Discuss this Project
                </Button>
              </div>
            </Card>
          </aside>
        </div>

        {/* Next / Previous Project Navigation */}
        <nav
          aria-label="Project Navigation"
          className="mt-20 pt-10 border-t border-[#202A3B] grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="p-6 rounded-2xl bg-[#11141C] border border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all group flex flex-col justify-between"
            >
              <span className="font-mono text-xs text-[#8AB4FF] flex items-center gap-1 mb-2">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="font-headline font-bold text-lg text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="p-6 rounded-2xl bg-[#11141C] border border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all group flex flex-col justify-between text-right"
            >
              <span className="font-mono text-xs text-[#8AB4FF] flex items-center justify-end gap-1 mb-2">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-headline font-bold text-lg text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </article>
  );
};
