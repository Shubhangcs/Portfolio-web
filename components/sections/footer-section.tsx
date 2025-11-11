"use client"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative py-16 px-6 bg-deep-black text-deep-black-foreground border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
              contact@example.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-primary transition-colors">
                Home
              </a>
              <a href="#projects" className="block hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#services" className="block hover:text-primary transition-colors">
                Services
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-sm">© {currentYear} Shubhanga C S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
