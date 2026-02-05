"use client"

import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle, Sparkle } from "@/components/ui/starry-background"

export function About() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <StarrySection id="about" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="relative">
          {/* Decorative sparkle */}
          <Sparkle
            className="absolute -top-4 -left-8 text-cyan-300/40 animate-pulse hidden md:block"
            size={16}
          />

          {/* Main content card */}
          <div className="fade-in-element will-change-transform">
            <div className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm card-hover">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-t-2xl" />

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Detail-oriented Computer Science undergraduate specializing in{" "}
                <span className="text-cyan-300 font-medium">Artificial Intelligence</span> and{" "}
                <span className="text-sky-300 font-medium">Data Analytics</span> with hands-on experience in
                machine learning, deep learning, and statistical modeling.
              </p>

              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                Proficient in <span className="text-white">Python</span>, <span className="text-white">SQL</span>, and
                data visualization tools such as <span className="text-white">Power BI</span> and{" "}
                <span className="text-white">Tableau</span> for building scalable, AI-driven solutions.
              </p>

              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                Skilled at transforming complex datasets into{" "}
                <span className="text-cyan-300 font-medium">actionable insights</span>, optimizing workflows,
                and delivering business intelligence that supports data-driven decision making.
              </p>

              <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed italic">
                Recognized for strong problem-solving, adaptability, and collaborative teamwork
                in fast-paced, innovation-focused environments.
              </p>
            </div>
          </div>

          {/* Decorative sparkle */}
          <Sparkle
            className="absolute -bottom-4 -right-8 text-blue-300/40 animate-pulse hidden md:block"
            size={20}
          />
        </div>
      </div>
    </StarrySection>
  )
}
