"use client"

import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle, Sparkle } from "@/components/ui/starry-background"

const technicalSkills = [
  { name: "Python", category: "core" },
  { name: "SQL (MySQL)", category: "core" },
  { name: "Power BI", category: "core" },
  { name: "Tableau", category: "core" },
  { name: "Deep Learning", category: "ai" },
  { name: "GenAI", category: "ai" },
  { name: "Computer Vision", category: "ai" },
  { name: "NLP", category: "ai" },
  { name: "AWS Cloud", category: "cloud" },
  { name: "R Programming", category: "core" },
  { name: "Data Analysis", category: "core" },
]

const softSkills = [
  "Problem-Solving",
  "Analytical Thinking",
  "Attention to Detail",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Product Management",
]

export function Skills() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "ai":
        return "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400/50"
      case "cloud":
        return "border-sky-400/30 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20 hover:border-sky-400/50"
      default:
        return "border-blue-400/30 bg-blue-400/10 text-blue-300 hover:bg-blue-400/20 hover:border-blue-400/50"
    }
  }

  return (
    <StarrySection id="skills" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="Skills" subtitle="What I Do" />

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={16} className="text-cyan-400" />
            <h3 className="text-xl font-medium text-white/90">Technical Skills</h3>
          </div>

          <div className="fade-in-element will-change-transform flex flex-wrap gap-3">
            {technicalSkills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-default scale-hover ${getCategoryStyles(skill.category)}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* AI/ML Focus Area */}
        <div className="mb-16 fade-in-element will-change-transform">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Sparkle size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-medium text-white">AI & Machine Learning Focus</h3>
            </div>
            <p className="text-white/60">
              Specializing in building intelligent systems using Deep Learning, GenAI (LLMs, RAG pipelines),
              Computer Vision, and Natural Language Processing to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={16} className="text-sky-400" />
            <h3 className="text-xl font-medium text-white/90">Soft Skills</h3>
          </div>

          <div className="fade-in-element will-change-transform flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm transition-all duration-300 hover:bg-white/10 hover:text-white cursor-default scale-hover"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </StarrySection>
  )
}
