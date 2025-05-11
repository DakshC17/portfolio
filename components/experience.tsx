"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/animations/scroll-animation"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const experiences = [
    {
      title: "Intern",
      company: "TruPricer",
      period: "Feb 2025 - Apr 2025",
      description:
        "Worked on OCR text extraction, grocery data integration, web crawling, and recipe recommendation systems.",
      responsibilities: [
        "Built an OCR feature using Google Cloud Vision to extract handwritten text",
        "Merged and visualized grocery data from multiple JSON sources",
        "Legally extracted structured data from various platforms",
        "Developed an AI-powered recipe suggestion system",
      ],
    },
    {
      title: "Executive Member",
      company: "Leadership Role",
      period: "Jan 2023 - Jan 2025",
      description: "Served as an executive member, contributing to organizational leadership and project management.",
      responsibilities: [],
    },
    {
      title: "Lead",
      company: "College Football Society",
      period: "During College",
      description: "Led the college football society, organizing events and managing team activities.",
      responsibilities: [],
    },
    {
      title: "Member",
      company: "QuantumByte society at KCCITM",
      period: "Jan 2022 - Jan 2026",
      description: "Active member of the QuantumByte society, participating in technical events and workshops.",
      responsibilities: [],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
            <p className="text-muted-foreground max-w-[700px]">My professional journey and leadership roles.</p>
          </div>
        </ScrollAnimation>

        <div className="relative" ref={containerRef}>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border hidden md:block"
            style={{ height: lineHeight, top: 0 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end items-start">
                    <motion.div
                      className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
                    />
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-full"
                    >
                      <Card className="w-full shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                          <Badge className="w-fit mb-2">{exp.period}</Badge>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{exp.description}</p>
                          {exp.responsibilities.length > 0 && (
                            <motion.ul
                              className="list-disc list-inside mt-4 space-y-1 text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 + index * 0.2 }}
                            >
                              {exp.responsibilities.map((resp, respIndex) => (
                                <motion.li
                                  key={respIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 1 + index * 0.2 + respIndex * 0.1 }}
                                >
                                  {resp}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


// <div className="flex flex-col md:flex-row items-center gap-4">
//   <div className="w-1/2 flex justify-center items-start">
//     <motion.div  