"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 70 },
      { name: "TailwindCSS", level: 78 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    name: "Back-End",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "MongoDB", level: 72 },
      { name: "SQL", level: 70 },
      { name: "REST API", level: 78 },
      { name: "Git", level: 85 },
    ],
  },
  {
    name: "Fundamentos",
    skills: [
      { name: "Lógica de Programação", level: 92 },
      { name: "Estruturas de Dados", level: 80 },
      { name: "Algoritmos", level: 78 },
      { name: "POO", level: 82 },
      { name: "Clean Code", level: 75 },
    ],
  },
]

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "SQL",
  "MongoDB",
  "Git/GitHub",
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">
            {"// Minhas habilidades"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            Tecnologias e ferramentas que utilizo para construir aplicações
            web sólidas e bem estruturadas.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Skill Bars */}
          <div className="space-y-6 sm:space-y-8">
            {/* Category Tabs */}
            <div className="flex gap-2 flex-wrap">
              {skillCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={cn(
                    "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                    activeCategory === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Skill Progress Bars */}
            <div className="space-y-4 sm:space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-muted-foreground text-xs sm:text-sm font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Cloud */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl pointer-events-none" />
            <div className="relative p-5 sm:p-8 rounded-3xl border border-border bg-background/50">
              <h3 className="text-base sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                Tecnologias que utilizo
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={cn(
                      "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 cursor-default",
                      "border border-border hover:border-primary hover:text-primary hover:bg-primary/5",
                      index % 3 === 0 && "bg-secondary/50"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Anos Estudo e Prática.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Dedicação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
