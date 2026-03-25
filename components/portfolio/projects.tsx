"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProjectCard, type Project } from "./project-card"

const categories = ["Todos", "Web", "Back-End", "Fullstack"]

const projects: Project[] = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    description:
      "Portfólio interativo com design moderno e tech, construído com Next.js, TailwindCSS e animações em React.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    category: "Web",
    github: "https://github.com/DneyDev",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "API REST Node.js",
    description:
      "API REST com autenticação JWT, rotas protegidas, validação de dados e conexão com banco relacional via Prisma.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Node.js", "Express", "SQL", "REST API"],
    category: "Back-End",
    github: "https://github.com/DneyDev",
    featured: true,
  },
  {
    id: 3,
    title: "Landing Page Responsiva",
    description:
      "Landing page moderna e responsiva, com foco em performance, acessibilidade e boas práticas de HTML/CSS.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com/DneyDev",
  },
  {
    id: 4,
    title: "Sistema de Tarefas",
    description:
      "Aplicação fullstack de gerenciamento de tarefas com CRUD completo, autenticação e interface limpa.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "SQL", "REST API"],
    category: "Fullstack",
    github: "https://github.com/DneyDev",
    featured: true,
  },
  {
    id: 5,
    title: "Script de Automação Python",
    description:
      "Script em Python para automação de tarefas repetitivas, manipulação de arquivos e geração de relatórios.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    tags: ["Python", "Automação", "CLI"],
    category: "Back-End",
    github: "https://github.com/DneyDev",
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Primeiro projeto featured vira o card em destaque horizontal
  const featuredProject = activeCategory === "Todos" ? filtered[0] : null
  const gridProjects = featuredProject ? filtered.slice(1) : filtered

  return (
    <section id="projetos" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">
            {"// Meus projetos"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Trabalhos <span className="text-primary">Selecionados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base text-pretty">
            Uma seleção dos meus projetos mais recentes, demonstrando habilidades
            em desenvolvimento web e back-end.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Card — só aparece em "Todos" */}
        {featuredProject && (
          <div className="mb-6 sm:mb-8">
            <ProjectCard
              project={featuredProject}
              variant="featured"
              index={0}
            />
          </div>
        )}

        {/* Projects Grid */}
        {gridProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gridProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="default"
                index={featuredProject ? i + 1 : i}
              />
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-border hover:border-primary hover:text-primary group"
            asChild
          >
            <a
              href="https://github.com/DneyDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Todos no GitHub
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  )
}

