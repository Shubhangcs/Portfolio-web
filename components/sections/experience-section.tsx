"use client"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Leading development of high-impact projects and mentoring junior developers",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description: "Built and maintained multiple production applications using modern tech stack",
    },
    {
      title: "Junior Developer",
      company: "Web Agency",
      period: "2020 - 2021",
      description: "Developed responsive websites and collaborated with design team",
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-xl text-gray-light">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative bg-card border border-border rounded-lg p-8">
              {index !== experiences.length - 1 && (
                <div className="absolute -bottom-8 left-8 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
              )}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-light text-sm mt-1">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-light mt-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
