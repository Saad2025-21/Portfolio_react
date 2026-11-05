const projects = [
  {
    title: "Task Manager",
    description:
      "A full-stack productivity app for creating, organizing, and tracking tasks with a clean, responsive workflow.",
    tech: ["React", "JavaScript", "Full Stack"],
    live: "https://task-manager-app-1386.vercel.app/",
    github: "https://github.com/Saad2025-21/Task-Manager-App",
    accent: "#d5c18b",
  },
  {
    title: "Blog",
    description:
      "A modern publishing experience for reading and sharing articles, built with an emphasis on speed and readability.",
    tech: ["React", "Vite", "Web Development"],
    live: "https://blog-seven-gold-11.vercel.app/",
    github: "https://github.com/Saad2025-21/Blog",
    accent: "#8ca9c8",
  },
];

const Projects = () => {
  return (
    <section className="section-spacing c-space pt-20" id="work">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="mb-2 text-sm uppercase tracking-wider text-[#d5c18b]">Selected work</p>
          <h2 className="text-heading text-[#e6e8ee]">Projects</h2>
        </div>
      </div>

      <div className="grid gap-5 mt-10 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-h-72 flex-col justify-between rounded-lg border border-white/8 bg-[linear-gradient(145deg,rgba(18,23,37,0.96),rgba(11,13,18,0.96))] p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <span className="text-sm text-[#a9adbd]">Featured project</span>
              </div>
              <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-[#a9adbd]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d7d9e1]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#e7d7b1] px-5 py-2.5 text-sm font-semibold text-[#121725] transition hover:bg-white"
              >
                Live demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/15 px-5 py-2.5 text-sm text-white transition hover:border-[#e7d7b1] hover:text-[#e7d7b1]"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
