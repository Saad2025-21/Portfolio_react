const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & UI",
    items: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Responsive Design"],
  },
];

const Skills = () => {
  return (
    <section className="section-spacing c-space flex flex-col justify-center" id="skills">
      <p className="mb-2 text-sm uppercase tracking-wider text-[#d5c18b]">What I use</p>
      <h2 className="text-heading text-[#e6e8ee]">Skills</h2>

      <div className="grid gap-4 mt-10 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-lg border border-white/8 bg-[#121725D9] p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-sm text-[#a9adbd]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e7d7b1]" />
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
