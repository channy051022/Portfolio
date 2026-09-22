import type { Experience } from "@/lib/data";

interface ExperienceItemProps {
  item: Experience;
  isFirst?: boolean;
}

export default function ExperienceItem({ item, isFirst }: ExperienceItemProps) {
  return (
    <li className="relative border-l border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] ml-3 pb-8 pl-6 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-[var(--color-github-border)] dark:bg-[var(--color-github-dark-border)] border-[3px] border-[var(--color-github-bg)] dark:border-[var(--color-github-dark-bg)]"
      />
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
        <h3 className="text-base font-semibold tracking-tight text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)] flex items-center gap-2">
          {item.role}
        </h3>
        <p className="mt-1 md:mt-0 text-[13px] font-medium text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)]">
          {item.year}
        </p>
      </div>
      <p className="text-[14px] font-medium text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)] mb-3 flex items-center gap-1.5">
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-[14px] w-[14px] fill-[var(--color-github-text-secondary)] dark:fill-[var(--color-github-dark-text-secondary)]">
          <path d="M2 1.75C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm6.5 4a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Zm0 3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Zm0 3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z"></path>
        </svg>
        {item.company}
      </p>
      <p className="text-[14px] leading-relaxed text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)]">{item.details}</p>
    </li>
  );
}
