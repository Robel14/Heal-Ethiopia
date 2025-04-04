import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Users, Heart } from "lucide-react"

const upcomingCommunityDays = [
  {
    title: "Addis Ababa Community Day",
    date: "August 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Meskel Square, Addis Ababa",
    description:
      "Join us for a day of community service, health screenings, educational activities, and cultural celebrations. This event brings together community members of all ages to strengthen bonds and improve our shared spaces.",
    image: "/placeholder.svg?height=300&width=500",
    activities: ["Health Screenings", "Tree Planting", "Children's Activities", "Cultural Performances"],
    registration: true,
  },
  {
    title: "Oromia Region Community Day",
    date: "August 19, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "Community Center, Adama",
    description:
      "A day dedicated to community service and celebration in Adama. Activities include clean-up campaigns, health education, sports competitions, and traditional food sharing.",
    image: "/placeholder.svg?height=300&width=500",
    activities: ["Community Clean-up", "Health Education", "Sports Competitions", "Traditional Food"],
    registration: true,
  },
  {
    title: "Amhara Region Community Day",
    date: "September 2, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Public Park, Bahir Dar",
    description:
      "Come together with the Bahir Dar community for a day of service and celebration. Help beautify public spaces, participate in educational workshops, and enjoy cultural performances.",
    image: "/placeholder.svg?height=300&width=500",
    activities: ["Park Beautification", "Educational Workshops", "Cultural Performances", "Community Meal"],
    registration: true,
  },
]

const pastCommunityDays = [
  {
    title: "World Water Day Community Event",
    date: "March 22, 2023",
    location: "Multiple Locations",
    description:
      "Communities across Ethiopia came together to celebrate World Water Day with clean-up activities around water sources, educational sessions on water conservation, and the inauguration of new water projects.",
    image: "/placeholder.svg?height=300&width=500",
    participants: "500+ participants",
  },
  {
    title: "Earth Day Community Service",
    date: "April 22, 2023",
    location: "Various Communities",
    description:
      "HEAL-Ethiopia organized tree planting, waste collection, and environmental education activities in multiple communities to celebrate Earth Day and promote environmental stewardship.",
    image: "/placeholder.svg?height=300&width=500",
    participants: "300+ participants",
  },
]

export default function CommunityDaysPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Community Days" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Community Days</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Upcoming Community Days</h2>
              <p className="text-gray-700 text-center mb-8">
                Our Community Days bring people together to strengthen bonds, improve shared spaces, and celebrate our
                diverse cultures. These events combine service activities with cultural celebrations and educational
                opportunities.
              </p>

              <div className="space-y-8">
                {upcomingCommunityDays.map((event, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold text-blue-700 mb-2">{event.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-700">
                            <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Clock className="h-4 w-4 text-green-600 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <MapPin className="h-4 w-4 text-green-600 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{event.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.activities.map((activity, i) => (
                              <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          {event.registration && (
                            <Button className="bg-green-600 hover:bg-green-700 text-white">
                              Register to Volunteer
                            </Button>
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
              <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Past Community Days</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pastCommunityDays.map((event, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-blue-700 mb-2">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <CalendarDays className="h-4 w-4 text-green-600 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-4 w-4 text-green-600 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="h-4 w-4 text-green-600 mr-2" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-700 hover:bg-blue-50">
                        <Heart className="h-4 w-4 mr-2" />
                        View Impact Stories
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
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Host a Community Day</h3>
              <p className="text-gray-700 mb-6">
                Interested in organizing a Community Day in your area? We can provide resources, guidance, and support
                to help you plan and implement a successful community event.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Contact Us to Get Started</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

