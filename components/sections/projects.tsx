"use client"

import { ExternalLink, Github, Rocket } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-animations"
import { StarrySection, SectionTitle, Sparkle } from "@/components/ui/starry-background"

const projects = [
  {
    title: "Legal Advice Chatbot",
    description: "AI-powered legal assistant with 92% retrieval accuracy. Built a RAG pipeline using LangChain, FAISS, and Hugging Face models. Reduced response time by 30% and simplified legal language for non-legal users.",
    highlights: [
      "92% retrieval accuracy",
      "30% faster response time",
      "Simplified legal language",
    ],
    skills: ["Python", "PyTorch", "LangChain", "FAISS", "LLaMA", "Prompt Engineering", "RAG"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Voice Cloner Project",
    description: "Lightweight voice cloning solution that works from less than 5 seconds of reference audio. Implemented semantic chunking using NLTK and SBERT for natural-sounding output.",
    highlights: [
      "< 5s reference audio",
      "ChatterboxTTS integration",
      "WAV, MP3, JSON, SRT exports",
    ],
    skills: ["Python", "PyTorch", "Whisper", "CUDA", "Audio Processing"],
    gradient: "from-cyan-500 to-sky-500",
  },
  {
    title: "Automated Ride-Sharing Analytics",
    description: "End-to-end Medallion Architecture on Databricks for ride-sharing analytics. Implemented Autoloader and Spark Declarative Pipelines, reducing ETL code by 60%.",
    highlights: [
      "60% ETL code reduction",
      "Unity Catalog RBAC",
      "Databricks Genie (AI)",
    ],
    skills: ["Databricks", "Apache Spark", "LakeFlow", "AWS S3", "Unity Catalog", "ETL/ELT"],
    gradient: "from-sky-500 to-blue-500",
    githubUrl: "https://github.com/aarchi-2004/goodcabs_data_analytics_databricks",
    deploymentUrl: "www.aarchisingh.in",
  },
]

export function Projects() {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <StarrySection id="projects" className="py-24 md:py-32">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle title="Projects" subtitle="What I've Built" />

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in-element will-change-transform group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm card-hover glow-hover">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                      <Sparkle size={18} className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-cyan-100 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors group/link"
                        title="View GitHub Repository"
                      >
                        <Github className="w-5 h-5 text-white/40 group-hover/link:text-white transition-colors" />
                      </a>
                    )}
                    {project.deploymentUrl && (
                      <a
                        href={project.deploymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors group/link"
                        title="View Deployment"
                      >
                        <Rocket className="w-5 h-5 text-white/40 group-hover/link:text-cyan-400 transition-colors" />
                      </a>
                    )}
                    {!project.githubUrl && !project.deploymentUrl && (
                      <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors icon-bounce" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium scale-hover"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StarrySection>
  )
}

