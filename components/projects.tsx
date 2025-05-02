"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollAnimation from "@/components/animations/scroll-animation"
import StaggerAnimation from "@/components/animations/stagger-animation"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "GitHub Readme Generator",
      description: "A tool that generates professional README files for GitHub repositories based on user prompts.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Streamlit", "Ollama", "GitHub API", "Python"],
      details:
        "Developed a GitHub README generator using Streamlit and Ollama, where users provide a prompt and an API key to generate professional README files. Integrated GitHub API for seamless upload of generated files directly to repositories. Designed for ease of use and deployment as an interactive web application.",
    },
    {
      title: "React Component Generator",
      description: "AI-powered tool that creates React components from natural language descriptions.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["LLaMA", "Streamlit", "React", "Prompt Engineering"],
      details:
        "Developed an AI-powered React component generator using LLaMA, Streamlit, and prompt engineering, enabling users to create React components via natural language input.",
    },
    {
      title: "Text-to-Speech and Multilingual Communication System",
      description: "A system for accurate voice transcription and multilingual communication.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Whisper Large", "Groq", "Mistral", "Python"],
      details:
        "Developed a Speech-to-Text application using the Whisper Large model via Groq for high-accuracy voice transcription. Integrated Mistral models for efficient text generation and translation, enabling seamless multilingual communication.",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
            <p className="text-muted-foreground max-w-[700px]">
              Showcasing my technical skills through real-world applications and solutions.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="flex flex-col h-full border shadow-sm group overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <div className="flex gap-2 justify-center">
                        <Button variant="secondary" size="sm" asChild>
                          <Link href="#" className="flex items-center gap-1">
                            <Github className="h-4 w-4" /> Code
                          </Link>
                        </Button>
                        <Button variant="secondary" size="sm" asChild>
                          <Link href="#" className="flex items-center gap-1">
                            <ExternalLink className="h-4 w-4" /> Demo
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Badge variant="outline" className="bg-muted/50">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 md:hidden">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerAnimation>
      </div>
    </section>
  )
}
