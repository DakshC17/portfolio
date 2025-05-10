"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60 dark:opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Daksh Choudhary
            </h1>
            <div className="h-8 md:h-10">
              <TypeAnimation
                sequence={["AI Developer", 1500, "Backend Developer", 1500, "Cloud Engineer", 1500]}
                wrapper="p"
                speed={50}
                className="text-xl md:text-2xl text-primary font-medium"
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          </motion.div>

          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Building intelligent, cloud-native applications with expertise in Python, Java, C++, and modern frameworks
            like Spring Boot, React.js, and Streamlit.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Get in Touch */}
            <Button asChild className="group relative overflow-hidden">
              <Link href="#contact">
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
                <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Button>

            {/* View Resume (Internal Route) */}
            <Button variant="secondary" asChild className="group">
              <Link href="/Daksh_Resume.pdf-3.pdf">
              <span className="group-hover:translate-x-1 transition-transform duration-200">View Resume</span>
                
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                >
                  <Eye className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </Button>

            {/* View Resume (External Link) */}

            {/* Download Resume */}
            {/* <Button variant="outline" asChild className="group">
              <a href="/Daksh_Resume.pdf-3.pdf" download>
                Download Resume
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                >
                  <Download className="ml-2 h-4 w-4" />
                </motion.span>
              </a>
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


// import { Button } from "@/components/ui/button"
// import { Download, ArrowRight, Eye } from "lucide-react"
// import Link from "next/link"
// import { motion } from "framer-motion"   
