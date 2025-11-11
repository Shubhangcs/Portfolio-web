"use client"

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SvelteKit"],
    },
    {
      name: "Backend",
      skills: ["Golang", "Node.js", "PostgreSQL", "Docker", "REST APIs"],
    },
    {
      name: "Mobile",
      skills: ["Flutter", "React Native", "Firebase", "Dart"],
    },
    {
      name: "Tools",
      skills: ["Git", "Figma", "Postman", "Docker Compose", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-light">Proficient across multiple technologies and platforms</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-light flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
