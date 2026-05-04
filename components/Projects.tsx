"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");

  const allStacks = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.stack))),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.stack.includes(filter));

  const featured = filteredProjects.filter((p) => p.featured);
  const others = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-muted max-w-xl mx-auto">{t.projects.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allStacks.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                filter === s
                  ? "bg-blue-500 border-blue-500 text-foreground shadow-lg shadow-blue-500/25"
                  : "border-border text-muted hover:border-muted-strong hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {featured.map((p, i) => (
              <ProjectCard key={i} project={p} featured />
            ))}
          </div>
        )}

        {others.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {others.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[0]; featured?: boolean }) {
  const { t } = useLanguage();

  return (
    <a
      href={project.link}
      className="group block border border-border rounded-2xl overflow-hidden 
                 bg-card hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] 
                 transition-all duration-300"
    >
      <div className={`relative overflow-hidden ${featured ? "h-48" : "h-32"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition duration-300" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <span className="px-4 py-2 bg-background/20 backdrop-blur-sm rounded-lg text-sm font-medium border border-foreground/20">
            {t.projects.view}
          </span>
        </div>
      </div>

      <div className={`${featured ? "p-5" : "p-4"}`}>
        <h3 className={`font-semibold ${featured ? "text-lg mb-2" : "text-sm mb-1"}`}>
          {project.title}
        </h3>

        <p className={`text-muted ${featured ? "text-sm mb-4 leading-relaxed" : "text-xs mb-2 line-clamp-2"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-[11px] bg-card/80 text-muted px-2 py-0.5 rounded-full border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
