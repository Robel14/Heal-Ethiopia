import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MaternalHealthProjectPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
              alt="Maternal Health Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Maternal Health Initiative</h1>
              <p className="text-xl text-white mt-2">Improving maternal and child health outcomes across Ethiopia</p>
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
                  The Maternal Health Initiative aims to reduce maternal and infant mortality rates in underserved
                  regions of Ethiopia by improving access to quality healthcare services, providing education on
                  maternal health, and strengthening local healthcare systems.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Key Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Training community health workers in maternal and newborn care</li>
                    <li>Establishing and equipping maternal health clinics in rural areas</li>
                    <li>Conducting awareness campaigns on prenatal care and safe delivery practices</li>
                    <li>Providing nutritional support for pregnant women and new mothers</li>
                    <li>Implementing referral systems for obstetric emergencies</li>
                    <li>Supporting traditional birth attendants with modern medical knowledge</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-blue-700">2,000+</p>
                        <p className="text-sm text-gray-700">Mothers received prenatal care</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-green-700">100</p>
                        <p className="text-sm text-gray-700">Community health workers trained</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-purple-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-purple-700">5</p>
                        <p className="text-sm text-gray-700">Mother-child health centers established</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-orange-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-orange-700">40%</p>
                        <p className="text-sm text-gray-700">Reduction in maternal complications</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-red-700">35%</p>
                        <p className="text-sm text-gray-700">Increase in facility-based deliveries</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-teal-50">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-teal-700">15,000</p>
                        <p className="text-sm text-gray-700">Community members educated</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Success Stories</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                    <p className="italic text-gray-700 mb-2">
                      "Before this project, I had to travel more than 20 kilometers to reach the nearest health
                      facility. Now, with the new maternal health center in our village, I received proper care
                      throughout my pregnancy and delivered my baby safely."
                    </p>
                    <p className="text-gray-600 font-medium">— Tigist, Mother from Amhara Region</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="italic text-gray-700 mb-2">
                      "The training I received has transformed how I support mothers in my community. I now have the
                      knowledge and tools to identify high-risk pregnancies early and ensure mothers get the care they
                      need."
                    </p>
                    <p className="text-gray-600 font-medium">— Abeba, Community Health Worker</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p className="text-gray-600">Addis Ababa, Amhara Region</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Duration</p>
                      <p className="text-gray-600">2020 - Present (Ongoing)</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Beneficiaries</p>
                      <p className="text-gray-600">Pregnant women, new mothers, infants, community health workers</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Partners</p>
                      <p className="text-gray-600">Ministry of Health, UNICEF, Local Health Bureaus</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Status</p>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <a
                      href="/sample-projects/maternal-health-project.pdf"
                      download="HEAL-Ethiopia-Maternal-Health-Project-Report.pdf"
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

