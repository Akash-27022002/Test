import React from 'react';
import * as Icons from 'lucide-react';
import { ExternalLink, Github, BookOpen, PlayCircle } from 'lucide-react';

const Card = ({ project }) => {
  const LucideIcon = Icons[project.icon] || Icons.Folder;
  return (
    <article className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 hover:bg-neutral-900 transition">
      <div className="flex items-center gap-2">
        <LucideIcon className="h-5 w-5 text-indigo-400" />
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-white">{project.title}</h3>
      </div>
      <p className="mt-2 text-sm text-neutral-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="tag px-2 py-1 text-[11px] rounded bg-neutral-800/70 border border-neutral-700">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {project.links?.repo && (
          <a href={project.links.repo} className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition"><Github className="h-4 w-4" /> Repo</a>
        )}
        {project.links?.caseStudy && (
          <a href={project.links.caseStudy} className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition"><BookOpen className="h-4 w-4" /> Case Study</a>
        )}
        {project.links?.demo && (
          <a href={project.links.demo} className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition"><PlayCircle className="h-4 w-4" /> Demo</a>
        )}
      </div>
    </article>
  );
};

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-12 sm:py-16 border-t border-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Projects</h2>
          <a href={`${data.github}?tab=repositories`} target="_blank" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
            <ExternalLink className="h-4 w-4" /> View all
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.projects.map((p) => <Card key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}
