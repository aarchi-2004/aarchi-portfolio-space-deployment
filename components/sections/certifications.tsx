"use client"

import { Award, Cloud, Database, Code, BarChart3 } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle } from "@/components/ui/starry-background"

const certifications = [
  {
    title: "Networking Basics",
    subtitle: "Computer Networking",
    icon: Cloud,
  },
  {
    title: "Python Certificate",
    subtitle: "Python Language",
    icon: Code,
  },
  {
    title: "Exploratory Data Analysis for ML",
    subtitle: "Machine Learning",
    icon: BarChart3,
  },
  {
    title: "AWS Academy Cloud Foundations",
    subtitle: "Cloud Computing",
    icon: Cloud,
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    subtitle: "Data Analytics",
    icon: Database,
  },
]

export function Certifications() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <StarrySection id="certifications" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="Certifications" subtitle="Credentials" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="fade-in-element will-change-transform"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="group p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm card-hover glow-hover h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                      <Icon className="w-5 h-5 text-cyan-400 icon-bounce" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1 group-hover:text-cyan-100 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-white/50 text-sm">{cert.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </StarrySection>
  )
}
