"use client"

import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle, Sparkle } from "@/components/ui/starry-background"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aarchisingh766@gmail.com",
    href: "mailto:aarchisingh766@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "7498192078",
    href: "tel:7498192078",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "aarchi-2004",
    href: "https://github.com/aarchi-2004",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aarchi Singh",
    href: "https://linkedin.com/in/aarchi-singh",
  },
]

export function Contact() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <StarrySection id="contact" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="Let's Connect" subtitle="Get In Touch" />

        {/* Main CTA */}
        <div className="fade-in-element will-change-transform text-center mb-12">
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            I&apos;m always excited to discuss new opportunities, collaborate on projects,
            or just have a conversation about AI and technology.
          </p>

          <Button
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 h-12 font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 btn-press glow-hover"
            asChild
          >
            <a href="mailto:aarchisingh766@gmail.com">
              <Send className="mr-2 h-4 w-4" />
              Send me a message
            </a>
          </Button>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <div
                key={contact.label}
                className="fade-in-element will-change-transform"
                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm card-hover glow-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <Icon className="w-5 h-5 text-cyan-400 icon-bounce" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-cyan-100 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {/* Decorative */}
        <div className="mt-16 text-center">
          <Sparkle className="inline-block text-cyan-400/50 animate-pulse" size={24} />
        </div>
      </div>
    </StarrySection>
  )
}
