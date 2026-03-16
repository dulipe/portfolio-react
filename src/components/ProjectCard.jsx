import { Github, Rocket } from "lucide-react";

const ProjectCard = ({ title, description, stack, github, live, image }) => {
  return (
    <div className="group rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 transition-all duration-300 hover:border-neutral-700 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 w-full object-cover transition duration-500 group-hover:scale-105">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      <h3 className="mt-3 text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-neutral-400">{description}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-sm text-white transition transform hover:scale-105 hover:bg-neutral-800 cursor-pointer select-none"
        >
          <Rocket size={16} />
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-sm text-white transition transform hover:scale-105 hover:bg-neutral-800 select-none"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
