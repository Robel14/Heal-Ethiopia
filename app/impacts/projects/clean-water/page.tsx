import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CleanWaterProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Clean Water Initiative"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Clean Water Initiative</h1>
              <p className="text-xl text-white mt-2">
                Providing sustainable access to clean water in rural communities
              </p>
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
                  The Clean Water Initiative aims to improve access to safe drinking water in rural communities across
                  Ethiopia, reducing waterborne diseases and improving overall health outcomes. Through well
                  construction, water harvesting systems, and community water management training, we are creating
                  sustainable solutions to water scarcity.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Key Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Constructing wells and boreholes in water-scarce areas</li>
                    <li>Installing rainwater harvesting systems at community facilities</li>
                    <li>Training community water committees in maintenance and management</li>
                    <li>Conducting water quality testing and monitoring</li>
                    <li>Providing education on water conservation and hygiene practices</li>
                    <li>Implementing water purification solutions for households</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-blue-700">30</p>
                        <p className="text-sm text-gray-700">Wells constructed</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-green-700">15,000</p>
                        <p className="text-sm text-gray-700">People with improved water access</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-purple-700">50</p>
                        <p className="text-sm text-gray-700">Community water committees trained</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-orange-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-orange-700">40%</p>
                        <p className="text-sm text-gray-700">Reduction in waterborne diseases</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-red-700">60%</p>
                        <p className="text-sm text-gray-700">Reduction in water collection time</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-teal-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-teal-700">20</p>
                        <p className="text-sm text-gray-700">Schools with improved water facilities</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Success Stories</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                    <p className="italic text-gray-700 mb-2">
                      "Before the well was built, I had to walk 3 hours each day to collect water for my family. Now,
                      clean water is just 10 minutes away, and my children no longer get sick from drinking contaminated
                      water."
                    </p>
                    <p className="text-gray-600 font-medium">— Almaz, Mother from SNNPR</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="italic text-gray-700 mb-2">
                      "As a member of the water committee, I've learned how to maintain our community well and ensure it
                      continues to provide clean water. We now have a system to collect small fees that fund repairs
                      when needed."
                    </p>
                    <p className="text-gray-600 font-medium">— Tadesse, Water Committee Member from Afar</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p className="text-gray-600">SNNPR, Afar Regions</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Duration</p>
                      <p className="text-gray-600">2018 - 2023 (Completed)</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Beneficiaries</p>
                      <p className="text-gray-600">Rural communities, schools, health facilities</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Partners</p>
                      <p className="text-gray-600">Water Resources Ministry, WaterAid, Local Government</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Status</p>
                      <p className="text-gray-600 font-medium">Completed</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <a
                      href="/sample-projects/clean-water-project.pdf"
                      download="HEAL-Ethiopia-Clean-Water-Project-Report.pdf"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Download Project Report</Button>
                    </a>
                    <Link href="/donate">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                        Support Similar Projects
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

