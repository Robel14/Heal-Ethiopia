"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const donors = [
  {
    name: "DFID / Ministry of Health",
    description: "Supporting healthcare initiatives and community development programs",
  },
  {
    name: "Swedish International Development Agency (sida)",
    description: "Partnership through Pathfinder International-Ethiopia (PI-E)",
  },
  {
    name: "PEPFAR/USAID",
    description: "Collaboration through Project Concern International Ethiopia (PCI-E)",
  },
  {
    name: "Hope for African Children Initiative",
    description: "Partnership through Care-Ethiopia",
  },
  {
    name: "Addis Ababa HIV/AIDS Prevention and Control Office",
    description: "Supporting HIV/AIDS prevention and treatment programs",
  },
  {
    name: "African Women Development Fund (AWDF)",
    description: "Supporting women's empowerment initiatives",
  },
  {
    name: "The Andrew J. Young Foundation",
    description: "Supporting youth development and education programs",
  },
]

export default function DonorSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % donors.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % donors.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + donors.length) % donors.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Major Donors</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden bg-white rounded-lg shadow-md p-8">
            <div className="relative h-40 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute text-center w-full"
                >
                  <h3 className="text-2xl font-bold text-green-700 mb-4">{donors[currentIndex].name}</h3>
                  <p className="text-gray-700 text-lg">{donors[currentIndex].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="Previous donor"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="Next donor"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {donors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to donor ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

