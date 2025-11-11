"use client"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project One",
      description: "A beautiful web application built with React and Node.js",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project Two",
      description: "Mobile app developed using Flutter for cross-platform deployment",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      title: "Project Three",
      description: "Full-stack application showcasing modern development practices",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-xl text-gray-light">Showcasing my recent work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="w-full h-48 bg-muted rounded-md mb-4 group-hover:bg-muted/80 transition-colors" />
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-light mt-2 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
