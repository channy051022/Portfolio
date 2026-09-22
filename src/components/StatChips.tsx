import { cn } from "@/lib/utils";

interface StatChipsProps {
  items: string[];
  className?: string;
}

export default function StatChips({ items, className }: StatChipsProps) {
  return (
    <ul className={cn("min-w-0 flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full px-2 py-0.5 text-xs font-medium text-[var(--color-github-text)] bg-[#ddf4ff] dark:bg-[#1f6feb26] dark:text-[#58a6ff] hover:bg-[#cceaff] dark:hover:bg-[#1f6feb33] transition-colors border border-transparent dark:border-[rgba(56,139,253,0.15)] font-[var(--font-inter)] cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
