import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Calendar } from "lucide-react";
import { projectsData } from "../../data/projects";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animations/ScrollReveal";
import { GithubIcon } from "../ui/Icons";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D]">
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
              <p className="text-sm sm:text-base text-[#C6D4E8]/70 max-w-xl font-mono">
                Architected software systems, applied machine learning pipelines, and tested applications.
              </p>
            </div>
            <div className="font-mono text-xs text-[#C6D4E8]/60 bg-[#11141C] border border-[#202A3B] px-3.5 py-1.5 rounded-lg w-fit">
              4 Case Studies Available
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Card
                interactive
                className="p-6 sm:p-8 lg:p-10 border-[#202A3B] hover:border-[#8AB4FF]/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Visual Mockup / Placeholder */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="block group relative overflow-hidden rounded-xl focus:outline-none"
                    >
                      <PlaceholderMedia
                        label={project.imagePlaceholderLabel}
                        expectedPath={`/public/images/projects/${project.slug}.png`}
                        aspectRatio="16/9"
                        type="project"
                        priority="required"
                        className="group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </Link>

                    {/* Stats strip */}
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
                            <div className="font-mono text-[10px] text-[#C6D4E8]/60 truncate">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Project Details & Actions */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="electric">{project.category}</Badge>
                      <span className="flex items-center gap-1 font-mono text-xs text-[#C6D4E8]/60">
                        <Calendar className="w-3.5 h-3.5 text-[#8AB4FF]" />
                        {project.date}
                      </span>
                      <span className="font-mono text-xs text-[#C6D4E8]/40">&middot;</span>
                      <span className="font-mono text-xs text-[#8266B5]">{project.type}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#F1F3F7] group-hover:text-[#8AB4FF] transition-colors">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="hover:text-[#8AB4FF] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#C6D4E8]/80 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 7).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#08090D] border border-[#202A3B] text-xs font-mono text-[#C6D4E8]/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 7 && (
                        <span className="px-2 py-1 rounded bg-[#08090D] border border-[#202A3B] text-[11px] font-mono text-[#8AB4FF]">
                          +{project.techStack.length - 7} more
                        </span>
                      )}
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#202A3B]/60">
                      <Button
                        to={`/projects/${project.slug}`}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowUpRight className="w-4 h-4" />}
                      >
                        View Case Study
                      </Button>

                      {/* Repositories & Demo with clear placeholder indicator */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-[#C6D4E8]/60 bg-[#08090D] border border-[#202A3B]">
                        <GithubIcon className="w-3.5 h-3.5 text-[#8AB4FF]" />
                        {project.repoUrlPlaceholder}
                      </span>

                      {project.demoUrlPlaceholder && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-[#C6D4E8]/60 bg-[#08090D] border border-[#202A3B]">
                          <ExternalLink className="w-3.5 h-3.5 text-[#65C9AE]" />
                          {project.demoUrlPlaceholder}
                        </span>
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
