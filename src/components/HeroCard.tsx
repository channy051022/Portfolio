"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import StatChips from "@/components/StatChips";
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { cloneElement } from "react";

interface HeroCardProps {
  name: string;
  roles: string[];
  location: string;
  summary: string;
}

export default function HeroCard({ name, roles, location, summary }: HeroCardProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="surface-card p-6 sm:p-10 lg:p-12"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-6 order-2 md:order-1 min-w-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>{location}</span>
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-100">
              <span className="flex flex-wrap items-center gap-2">
                <span className="break-words">{name}</span>
                <span
                  className="inline-flex h-6 w-6 items-center justify-center"
                  aria-label="Verified profile"
                  title="Verified"
                >
                  <CheckBadgeIcon aria-hidden="true" className="h-6 w-6 text-sky-500 dark:text-sky-400" />
                </span>
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {summary}
            </p>
            <div className="pt-2">
              <StatChips items={roles} />
            </div>

            <div className="pt-3 hidden sm:block">
              <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">GitHub Contributions</div>
              {/* Added w-fit to prevent background from stretching across the column */}
              <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 p-3 bg-zinc-50/50 dark:bg-zinc-900/50 w-fit max-w-full">
                <GitHubCalendar 
                  username="channy051022" 
                  year={2026}
                  blockSize={9}
                  blockMargin={3}
                    hideColorLegend={true}
                    hideTotalCount={true}
                    colorScheme="light"
                    theme={{
                      light: ['#f1f5f9', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e3a8a'],
                    }}
                    renderBlock={(block, activity) => 
                      cloneElement(block, {
                        'data-tooltip-id': 'react-tooltip',
                        'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
                      })
                    }
                  />
                <Tooltip id="react-tooltip" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center md:items-end gap-6 order-1 md:order-2"
        >
          <div className="relative aspect-[3/4] w-48 sm:w-52 md:w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-zinc-800">
            <Image
              src="/asset/hero-portrait-image.png"
              alt={`Portrait of ${name}`}
              fill
              priority
              sizes="(max-width: 640px) 192px, 224px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-row w-full max-w-[20rem] sm:max-w-none justify-center gap-3">
            <Link
              href="/projects"
              className="btn-primary flex-1 sm:w-auto gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
              <span>Projects</span>
            </Link>
            <Link 
              href="mailto:christianfaithmestola.github@gmail.com" 
              className="btn-secondary flex-1 sm:w-auto gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>Contact</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
