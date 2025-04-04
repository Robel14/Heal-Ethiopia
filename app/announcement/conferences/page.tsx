import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Users, Mic, BookOpen } from "lucide-react"

const upcomingConferences = [
  {
    title: "Annual Development Conference 2023",
    date: "September 15-17, 2023",
    time: "8:00 AM - 5:00 PM",
    location: "Sheraton Addis, Addis Ababa",
    description:
      "Join us for our flagship conference bringing together development practitioners, policymakers, researchers, and community leaders to discuss sustainable development strategies for Ethiopia.",
    image: "/placeholder.svg?height=300&width=500",
    speakers: "25+ speakers",
    registration: true,
    featured: true,
  },
  {
    title: "Climate Resilience Symposium",
    date: "October 10-11, 2023",
    time: "9:00 AM - 4:00 PM",
    location: "UNECA Conference Center, Addis Ababa",
    description:
      "A two-day symposium focused on climate change adaptation, sustainable agriculture, and building resilient communities in the face of environmental challenges.",
    image: "/placeholder.svg?height=300&width=500",
    speakers: "15+ speakers",
    registration: true,
  },
]

const pastConferences = [
  {
    title: "Women's Leadership Summit",
    date: "March 8, 2023",
    location: "Hilton Hotel, Addis Ababa",
    description:
      "A one-day summit celebrating women's leadership in development, featuring keynote speeches, panel discussions, and networking opportunities.",
    image: "/placeholder.svg?height=300&width=500",
    attendees: "200+ participants",
  },
  {
    title: "Youth Innovation Conference",
    date: "November 12-13, 2022",
    location: "Addis Ababa University",
    description:
      "A conference showcasing youth-led innovations and solutions to community challenges, with workshops on entrepreneurship and social impact.",
    image: "/placeholder.svg?height=300&width=500",
    attendees: "350+ participants",
  },
]

export default function ConferencesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Conferences" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Conferences</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Featured Conference */}
            {upcomingConferences
              .filter((conf) => conf.featured)
              .map((conference, index) => (
                <div key={index} className="max-w-5xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Featured Conference</h2>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-200">
                    <div className="md:flex">
                      <div className="md:w-2/5 relative h-64 md:h-auto">
                        <Image
                          src={conference.image || "/placeholder.svg"}
                          alt={conference.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-8 md:w-3/5">
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          Featured Event
                        </div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-3">{conference.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-700">
                            <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                            <span>{conference.date}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <span>{conference.time}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <MapPin className="h-4 w-4 text-green-600 mr-2" />
                            <span>{conference.location}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Mic className="h-4 w-4 text-green-600 mr-2" />
                            <span>{conference.speakers}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6">{conference.description}</p>
                        <div className="flex space-x-4">
                          <Button className="bg-green-600 hover:bg-green-700 text-white">Register Now</Button>
                          <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                            View Program
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Upcoming Conferences</h2>
              <p className="text-gray-700 text-center mb-8">
                Join us at our upcoming conferences to learn from experts, share knowledge, and network with
                professionals in development, healthcare, education, and more.
              </p>

              <div className="space-y-8">
                {upcomingConferences
                  .filter((conf) => !conf.featured)
                  .map((conference, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative h-64 md:h-auto">
                          <Image
                            src={conference.image || "/placeholder.svg"}
                            alt={conference.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6 md:w-2/3">
                          <h3 className="text-xl font-bold text-blue-700 mb-2">{conference.title}</h3>
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-700">
                              <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                              <span>{conference.date}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Clock className="h-4 w-4 text-green-600 mr-2" />
                              <span>{conference.time}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <MapPin className="h-4 w-4 text-green-600 mr-2" />
                              <span>{conference.location}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Mic className="h-4 w-4 text-green-600 mr-2" />
                              <span>{conference.speakers}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{conference.description}</p>
                          <div className="flex space-x-3">
                            {conference.registration && (
                              <Button className="bg-green-600 hover:bg-green-700 text-white">Register</Button>
                            )}
                            <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                              More Details
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Past Conferences</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pastConferences.map((conference, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={conference.image || "/placeholder.svg"}
                        alt={conference.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-blue-700 mb-2">{conference.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                          <span>{conference.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span>{conference.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="h-4 w-4 text-green-600 mr-2" />
                          <span>{conference.attendees}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">{conference.description}</p>
                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex-1 border-blue-600 text-blue-700 hover:bg-blue-50">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Proceedings
                        </Button>
                        <Button variant="outline" className="flex-1 border-green-600 text-green-700 hover:bg-green-50">
                          Photos
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Call for Speakers</h3>
              <p className="text-gray-700 mb-6">
                Are you an expert in development, healthcare, education, or environmental sustainability? We're looking
                for speakers for our upcoming conferences. Share your knowledge and experience with our community.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Submit a Proposal</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

