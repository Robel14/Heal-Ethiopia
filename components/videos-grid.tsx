"use client"

import { useState } from "react"
import { Container } from "@/components/container"
import { Play } from "lucide-react"

type Video = {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  category: string
  date: string
}

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Community Health Initiative",
    description: "Our team working with local communities to improve health outcomes.",
    thumbnail: "/placeholder.svg?height=480&width=640",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Health",
    date: "2023-05-15",
  },
  {
    id: "2",
    title: "Education Program Launch",
    description: "Launching new educational resources for rural communities.",
    thumbnail: "/placeholder.svg?height=480&width=640",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Education",
    date: "2023-06-22",
  },
  {
    id: "3",
    title: "Agricultural Training",
    description: "Training farmers on sustainable agricultural practices.",
    thumbnail: "/placeholder.svg?height=480&width=640",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Agriculture",
    date: "2023-07-10",
  },
  {
    id: "4",
    title: "Women Empowerment Workshop",
    description: "Workshop focused on empowering women in rural communities.",
    thumbnail: "/placeholder.svg?height=480&width=640",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Empowerment",
    date: "2023-08-05",
  },
  {
    id: "5",
    title: "Clean Water Project",
    description: "Implementing clean water solutions in drought-affected areas.",
    thumbnail: "/placeholder.svg?height=480&width=640",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Water",
    date: "2023-09-18",
  },
  {
    id: "6",
    title: "Annual Charity Event",
    description: "Highlights from our annual fundraising event.",
    thumbnail: "/placeholder.svg?height=480&width=640",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Events",
    date: "2023-10-30",
  },
]

const categories = ["All", "Health", "Education", "Agriculture", "Empowerment", "Water", "Events"]

export default function VideosGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  const filteredVideos =
    selectedCategory === "All" ? sampleVideos : sampleVideos.filter((video) => video.category === selectedCategory)

  return (
    <Container className="py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{activeVideo.title}</h3>
                <button onClick={() => setActiveVideo(null)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo.videoUrl}
                className="w-full h-full"
                allowFullScreen
                title={activeVideo.title}
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{activeVideo.description}</p>
              <p className="text-sm text-gray-500 mt-2">Published: {activeVideo.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video cursor-pointer" onClick={() => setActiveVideo(video)}>
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-600 bg-opacity-90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{video.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{video.category}</span>
                <span className="text-gray-500 text-xs">{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No videos found in this category.</p>
        </div>
      )}
    </Container>
  )
}

