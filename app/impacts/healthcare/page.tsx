import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Activity, Shield } from "lucide-react"

export default function HealthcareImpactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Healthcare Impact" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Healthcare Impact</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Improving Health and Wellbeing</h2>
              <p className="text-gray-700 mb-4">
                Access to quality healthcare is a fundamental right and a key component of community development. At
                Hiwot Ethiopia, we work to improve health outcomes through a combination of direct service provision,
                health education, and health system strengthening.
              </p>
              <p className="text-gray-700">
                Our healthcare programs focus on preventive care, maternal and child health, HIV/AIDS prevention and
                treatment, and building the capacity of local health systems to provide sustainable services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Our Approach to Healthcare</h3>
                <p className="text-gray-700 mb-4">
                  We believe that good health is essential for individuals and communities to thrive. Our approach to
                  healthcare includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <Heart className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Preventive Care</h4>
                      <p className="text-gray-700">
                        Promoting healthy behaviors, providing immunizations, and conducting health screenings to
                        prevent illness.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Users className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Health Workers</h4>
                      <p className="text-gray-700">
                        Training local community members to provide basic health services and education in their
                        communities.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Activity className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health System Strengthening</h4>
                      <p className="text-gray-700">
                        Supporting health facilities with equipment, training, and management support to improve service
                        quality.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Education</h4>
                      <p className="text-gray-700">
                        Providing information and skills to help individuals make informed decisions about their health.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare services in the community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Our Healthcare Programs</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Maternal and Child Health"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Maternal and Child Health</h4>
                    <p className="text-gray-700 mb-3">
                      Our RMNH programs in South Omo Zone achieved an 18.1% average increase in service uptake, with a
                      remarkable 50.8% increase in skilled birth attendance.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Working with UKAid and the Federal Ministry of Health, we've transformed maternal health services
                      in six pastoralist woredas through community engagement and health system strengthening.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="HIV/AIDS Prevention and Treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">HIV/AIDS Programs</h4>
                    <p className="text-gray-700 mb-3">
                      From 2005 to 2011, we partnered with Pathfinder International Ethiopia to implement comprehensive
                      HIV/AIDS prevention and care programs with Sida funding.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Our work included community-based care and support for people living with HIV/AIDS, prevention
                      education, and creating supportive environments to reduce stigma.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Youth Reproductive Health"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Youth Reproductive Health</h4>
                    <p className="text-gray-700 mb-3">
                      In partnership with Ipas Ethiopia, we implemented programs at Chiro Youth Center in West Hararghe
                      Zone to enhance awareness and health-seeking behavior among youth.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Our work focused on prevention of unwanted pregnancy and unsafe abortion, while creating vital
                      referral linkages with public health facilities for comprehensive care.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-red-600">50.8%</p>
                  <p className="text-gray-700">Increase in Skilled Birth Attendance</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-600">18.1%</p>
                  <p className="text-gray-700">Average Increase in RMNH Services</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-600">6</p>
                  <p className="text-gray-700">Pastoralist Woredas Served</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-600">550+</p>
                  <p className="text-gray-700">Vulnerable Children Supported</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Success Story</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="BELONG Program"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">The BELONG Program Impact</h4>
                    <p className="text-gray-700 mb-4">
                      Through our five-year PEPFAR-funded BELONG program implemented with Project Concern International
                      (PCI), we reached over 550 orphans and vulnerable children in Maichew and Endamekhoni Woredas of
                      Southern Zone, Tigray Region.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The program empowered 675 women through self-help groups, creating sustainable economic
                      opportunities while strengthening community support systems through Woreda Advisory Committees.
                    </p>
                    <p className="text-gray-700 italic">
                      "HEAL-Ethiopia has demonstrated strong commitment to improving the lives of vulnerable children
                      and families through innovative community-based approaches." - PCI Partnership Report
                    </p>
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

