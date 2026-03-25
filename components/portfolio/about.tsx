"use client"

import { Code2, Server, BookOpen, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código limpo, legível e bem organizado, seguindo boas práticas desde o início.",
  },
  {
    icon: Server,
    title: "Back-End",
    description: "Lógica de servidor robusta, APIs e integração com banco de dados.",
  },
  {
    icon: BookOpen,
    title: "Base Sólida",
    description: "Fundamentos sólidos de programação, algoritmos e estruturas de dados.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado Contínuo",
    description: "Sempre explorando novas tecnologias e expandindo conhecimentos.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-5 sm:space-y-6">
            <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase">
              {"// Sobre mim"}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Desenvolvendo soluções com{" "}
              <span className="text-primary">base sólida</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou o Sidney, desenvolvedor com foco em Web e Back-End. Acredito
                que a fundação de qualquer bom software começa pelo domínio da
                lógica e da clareza do código, não apenas pelas ferramentas.
              </p>
              <p>
                Trabalho construindo aplicações funcionais, organizadas e de fácil
                manutenção — do front ao back, com atenção a cada detalhe do
                processo.
              </p>
              <p>
                Estou sempre aberto a discutir novos projetos, oportunidades ou
                simplesmente trocar ideias sobre tecnologia.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
