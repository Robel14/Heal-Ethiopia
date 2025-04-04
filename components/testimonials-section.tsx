"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Abebe Bikila",
    title: "Community Leader",
    quote:
      "HEAL-Ethiopia's programs have transformed our community. We now have access to clean water, better healthcare, and more opportunities for our children.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Tigist Lemma",
    title: "Small Business Owner",
    quote:
      "Thanks to the microfinance loans and business training, I was able to start my own business and support my family. My life has changed completely.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Kebede Teshome",
    title: "Teacher",
    quote:
      "The new school facilities and educational resources have made a huge difference for our students. They are more engaged and excited about learning.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg shadow-md p-8 text-center"
            >
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                />
                <AvatarFallback>{testimonials[currentTestimonial].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="text-gray-700 italic text-lg mb-4">"{testimonials[currentTestimonial].quote}"</p>
              <p className="text-blue-700 font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-500">{testimonials[currentTestimonial].title}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

