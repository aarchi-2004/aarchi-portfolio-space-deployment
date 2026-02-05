"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      aria-label="Loading"
    >
      <span className="font-serif text-2xl text-foreground animate-pulse">AS</span>
    </div>
  )
}
