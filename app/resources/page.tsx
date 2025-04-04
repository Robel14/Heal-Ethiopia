import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, Music, FileText, FileSpreadsheet } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5_2025-03-12_15-05-16.jpg-5Zw85q0evMUaDvOZ1RiWu0T21jxyk8.jpeg"
              alt="Resources"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Resources</h1>
              <p className="text-xl text-white/90 mt-2">
                Explore our gallery, videos, audio, publications, and reports
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-blue-500" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Photo Gallery</h3>
                  <p className="text-gray-600 mb-4">
                    Browse our collection of photos showcasing our work and impact across Ethiopia.
                  </p>
                  <Link href="/gallery">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Gallery</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-red-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-16 w-16 text-red-500" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Videos</h3>
                  <p className="text-gray-600 mb-4">
                    Watch videos about our programs, success stories, and community impact.
                  </p>
                  <Link href="/resources/videos">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Watch Videos</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-green-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="h-16 w-16 text-green-500" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Audio</h3>
                  <p className="text-gray-600 mb-4">
                    Listen to interviews, testimonials, and stories from our community.
                  </p>
                  <Link href="/resources/audio">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Listen Now</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-purple-500" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">Publications</h3>
                  <p className="text-gray-600 mb-4">
                    Access our research papers, case studies, and other publications.
                  </p>
                  <Link href="/impacts/publications">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">View Publications</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-yellow-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileSpreadsheet className="h-16 w-16 text-yellow-500" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-yellow-700 mb-2">Reports</h3>
                  <p className="text-gray-600 mb-4">
                    Read our annual reports, impact assessments, and project evaluations.
                  </p>
                  <Link href="/impacts/reports">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">View Reports</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

