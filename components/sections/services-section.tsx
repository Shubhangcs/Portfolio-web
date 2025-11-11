"use client"

export default function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that delight users",
    },
    {
      title: "Web Development",
      description: "Building fast, scalable, and responsive web applications",
    },
    {
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications with Flutter",
    },
    {
      title: "Mentoring",
      description: "Guiding developers through technical challenges and best practices",
    },
  ]

  return (
    <section id="services" className="relative py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-xl text-gray-light">What I can do for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors group"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-light text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
