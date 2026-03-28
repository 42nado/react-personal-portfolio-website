import { Github, Linkedin, Twitter, Facebook } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/42nado",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daryllanthonyfortunado/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/DaryllFortunado",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/daryllanthony.fortunado/",
    icon: Facebook,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container max-w-screen-2xl px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <Separator className="md:hidden" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Daryll Fortunado. Built with React & shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  )
}
