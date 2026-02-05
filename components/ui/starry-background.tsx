"use client"

import { useEffect, useRef, useState } from "react"
import { useIsMobile, usePrefersReducedMotion, useMousePosition } from "@/hooks/use-animations"

// Sparkle SVG component
export function Sparkle({ className = "", size = 24 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
                fill="currentColor"
            />
        </svg>
    )
}

// Optimized animated star background canvas
export function StarryBackground({
    density = 6000,
    blur = 0.5,
    enableAnimation = true
}: {
    density?: number
    blur?: number
    enableAnimation?: boolean
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const isMobile = useIsMobile()
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationId: number
        let lastTime = 0
        const FPS_LIMIT = isMobile ? 30 : 60 // Limit FPS on mobile
        const frameInterval = 1000 / FPS_LIMIT

        // Reduce star count on mobile for better performance
        const mobileDensity = isMobile ? density * 2 : density

        let stars: Array<{
            x: number
            y: number
            radius: number
            opacity: number
            twinkleSpeed: number
            twinkleOffset: number
        }> = []

        const resizeCanvas = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.offsetWidth
                canvas.height = parent.offsetHeight
            }
            initStars()
        }

        const initStars = () => {
            stars = []
            const starCount = Math.floor((canvas.width * canvas.height) / mobileDensity)
            // Cap stars for performance
            const maxStars = isMobile ? 100 : 300
            const finalCount = Math.min(starCount, maxStars)

            for (let i = 0; i < finalCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinkleOffset: Math.random() * Math.PI * 2,
                })
            }
        }

        const drawStars = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            stars.forEach((star) => {
                // Skip animation if reduced motion is preferred
                const twinkle = prefersReducedMotion ? 0 : Math.sin(time * star.twinkleSpeed + star.twinkleOffset)
                const opacity = star.opacity + twinkle * 0.3

                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(0.8, opacity))})`
                ctx.fill()

                // Skip glow effect on mobile for performance
                if (!isMobile && star.radius > 1) {
                    const gradient = ctx.createRadialGradient(
                        star.x, star.y, 0,
                        star.x, star.y, star.radius * 4
                    )
                    gradient.addColorStop(0, `rgba(180, 200, 255, ${opacity * 0.3})`)
                    gradient.addColorStop(1, "transparent")
                    ctx.beginPath()
                    ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2)
                    ctx.fillStyle = gradient
                    ctx.fill()
                }
            })
        }

        const animate = (currentTime: number) => {
            if (!enableAnimation || prefersReducedMotion) {
                drawStars(0)
                return
            }

            // Throttle frame rate
            const deltaTime = currentTime - lastTime
            if (deltaTime >= frameInterval) {
                lastTime = currentTime - (deltaTime % frameInterval)
                drawStars(currentTime)
            }

            animationId = requestAnimationFrame(animate)
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        if (enableAnimation && !prefersReducedMotion) {
            animationId = requestAnimationFrame(animate)
        } else {
            drawStars(0)
        }

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            if (animationId) cancelAnimationFrame(animationId)
        }
    }, [density, isMobile, prefersReducedMotion, enableAnimation])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ filter: `blur(${blur}px)` }}
        />
    )
}

// Mouse-following glow effect
export function MouseGlow() {
    const mousePosition = useMousePosition()
    const isMobile = useIsMobile()
    const prefersReducedMotion = usePrefersReducedMotion()

    // Don't render on mobile or if reduced motion is preferred
    if (isMobile || prefersReducedMotion) return null

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.06), transparent 40%)`,
            }}
        />
    )
}

// Section wrapper with starry background
export function StarrySection({
    children,
    id,
    className = "",
    showBackground = true,
}: {
    children: React.ReactNode
    id?: string
    className?: string
    showBackground?: boolean
}) {
    return (
        <section
            id={id}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Deep blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071428] via-[#0a1628] to-[#071428]" />

            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 70%)",
                }}
            />

            {/* Animated starry background */}
            {showBackground && <StarryBackground density={10000} blur={0.3} />}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    )
}

// Section title component
export function SectionTitle({
    title,
    subtitle,
    className = ""
}: {
    title: string
    subtitle?: string
    className?: string
}) {
    return (
        <div className={`text-center mb-12 ${className}`}>
            {subtitle && (
                <p className="text-sm text-cyan-300/70 tracking-widest uppercase mb-2">
                    {subtitle}
                </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
                <span className="font-serif italic bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>
        </div>
    )
}

// Floating orb component
export function FloatingOrb({ className = "" }: { className?: string }) {
    const prefersReducedMotion = usePrefersReducedMotion()

    return (
        <div
            className={`absolute rounded-full bg-white/80 shadow-lg shadow-white/20 ${className}`}
            style={{
                animation: prefersReducedMotion ? "none" : "float 6s ease-in-out infinite",
            }}
        />
    )
}

// Skeleton loader component
export function Skeleton({ className = "" }: { className?: string }) {
    return (
        <div
            className={`animate-pulse bg-white/10 rounded ${className}`}
        />
    )
}

// Section skeleton loader
export function SectionSkeleton() {
    return (
        <div className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#071428]">
            <div className="max-w-4xl mx-auto">
                {/* Title skeleton */}
                <div className="flex flex-col items-center gap-2 mb-12">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-48" />
                </div>

                {/* Content skeleton */}
                <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </div>
        </div>
    )
}
