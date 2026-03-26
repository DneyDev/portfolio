"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProjectCard, type Project } from "./project-card"

const categories = ["Todos", "Web", "Back-End", "Fullstack", "DataBase"]

const projects: Project[] = [
  {
    id: 1,
    title: "Banking App",
    description:
      "Sistema bancário CLI em Java com arquitetura em camadas para aprofundamento de estudos em Java.",
    image: "https://www.zoop.com.br/_next/image?url=https%3A%2F%2Fzoop.blog%2Fwp-content%2Fuploads%2F2025%2F07%2Fquais-servicos-podem-ser-oferecidos-baas.png&w=1920&q=75",
    tags: ["Java"],
    category: "Back-End",
    github: "https://github.com/DneyDev/Banking-App",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Equipiada Atlas",
    description:
      "Projeto colaborativo para desenvolvimento de plataforma de armazenamento de informações de jogos do usuário.",  
    image: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/twinkl-video-games-2_ver_1.jpg",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    category: "Web",
    github: "https://github.com/rober122pst/equipiada-atlas",
    featured: true,
  },
  {
    id: 3,
    title: "SMCP Obras",
    description:
      "Site empresarial feito sob encomenda para empresa do ramo da Construção Civil.",
    image: "https://aureaescolavirtual.com.br/uploads/_thumb/cedoc_doc_2016551/img2016551_15trvqg59wo1t4leqmn55t3g4x4f7gwr46vg8zz32b41mzm5b1en34m90u5w88gfr1qx2o0989pvcvv7jwymo8zi85wwm8j9s2gt.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com/DneyDev/SMCP_Project",
  },
  {
    id: 4,
    title: "Gerenciador de Arquivos TCP-IP",
    description:
      "Aplicação back-end para projeto acadêmico de gerenciamento de tarefas com CRUD completo, autenticação e interface limpa.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["C"],
    category: "Back-End",
    github: "https://github.com/DneyDev/Gerenciador-de-Arquivos-TCP-IP",
    featured: true,
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

