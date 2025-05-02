"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, School } from "lucide-react"
import ScrollAnimation from "@/components/animations/scroll-animation"
import StaggerAnimation from "@/components/animations/stagger-animation"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering (AIML)",
      institution: "KCC Institute of Technology and Management",
      location: "Greater Noida",
      period: "2022 - 2026",
      gpa: "8.02",
      icon: GraduationCap,
    },
    {
      degree: "CBSE Class XII",
      institution: "Kendriya Vidyalaya, RK Puram",
      location: "Delhi",
      period: "2020 - 2022",
      gpa: "8.55",
      icon: School,
    },
    {
      degree: "CBSE Class X",
      institution: "Kendriya Vidyalaya, RK Puram",
      location: "Delhi",
      period: "2018 - 2020",
      gpa: "8.86",
      icon: School,
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
            <p className="text-muted-foreground max-w-[700px]">My academic background and qualifications.</p>
          </div>
        </ScrollAnimation>

        <StaggerAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="border shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <motion.div
                      className="p-2 bg-primary/10 rounded-full"
                      whileHover={{ rotate: 10 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">{edu.location}</span>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">GPA:</span>
                      <span className="text-muted-foreground">{edu.gpa}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </StaggerAnimation>
      </div>
    </section>
  )
}
