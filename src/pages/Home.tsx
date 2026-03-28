import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const skills = {
  cloud: ["AWS", "Terraform", "Infrastructure as Code", "Docker"],
  sre: ["Linux", "Incident Response", "Troubleshooting", "Automation", "Bash"],
  monitoring: ["Grafana", "Wazuh", "SIEM"],
  devops: ["Git", "Bitbucket", "CI/CD"],
  frontend: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Bootstrap", "Tailwind", "Livewire"],
  backend: ["Node.js", "Express.js", "PHP", "Laravel", "MySQL", "MongoDB"],
}

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <p className="text-sm font-mono text-primary">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Daryll Fortunado.
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground">
              I build reliable infrastructure.
            </h2>
            <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
              I'm a Junior Site Reliability Engineer with a background in full-stack development. 
              Passionate about cloud infrastructure, automation, and building scalable systems. 
              Currently focused on AWS, DevOps practices, and keeping systems running smoothly.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="https://github.com/42nado" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="https://www.linkedin.com/in/daryllanthonyfortunado/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="mailto:daryllfortunado@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">01.</span>
            Skills & Technologies
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Cloud & IaC */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Cloud & IaC
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* SRE & Systems */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                SRE & Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.sre.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Monitoring & Security */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Monitoring
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.monitoring.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* DevOps Tools */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
