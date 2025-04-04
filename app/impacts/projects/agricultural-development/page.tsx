import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AgriculturalDevelopmentProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
              alt="Agricultural Development Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Sustainable Agriculture Program</h1>
              <p className="text-xl text-white mt-2">Improving food security and agricultural productivity</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/3">
                <Link href="/impacts/projects" className="text-blue-600 hover:underline mb-6 inline-block">
                  ← Back to Projects
                </Link>

                <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Project Overview</h2>
                <p className="text-gray-700 mb-6">
                  The Sustainable Agriculture Program aims to improve food security and increase agricultural
                  productivity in rural Ethiopia through the introduction of sustainable farming practices,
                  drought-resistant crops, and improved agricultural technologies. By working directly with smallholder
                  farmers, we are creating resilient agricultural systems that can withstand climate challenges.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Key Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Training farmers in climate-smart agricultural techniques</li>
                    <li>Introducing drought-resistant crop varieties</li>
                    <li>Establishing demonstration farms for practical learning</li>
                    <li>Providing improved seeds and farming tools</li>
                    <li>Implementing soil conservation and water management practices</li>
                    <li>Creating market linkages for agricultural products</li>
                    <li>Supporting farmer cooperatives and associations</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-blue-700">200</p>
                        <p className="text-sm text-gray-700">Farmers using drought-resistant crops</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-green-700">15</p>
                        <p className="text-sm text-gray-700">Community demonstration farms</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-purple-700">30%</p>
                        <p className="text-sm text-gray-700">Increase in crop yields</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-orange-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-orange-700">500</p>
                        <p className="text-sm text-gray-700">Hectares with improved soil conservation</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-red-700">25%</p>
                        <p className="text-sm text-gray-700">Reduction in post-harvest losses</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-teal-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-teal-700">10</p>
                        <p className="text-sm text-gray-700">Farmer cooperatives strengthened</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Success Stories</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                    <p className="italic text-gray-700 mb-2">
                      "The drought-resistant teff variety I received has changed everything for my family. Even in the
                      dry season, I was able to harvest enough to feed my family and sell the surplus at the market."
                    </p>
                    <p className="text-gray-600 font-medium">— Getachew, Farmer from Amhara Region</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="italic text-gray-700 mb-2">
                      "Learning about soil conservation techniques has helped me reclaim land that was becoming
                      unusable. Now my farm is more productive than it has been in years."
                    </p>
                    <p className="text-gray-600 font-medium">— Birtukan, Farmer from SNNPR</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p className="text-gray-600">Amhara, SNNPR Regions</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Duration</p>
                      <p className="text-gray-600">2019 - Present (Ongoing)</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Beneficiaries</p>
                      <p className="text-gray-600">Smallholder farmers, agricultural cooperatives, rural communities</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Partners</p>
                      <p className="text-gray-600">Ministry of Agriculture, FAO, Local Agricultural Bureaus</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Status</p>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <a
                      href="/sample-projects/agricultural-development-project.pdf"
                      download="HEAL-Ethiopia-Agricultural-Development-Project-Report.pdf"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Download Project Report</Button>
                    </a>
                    <Link href="/donate">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                        Support This Project
                      </Button>
                    </Link>
                    <Link href="/announcement/volunteer-opportunities">
                      <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                        Volunteer With Us
                      </Button>
                    </Link>
                  </div>
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

