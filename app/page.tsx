import { Suspense, lazy } from "react"
import { StarryNavigation } from "@/components/starry-navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { StarryHero } from "@/components/sections/starry-hero"
import { SectionSkeleton } from "@/components/ui/starry-background"

// Lazy load sections for better initial load performance
const About = lazy(() => import("@/components/sections/about").then(mod => ({ default: mod.About })))
const Skills = lazy(() => import("@/components/sections/skills").then(mod => ({ default: mod.Skills })))
const Projects = lazy(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })))
const Education = lazy(() => import("@/components/sections/education").then(mod => ({ default: mod.Education })))
const Certifications = lazy(() => import("@/components/sections/certifications").then(mod => ({ default: mod.Certifications })))
const ExtraCurricular = lazy(() => import("@/components/sections/extracurricular").then(mod => ({ default: mod.ExtraCurricular })))
const Contact = lazy(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })))

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#071428]">
      <LoadingScreen />
      <StarryNavigation />
      <StarryHero />

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Education />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Certifications />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ExtraCurricular />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <footer className="relative py-12 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-gradient-to-b from-[#071428] to-[#050d1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="font-serif text-lg italic bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">AS</span>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Aarchi Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
