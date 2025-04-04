import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const audioFiles = [
  {
    id: "audio1",
    title: "Community Voices: Education Impact",
    description: "Listen to community members share how our education programs have changed their lives.",
    duration: "5:23",
    src: "#",
  },
  {
    id: "audio2",
    title: "Interview with Program Director",
    description: "Our Program Director discusses the challenges and successes of our initiatives.",
    duration: "12:45",
    src: "#",
  },
  {
    id: "audio3",
    title: "Youth Testimonials",
    description: "Young participants share their experiences in our youth empowerment programs.",
    duration: "8:17",
    src: "#",
  },
  {
    id: "audio4",
    title: "Healthcare Success Stories",
    description: "Healthcare workers and beneficiaries discuss the impact of our medical outreach.",
    duration: "10:32",
    src: "#",
  },
  {
    id: "audio5",
    title: "Agricultural Training Feedback",
    description: "Farmers share how our agricultural training has improved their yields and livelihoods.",
    duration: "7:19",
    src: "#",
  },
  {
    id: "audio6",
    title: "Community Development Discussion",
    description: "A roundtable discussion on sustainable community development approaches.",
    duration: "15:08",
    src: "#",
  },
]

export default function AudioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-14_11-41-55.jpg-iGMFoK00tFUypZBOY3uZAHPHiaDvXU.jpeg"
              alt="Audio Resources"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Audio Resources</h1>
              <p className="text-xl text-white/90 mt-2">
                Listen to interviews, testimonials, and stories from our community
              </p>
            </div>
          </div>
        </section>

        {/* Audio Files Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Featured Audio</h2>

              <div className="space-y-6">
                {audioFiles.map((audio) => (
                  <Card key={audio.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Volume2 className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-blue-700">{audio.title}</h3>
                          <p className="text-gray-600 text-sm">{audio.description}</p>
                        </div>
                        <div className="text-gray-500 text-sm">{audio.duration}</div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                        >
                          <Play className="h-5 w-5" />
                        </Button>
                        <div className="flex-grow bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-600 h-2 w-0 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Subscribe to Our Podcast</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow our podcast to hear regular updates, interviews, and stories from our work across Ethiopia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Apple Podcasts</Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Spotify</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Google Podcasts</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

