"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  const skillGroups = [
    { key: "frontend" as const, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { key: "backend" as const, items: ["Node.js", "Python", "Go", "GraphQL"] },
    { key: "cloud" as const, items: ["AWS", "GCP", "Docker", "Kubernetes"] },
    { key: "database" as const, items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  ];

  return (
    <section className="py-24 px-6 bg-card-alt transition-colors duration-300" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
          <p className="text-muted max-w-xl mx-auto">{t.about.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              {t.about.badge}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{t.about.role}</h3>
            <p className="text-muted leading-relaxed mb-4">{t.about.bio_1}</p>
            <p className="text-muted leading-relaxed">{t.about.bio_2}</p>
          </div>

          <div className="flex flex-col gap-4">
            {skillGroups.map((group) => (
              <div key={group.key} className="p-4 rounded-xl border border-border bg-card transition-colors duration-300">
                <h4 className="text-sm font-semibold text-foreground/80 mb-3">{t.about.skills[group.key]}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-card/80 text-muted rounded-full border border-border/50 hover:border-blue-500/30 hover:text-blue-400 transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
