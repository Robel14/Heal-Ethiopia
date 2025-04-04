import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const impactAreas = [
  {
    title: "Environment & Climate",
    description:
      "Promotion of environment protection, climate change adaptation, sustainable practices, and biodiversity conservation to mitigate environmental degradation.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/impacts/education",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Improving access to healthcare services, maternal and neonatal health, nutrition, water and sanitation, and promoting health awareness in communities.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/impacts/healthcare",
  },
  {
    title: "Women & Youth Empowerment",
    description:
      "Empowering women and youth through economic opportunities, skill-building, leadership development, and addressing issues like human trafficking and migration.",
    image: "/placeholder.svg?height=300&width=400",
    link: "/impacts/community",
  },
]

export default function ImpactHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Impact Areas</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We focus on creating sustainable change through targeted interventions in key areas that affect the
            wellbeing and future of communities across Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">{area.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={area.link} className="w-full">
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/impacts">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">View All Impact Areas</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

