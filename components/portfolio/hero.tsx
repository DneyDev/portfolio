"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Desenvolvedor Web",
  "Desenvolvedor Back-End",
  "Apaixonado por tecnologia",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,140,100,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(40,140,100,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating orbs — contidos para não causar overflow horizontal */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Greeting */}
          <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase break-words">
            {"// Olá, seja bem-vindo ao meu portfólio"}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Sidney</span>
            <span className="text-primary">.</span>
          </h1>

          {/* Animated role */}
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <span className="text-base sm:text-xl md:text-2xl text-muted-foreground font-mono">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="max-w-xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty px-2">
            Desenvolvedor focado em Web e Back-End, com base sólida em lógica
            de programação. Construo soluções que unem desempenho e clareza de código.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 pt-2 sm:pt-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-colors"
              asChild
            >
              <a
                href="https://github.com/DneyDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-colors"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/sidneyrodrigues010"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-colors"
              asChild
            >
              <a href="mailto:sidney.pe010@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 sm:pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              onClick={scrollToProjects}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="#contato">Entrar em Contato</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Rolar para projetos"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
