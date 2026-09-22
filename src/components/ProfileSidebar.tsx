"use client";

import Image from "next/image";
import { profile, socialLinks, currentlyLearning, techGroups, experience } from "@/lib/data";
import SocialIcon from "./SocialIcon";

export default function ProfileSidebar() {
  const primaryStack = techGroups.flatMap(group => group.items).slice(0, 6);
  const education = experience.find(exp => exp.role.includes("Bachelor"));

  return (
    <div className="flex flex-col gap-5 pb-8 md:pb-0">
      {/* Avatar and Name */}
      <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
        <div className="relative h-24 w-24 md:h-[296px] md:w-[296px] overflow-hidden rounded-full md:rounded-full border border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] shrink-0 z-10">
          <Image
            src="/asset/hero-portrait-image.png"
            alt={profile.name}
            fill
            sizes="(max-width: 768px) 96px, 296px"
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="pt-2">
          <h1 className="text-2xl md:text-[26px] font-bold leading-tight text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
            {profile.name}
          </h1>
          <h2 className="text-xl font-light text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)]">
            Junior Web Developer
          </h2>
        </div>
      </div>

      {/* Bio */}
      <div className="text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)] text-sm md:text-base">
        {profile.summary}
      </div>
      
      {/* Follow Button */}
      <div className="w-full">
        <a 
          href="https://github.com/channy051022" 
          target="_blank" 
          rel="noreferrer"
          className="btn-secondary w-full"
        >
          Follow
        </a>
      </div>

      <div className="text-sm flex flex-col gap-1 text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
        <div className="flex items-center gap-2">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-[var(--color-github-text-secondary)] dark:fill-[var(--color-github-dark-text-secondary)]">
            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-0zM10.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z" />
          </svg>
          <span>{profile.location}</span>
        </div>
        
        {education && (
          <div className="flex items-start gap-2">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 mt-0.5 fill-[var(--color-github-text-secondary)] dark:fill-[var(--color-github-dark-text-secondary)]">
              <path d="M8 1.5 0 5l8 3.5L16 5 8 1.5z" />
              <path d="m8 9.5-6.5-2.8v4.6l6.5 2.8 6.5-2.8V6.7L8 9.5z" />
            </svg>
            <span>{education.role} @ {education.company}</span>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className="border-t border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] pt-4">
        <h3 className="font-semibold text-sm mb-2 text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">Links</h3>
        <div className="flex flex-col gap-2">
          {socialLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm hover:text-[var(--color-github-accent)] dark:hover:text-[var(--color-github-dark-accent)] text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)] transition flex items-center gap-2"
            >
              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                 <SocialIcon platform={link.platform} />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      
      {/* Primary Stack */}
      <div className="border-t border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] pt-4">
        <h3 className="font-semibold text-sm mb-2 text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">Primary Stack</h3>
        <div className="flex flex-wrap gap-1.5">
          {primaryStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-xs border border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)] bg-[var(--color-github-bg-secondary)] dark:bg-[var(--color-github-dark-bg-secondary)] font-[var(--font-inter)]">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Currently Learning */}
      <div className="border-t border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] pt-4">
        <h3 className="font-semibold text-sm mb-2 text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">Currently</h3>
        <div className="flex flex-col gap-2">
          {currentlyLearning.map(item => (
            <div key={item} className="flex items-start gap-2 text-sm text-[var(--color-github-text-secondary)] dark:text-[var(--color-github-dark-text-secondary)]">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 mt-0.5 fill-[var(--color-github-success)] dark:fill-[var(--color-github-dark-success)]">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm10.28-1.72-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.47 1.47 3.97-3.97a.751.751 0 0 1 1.042.018.751.751 0 0 1-.018 1.042Z"></path>
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
