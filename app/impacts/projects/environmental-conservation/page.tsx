import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EnvironmentalConservationProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg"
              alt="Environmental Conservation Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Environmental Conservation Project</h1>
              <p className="text-xl text-white mt-2">Protecting natural resources and promoting sustainability</p>
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
                  The Environmental Conservation Project focuses on protecting Ethiopia's natural resources through
                  reforestation, sustainable land management, and environmental education. By working with local
                  communities, we aim to reverse environmental degradation, mitigate climate change impacts, and promote
                  sustainable practices that balance ecological health with community needs.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Key Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Implementing reforestation and afforestation initiatives</li>
                    <li>Training farmers in sustainable land management techniques</li>
                    <li>Establishing community-managed protected areas</li>
                    <li>Promoting fuel-efficient stoves to reduce deforestation</li>
                    <li>Conducting environmental education in schools and communities</li>
                    <li>Supporting community-based watershed management</li>
                    <li>Developing eco-friendly livelihood alternatives</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-blue-700">50,000+</p>
                        <p className="text-sm text-gray-700">Trees planted</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-green-700">10</p>
                        <p className="text-sm text-gray-700">Communities engaged</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-purple-700">500</p>
                        <p className="text-sm text-gray-700">Hectares with soil conservation</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-orange-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-orange-700">1,000</p>
                        <p className="text-sm text-gray-700">Farmers trained in sustainable practices</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-red-700">300</p>
                        <p className="text-sm text-gray-700">Fuel-efficient stoves distributed</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-teal-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-teal-700">20</p>
                        <p className="text-sm text-gray-700">Schools with environmental education</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Success Stories</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                    <p className="italic text-gray-700 mb-2">
                      "Our community has seen the hillsides turn green again after years of erosion. The trees we
                      planted are growing well, and we're already seeing less soil erosion during the rainy season."
                    </p>
                    <p className="text-gray-600 font-medium">— Bekele, Community Leader from Oromia</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="italic text-gray-700 mb-2">
                      "The fuel-efficient stove has changed my daily life. I use much less firewood now, which means I
                      spend less time collecting wood and more time on my small business. It also produces less smoke,
                      so my children's health has improved."
                    </p>
                    <p className="text-gray-600 font-medium">— Meseret, Mother from SNNPR</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p className="text-gray-600">Oromia, SNNPR Regions</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Duration</p>
                      <p className="text-gray-600">2021 - Present (Ongoing)</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Beneficiaries</p>
                      <p className="text-gray-600">Rural communities, farmers, schools, local environment</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Partners</p>
                      <p className="text-gray-600">
                        Environmental Protection Authority, UNEP, Local Environmental NGOs
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Status</p>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <a
                      href="/sample-projects/environmental-conservation-project.pdf"
                      download="HEAL-Ethiopia-Environmental-Conservation-Project-Report.pdf"
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

