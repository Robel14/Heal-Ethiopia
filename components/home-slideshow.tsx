"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  {
    src: "/images/slideshow/community-health-workers.jpg",
    alt: "Community Health Workers",
    caption: "Training community health workers in rural areas",
  },
  {
    src: "/images/slideshow/maternal-care.jpg",
    alt: "Maternal Care",
    caption: "Providing essential maternal care services",
  },
  {
    src: "/images/slideshow/clean-water.jpg",
    alt: "Clean Water Initiative",
    caption: "Bringing clean water to communities in need",
  },
  {
    src: "/images/slideshow/education-program.jpg",
    alt: "Education Program",
    caption: "Supporting education for children across Ethiopia",
  },
  {
    src: "/images/slideshow/agricultural-training.jpg",
    alt: "Agricultural Training",
    caption: "Teaching sustainable farming practices",
  },
  {
    src: "/images/slideshow/healthcare-clinic.jpg",
    alt: "Healthcare Clinic",
    caption: "Providing healthcare services in underserved areas",
  },
  {
    src: "/images/slideshow/women-empowerment.jpg",
    alt: "Women Empowerment",
    caption: "Empowering women through skills training",
  },
  {
    src: "/images/slideshow/youth-program.jpg",
    alt: "Youth Program",
    caption: "Engaging youth in community development",
  },
  {
    src: "/images/slideshow/nutrition-program.jpg",
    alt: "Nutrition Program",
    caption: "Improving nutrition for vulnerable populations",
  },
  {
    src: "/images/slideshow/community-building.jpg",
    alt: "Community Building",
    caption: "Building stronger communities together",
  },
]

export default function HomeSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
            <p className="text-xl font-semibold">{image.caption}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

