import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { Folder } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen border-t bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          icon={<Folder size={28} />}
          title="Projects"
          subtitle="Some projects I've built."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
