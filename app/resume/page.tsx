"use client"

import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarryBackground } from "@/components/ui/starry-background"

export default function ResumePage() {
    return (
        <div className="relative min-h-screen">
            {/* Deep blue gradient background */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1525] to-[#071428]" />

            {/* Starry background */}
            <StarryBackground density={8000} blur={0.5} />

            {/* Radial glow */}
            <div
                className="fixed inset-0 opacity-40"
                style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 70%)",
                }}
            />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/5">
                <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/10 btn-press"
                    asChild
                >
                    <a href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </a>
                </Button>

                <Button
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-5 h-9 text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 btn-press"
                    asChild
                >
                    <a href="/Aarchi_Singh_resume_.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </a>
                </Button>
            </header>

            {/* PDF Viewer Container */}
            <main className="relative z-10 pt-20 pb-8 px-4 md:px-8 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-4xl h-[calc(100vh-120px)] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <iframe
                        src="/Aarchi_Singh_resume_.pdf"
                        className="w-full h-full"
                        title="Aarchi Singh Resume"
                    />
                </div>
            </main>
        </div>
    )
}
