import Container from "@/components/Container";
import ProfileSidebar from "@/components/ProfileSidebar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import StatChips from "@/components/StatChips";
import GithubActivity from "@/components/GithubActivity";
import { projects, experience, techGroups } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <Container className="pt-6 sm:pt-8 pb-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar (Left Column) */}
        <aside className="w-full md:w-[296px] shrink-0">
          <ProfileSidebar />
        </aside>

        {/* Main Content (Right Column) */}
        <main className="flex-1 min-w-0 flex flex-col gap-10">
          
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">

            <div className="surface-card p-6">
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-[15px] leading-relaxed text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
                  I’m a Full-Stack Web Developer and UI/UX Designer who loves turning ideas into clean, functional, and user-centered digital experiences. I enjoy building modern web applications that are not only visually appealing but also practical and intuitive to use.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3 text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">What I Build</h3>
                <ul className="list-disc pl-5 space-y-1 text-[15px] text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
                  <li>Web applications</li>
                  <li>REST APIs</li>
                  <li>Database-driven systems</li>
                  <li>Administrative systems</li>
                  <li>Mobile applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pinned Repositories (Projects) */}
          <section id="projects" className="scroll-mt-24">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)]">
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
                Pinned
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          
          {/* Activity Graph */}
          <section className="scroll-mt-24 hidden md:block">
            <h2 className="text-xl md:text-2xl mb-4 pb-2 border-b border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] font-semibold text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
              Development Activity
            </h2>
            <div className="surface-card p-4 flex justify-center w-full overflow-hidden">
               <GithubActivity />
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl mb-6 pb-2 border-b border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] font-semibold text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
              Experience
            </h2>
            <ul className="ml-1 md:ml-2">
              {experience.map((item, index) => (
                <ExperienceItem
                  key={`${item.company}-${item.year}-${index}`}
                  item={item}
                  isFirst={index === 0}
                />
              ))}
            </ul>
          </section>
          
          {/* Skills */}
          <section id="skills" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl mb-4 pb-2 border-b border-[var(--color-github-border)] dark:border-[var(--color-github-dark-border)] font-semibold text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
              Skills
            </h2>
            <div className="surface-card p-6 space-y-6">
              {techGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <h3 className="text-[15px] font-semibold text-[var(--color-github-text)] dark:text-[var(--color-github-dark-text)]">
                    {group.title}
                  </h3>
                  <StatChips items={group.items} />
                </div>
              ))}
            </div>
          </section>
          
        </main>
      </div>
    </Container>
  );
}
