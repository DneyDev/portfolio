"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/DneyDev",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sidneyrodrigues010",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:sidney.pe010@gmail.com",
    label: "Email",
  },
]

export function Contact() {

  return (
    <section id="contato" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">
            {"// Vamos conversar"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base text-pretty">
            Estou sempre aberto a discutir novos projetos, oportunidades ou
            simplesmente trocar ideias sobre tecnologia.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                  <a
                    href="mailto:sidney.pe010@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    sidney.pe010@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">GitHub</h3>
                  <a
                    href="https://github.com/DneyDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    github.com/DneyDev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/sidneyrodrigues010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Perfil Profissional
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Localização</h3>
                  <p className="text-muted-foreground text-sm">Brasil</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Me encontre em</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse shrink-0" />
                <span className="font-medium text-foreground text-sm sm:text-base">
                  Disponível para novos projetos
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Aberto a oportunidades de trabalho e projetos freelance.
                Respondo em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
