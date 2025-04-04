import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Users, Target, CheckCircle } from "lucide-react"

export default function IntegratedDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg"
              alt="Integrated Community Development Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Integrated Community Development Project</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Project Overview</h2>
                <p className="text-gray-700 mb-4">
                  Our flagship Integrated Community Development Project combines health, education, livelihoods, and
                  environmental interventions to create sustainable change in rural communities across the Oromia
                  Region. Working with local partners and community members, we've improved access to clean water,
                  healthcare, education, and economic opportunities for over 50,000 people.
                </p>
                <p className="text-gray-700 mb-6">
                  This holistic approach addresses the interconnected challenges facing communities, recognizing that
                  sustainable development requires coordinated efforts across multiple sectors. By engaging community
                  members in all aspects of the project, we ensure local ownership and long-term sustainability.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Location</h4>
                          <p className="text-gray-600">Oromia Region, Ethiopia</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Duration</h4>
                          <p className="text-gray-600">2020 - 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Beneficiaries</h4>
                          <p className="text-gray-600">50,000+ community members</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Target className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Partners</h4>
                          <p className="text-gray-600">Ministry of Health, Local Government, Community Groups</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
                      alt="Project Implementation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Key Components</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-blue-700">Water & Sanitation</h3>
                          <p className="text-gray-700">Construction of water points, latrines, and hygiene education</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>15 community water points constructed</li>
                        <li>200+ household latrines built</li>
                        <li>30 hygiene promoters trained</li>
                        <li>50% reduction in waterborne diseases</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-green-700">Health Services</h3>
                          <p className="text-gray-700">Improved access to primary healthcare and maternal services</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>3 health centers upgraded</li>
                        <li>25 community health workers trained</li>
                        <li>80% increase in facility-based deliveries</li>
                        <li>Comprehensive vaccination campaigns</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                          <CheckCircle className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-yellow-600">Education</h3>
                          <p className="text-gray-700">Enhanced educational facilities and teacher training</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>5 schools renovated and equipped</li>
                        <li>40 teachers received additional training</li>
                        <li>1,500+ children with improved access to education</li>
                        <li>After-school programs for vulnerable children</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                          <CheckCircle className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-red-600">Livelihoods</h3>
                          <p className="text-gray-700">Economic opportunities and sustainable agriculture</p>
                        </div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>20 savings and loan groups established</li>
                        <li>500+ farmers trained in sustainable techniques</li>
                        <li>30% average increase in household income</li>
                        <li>Market linkages developed for local products</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Impact Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Abeba's Story</h3>
                    <p className="text-gray-700 italic mb-4">
                      "Before this project, I had to walk 3 hours each day to collect water. Now, with the new water
                      point in our village, I can spend that time on my small business, which has grown significantly.
                      My children are healthier and attending school regularly."
                    </p>
                    <p className="text-gray-700">- Abeba, mother of three and small business owner</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Kebede's Story</h3>
                    <p className="text-gray-700 italic mb-4">
                      "The agricultural training changed everything for me. I learned new techniques that have doubled
                      my crop yield, even during drought periods. With the extra income, I've been able to send all my
                      children to school and improve our home."
                    </p>
                    <p className="text-gray-700">- Kebede, farmer and father of five</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Sustainability & Future Plans</h2>
                <p className="text-gray-700 mb-4">
                  Sustainability is at the core of our integrated approach. We've established community management
                  committees for each project component, ensuring local ownership and maintenance of infrastructure.
                  Local government partners have committed to ongoing support, and income-generating activities provide
                  funds for maintenance and expansion.
                </p>
                <p className="text-gray-700 mb-6">
                  Building on the success of this project, we plan to expand to neighboring communities in the coming
                  years, reaching an additional 30,000 people. We're also developing enhanced components focused on
                  climate resilience and youth entrepreneurship.
                </p>
                <div className="flex justify-center">
                  <Link href="/donate">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Support This Project</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

