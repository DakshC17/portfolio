"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/animations/scroll-animation"
import StaggerAnimation from "@/components/animations/stagger-animation"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Spring", "Spring Boot", "Streamlit"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "GitHub", "GitLab", "Git Bash"],
    },
    {
      title: "Databases & Tools",
      skills: ["ChromaDB", "DBMS", "Google Colab"],
    },
    {
      title: "AI & ML Tools",
      skills: ["OpenAI", "GPT", "Mistral", "Ollama", "Groq", "Prompt Engineering"],
    },
    {
      title: "CS Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "System Design",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
            <p className="text-muted-foreground max-w-[700px]">
              A comprehensive set of technical skills and expertise I've developed throughout my career.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="border shadow-sm h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-primary mr-2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Badge variant="outline" className="bg-muted/50">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerAnimation>
      </div>
    </section>
  )
}
