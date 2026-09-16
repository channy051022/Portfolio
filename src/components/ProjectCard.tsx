"use client";

import type { Project } from "@/lib/data";
import Link from "next/link";
import StatChips from "@/components/StatChips";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveDemo = Boolean(project.live?.trim());

  return (
    <Link href={`/projects/${project.id}`} className="group block h-full">
      <article className="surface-card min-w-0 flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <h3 className="min-w-0 text-lg font-semibold tracking-tight text-zinc-900 break-words group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300 transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {project.type}
          </span>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-zinc-600 break-words dark:text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        <StatChips items={project.tags} className="mb-6 opacity-80 transition-opacity group-hover:opacity-100" />

        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-1 group-hover:underline">
            View Case Study
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          {hasLiveDemo && (
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(project.live, "_blank", "noreferrer");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label={`Open live project for ${project.title}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
