export default function ProjectCard({ project }) {
  return (
    <article className="group min-w-0">
      <a
        href="#contact"
        className="block overflow-hidden rounded-md bg-slate-800"
      >
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[1.55/1] w-full object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </a>
      <div className="pt-3.5">
        <a
          href="#contact"
          className="text-sm font-bold leading-6 text-slate-300 transition group-hover:text-indigo-400"
        >
          {project.title}
        </a>
        {project.description && (
          <p className="mt-1 text-xs leading-5 text-slate-400">
            {project.description}
          </p>
        )}
      </div>
    </article>
  );
}
