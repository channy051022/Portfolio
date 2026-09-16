"use client";

import type { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  as?: ElementType;
  title?: string;
  description?: string;
  headerAction?: ReactNode;
  className?: string;
  children: ReactNode;
}

export default function SectionCard({
  as: Tag = "section",
  title,
  description,
  headerAction,
  className,
  children,
}: SectionCardProps) {
  // We use a div wrapper for motion since Tag can be dynamic
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("min-w-0", className)}
    >
      <Tag className={cn("surface-card min-w-0 p-5 sm:p-7 h-full flex flex-col transition-all duration-300 hover:shadow-md border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700")}>
        {(title || description) && (
          <header className="mb-6 min-w-0 border-b border-zinc-100 dark:border-zinc-800/50 pb-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 space-y-1.5">
                {title && <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 break-words">{title}</h2>}
                {description && <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 break-words">{description}</p>}
              </div>
              {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
            </div>
          </header>
        )}
        <div className="flex-1">
          {children}
        </div>
      </Tag>
    </motion.div>
  );
}
