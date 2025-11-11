"use client"

export default function HighlightsSection() {
  const highlights = [
    {
      number: "50+",
      label: "Projects Completed",
    },
    {
      number: "100+",
      label: "Clients Served",
    },
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "30+",
      label: "Team Members Mentored",
    },
  ]

  return (
    <section className="relative py-12 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((highlight) => (
            <div key={highlight.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{highlight.number}</p>
              <p className="text-sm md:text-base text-gray-light">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
