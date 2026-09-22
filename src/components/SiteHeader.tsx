"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#overview", label: "Overview", icon: "book" },
  { href: "#projects", label: "Projects", icon: "repo", count: 4 },
  { href: "#experience", label: "Experience", icon: "grid" },
  { href: "#skills", label: "Skills", icon: "star" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const iconClass = cn("fill-current h-4 w-4 shrink-0", className);
  switch (name) {
    case "book":
      return (
        <svg viewBox="0 0 16 16" className={iconClass}>
          <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
        </svg>
      );
    case "repo":
      return (
        <svg viewBox="0 0 16 16" className={iconClass}>
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
      );
    case "grid":  
      return (
        <svg viewBox="0 0 16 16" className={iconClass}>
          <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 16 16" className={iconClass}>
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
        </svg>
      );
    default:
      return null;
  }
}

export default function SiteHeader() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    // Check initial theme preference
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <header className="z-40 flex w-full flex-col">
      {/* Bottom Profile Navigation Bar - Sticky */}
      <div className="sticky top-0 z-30 w-full border-b border-[var(--color-github-border)] bg-[#010409] dark:border-[var(--color-github-dark-border)] dark:bg-[#010409]">
        <div className="flex items-center justify-between px-4 md:px-6">
          <nav className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto no-scrollbar pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 border-b-2 px-2 pb-2.5 text-[14px] leading-5 whitespace-nowrap transition-colors",
                  activeSection === item.href.substring(1)
                    ? "border-[#fd8c73] font-semibold text-white"
                    : "border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200 rounded-t-md"
                )}
                onClick={() => setActiveSection(item.href.substring(1))}
              >
                <Icon 
                  name={item.icon} 
                  className={cn(
                    "transition-colors",
                    activeSection === item.href.substring(1) 
                      ? "fill-white" 
                      : "fill-gray-400"
                  )} 
                />
                {item.label}
                {item.count && (
                  <span className="ml-1 flex items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-[12px] font-medium leading-none text-white">
                    {item.count}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="ml-4 flex items-center shrink-0 border-l border-white/10 pl-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition hover:text-white hover:bg-white/10"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
                {isDark ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3c.12.7.19 1.42.19 2.16A7 7 0 0 0 18.84 13c.74 0 1.46-.07 2.16-.21Z" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
