import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ProjectClientView from "./ProjectClientView";

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectClientView project={project} />;
}
