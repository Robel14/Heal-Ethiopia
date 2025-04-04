import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

const upcomingWorkshops = [
  {
    title: "Youth Leadership Workshop",
    date: "May 5-7, 2023",
    time: "9:00 AM - 4:00 PM",
    location: "HEAL-Ethiopia Training Center, Addis Ababa",
    description:
      "A three-day workshop for young leaders aged 18-25 to develop leadership skills, project management abilities, and community mobilization strategies.",
    image: "/placeholder.svg?height=300&width=500",
    capacity: "50 participants",
    registration: true,
  },
  {
    title: "Sustainable Agriculture Training",
    date: "June 12-14, 2023",
    time: "8:30 AM - 3:30 PM",
    location: "Oromia Agricultural Center",
    description:
      "Learn sustainable farming techniques, crop rotation strategies, and water conservation methods to improve agricultural productivity and resilience to climate change.",
    image: "/placeholder.svg?height=300&width=500",
    capacity: "40 participants",
    registration: true,
  },
  {
    title: "Women's Entrepreneurship Workshop",
    date: "July 8, 2023",
    time: "10:00 AM - 5:00 PM",
    location: "HEAL-Ethiopia Community Center, Addis Ababa",
    description:
      "A comprehensive workshop designed to equip women with business skills, financial literacy, and marketing strategies to start and grow their own businesses.",
    image: "/placeholder.svg?height=300&width=500",
    capacity: "35 participants",
    registration: true,
  },
]

const pastWorkshops = [
  {
    title: "Teacher Training Workshop",
    date: "January 15-17, 2023",
    location: "Amhara Region",
    description:
      "A workshop for primary school teachers on child-centered teaching methods, classroom management, and creating inclusive learning environments.",
    image: "/placeholder.svg?height=300&width=500",
    participants: "45 teachers",
  },
  {
    title: "Health Worker Training",
    date: "February 10-12, 2023",
    location: "Tigray Region Health Center",
    description:
      "Training for community health workers on maternal and child health, preventive care, and health education techniques.",
    image: "/placeholder.svg?height=300&width=500",
    participants: "30 health workers",
  },
]

export default function WorkshopsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Workshops" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Workshops</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Upcoming Workshops</h2>
              <p className="text-gray-700 text-center mb-8">
                Join our skill-building and capacity development workshops to learn new skills, connect with others, and
                contribute to community development. Our workshops are designed to be interactive, practical, and
                empowering.
              </p>

              <div className="space-y-8">
                {upcomingWorkshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <Image
                          src={workshop.image || "/placeholder.svg"}
                          alt={workshop.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold text-blue-700 mb-2">{workshop.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-700">
                            <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <span>{workshop.time}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <MapPin className="h-4 w-4 text-green-600 mr-2" />
                            <span>{workshop.location}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Users className="h-4 w-4 text-green-600 mr-2" />
                            <span>Capacity: {workshop.capacity}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{workshop.description}</p>
                        <div className="flex space-x-3">
                          {workshop.registration && (
                            <Button className="bg-green-600 hover:bg-green-700 text-white">Register Now</Button>
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
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Past Workshops</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pastWorkshops.map((workshop, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-blue-700 mb-2">{workshop.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="h-4 w-4 text-green-600 mr-2" />
                          <span>{workshop.participants}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">{workshop.description}</p>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-700 hover:bg-blue-50">
                        View Resources
                      </Button>
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
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Request a Workshop</h3>
              <p className="text-gray-700 mb-6">
                Is your community interested in a specific training or workshop? We can design custom workshops to meet
                your community's needs and development goals.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Contact Us to Request</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

