import React from "react";
// import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Calendar, Cpu } from "lucide-react";
import { projectsData } from "../../data/projects";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animations/ScrollReveal";
import { GithubIcon } from "../ui/Icons";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
                <span>03 &mdash; Featured Projects</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
                Selected work &amp; experiments.
              </h2>
              <p className="text-sm sm:text-base text-[#C6D4E8] max-w-xl font-mono">
                Full-stack web applications, applied AI workflows, and tested engineering systems.
              </p>
            </div>
            <div className="font-mono text-xs text-[#8AB4FF] bg-[#11141C] border border-[#202A3B] px-3.5 py-1.5 rounded-lg w-fit">
              4 Featured Case Studies
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Showcase */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.08}>
              <Card
                interactive
                className="p-6 sm:p-8 lg:p-10 border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Visual Mockup / Architecture Slot */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    {/* <Link
                      to={`/projects/${project.slug}`}
                      className="block group relative overflow-hidden rounded-xl focus:outline-none"
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} dashboard preview`}
                          className="w-full aspect-video object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-xl"
                          loading="lazy"
                        />
                      ) : (
                        <PlaceholderMedia
                          label={project.imagePlaceholderLabel}
                          expectedPath={`/public/images/projects/${project.slug}.png`}
                          aspectRatio="16/9"
                          type="project"
                          priority="required"
                          className="group-hover:scale-[1.02] transition-transform duration-500 shadow-xl"
                        />
                      )}
                    </Link> */}
                    <div className="block group relative overflow-hidden rounded-xl">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} dashboard preview`}
                          className="w-full aspect-video object-cover rounded-xl shadow-xl"
                          loading="lazy"
                        />
                      ) : (
                        <PlaceholderMedia
                          label={project.imagePlaceholderLabel}
                          expectedPath={`/images/projects/${project.slug}.png`}
                          aspectRatio="16/9"
                          type="project"
                          priority="required"
                          className="shadow-xl"
                        />
                      )}
                    </div>

                    {/* Key Stats Bar */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {project.stats.map((s, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-[#08090D] border border-[#202A3B] text-center"
                          >
                            <div className="font-headline font-bold text-sm text-[#8AB4FF]">
                              {s.value}
                            </div>
                            <div className="font-mono text-[10px] text-[#C6D4E8] truncate">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Project Highlights & Core Actions */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    {/* Category & Date */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="electric">{project.category}</Badge>
                      <span className="flex items-center gap-1 font-mono text-xs text-[#C6D4E8]">
                        <Calendar className="w-3.5 h-3.5 text-[#8AB4FF]" />
                        {project.date}
                      </span>
                      <span className="font-mono text-xs text-[#C6D4E8]/60">&middot;</span>
                      <span className="font-mono text-xs text-[#8266B5]">{project.type}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors">
                      {/* <Link
                        to={`/projects/${project.slug}`}
                        className="hover:text-[#8AB4FF] transition-colors"
                      >
                        {project.title}
                      </Link> */}

                      <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#F1F3F7]">
                        {project.title}
                      </h3>

                    </h3>

                    {/* Concise Summary */}
                    <p className="text-sm sm:text-base text-[#C6D4E8] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technical Highlight */}
                    <div className="p-3 rounded-lg bg-[#08090D]/90 border border-[#202A3B] flex items-start gap-2.5 text-xs font-mono text-[#F1F3F7]">
                      <Cpu className="w-4 h-4 text-[#65C9AE] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#8AB4FF] font-semibold">Technical Highlight: </span>
                        {project.technicalImplementation.highlights[0]}
                      </div>
                    </div>

                    {/* Core Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#08090D] border border-[#202A3B] text-xs font-mono text-[#C6D4E8]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="px-2 py-1 rounded bg-[#08090D] border border-[#202A3B] text-[11px] font-mono text-[#8AB4FF]">
                          +{project.techStack.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Actions Strip */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#202A3B]/60">
                      {/* <Button
                        to={`/projects/${project.slug}`}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        View Case Study
                      </Button> */}

                      {/* GitHub Repository Button — Only shown when URL exists */}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg
                          bg-[#08090D] border border-[#202A3B]
                          text-[#C6D4E8] font-mono text-sm
                          hover:text-[#8AB4FF] hover:border-[#8AB4FF]/50
                          transition-all duration-200"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GitHub</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      )}

                      {/* Live Demo Button: ONLY shown if a real working URL exists */}
                      {project.liveDemoUrl && (
                        <Button
                          href={project.liveDemoUrl}
                          external
                          variant="secondary"
                          size="md"
                          rightIcon={<ExternalLink className="w-3.5 h-3.5 text-[#65C9AE]" />}
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
