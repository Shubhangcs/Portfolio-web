"use client"

import Navigation from "@/components/sections/navigation"
import GradientBackground from "@/components/sections/gradient-background"
import HeroSection from "@/components/sections/hero-section"
import SkillsSection from "@/components/sections/skills-section"
import ServicesSection from "@/components/sections/services-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FooterSection from "@/components/sections/footer-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <GradientBackground />

      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </div>
  )
}
