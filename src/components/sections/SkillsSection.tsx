import React, { useState } from "react";
import {
  Code,
  Globe,
  Server,
  Database,
  Brain,
  Network,
  CheckCircle,
  Layers,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "../../data/skills";
import { Card } from "../ui/Card";
import { ScrollReveal } from "../animations/ScrollReveal";

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-[#202A3B]/60 bg-[#08090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#8AB4FF] uppercase tracking-wider">
                <span>02 &mdash; Technical Expertise</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F3F7]">
                Tools, technologies &amp; capabilities.
              </h2>
              <p className="text-sm sm:text-base text-[#C6D4E8]/70 max-w-xl font-mono">
                Practical engineering tools applied across production apps, machine learning models, and automated QA.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#8AB4FF] text-[#08090D] font-bold"
                    : "bg-[#11141C] text-[#C6D4E8] border border-[#202A3B] hover:border-[#8AB4FF]/40"
                }`}
              >
                All Domains
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#8AB4FF] text-[#08090D] font-bold"
                      : "bg-[#11141C] text-[#C6D4E8] border border-[#202A3B] hover:border-[#8AB4FF]/40"
                  }`}
                >
                  {cat.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category: SkillCategory, idx: number) => (
            <ScrollReveal key={category.id} delay={idx * 0.08}>
              <Card interactive className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#08090D] border border-[#202A3B]">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-lg text-[#F1F3F7]">
                        {category.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[#C6D4E8]/50 uppercase">
                        {category.skills.length} Capabilities
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#C6D4E8]/70 leading-relaxed mb-5 font-mono">
                    {category.description}
                  </p>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                          skill.featured
                            ? "bg-[#161B26] border-[#8AB4FF]/30 text-[#F1F3F7] hover:border-[#8AB4FF]"
                            : "bg-[#08090D]/60 border-[#202A3B] text-[#C6D4E8]/80 hover:border-[#202A3B]/80"
                        }`}
                      >
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8AB4FF]" />
                        )}
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-[#C6D4E8]/40 ml-1">
                            &middot; {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#202A3B]/60 flex items-center justify-between font-mono text-[11px] text-[#C6D4E8]/50">
                  <span className="flex items-center gap-1 text-[#65C9AE]">
                    <CheckCircle className="w-3.5 h-3.5" /> Project-Verified
                  </span>
                  <span>Practical Mastery</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
