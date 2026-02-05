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
                Hi, I’m <span className="text-white font-medium">Aarchi Singh</span>. I’m a Computer Science undergraduate specializing in{" "}
                <span className="text-cyan-300 font-medium">Artificial Intelligence</span> and{" "}
                <span className="text-sky-300 font-medium">Data Analytics</span>.
              </p>

              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                I enjoy building <span className="text-cyan-300 font-medium">intelligent, data-driven solutions</span> using
                Python, SQL, and machine learning, and turning complex data into <span className="text-sky-300 font-medium">meaningful insights</span>.
              </p>

              <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed italic">
                I’m curious by nature, love solving real-world problems, and thrive in collaborative, fast-paced environments.
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
