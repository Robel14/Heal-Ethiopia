import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const locations = [
  {
    name: "Addis Ababa",
    description:
      "Our headquarters and main operations center is located in Addis Ababa, where we implement urban development programs focusing on youth education and healthcare.",
    programs: ["Youth Education", "Urban Healthcare", "Vocational Training"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Oromia Region",
    description:
      "In the Oromia Region, we work with rural communities to improve access to education, healthcare, and sustainable agriculture practices.",
    programs: ["Rural Education", "Community Health", "Agricultural Development"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Amhara Region",
    description:
      "Our programs in the Amhara Region focus on water and sanitation, education infrastructure, and maternal and child health.",
    programs: ["Water & Sanitation", "School Construction", "Maternal Health"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "SNNPR",
    description:
      "In the Southern Nations, Nationalities, and Peoples' Region, we implement community-based development initiatives with a focus on environmental sustainability.",
    programs: ["Environmental Conservation", "Community Empowerment", "Sustainable Livelihoods"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Tigray Region",
    description:
      "Our work in the Tigray Region includes emergency response and recovery, as well as long-term development programs in education and healthcare.",
    programs: ["Emergency Response", "Education Support", "Healthcare Access"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Somali Region",
    description:
      "In the Somali Region, we focus on drought resilience, water access, and pastoral community development. Our programs help communities adapt to climate change and build sustainable livelihoods.",
    programs: ["Drought Resilience", "Water Access", "Pastoral Development"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=300&width=1200"
              alt="Where We Work - Locations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Locations</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Where We Work</h2>
              <p className="text-gray-700">
                Hiwot Ethiopia operates across multiple regions in Ethiopia, implementing programs that address the
                specific needs and challenges of each community. Our presence in diverse locations allows us to create
                meaningful impact throughout the country.
              </p>
            </div>

            <div className="mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Map of Ethiopia showing our locations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Map of Our Locations in Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-green-400 mr-2" />
                        <h3 className="text-xl font-bold text-white">{location.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">{location.description}</p>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Key Programs:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {location.programs.map((program, i) => (
                          <li key={i} className="text-gray-700">
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

