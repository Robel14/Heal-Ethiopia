import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Calendar, Users, MapPin, FileCheck } from "lucide-react"

export default function PCIPartnershipReportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_73_2025-03-12_15-06-25.jpg-SdeP3SOzK1sXtVRu1KHaUuHDr4uUlP.jpeg"
              alt="PCI Partnership Report"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">PEPFAR/USAID/PCI-E Partnership Report</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Program Report
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="text-gray-500 text-sm">Published: September 2022</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-1">
                    <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_73_2025-03-12_15-06-25.jpg-SdeP3SOzK1sXtVRu1KHaUuHDr4uUlP.jpeg"
                        alt="PCI Partnership Report Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <a href="/sample-reports/sample.pdf" download="pci-partnership-report.pdf">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <Download className="mr-2 h-4 w-4" />
                          Download Report (PDF)
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Report Overview</h2>
                    <p className="text-gray-700 mb-4">
                      This comprehensive report documents the outcomes and impact of the partnership between HEAL
                      Ethiopia and Project Concern International Ethiopia (PCI-E), funded by PEPFAR/USAID. The
                      partnership focused on HIV/AIDS prevention, care, and support services in high-prevalence areas of
                      Ethiopia.
                    </p>
                    <p className="text-gray-700 mb-6">
                      The report presents key achievements, challenges, lessons learned, and recommendations from this
                      multi-year collaboration to strengthen community-based HIV/AIDS responses.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Project Period</h4>
                          <p className="text-gray-600">October 2018 - September 2022</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Geographic Coverage</h4>
                          <p className="text-gray-600">3 regions: Addis Ababa, Oromia, and Amhara</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Beneficiaries</h4>
                          <p className="text-gray-600">
                            Over 200,000 individuals, including 15,000 people living with HIV
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileCheck className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Program Components</h4>
                          <p className="text-gray-600">
                            HIV testing and counseling, prevention, care and support, OVC services, and health systems
                            strengthening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Program Background</h2>
                  <p>
                    Ethiopia has made significant progress in its national HIV/AIDS response, but challenges remain in
                    reaching key populations, ensuring treatment adherence, and providing comprehensive support to
                    affected families. The PEPFAR/USAID-funded partnership between HEAL Ethiopia and PCI-E was designed
                    to address these gaps through community-based approaches.
                  </p>
                  <p>
                    The program aimed to reduce new HIV infections, improve the quality of life for people living with
                    HIV, and strengthen the capacity of local organizations and health systems to deliver sustainable
                    HIV/AIDS services.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Key Achievements</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">HIV Testing & Prevention</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Provided HIV testing and counseling to 150,000+ individuals</li>
                          <li>Identified 3,500+ new HIV-positive cases and linked them to care</li>
                          <li>Reached 80,000+ individuals with prevention messages</li>
                          <li>Distributed over 2 million condoms</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Care & Support</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Provided adherence support to 12,000+ people on ART</li>
                          <li>Reduced treatment default rates from 15% to 3%</li>
                          <li>Established 120 support groups for people living with HIV</li>
                          <li>Provided economic strengthening support to 5,000+ households</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-3">OVC Support</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Supported 18,000+ orphans and vulnerable children</li>
                          <li>Provided educational support to 10,000+ children</li>
                          <li>Ensured health service access for 15,000+ children</li>
                          <li>Strengthened 3,000+ households through economic interventions</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-3">Capacity Building</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Trained 500+ healthcare providers in HIV service delivery</li>
                          <li>Strengthened 25 local organizations in program management</li>
                          <li>Established data management systems in 40 health facilities</li>
                          <li>Trained 1,200+ community volunteers</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Key Outcomes</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Treatment Adherence</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-green-700">92%</span>
                          <span className="text-green-600 ml-2">↑ from 75%</span>
                        </div>
                        <p className="text-gray-700 mt-2">ART adherence rate among supported clients</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-blue-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Viral Suppression</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-blue-700">88%</span>
                          <span className="text-blue-600 ml-2">↑ from 60%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Viral suppression rate among supported clients</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-purple-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">OVC Wellbeing</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-purple-700">85%</span>
                          <span className="text-purple-600 ml-2">↑ from 45%</span>
                        </div>
                        <p className="text-gray-700 mt-2">OVC households meeting core needs benchmarks</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-yellow-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Testing Yield</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-yellow-700">2.3%</span>
                          <span className="text-yellow-600 ml-2">↑ from 0.8%</span>
                        </div>
                        <p className="text-gray-700 mt-2">HIV case finding yield through targeted testing</p>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Innovative Approaches</h2>
                  <p>The partnership implemented several innovative approaches that contributed to its success:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Index Case Testing:</strong> Systematically offering HIV testing to family members and
                      partners of HIV-positive individuals, which increased case finding yield by 300%
                    </li>
                    <li>
                      <strong>Community ART Groups:</strong> Establishing peer support groups for medication pickup and
                      adherence support, reducing the burden on both clients and health facilities
                    </li>
                    <li>
                      <strong>Economic Strengthening:</strong> Combining savings groups, skills training, and small
                      business grants to improve household resilience and treatment adherence
                    </li>
                    <li>
                      <strong>Case Management System:</strong> Implementing a comprehensive case management approach for
                      OVC households, ensuring coordinated services across sectors
                    </li>
                    <li>
                      <strong>Faith-Based Engagement:</strong> Working with religious leaders to reduce stigma and
                      promote HIV testing and treatment
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Challenges & Lessons Learned</h2>
                  <p>
                    The program faced several challenges and generated important lessons for future HIV programming:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Stigma and discrimination:</strong> Despite progress, stigma remains a significant barrier
                      to HIV testing and treatment, requiring continued community engagement
                    </li>
                    <li>
                      <strong>Key populations:</strong> Reaching key populations requires specialized approaches and
                      trust-building measures
                    </li>
                    <li>
                      <strong>Service integration:</strong> Integrating HIV services with other health services improves
                      efficiency and reduces stigma
                    </li>
                    <li>
                      <strong>Economic factors:</strong> Addressing economic vulnerabilities is essential for treatment
                      adherence and overall wellbeing
                    </li>
                    <li>
                      <strong>Local ownership:</strong> Building the capacity of local organizations and government
                      structures is critical for sustainability
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Recommendations</h2>
                  <p>Based on the program experience, the report makes the following recommendations:</p>
                  <ol className="list-decimal pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Scale up index case testing</strong> and other targeted testing approaches to improve case
                      finding efficiency
                    </li>
                    <li>
                      <strong>Expand differentiated service delivery models</strong> to reduce the burden on health
                      facilities and improve client satisfaction
                    </li>
                    <li>
                      <strong>Integrate economic strengthening</strong> components into all HIV care and support
                      programs
                    </li>
                    <li>
                      <strong>Strengthen community-facility linkages</strong> to improve referrals and follow-up
                    </li>
                    <li>
                      <strong>Invest in data systems</strong> that allow for real-time monitoring and adaptive
                      management
                    </li>
                    <li>
                      <strong>Develop specialized approaches</strong> for adolescents living with HIV, who face unique
                      challenges
                    </li>
                  </ol>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Conclusion</h2>
                  <p>
                    The PEPFAR/USAID-funded partnership between HEAL Ethiopia and PCI-E has made significant
                    contributions to Ethiopia's HIV/AIDS response. Through community-based approaches and innovative
                    strategies, the program has improved HIV case finding, treatment outcomes, and the wellbeing of
                    affected families.
                  </p>
                  <p>
                    The lessons learned and recommendations from this program provide valuable guidance for future
                    HIV/AIDS programming in Ethiopia and similar contexts. HEAL Ethiopia remains committed to building
                    on these achievements and addressing the remaining challenges in the national HIV response.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Report Citation</h3>
                    <p className="text-gray-700">
                      HEAL Ethiopia & Project Concern International Ethiopia (2022). Strengthening Community-Based
                      HIV/AIDS Responses in Ethiopia: Final Report of the PEPFAR/USAID-funded Partnership Program. Addis
                      Ababa, Ethiopia.
                    </p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <a href="/sample-reports/sample.pdf" download="pci-partnership-report.pdf">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Report (PDF)
                      </Button>
                    </a>
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

