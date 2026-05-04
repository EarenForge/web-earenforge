"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  const techBadges = [
    "Next.js", "TypeScript", "AWS", "Docker", "Kubernetes", "Node.js", "Python", "PostgreSQL",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden" id="home">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative text-center max-w-3xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
            <Image
              src="/logo.png"
              alt="Earen Forge"
              width={120}
              height={120}
              className="relative opacity-90"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          {t.hero.headline_1}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t.hero.highlight}
          </span>
          <br />
          {t.hero.headline_2}
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-foreground font-medium rounded-xl transition shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            {t.hero.cta_primary}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border hover:border-muted-strong text-muted hover:text-foreground font-medium rounded-xl transition"
          >
            {t.hero.cta_secondary}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-card/80 text-muted rounded-full border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-muted-strong rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
