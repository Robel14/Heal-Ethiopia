"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GalleryItem {
  _id: string
  title: string
  imageUrl: string
  category: string
}

export default function GalleryGrid() {
  const [images, setImages] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery")
        if (!response.ok) {
          throw new Error("Failed to fetch gallery")
        }
        const data = await response.json()
        setImages(data)

        // Extract unique categories
        const uniqueCategories = Array.from(new Set(data.map((item: GalleryItem) => item.category)))
        setCategories(uniqueCategories as string[])

        setLoading(false)
      } catch (error) {
        console.error("Error fetching gallery:", error)
        setLoading(false)
      }
    }

    fetchGallery()
  }, [])

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category.toLowerCase() === activeCategory.toLowerCase())

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-200 h-10 w-64 rounded-md animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="flex space-x-2 p-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-md ${
              activeCategory === "all" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeCategory === category.toLowerCase() ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div key={image._id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square relative">
                <Image
                  src={image.imageUrl || "/placeholder.svg?height=400&width=400"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-medium">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No images available in this category.</p>
      )}
    </div>
  )
}

