"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrollAnimation from "@/components/animations/scroll-animation"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Card className="border-none shadow-lg overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                ease: "linear",
              }}
            />
            <CardContent className="p-6 md:p-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold">Profile</h3>
                  <p className="text-muted-foreground">
                    AI and Backend Developer with expertise in building intelligent, cloud-native applications.
                    Passionate about creating efficient, scalable solutions that leverage cutting-edge AI technologies.
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Backend Development", "Cloud Computing", "System Design", "Data Integration"].map(
                      (interest, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge variant="secondary">{interest}</Badge>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-semibold">Contact</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      Email: dakshc1709@gmail.com
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      Phone: +91-7330809721
                    </motion.li>
                    <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      Location: Greater Noida, India
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}
