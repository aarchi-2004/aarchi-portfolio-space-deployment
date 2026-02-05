"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
]

export function StarryNavigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? "bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5 py-3"
                        : "py-5"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="relative group"
                    >
                        <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 glow-hover">
                            <span className="font-serif text-lg italic text-white group-hover:text-cyan-300 transition-colors">
                                A
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {/* CTA Button - Desktop */}
                        <Button
                            className="hidden md:flex group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-5 h-9 text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 btn-press"
                            asChild
                        >
                            <a href="#contact">
                                Let&apos;s Connect
                                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white hover:bg-white/10 btn-press"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] z-50 bg-[#0a0e1a]/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full pt-20 px-6">
                    {/* Close button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </Button>

                    {/* Nav Links */}
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="py-3 px-4 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full h-12 font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 btn-press"
                            asChild
                        >
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Let&apos;s Connect
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pb-8">
                        <p className="text-white/40 text-sm text-center">
                            © 2026 Aarchi Singh
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
