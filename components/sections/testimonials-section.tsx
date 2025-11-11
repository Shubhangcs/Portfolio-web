"use client"

export default function TestimonialsSection() {
  const testimonials = [
    {
      author: "John Doe",
      role: "CEO, Tech Company",
      content: "Shubhanga is an exceptional developer who delivers quality work on time.",
    },
    {
      author: "Jane Smith",
      role: "Product Manager",
      content: "Great design thinking and implementation skills. A true team player.",
    },
    {
      author: "Mike Johnson",
      role: "Founder, Startup Inc",
      content: "Talented mentor who helped our team level up their technical skills.",
    },
  ]

  return (
    <section id="testimonials" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
          <p className="text-xl text-gray-light">What others are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-card border border-border rounded-lg p-8">
              <p className="text-gray-light mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
