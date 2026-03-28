import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectList } from "@/helpers/ProjectList"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-3.5rem)] py-16 md:py-24 px-4">
      <div className="container max-w-6xl">
        <div className="space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects I've worked on. Click on any project to see more details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ProjectList.map((project, idx) => (
            <Card 
              key={idx}
              className="group cursor-pointer overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              onClick={() => navigate(`/project/${idx}`)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description || "Click to view project details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.split(", ").slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.split(", ").length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.skills.split(", ").length - 4}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                  {project.link && (
                    <Github className="h-4 w-4" />
                  )}
                  {project.site && (
                    <ExternalLink className="h-4 w-4" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
