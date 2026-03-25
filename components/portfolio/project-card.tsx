"use client"

import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  github: string
  demo?: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  /** "default" = card vertical (grid), "featured" = card horizontal (destaque) */
  variant?: "default" | "featured"
  index?: number
}

export function ProjectCard({ project, variant = "default", index = 0 }: ProjectCardProps) {
  if (variant === "featured") {
    return (
      <article className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5">
        {/* Image */}
        <div className="relative h-56 md:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:hidden" />
          {project.featured && (
            <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-mono tracking-wide">
              Destaque
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">
              {String(index + 1).padStart(2, "0")} — {project.category}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {project.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-secondary/80 text-muted-foreground rounded-full border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
                "bg-primary text-primary-foreground hover:bg-primary/85 transition-colors"
              )}
            >
              <Github className="h-4 w-4" />
              Ver no GitHub
            </a>
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
        {/* Index number */}
        <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-xs font-mono text-muted-foreground border border-border/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.featured && (
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs">
            Destaque
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <p className="text-primary/70 font-mono text-xs tracking-widest uppercase mb-1.5">
          {project.category}
        </p>
        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-4 group-hover:bg-primary/30 transition-colors" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/85 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver demo ao vivo"
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
