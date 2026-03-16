const ExperienceItem = ({ job }) => {
  return (
    <div className="border-l border-neutral-800 pl-6 relative">
      <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-blue-500" />

      <h3 className="text-lg font-semibold">{job.role}</h3>
      <p className="text-neutral-400">
        {job.company} — {job.period}
      </p>
      <ul className="mt-3 space-y-2 text-neutral-400">
        {job.bullets.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {job.tech.map((tech, index) => (
          <span
            key={index}
            className="rounded bg-neutral-800 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
