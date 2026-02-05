"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sparkle, StarryBackground, FloatingOrb, MouseGlow } from "@/components/ui/starry-background"
import { useIsMobile, usePrefersReducedMotion, useMousePosition } from "@/hooks/use-animations"

export function StarryHero() {
    const isMobile = useIsMobile()
    const prefersReducedMotion = usePrefersReducedMotion()
    const heroRef = useRef<HTMLElement>(null)
    const [isHeroVisible, setIsHeroVisible] = useState(true)

    // Track if user is still in hero section for mouse glow
    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = heroRef.current?.offsetHeight || window.innerHeight
            setIsHeroVisible(window.scrollY < heroHeight * 0.8)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Deep blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1525] to-[#071428]" />

            {/* Radial gradient overlay for depth */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: "radial-gradient(ellipse at 50% 100%, rgba(30, 64, 175, 0.15) 0%, transparent 60%)",
                }}
            />

            {/* Subtle ambient glow at bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[50vh]"
                style={{
                    background: "linear-gradient(to top, rgba(59, 130, 246, 0.08) 0%, transparent 100%)",
                }}
            />

            {/* Animated starry background */}
            <StarryBackground density={6000} blur={0.5} />

            {/* Mouse-following glow effect - only in hero */}
            {isHeroVisible && <MouseGlow />}

            {/* Decorative sparkles */}
            {!isMobile && (
                <>
                    <Sparkle
                        className="absolute top-1/4 right-[15%] text-cyan-300/80 animate-pulse"
                        size={20}
                    />
                    <Sparkle
                        className="absolute top-[35%] right-[25%] text-blue-300/60 animate-pulse"
                        size={12}
                    />
                    <Sparkle
                        className="absolute bottom-[30%] left-[20%] text-sky-200/50 animate-pulse"
                        size={14}
                    />
                </>
            )}

            {/* Floating orbs - hidden on mobile */}
            {!isMobile && (
                <>
                    <FloatingOrb className="top-[20%] right-[12%] w-3 h-3" />
                    <FloatingOrb className="bottom-[40%] left-[8%] w-2 h-2 opacity-60" />
                </>
            )}

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-24 py-24">
                {/* Main headline */}
                <div className="text-center space-y-4">
                    {/* Subtitle */}
                    <p className="text-sm md:text-base text-cyan-300/80 tracking-widest uppercase animate-fade-in-up will-change-transform">
                        AI & Data Analytics Specialist
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight animate-fade-in-up will-change-transform" style={{ animationDelay: "0.1s" }}>
                        <span className="font-serif italic bg-gradient-to-r from-white via-sky-100 to-cyan-200 bg-clip-text text-transparent">
                            Aarchi Singh
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed animate-fade-in-up will-change-transform" style={{ animationDelay: "0.2s" }}>
                        Building <span className="text-cyan-300">AI-driven solutions</span> & transforming complex data into{" "}
                        <span className="text-sky-300">actionable insights</span>
                    </p>
                </div>

                {/* Tags/Pills */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-10 animate-stagger-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm scale-hover">
                        <Sparkle size={12} className="text-blue-400" />
                        <span>GenAI & Deep Learning</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm scale-hover">
                        <Sparkle size={12} className="text-cyan-400" />
                        <span>Data Engineering</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm scale-hover">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Open to Opportunities</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-stagger-3">
                    <Button
                        className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-6 h-12 font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 btn-press glow-hover"
                        asChild
                    >
                        <a href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4 icon-bounce" />
                            Download Resume
                        </a>
                    </Button>

                    <Button
                        variant="outline"
                        className="group rounded-full px-6 h-12 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 btn-press"
                        asChild
                    >
                        <a href="https://linkedin.com/in/aarchi-singh" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </a>
                    </Button>

                    <Button
                        variant="outline"
                        className="group rounded-full px-6 h-12 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 btn-press"
                        asChild
                    >
                        <a href="https://github.com/aarchi-2004" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>
                </div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-16 animate-stagger-4">
                    <a
                        href="#about"
                        className="inline-flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
                    >
                        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
                        <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-cyan-300" />
                    </a>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071428] to-transparent" />
        </section>
    )
}
