"use client"

import { Users, Trophy, Lightbulb } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle } from "@/components/ui/starry-background"

const activities = [
  {
    title: "Event Management Member",
    organization: "Cloud Computing Club",
    icon: Users,
    description: "Organizing tech events and workshops focused on cloud technologies",
  },
  {
    title: "Smart India Hackathon 2024",
    organization: "Participant",
    icon: Trophy,
    description: "National-level hackathon participation with innovative solutions",
  },
  {
    title: "SheInspires Women's Hackathon",
    organization: "Zensar Learning Academy",
    icon: Lightbulb,
    description: "Women empowerment in tech through collaborative problem-solving",
  },
]

export function ExtraCurricular() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <StarrySection id="extracurricular" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="Extra Curricular" subtitle="Beyond Academics" />

        <div className="grid gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.title}
                className="fade-in-element will-change-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm card-hover glow-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center group-hover:from-sky-500/30 group-hover:to-cyan-500/30 transition-all">
                    <Icon className="w-6 h-6 text-sky-400 icon-bounce" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white group-hover:text-cyan-100 transition-colors mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-cyan-300/80 text-sm mb-2">{activity.organization}</p>
                    <p className="text-white/50 text-sm">{activity.description}</p>
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
