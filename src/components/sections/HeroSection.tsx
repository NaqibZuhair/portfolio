import React, { lazy, Suspense } from "react";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { profileData } from "../../data/profile";
import { FallbackGraphic } from "../../three/FallbackGraphic";
import { PlaceholderMedia } from "../ui/PlaceholderMedia";
import { Button } from "../ui/Button";
import { TextReveal } from "../animations/TextReveal";
import { Magnetic } from "../animations/Magnetic";

const HeroScene = lazy(() =>
  import("../../three/HeroScene").then((m) => ({ default: m.HeroScene }))
);

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 sm:py-20">
      {/* Background radial gradient glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8AB4FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#8266B5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Information */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141C] border border-[#202A3B] w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8AB4FF] animate-pulse" />
              <span className="font-mono text-xs text-[#8AB4FF] font-semibold tracking-wider uppercase">
                {profileData.eyebrow}
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <p className="font-mono text-xs sm:text-sm text-[#C6D4E8]/70 tracking-widest uppercase mb-1">
                PORTFOLIO OF
              </p>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F1F3F7]">
                {profileData.name}
              </h2>
              <p className="font-mono text-sm sm:text-base text-[#8AB4FF] font-medium mt-1">
                {profileData.identity}
              </p>
            </div>

            {/* Main Headline Reveal */}
            <div className="pt-2">
              <TextReveal
                text={profileData.headline}
                as="h1"
                className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F1F3F7] leading-[1.08]"
              />
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#C6D4E8]/80 max-w-xl leading-relaxed pt-2">
              {profileData.shortDescription}
            </p>

            {/* Key Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {profileData.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#11141C]/60 border border-[#202A3B]/60 backdrop-blur-sm"
                >
                  <div className="font-headline text-xl sm:text-2xl font-bold text-[#8AB4FF]">
                    {m.value}
                  </div>
                  <div className="font-mono text-[11px] text-[#C6D4E8]/70 truncate">{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Magnetic strength={0.25}>
                <Button
                  href="#projects"
                  size="lg"
                  variant="primary"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Button
                  href="#contact"
                  size="lg"
                  variant="outline"
                  leftIcon={<Sparkles className="w-4 h-4 text-[#8AB4FF]" />}
                >
                  Let's Connect
                </Button>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Prominent Portrait + Integrated 3D Interactive Element */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#8AB4FF]/20 via-[#202A3B]/40 to-transparent">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#11141C] border border-[#202A3B]">
                {/* 3D Scene integrated as futuristic ambient interactive background */}
                <div className="absolute inset-0 z-0 opacity-85">
                  <Suspense fallback={<FallbackGraphic className="w-full h-full" />}>
                    <HeroScene className="w-full h-full" />
                  </Suspense>
                </div>

                {/* Portrait Overlay Placeholder */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 pointer-events-none">
                  {/* Top Status */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#8AB4FF] px-2.5 py-1 rounded bg-[#08090D]/80 border border-[#202A3B] backdrop-blur-sm">
                      SYS://PORTRAIT_CANVAS
                    </span>
                    <span className="font-mono text-[10px] text-[#65C9AE] px-2.5 py-1 rounded bg-[#08090D]/80 border border-[#202A3B] backdrop-blur-sm">
                      ACTIVE
                    </span>
                  </div>

                  {/* Centered Designed Placeholder Card */}
                  <div className="my-auto pointer-events-auto">
                    <PlaceholderMedia
                      label="[REPLACE REQUIRED — PROFESSIONAL PORTRAIT]"
                      expectedPath="/public/images/profile/naqib-zuhair.jpg"
                      aspectRatio="3/4"
                      type="photo"
                      priority="required"
                      className="bg-[#08090D]/80 backdrop-blur-md shadow-2xl border-[#8AB4FF]/40"
                    />
                  </div>

                  {/* Bottom metadata banner */}
                  <div className="rounded-lg p-2.5 bg-[#08090D]/90 border border-[#202A3B] backdrop-blur-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#8AB4FF]" />
                      <span className="font-mono text-[11px] text-[#F1F3F7]">
                        Naqib Zuhair Al-Hudri
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#C6D4E8]/60">PNJ &middot; D4 TI</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Reticles */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8AB4FF]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8AB4FF]" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-[#C6D4E8]/60 hover:text-[#8AB4FF] transition-colors focus:outline-none"
            aria-label="Scroll to About Section"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-6 h-10 rounded-full border border-[#202A3B] flex items-start justify-center p-1.5 group-hover:border-[#8AB4FF]/50 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-[#8AB4FF] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
