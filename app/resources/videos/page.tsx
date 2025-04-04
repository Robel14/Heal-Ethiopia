import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ExternalLink } from "lucide-react"

const videos = [
  {
    id: "video1",
    title: "HIWOT Ethiopia - Our Mission",
    description: "Learn about HIWOT Ethiopia's mission and vision for creating sustainable change.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    youtubeId: "example1",
  },
  {
    id: "video2",
    title: "Education Programs in Action",
    description: "See how our education initiatives are transforming communities across Ethiopia.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    youtubeId: "example2",
  },
  {
    id: "video3",
    title: "Healthcare Outreach",
    description: "Our healthcare teams bringing vital services to remote communities.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    youtubeId: "example3",
  },
  {
    id: "video4",
    title: "Community Development Projects",
    description: "Witness the impact of our community-led development initiatives.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    youtubeId: "example4",
  },
  {
    id: "video5",
    title: "Youth Empowerment Program",
    description: "How we're helping young people build skills and confidence for the future.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    youtubeId: "example5",
  },
  {
    id: "video6",
    title: "Agricultural Training Initiative",
    description: "Farmers learning sustainable techniques to improve yields and food security.",
    thumbnail: "/placeholder.svg?height=200&width=350",
    youtubeId: "example6",
  },
]

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_7_2025-03-14_11-41-55.jpg-Ey2d6N2oPepp00EjK5FEOvyQlGHMTD.jpeg"
              alt="Videos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Videos</h1>
              <p className="text-xl text-white/90 mt-2">
                Watch videos about our programs, success stories, and community impact
              </p>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Watch Video <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Channel */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Visit Our YouTube Channel</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our YouTube channel to stay updated with our latest videos and activities.
            </p>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                YouTube Channel <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

