import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Calendar, Users, MapPin, FileCheck } from "lucide-react"

export default function RMNHServiceReportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
              alt="RMNH Service Uptake Report"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">RMNH Service Uptake Report</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Technical Report
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="text-gray-500 text-sm">Published: December 2022</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-1">
                    <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                        alt="RMNH Service Uptake Report Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <a href="/sample-reports/sample.pdf" download="rmnh-service-uptake-report.pdf">
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
                      This comprehensive report examines the uptake of Reproductive, Maternal, and Neonatal Health
                      (RMNH) services in the Oromia Region of Ethiopia following the implementation of our integrated
                      maternal health program. The study covers a three-year period from 2019 to 2022 and provides
                      valuable insights into the effectiveness of various interventions.
                    </p>
                    <p className="text-gray-700 mb-6">
                      The report includes detailed analysis of service utilization patterns, barriers to access, and
                      recommendations for improving maternal and neonatal health outcomes in rural communities.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Study Period</h4>
                          <p className="text-gray-600">January 2019 - December 2022</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Geographic Coverage</h4>
                          <p className="text-gray-600">5 districts in Oromia Region, Ethiopia</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Study Population</h4>
                          <p className="text-gray-600">15,000 women of reproductive age</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileCheck className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Methodology</h4>
                          <p className="text-gray-600">
                            Mixed methods: Quantitative surveys, qualitative interviews, health facility data analysis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Key Findings</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">Service Utilization</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Antenatal care attendance increased by 55% over the study period</li>
                          <li>Facility-based deliveries rose from 15% to 68%</li>
                          <li>Postnatal care utilization improved by 52%</li>
                          <li>Family planning uptake increased by 40%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Quality of Care</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>85% of health facilities now meet basic emergency obstetric care standards</li>
                          <li>Patient satisfaction with maternal services increased from 45% to 78%</li>
                          <li>Waiting times reduced by an average of 40 minutes</li>
                          <li>Essential medicine availability improved from 60% to 92%</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Barriers to Service Utilization</h2>
                  <p>
                    Despite significant improvements, the report identifies several persistent barriers to RMNH service
                    utilization:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Geographic barriers:</strong> Distance to health facilities remains a challenge for 35% of
                      women
                    </li>
                    <li>
                      <strong>Financial constraints:</strong> Indirect costs (transportation, time away from work)
                      affect 42% of women
                    </li>
                    <li>
                      <strong>Cultural factors:</strong> Traditional practices and gender norms influence
                      decision-making in 28% of households
                    </li>
                    <li>
                      <strong>Service quality concerns:</strong> 15% of women report dissatisfaction with provider
                      attitudes or facility conditions
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Successful Interventions</h2>
                  <p>
                    The report highlights several interventions that have been particularly effective in improving RMNH
                    service uptake:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Community Health Worker Program:</strong> Regular home visits by trained CHWs increased
                      antenatal care attendance by 65%
                    </li>
                    <li>
                      <strong>Emergency Transport System:</strong> Community-organized transportation reduced delays in
                      reaching facilities by 70%
                    </li>
                    <li>
                      <strong>Women's Groups:</strong> Peer support and education groups increased knowledge of danger
                      signs by 85%
                    </li>
                    <li>
                      <strong>Male Involvement Initiatives:</strong> Programs targeting male partners increased joint
                      decision-making by 45%
                    </li>
                    <li>
                      <strong>Health Facility Upgrades:</strong> Infrastructure improvements and equipment provision
                      increased provider confidence and service quality
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Recommendations</h2>
                  <p>Based on the findings, the report makes the following recommendations for future programming:</p>
                  <ol className="list-decimal pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Expand the Community Health Worker program</strong> to reach more remote communities
                    </li>
                    <li>
                      <strong>Strengthen emergency referral systems</strong> through better coordination and
                      communication
                    </li>
                    <li>
                      <strong>Integrate cultural sensitivity training</strong> for healthcare providers to improve
                      patient experiences
                    </li>
                    <li>
                      <strong>Develop targeted approaches</strong> for adolescent and young women's reproductive health
                      needs
                    </li>
                    <li>
                      <strong>Enhance data collection and monitoring systems</strong> to track service quality and
                      outcomes
                    </li>
                    <li>
                      <strong>Scale up successful interventions</strong> to additional districts while adapting to local
                      contexts
                    </li>
                  </ol>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Conclusion</h2>
                  <p>
                    The RMNH Service Uptake Report demonstrates significant progress in improving maternal and neonatal
                    health services in the Oromia Region. The integrated approach, combining facility improvements,
                    community engagement, and behavior change communication, has yielded impressive results.
                  </p>
                  <p>
                    However, continued efforts are needed to address remaining barriers and ensure that all women have
                    access to high-quality reproductive, maternal, and neonatal health services. The recommendations
                    provided in this report offer a roadmap for future interventions and policy development.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Report Citation</h3>
                    <p className="text-gray-700">
                      HEAL Ethiopia (2022). Reproductive, Maternal, and Neonatal Health Service Uptake in Oromia Region:
                      A Three-Year Assessment. Addis Ababa, Ethiopia.
                    </p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <a href="/sample-reports/sample.pdf" download="rmnh-service-uptake-report.pdf">
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

