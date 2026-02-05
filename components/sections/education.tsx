"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle } from "@/components/ui/starry-background"

const education = [
  {
    degree: "B.Tech Computer Science",
    institution: "MIT ADT University, Pune",
    period: "2022 – Present",
    score: "GPA: 7.56",
    current: true,
  },
  {
    degree: "Class 12 (CBSE)",
    institution: "Trinity International School",
    period: "2022",
    score: "69%",
    current: false,
  },
  {
    degree: "Class 10 (CBSE)",
    institution: "Sinhgad Public School",
    period: "2020",
    score: "94%",
    current: false,
  },
]

export function Education() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <StarrySection id="education" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="Education" subtitle="My Journey" />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="fade-in-element will-change-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${edu.current
                        ? "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30"
                        : "bg-white/10 border border-white/20"
                      }`}>
                      <GraduationCap className={`w-5 h-5 ${edu.current ? "text-white" : "text-white/60"}`} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
                    <div className={`p-6 rounded-2xl border transition-all duration-300 card-hover ${edu.current
                        ? "border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10"
                        : "border-white/10 bg-white/5 hover:bg-white/8"
                      }`}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="text-lg md:text-xl font-medium text-white">
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-white/70 mb-2">{edu.institution}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-white/50">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className={`font-medium ${edu.current ? "text-cyan-300" : "text-white/80"}`}>
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StarrySection>
  )
}
