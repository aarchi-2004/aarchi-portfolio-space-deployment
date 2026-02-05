"use client"

import { Github, Linkedin, ArrowDown, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Name */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[1.1] tracking-tight animate-fade-in-up">
          Aarchi Singh
        </h1>
        
        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-stagger-1">
          AI & Data Analytics Undergraduate
          <span className="mx-2 text-border">|</span>
          GenAI & Data Engineering Enthusiast
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-10 animate-stagger-2">
          <Button 
            className="btn-interactive bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 h-11"
            asChild
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="btn-interactive rounded-full px-6 h-11 border-border hover:bg-accent bg-transparent"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-10 animate-stagger-3">
          <a 
            href="https://linkedin.com/in/aarchi-singh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive-link flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/aarchi-2004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive-link flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:aarchisingh766@gmail.com"
            className="interactive-link flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
          <a 
            href="tel:7498192078"
            className="interactive-link flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm"
          >
            <Phone className="h-4 w-4" />
            <span>Phone</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-stagger-4">
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span>Scroll to explore</span>
          </a>
        </div>
      </div>
    </section>
  )
}
