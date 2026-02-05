"use client"

import { useEffect, useRef, useState, RefObject, useCallback } from "react"

/**
 * Shared Intersection Observer hook to reduce multiple observer instances
 * Uses a single observer for all elements with fade-in animations
 */
export function useIntersectionObserver(
    options: IntersectionObserverInit = { threshold: 0.1 }
) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add visible class to all fade-in children
                    const fadeElements = entry.target.querySelectorAll(".fade-in-element")
                    fadeElements.forEach((el) => el.classList.add("visible"))

                    // Also add to the target itself if it has the class
                    if (entry.target.classList.contains("fade-in-element")) {
                        entry.target.classList.add("visible")
                    }

                    // Unobserve after animation triggered
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        observer.observe(element)

        return () => observer.disconnect()
    }, [options])

    return ref
}

/**
 * Hook to detect if device is mobile for performance optimizations
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return isMobile
}

/**
 * Hook for mouse position tracking (used for glow effects)
 */
export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let rafId: number
        let lastX = 0
        let lastY = 0

        const handleMouseMove = (event: MouseEvent) => {
            // Throttle with RAF for performance
            if (rafId) cancelAnimationFrame(rafId)

            rafId = requestAnimationFrame(() => {
                // Smooth interpolation
                lastX += (event.clientX - lastX) * 0.1
                lastY += (event.clientY - lastY) * 0.1
                setMousePosition({ x: lastX, y: lastY })
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    return mousePosition
}

/**
 * Hook for reduced motion preference
 */
export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
        setPrefersReducedMotion(mediaQuery.matches)

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches)
        }

        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])

    return prefersReducedMotion
}
