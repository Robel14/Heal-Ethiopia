import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Lightbulb, Leaf, Home, Users } from "lucide-react"

const programs = [
  {
    title: "Health & Nutrition",
    description:
      "Improving access to quality healthcare services, maternal and child health, nutrition, and HIV/AIDS prevention and care.",
    icon: <Heart className="h-6 w-6 text-green-600" />,
    color: "bg-green-100",
    iconColor: "text-green-600",
    link: "/programs/health",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
  },
  {
    title: "Education & Youth",
    description:
      "Enhancing access to quality education, youth development programs, and vocational training for sustainable livelihoods.",
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    link: "/programs/education",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
  },
  {
    title: "Livelihoods & Agriculture",
    description:
      "Supporting sustainable livelihoods, food security, climate-resilient agriculture, and women's economic empowerment.",
    icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    link: "/programs/livelihoods",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
  },
  {
    title: "Environment & Water",
    description:
      "Promoting environmental conservation, climate change adaptation, and access to clean water and sanitation.",
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    color: "bg-green-100",
    iconColor: "text-green-600",
    link: "/programs/environment",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg",
  },
  {
    title: "Shelter & Infrastructure",
    description: "Improving housing conditions and community infrastructure for better living standards and safety.",
    icon: <Home className="h-6 w-6 text-red-600" />,
    color: "bg-red-100",
    iconColor: "text-red-600",
    link: "/programs/shelter",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_83_2025-03-12_15-06-25.jpg-Z4jKLILrbXw2bwPcSclcYnmB3mAc1V.jpeg",
  },
  {
    title: "Community Development",
    description:
      "Strengthening community structures, promoting gender equality, and building social cohesion and resilience.",
    icon: <Users className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    link: "/programs/community",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-05-16.jpg-mMXrVxaVVNbQgYy54Bew4Y9vLaZVCX.jpeg",
  },
]

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5_2025-03-12_15-06-25.jpg-VJTcLRgPSZFGChVGEt5efohdpriphp.jpeg"
              alt="Our Programs"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Programs</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Integrated Development Programs</h2>
              <p className="text-gray-700">
                HEAL-Ethiopia implements holistic development programs that address the interconnected challenges facing
                Ethiopian communities. Our approach recognizes that sustainable development requires addressing multiple
                dimensions simultaneously – from health and education to livelihoods and environmental sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center mb-4`}>
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <Link href={program.link}>
                        <Button
                          variant="link"
                          className={`p-0 ${program.iconColor} hover:${program.iconColor} flex items-center`}
                        >
                          Learn More <span className="ml-2">→</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Approach</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Community-Led</h3>
                <p className="text-gray-700">
                  We place communities at the center of all our work, ensuring local ownership and sustainability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
                <p className="text-gray-700">
                  Our programs are designed based on research, data, and proven methodologies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-yellow-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M15 11L12 14M12 14L9 11M12 14V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Sustainable</h3>
                <p className="text-gray-700">
                  We focus on creating lasting change that continues long after our direct involvement ends.
                </p>
              </div>
            </div>

            <Link href="/impacts">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Explore Our Impact</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

