import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedStat from "@/components/animated-stat"

const impactAreas = [
  {
    title: "Environment & Climate",
    description:
      "Promotion of environment protection, climate change adaptation, sustainable practices, and biodiversity conservation to mitigate environmental degradation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg",
    link: "/impacts/education",
    stats: [
      { value: "30+", label: "Projects" },
      { value: "6", label: "Regions" },
      { value: "50,000+", label: "People Reached" },
    ],
  },
  {
    title: "Health & Wellbeing",
    description:
      "Improving access to healthcare services, maternal and neonatal health, nutrition, water and sanitation, and promoting health awareness in communities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_4_2025-03-12_15-05-16.jpg-L2JSun8f3updVeaa8RABrxsZImeb4K.jpeg",
    link: "/impacts/healthcare",
    stats: [
      { value: "15+", label: "Health Centers" },
      { value: "10,000+", label: "Patients Served" },
      { value: "50+", label: "Health Campaigns" },
    ],
  },
  {
    title: "Women & Youth Empowerment",
    description:
      "Empowering women and youth through economic opportunities, skill-building, leadership development, and addressing issues like human trafficking and migration.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-05-16.jpg-mMXrVxaVVNbQgYy54Bew4Y9vLaZVCX.jpeg",
    link: "/impacts/community",
    stats: [
      { value: "3,000+", label: "Women Empowered" },
      { value: "100+", label: "Self-Help Groups" },
      { value: "45+", label: "Community Projects" },
    ],
  },
  {
    title: "Success Stories",
    description:
      "Real stories of transformation and impact from the communities we serve through our various programs and initiatives.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-12_15-06-25.jpg-8u9cVs1JwypAYn603l0JgG8lVUq2Ly.jpeg",
    link: "/impacts/stories",
    stats: [
      { value: "100+", label: "Success Stories" },
      { value: "20+", label: "Years of Impact" },
      { value: "1.3M+", label: "Lives Changed" },
    ],
  },
]

export default function ImpactsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-06-25.jpg-TTqX57rTTwAdCtE0fG9iqZYdYwKSp9.jpeg"
              alt="Our Impacts"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Impacts</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Breaking the Cycle of Poverty</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                At HEAL-Ethiopia, we focus on creating sustainable change through targeted interventions in key areas
                that affect the wellbeing and future of communities across Ethiopia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-700">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base mb-6">{area.description}</CardDescription>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {area.stats.map((stat, i) => (
                        <AnimatedStat
                          key={i}
                          value={stat.value}
                          label={stat.label}
                          color={i === 0 ? "text-blue-700" : i === 1 ? "text-green-700" : "text-red-600"}
                        />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={area.link} className="w-full">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Focus Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Environment Protection</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Human Rights</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Peace & Security</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Youth Employment</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Agribusiness</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Emergency Response</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Biodiversity</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Energy</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Human Trafficking</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Migration</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Nutrition</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-green-700">Water & Sanitation</p>
              </div>
            </div>
            <Link href="/donate">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Support Our Work</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

