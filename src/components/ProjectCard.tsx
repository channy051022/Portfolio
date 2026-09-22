"use client";

import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveDemo = Boolean(project.live?.trim());
  const hasGithub = Boolean(project.github?.trim());

  return (
    <article className="surface-card p-4 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-2 mb-2">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 mt-1 fill-[var(--color-github-text-secondary)] dark:fill-[var(--color-github-dark-text-secondary)] shrink-0">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[15px] font-semibold text-[var(--color-github-accent)] dark:text-[var(--color-github-dark-accent)] break-words hover:underline cursor-pointer">
              {project.title}
            </h3>
            <span className="rounded-full border border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)]">
              {project.type}
            </span>
          </div>
        </div>

        <p className="mb-4 text-xs leading-5 text-[var(--color-github-text-secondary)] break-words dark:text-[var(--color-github-dark-text-secondary)] line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)]">
        {project.tags.length > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[var(--color-github-accent)] dark:bg-[var(--color-github-dark-accent)]"></span>
            <span>{project.tags[0]}</span>
          </div>
        )}

        {hasGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-[var(--color-github-accent)] dark:hover:text-[var(--color-github-dark-accent)] transition-colors"
            title="View on GitHub"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-current">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        )}
        
        {hasLiveDemo && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-[var(--color-github-accent)] dark:hover:text-[var(--color-github-dark-accent)] transition-colors"
            title="Live Demo"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-current">
              <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
