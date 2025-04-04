import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Droplet, Wind, Leaf, Trees } from "lucide-react"

export default function EnvironmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg"
              alt="Environment & Water"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Environment & Water</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Promoting environmental conservation, climate change adaptation, and access to clean water and sanitation.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-700">Program Overview</h2>
                <p className="text-gray-700 mb-4">
                  HEAL Ethiopia's Environment & Water program focuses on protecting natural resources, promoting
                  sustainable environmental practices, and improving access to clean water and sanitation facilities.
                </p>
                <p className="text-gray-700 mb-4">
                  Environmental degradation and water scarcity are major challenges facing many communities in Ethiopia.
                  These issues affect health, food security, and livelihoods, particularly for the most vulnerable
                  populations.
                </p>
                <p className="text-gray-700 mb-4">
                  Our integrated approach addresses these interconnected challenges by working with communities to
                  implement sustainable solutions that protect the environment while meeting basic human needs.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_82_2025-03-12_15-06-25.jpg-aP9YVxoZsCd5yBYKSpqgcoI5mrSdGh.jpeg"
                  alt="Environment Program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Interventions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Interventions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach addresses environmental conservation and water security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Trees className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Environmental Conservation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Reforestation and afforestation initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Soil conservation and management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Biodiversity protection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Environmental education and awareness</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <Droplet className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Water & Sanitation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Construction and rehabilitation of water points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Improved sanitation facilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Hygiene education and promotion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Water resource management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                    <Wind className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Climate Change Adaptation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Climate-smart agriculture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Drought-resistant crops and practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Climate risk assessment and planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Alternative energy solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <Leaf className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sustainable Livelihoods</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Eco-friendly income-generating activities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Natural resource-based enterprises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Green skills development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Sustainable energy promotion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Impact</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Through our Environment & Water program, we have achieved significant results in improving environmental
                sustainability and access to clean water.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-700 mb-2">50+</p>
                <p className="text-gray-600">Water Points Developed</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700 mb-2">100,000+</p>
                <p className="text-gray-600">Trees Planted</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-yellow-700 mb-2">30+</p>
                <p className="text-gray-600">Community Watersheds Protected</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-purple-700 mb-2">70,000+</p>
                <p className="text-gray-600">People with Improved Water Access</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/impacts">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More About Our Impact</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_83_2025-03-12_15-06-25.jpg-Z4jKLILrbXw2bwPcSclcYnmB3mAc1V.jpeg"
                  alt="Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-700">
                  Case Study: Gursum Watershed Management Project
                </h2>
                <p className="text-gray-700 mb-4">
                  In the Gursum district of Eastern Hararghe Zone, we implemented a comprehensive watershed management
                  project that combined environmental conservation with water access improvements.
                </p>
                <p className="text-gray-700 mb-4">
                  The project engaged 12 communities in reforestation, soil conservation, and water harvesting
                  activities. Community members planted over 50,000 indigenous trees, constructed 15 km of soil bunds
                  and terraces, and rehabilitated three springs.
                </p>
                <p className="text-gray-700 mb-4">
                  As a result, groundwater levels have increased, soil erosion has decreased by 60%, and agricultural
                  productivity has improved by 40%. Additionally, 5,000 people now have access to clean water within a
                  30-minute walk of their homes.
                </p>
                <p className="text-gray-700">
                  The project's success lies in its integrated approach and strong community ownership. Local watershed
                  management committees now oversee the maintenance and continued development of these resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Related Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                      alt="Livelihoods Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Livelihoods & Agriculture</h3>
                    <p className="text-gray-600 mb-4">
                      Supporting sustainable livelihoods, food security, and climate-resilient agriculture.
                    </p>
                    <Link href="/programs/livelihoods">
                      <Button variant="link" className="p-0 text-yellow-600 hover:text-yellow-700 flex items-center">
                        Learn More <span className="ml-2">→</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
                      alt="Health Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Health & Nutrition</h3>
                    <p className="text-gray-600 mb-4">
                      Improving access to quality healthcare services, maternal and child health, and nutrition.
                    </p>
                    <Link href="/programs/health">
                      <Button variant="link" className="p-0 text-green-600 hover:text-green-700 flex items-center">
                        Learn More <span className="ml-2">→</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-05-16.jpg-mMXrVxaVVNbQgYy54Bew4Y9vLaZVCX.jpeg"
                      alt="Community Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Community Development</h3>
                    <p className="text-gray-600 mb-4">
                      Strengthening community structures, promoting gender equality, and building social cohesion.
                    </p>
                    <Link href="/programs/community">
                      <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700 flex items-center">
                        Learn More <span className="ml-2">→</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your contribution can help us expand our environment and water programs to reach more communities across
              Ethiopia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/announcements/volunteer-opportunities">
                <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

