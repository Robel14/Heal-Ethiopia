import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function MaternalHealthStoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
              alt="Maternal Health Success Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Transforming Maternal Health in Oromia</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Success Story
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="text-gray-500 text-sm">Published: March 15, 2023</div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <p className="lead text-xl mb-6">
                    In the rural communities of Oromia Region, access to quality maternal healthcare has historically
                    been limited, leading to high rates of maternal and infant mortality. Our Maternal Health Initiative
                    has transformed this reality for thousands of women and their families.
                  </p>

                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                      alt="Maternal Health Program"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">The Challenge</h2>
                  <p>
                    When we began working in the Oromia Region in 2018, we found that only 15% of women were delivering
                    their babies with skilled birth attendants present. Many women had to walk more than 10 kilometers
                    to reach the nearest health facility, often in difficult terrain. Traditional practices, while
                    culturally important, sometimes posed risks to maternal and infant health.
                  </p>
                  <p>
                    Limited awareness about the importance of antenatal care, combined with shortages of trained
                    healthcare workers and essential supplies, created a challenging environment for safe motherhood.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Our Approach</h2>
                  <p>
                    Working closely with the Ministry of Health and local communities, we implemented a comprehensive
                    maternal health program with several key components:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Infrastructure Improvements:</strong> Renovated and equipped 5 health centers with
                      maternal health facilities, including delivery rooms and essential equipment
                    </li>
                    <li>
                      <strong>Healthcare Worker Training:</strong> Trained 30 healthcare workers in emergency obstetric
                      care and 50 traditional birth attendants in safe delivery practices and referral protocols
                    </li>
                    <li>
                      <strong>Community Health Workers:</strong> Recruited and trained 45 community health workers to
                      conduct home visits, provide education, and facilitate referrals
                    </li>
                    <li>
                      <strong>Community Engagement:</strong> Established women's groups in 25 villages to discuss
                      maternal health issues and develop local solutions
                    </li>
                    <li>
                      <strong>Transportation Solutions:</strong> Created an emergency transport system using locally
                      available vehicles to help women reach health facilities during labor
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <div className="flex items-start">
                      <Quote className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                      <blockquote className="italic">
                        "Before the program, I was afraid to go to the health center. I didn't know what to expect, and
                        it was so far away. Now, I understand how important it is for my baby and me. The health workers
                        treat us with respect, and I've had three healthy children with their help."
                        <footer className="text-gray-600 mt-2 not-italic">
                          — Fatuma, mother of three, Oromia Region
                        </footer>
                      </blockquote>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">The Impact</h2>
                  <p>After four years of implementation, the results have been remarkable:</p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="border-none shadow-md bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Skilled Birth Attendance</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-green-700">68%</span>
                          <span className="text-green-600 ml-2">↑ from 15%</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          Percentage of women delivering with skilled birth attendants
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-blue-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Antenatal Care</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-blue-700">85%</span>
                          <span className="text-blue-600 ml-2">↑ from 30%</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          Percentage of pregnant women receiving at least 4 antenatal visits
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-purple-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Maternal Mortality</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-purple-700">45%</span>
                          <span className="text-purple-600 ml-2">↓ reduction</span>
                        </div>
                        <p className="text-gray-700 mt-2">Decrease in maternal mortality in the project area</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-yellow-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Postnatal Care</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-yellow-700">72%</span>
                          <span className="text-yellow-600 ml-2">↑ from 20%</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          Percentage of women receiving postnatal care within 48 hours
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <p>
                    Beyond these statistics, the program has transformed attitudes and practices around maternal health.
                    Women now have greater knowledge about their health rights and needs, and communities actively
                    support maternal health initiatives.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Halima's Story</h2>
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-6">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
                      alt="Halima with her baby"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Halima, a 28-year-old mother of four, experienced dangerous complications during her first three
                    deliveries, all of which took place at home. When she became pregnant with her fourth child, a
                    community health worker visited her regularly, educating her about the importance of antenatal care
                    and facility-based delivery.
                  </p>
                  <p>
                    During her eighth month of pregnancy, Halima developed high blood pressure. Thanks to regular
                    check-ups at the health center, this was detected early, and she received appropriate care. When she
                    went into labor, the emergency transport system quickly brought her to the health center, where
                    skilled providers managed her delivery safely.
                  </p>
                  <p>
                    "I never knew that giving birth could be so different," says Halima. "With my previous children, I
                    was in pain for days, and I feared for my life. This time, I felt safe and cared for. My baby and I
                    are healthy, and I tell all the women in my village to go to the health center."
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Looking Forward</h2>
                  <p>
                    Building on the success of this initiative, we are expanding the program to additional districts in
                    the Oromia Region. We're also developing enhanced components focused on adolescent reproductive
                    health and nutrition during pregnancy.
                  </p>
                  <p>
                    The local health authorities have integrated many of the program's approaches into their standard
                    practices, ensuring sustainability. Community ownership remains strong, with village health
                    committees taking increasing responsibility for maternal health promotion.
                  </p>

                  <div className="flex justify-center mt-8">
                    <Link href="/donate">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Support Our Maternal Health Programs
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

