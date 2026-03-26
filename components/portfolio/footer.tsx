"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/DneyDev", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sidneyrodrigues010",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sidney.pe010@gmail.com", label: "Email" },
]

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 sm:py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <a href="#" className="text-xl sm:text-2xl font-bold text-foreground font-mono">
              <span className="text-primary">{"<"}</span>
              DneyDev
              <span className="text-primary">{"/>"}</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Desenvolvedor focado em Web e Back-End, com base sólida em lógica
              de programação e boas práticas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            &copy; {currentYear} Sidney (DneyDev). Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
            Feito com{" "}
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> usando
            Next.js e TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
