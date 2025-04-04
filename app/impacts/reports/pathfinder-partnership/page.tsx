import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Calendar, Users, MapPin, FileCheck } from "lucide-react"

export default function PathfinderPartnershipReportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
              alt="Pathfinder Partnership Report"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Pathfinder Partnership: Final Evaluation Report</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Evaluation Report
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="text-gray-500 text-sm">Published: October 2022</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-1">
                    <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
                        alt="Pathfinder Partnership Report Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <a href="/sample-reports/sample.pdf" download="pathfinder-partnership-report.pdf">
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
                      This final evaluation report documents the outcomes and impact of the five-year partnership
                      between HEAL Ethiopia and Pathfinder International Ethiopia (PI-E), funded by the Swedish
                      International Development Agency (Sida). The partnership focused on improving reproductive health
                      and family planning services in underserved communities across Ethiopia.
                    </p>
                    <p className="text-gray-700 mb-6">
                      The report presents key achievements, challenges, lessons learned, and recommendations for future
                      programming in reproductive health and family planning.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Project Period</h4>
                          <p className="text-gray-600">January 2017 - December 2021</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Geographic Coverage</h4>
                          <p className="text-gray-600">4 regions: Amhara, Oromia, SNNPR, and Tigray</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Beneficiaries</h4>
                          <p className="text-gray-600">Over 250,000 women, men, and young people</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileCheck className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Evaluation Methodology</h4>
                          <p className="text-gray-600">
                            Mixed methods: Quantitative surveys, qualitative interviews, focus groups, and health
                            facility assessments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Project Background</h2>
                  <p>
                    The Pathfinder Partnership was initiated in response to the high unmet need for family planning and
                    reproductive health services in Ethiopia, particularly in rural and underserved areas. Despite
                    progress in recent years, many women still face significant barriers to accessing quality
                    reproductive health services.
                  </p>
                  <p>
                    The partnership aimed to address these challenges through a comprehensive approach that combined
                    service delivery improvements, demand creation, policy advocacy, and capacity building of local
                    health systems.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Key Achievements</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">Service Delivery</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Upgraded 35 health facilities with equipment and supplies</li>
                          <li>Trained 120 healthcare providers in comprehensive family planning services</li>
                          <li>Established 15 youth-friendly service corners</li>
                          <li>Provided family planning services to over 150,000 women</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Community Engagement</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Trained 250 community health workers</li>
                          <li>Established 120 community dialogue groups</li>
                          <li>Engaged 500+ religious and community leaders</li>
                          <li>Reached 100,000+ people with behavior change communication</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-3">Youth Engagement</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Established 20 youth clubs with 5,000+ members</li>
                          <li>Trained 150 peer educators</li>
                          <li>Reached 50,000+ young people with reproductive health information</li>
                          <li>Increased youth utilization of services by 65%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-3">Capacity Building</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Strengthened 40 health facilities' management systems</li>
                          <li>Trained 80 health managers in leadership and supervision</li>
                          <li>Improved supply chain management in all target districts</li>
                          <li>Enhanced data collection and use for decision-making</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Key Outcomes</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Contraceptive Prevalence</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-green-700">42%</span>
                          <span className="text-green-600 ml-2">↑ from 25%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Modern contraceptive use among women of reproductive age</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-blue-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Youth Service Utilization</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-blue-700">65%</span>
                          <span className="text-blue-600 ml-2">↑ from 18%</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          Increase in young people accessing reproductive health services
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-purple-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Unmet Need</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-purple-700">15%</span>
                          <span className="text-purple-600 ml-2">↓ from 28%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Reduction in unmet need for family planning</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-yellow-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Knowledge Levels</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-yellow-700">78%</span>
                          <span className="text-yellow-600 ml-2">↑ from 40%</span>
                        </div>
                        <p className="text-gray-700 mt-2">
                          Community members with comprehensive reproductive health knowledge
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Challenges & Lessons Learned</h2>
                  <p>The evaluation identified several challenges and valuable lessons for future programming:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Geographic barriers:</strong> Remote communities remained difficult to reach, highlighting
                      the need for mobile outreach services and community-based distribution
                    </li>
                    <li>
                      <strong>Cultural and religious factors:</strong> Resistance from some community and religious
                      leaders required more intensive engagement and culturally sensitive approaches
                    </li>
                    <li>
                      <strong>Health system constraints:</strong> Staff turnover and supply chain issues affected
                      service continuity, emphasizing the importance of system strengthening
                    </li>
                    <li>
                      <strong>Youth engagement:</strong> Reaching out-of-school youth proved challenging, requiring
                      innovative approaches beyond school-based programs
                    </li>
                    <li>
                      <strong>Male involvement:</strong> Engaging men as supportive partners was essential but required
                      dedicated strategies and messaging
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Recommendations</h2>
                  <p>Based on the evaluation findings, the report makes the following recommendations:</p>
                  <ol className="list-decimal pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Expand the range of contraceptive methods</strong> available at all service delivery
                      points to increase choice and meet diverse needs
                    </li>
                    <li>
                      <strong>Strengthen integration</strong> of family planning with other health services,
                      particularly maternal health and HIV services
                    </li>
                    <li>
                      <strong>Develop targeted approaches</strong> for underserved groups, including adolescents, men,
                      and rural communities
                    </li>
                    <li>
                      <strong>Enhance sustainability</strong> through greater engagement with local government and
                      community structures
                    </li>
                    <li>
                      <strong>Scale up successful models</strong> such as youth-friendly services and community-based
                      distribution
                    </li>
                    <li>
                      <strong>Invest in digital health solutions</strong> to improve data management, supply chain, and
                      client follow-up
                    </li>
                  </ol>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Conclusion</h2>
                  <p>
                    The Pathfinder Partnership has made significant contributions to improving reproductive health and
                    family planning services in Ethiopia. The evaluation demonstrates that a comprehensive approach,
                    combining service delivery improvements with community engagement and system strengthening, can
                    achieve meaningful results.
                  </p>
                  <p>
                    The lessons learned and recommendations from this evaluation provide valuable guidance for future
                    reproductive health programming in Ethiopia and similar contexts. HEAL Ethiopia and Pathfinder
                    International remain committed to building on these achievements and addressing the remaining
                    challenges.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Report Citation</h3>
                    <p className="text-gray-700">
                      HEAL Ethiopia & Pathfinder International Ethiopia (2022). Improving Reproductive Health and Family
                      Planning in Ethiopia: Final Evaluation of the Sida-funded Partnership Program. Addis Ababa,
                      Ethiopia.
                    </p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <a href="/sample-reports/sample.pdf" download="pathfinder-partnership-report.pdf">
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

