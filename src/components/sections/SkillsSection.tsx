
import React, { useState } from "react";
import {
  Code,
  Globe,
  Server,
  Database,
  Brain,
  Network,
  Layers,
  Sparkles,
} from "lucide-react";

import {
  skillCategories,
  type SkillCategory,
} from "../../data/skills";

import { Card } from "../ui/Card";
import { ScrollReveal } from "../animations/ScrollReveal";

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "programming-languages":
        return <Code className="w-5 h-5 text-[#8AB4FF]" />;

      case "frontend-development":
        return <Globe className="w-5 h-5 text-[#8AB4FF]" />;

      case "backend-development":
        return <Server className="w-5 h-5 text-[#65C9AE]" />;

      case "databases-orm":
        return <Database className="w-5 h-5 text-[#8266B5]" />;

      case "ai-ml":
        return <Brain className="w-5 h-5 text-[#65C9AE]" />;

      case "networking-testing":
        return <Network className="w-5 h-5 text-[#8AB4FF]" />;

      default:
        return <Layers className="w-5 h-5 text-[#8AB4FF]" />;
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter(
          (cat) => cat.id === selectedCategory
        );

  return (
    <section
      id="skills"
      className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D] scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
                <span>02 &mdash; Technical Skills</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
                Tools, technologies &amp; capabilities.
              </h2>

              <p className="text-sm sm:text-base text-[#C6D4E8] max-w-xl font-mono">
                Core skills reflect technologies applied in hands-on
                projects, while supporting skills represent additional
                tools and technologies explored through practical
                experience and coursework.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div
              className="flex flex-wrap gap-2"
              aria-label="Filter technical skills by category"
            >
              <button
                type="button"
                aria-pressed={selectedCategory === "all"}
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#8AB4FF] text-[#08090D] font-bold"
                    : "bg-[#11141C] text-[#C6D4E8] border border-[#202A3B] hover:border-[#8AB4FF]/40"
                }`}
              >
                All
              </button>

              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={selectedCategory === cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#8AB4FF] text-[#08090D] font-bold"
                      : "bg-[#11141C] text-[#C6D4E8] border border-[#202A3B] hover:border-[#8AB4FF]/40"
                  }`}
                >
                  {cat.shortTitle}
                </button>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCategories.map(
            (category: SkillCategory, idx: number) => (
              <ScrollReveal
                key={category.id}
                delay={idx * 0.06}
              >
                <Card
                  interactive
                  className="p-6 h-full flex flex-col justify-between border-[#202A3B] space-y-6"
                >
                  <div>

                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-[#08090D] border border-[#202A3B]">
                        {getCategoryIcon(category.id)}
                      </div>

                      <h3 className="font-headline font-semibold text-lg text-[#F1F3F7]">
                        {category.title}
                      </h3>
                    </div>

                    {/* Core Skills */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#8AB4FF] uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        <span>Core Skills</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {category.core.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md border border-[#8AB4FF]/40 bg-[#161B26] text-xs font-mono text-[#F1F3F7] font-medium shadow-sm hover:border-[#8AB4FF] transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Additional Skills */}
                    <div className="space-y-2 pt-2 border-t border-[#202A3B]/60">
                      <div className="font-mono text-[11px] font-semibold text-[#C6D4E8] uppercase tracking-wider">
                        <span>Additional / Supporting</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {category.additional.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md border border-[#202A3B] bg-[#08090D] text-xs font-mono text-[#C6D4E8] hover:border-[#202A3B]/90 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </Card>
              </ScrollReveal>
            )
          )}

        </div>
      </div>
    </section>
  );
};
