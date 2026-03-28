import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProjectList } from "@/helpers/ProjectList"

export default function ProjectDisplay() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = ProjectList[Number(id)]

  if (!project) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button onClick={() => navigate("/projects")}>
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] py-16 md:py-24 px-4">
      <div className="container max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 -ml-2"
          onClick={() => navigate("/projects")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        {/* Project Image */}
        <div className="rounded-lg overflow-hidden border bg-muted mb-8">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
          
          {project.description && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          )}

          <Separator />

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.split(", ").map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.site && (
              <Button variant="outline" asChild>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Site
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
