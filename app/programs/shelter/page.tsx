import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Hammer, Building, Shield } from "lucide-react"

export default function ShelterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_83_2025-03-12_15-06-25.jpg-Z4jKLILrbXw2bwPcSclcYnmB3mAc1V.jpeg"
              alt="Shelter & Infrastructure"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shelter & Infrastructure</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Improving housing conditions and community infrastructure for better living standards and safety.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-red-700">Program Overview</h2>
                <p className="text-gray-700 mb-4">
                  HEAL Ethiopia's Shelter & Infrastructure program aims to improve living conditions and safety for
                  vulnerable families and communities through sustainable housing solutions and community infrastructure
                  development.
                </p>
                <p className="text-gray-700 mb-4">
                  Safe, adequate housing is fundamental to health, dignity, and overall wellbeing. Yet many families in
                  Ethiopia live in inadequate conditions, with limited access to clean water, sanitation, and essential
                  services. Additionally, community infrastructure such as roads, schools, and health facilities are
                  often lacking or in poor condition.
                </p>
                <p className="text-gray-700 mb-4">
                  Our integrated approach addresses both immediate housing needs and long-term infrastructure
                  development, working with communities to implement sustainable solutions that improve quality of life
                  and resilience.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_81_2025-03-12_15-06-25.jpg-qOHlYfE7tsK0HKT2KmfsUu27f1owry.jpeg"
                  alt="Shelter Program"
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
                Our comprehensive approach addresses housing and infrastructure needs at multiple levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <Home className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Housing Improvements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Construction and renovation of homes for vulnerable families
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Improved cooking facilities and indoor air quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Household water and sanitation facilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Energy-efficient housing solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community Infrastructure</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Construction and rehabilitation of schools and health facilities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Community roads and bridges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Community centers and gathering spaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Market facilities and economic infrastructure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                    <Hammer className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Skills Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Training in construction skills and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Entrepreneurship in construction-related businesses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Maintenance and repair skills</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Sustainable building practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Disaster Risk Reduction</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Disaster-resistant housing and infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Community-based disaster risk management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Early warning systems and preparedness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Climate adaptation for infrastructure</span>
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
              <h2 className="text-3xl font-bold text-red-700 mb-4">Our Impact</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Through our Shelter & Infrastructure program, we have achieved significant results in improving living
                conditions and community facilities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
              <div className="bg-red-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-red-700 mb-2">500+</p>
                <p className="text-gray-600">Homes Improved</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-700 mb-2">25+</p>
                <p className="text-gray-600">Community Facilities Built</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-yellow-700 mb-2">300+</p>
                <p className="text-gray-600">People Trained in Construction</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-purple-700 mb-2">10+</p>
                <p className="text-gray-600">Communities Made Disaster-Resilient</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/impacts">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Learn More About Our Impact</Button>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_84_2025-03-12_15-06-25.jpg-lpJZdCa2uGsQg2tAJEciJKWv8D8wLF.jpeg"
                  alt="Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-red-700">Case Study: Rebuilding Dalo Community</h2>
                <p className="text-gray-700 mb-4">
                  After severe flooding damaged homes and community infrastructure in the Dalo community of SNNPR, HEAL
                  Ethiopia partnered with local authorities and community members to implement a comprehensive
                  rebuilding program.
                </p>
                <p className="text-gray-700 mb-4">
                  The project included the construction of 50 flood-resistant homes, rehabilitation of the community
                  school and health post, installation of a flood early warning system, and training for 30 community
                  members in disaster-resistant construction techniques.
                </p>
                <p className="text-gray-700 mb-4">
                  As a result, all affected families now have safe, secure housing, and the community is better prepared
                  for future flooding events. The trained construction workers have formed a cooperative that provides
                  services to neighboring communities, generating income and spreading improved building practices.
                </p>
                <p className="text-gray-700">
                  This project demonstrates the effectiveness of our integrated approach, which combines immediate
                  housing needs with long-term capacity building and risk reduction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-8">Related Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg"
                      alt="Environment Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Environment & Water</h3>
                    <p className="text-gray-600 mb-4">
                      Promoting environmental conservation, climate change adaptation, and access to clean water.
                    </p>
                    <Link href="/programs/environment">
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
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your contribution can help us expand our shelter and infrastructure programs to reach more communities
              across Ethiopia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/announcements/volunteer-opportunities">
                <Button size="lg" variant="outline" className="border-red-600 text-red-700 hover:bg-red-50">
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

