import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Leaf, Users } from "lucide-react"

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_8_2025-03-14_11-41-55.jpg-D9PWLX50kpkQwJAYoP3k1JZgtX7HuR.jpeg"
              alt="Our Projects"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Projects</h1>
              <p className="text-xl text-white/90 mt-2">Explore our various initiatives across Ethiopia</p>
            </div>
          </div>
        </section>

        {/* Projects Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Focus Areas</h2>
              <p className="text-gray-700">
                HIWOT Ethiopia implements integrated development programs that address the interconnected challenges
                facing Ethiopian communities. Our projects focus on five key areas that together create sustainable
                change and improved quality of life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-red-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-red-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Health</h3>
                  <p className="text-gray-600 mb-4">
                    Improving access to quality healthcare services, with a focus on maternal and child health,
                    reproductive health, and HIV/AIDS prevention and treatment.
                  </p>
                  <Link href="/programs/health">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-blue-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">Education</h3>
                  <p className="text-gray-600 mb-4">
                    Supporting quality education through school infrastructure, teacher training, educational materials,
                    and programs to keep children, especially girls, in school.
                  </p>
                  <Link href="/programs/education">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-yellow-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-yellow-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-700 mb-2">Livelihoods</h3>
                  <p className="text-gray-600 mb-4">
                    Enhancing economic opportunities through vocational training, microfinance, agricultural
                    development, and market linkages for sustainable income generation.
                  </p>
                  <Link href="/programs/livelihoods">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-green-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="h-16 w-16 text-green-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Environment</h3>
                  <p className="text-gray-600 mb-4">
                    Promoting environmental conservation, climate change adaptation, sustainable natural resource
                    management, and renewable energy solutions.
                  </p>
                  <Link href="/programs/environment">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-purple-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">Community</h3>
                  <p className="text-gray-600 mb-4">
                    Building community resilience through capacity development, social cohesion, gender equality, and
                    youth empowerment initiatives.
                  </p>
                  <Link href="/programs/community">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Featured Project</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                  alt="Integrated Development Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Integrated Development Project</h3>
                <p className="text-gray-700 mb-4">
                  Our flagship integrated development project in the Oromia Region combines health, education,
                  livelihoods, and environmental interventions to create comprehensive, sustainable change.
                </p>
                <p className="text-gray-700 mb-6">
                  Working with 15 communities and reaching over 25,000 people, this project demonstrates how addressing
                  multiple dimensions of poverty simultaneously leads to transformative outcomes.
                </p>
                <Link href="/projects/integrated-development">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Read Case Study</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

