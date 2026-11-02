import React, { useState } from "react";
import { Preloader } from "../components/ui/Preloader";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { BeyondTechSection } from "../components/sections/BeyondTechSection";
import { AchievementsSection } from "../components/sections/AchievementsSection";
import { ContactSection } from "../components/sections/ContactSection";

export const HomePage: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <div className={`transition-opacity duration-700 ${preloaderDone ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BeyondTechSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </>
  );
};

