"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export default function About() {
  const stats = [
    { label: "Years Experience", value: 2 },
    { label: "Projects Completed", value: 12 },
    { label: "Technologies", value: 15 },
  ]

  return (
    <section id="about" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title="About Me"
              subtitle="AI and Backend Developer passionate about building smart, scalable applications that merge machine learning with modern software engineering."
              centered={false}
            />

            <div className="space-y-4">
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm passionate about building innovative solutions using modern technologies, With hands-on experience in tools like OpenAI, Mistral, and Ollama, I’ve developed innovative projects including a GitHub README generator, AI-powered React component builder, and multilingual speech systems using Whisper and Groq. I’m proficient in Python, Java, C++, and JavaScript, and I thrive in cloud-native environments using AWS, Docker, and Kubernetes
              </motion.p>

              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                When I'm not coding, you can find me leading the Football society at KCCITM or working on exciting
                projects as an Executive Member at QuantumByte. I'm constantly learning and exploring new technologies
                to expand my skill set.
              </motion.p>

              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Whether it’s crafting AI-driven recommendation engines or integrating real-time data from web crawlers, I love turning complex challenges into elegant technical solutions.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-4 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter from={0} to={stat.value} />+
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild className="relative overflow-hidden group" size="lg">
                <Link href="#contact">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="group">
                <Link href="/Daksh_Resume.pdf-3.pdf" target="_blank" download>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                  <span>Download Resume</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    width={500}
                    height={600}
                    alt="Daksh Choudhary"
                    className="aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}



// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Download } from "lucide-react"
// import Image from "next/image"