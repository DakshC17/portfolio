"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/animations/scroll-animation"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      // Here you would normally handle the actual form submission
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mt-4 mb-6"></div>
            <p className="text-muted-foreground max-w-[700px]">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollAnimation delay={0.2}>
            <Card className="border shadow-sm h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="p-2 bg-primary/10 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Email</p>
                    <Link
                      href="mailto:dakshc1709@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      dakshc1709@gmail.com
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="p-2 bg-primary/10 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.2 }}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <Link
                      href="tel:+917330809721"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-7330809721
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="p-2 bg-primary/10 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.4 }}
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <Link
                      href="https://www.linkedin.com/in/"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="p-2 bg-primary/10 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.6 }}
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <Link
                      href="https://github.com/"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/
                    </Link>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <Card className="border shadow-sm h-full">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full group relative overflow-hidden" disabled={isSubmitting}>
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <motion.span
                        animate={isSubmitting ? { x: [0, 100] } : { x: [0, 5, 0] }}
                        transition={
                          isSubmitting
                            ? { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                            : { duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }
                        }
                        className="ml-2"
                      >
                        <Send className="h-4 w-4" />
                      </motion.span>
                    </span>
                    <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
