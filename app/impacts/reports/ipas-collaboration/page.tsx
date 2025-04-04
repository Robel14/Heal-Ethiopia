import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Calendar, Users, MapPin, FileCheck } from "lucide-react"

export default function IpasCollaborationReportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_79_2025-03-12_15-06-25.jpg-hEsko1uqjAPjjX20u9m2IyGHnuFljN.jpeg"
              alt="Ipas Collaboration Report"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Ipas Collaboration: Comprehensive Abortion Care Report</h1>
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
                  <div className="text-gray-500 text-sm">Published: August 2022</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-1">
                    <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_79_2025-03-12_15-06-25.jpg-hEsko1uqjAPjjX20u9m2IyGHnuFljN.jpeg"
                        alt="Ipas Collaboration Report Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <a href="/sample-reports/sample.pdf" download="ipas-collaboration-report.pdf">
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
                      This technical report documents the outcomes and lessons learned from the collaboration between
                      HEAL Ethiopia and Ipas to improve access to comprehensive abortion care (CAC) services in
                      Ethiopia. The collaboration focused on strengthening health systems, building provider capacity,
                      and increasing community awareness about safe abortion services within the legal framework of
                      Ethiopia.
                    </p>
                    <p className="text-gray-700 mb-6">
                      The report presents key achievements, challenges, and recommendations for expanding access to safe
                      abortion and post-abortion care services.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Project Period</h4>
                          <p className="text-gray-600">January 2019 - June 2022</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Geographic Coverage</h4>
                          <p className="text-gray-600">3 regions: Addis Ababa, Oromia, and SNNPR</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Target Population</h4>
                          <p className="text-gray-600">
                            Women of reproductive age, with a focus on young women and underserved communities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileCheck className="h-5 w-5 text-green-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Program Components</h4>
                          <p className="text-gray-600">
                            Health system strengthening, provider training, community awareness, and policy advocacy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Background & Context</h2>
                  <p>
                    Ethiopia reformed its abortion law in 2005 to allow for legal abortion under specific circumstances,
                    including rape, incest, fetal abnormality, and when the woman's physical or mental health is at
                    risk. Despite this legal framework, many women still lack access to safe abortion services due to
                    limited awareness, provider shortages, and stigma.
                  </p>
                  <p>
                    Unsafe abortion remains a significant cause of maternal mortality in Ethiopia, accounting for
                    approximately 10% of maternal deaths. The collaboration between HEAL Ethiopia and Ipas aimed to
                    address these challenges by strengthening the health system's capacity to provide safe abortion and
                    post-abortion care services within the legal framework.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Key Achievements</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">Health System Strengthening</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Upgraded 25 health facilities to provide comprehensive abortion care</li>
                          <li>Established referral networks between primary and secondary facilities</li>
                          <li>Improved supply chain management for essential medicines and equipment</li>
                          <li>Strengthened quality assurance and monitoring systems</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Provider Capacity</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Trained 120 healthcare providers in comprehensive abortion care</li>
                          <li>Provided values clarification workshops for 200+ health workers</li>
                          <li>Established mentorship programs in 15 facilities</li>
                          <li>Developed clinical protocols and job aids</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-3">Community Awareness</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Conducted community dialogues in 50 communities</li>
                          <li>Trained 150 community health workers on legal provisions and referrals</li>
                          <li>Developed and distributed information materials in local languages</li>
                          <li>Engaged religious and community leaders to reduce stigma</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-3">Policy Advocacy</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Participated in national technical working groups on reproductive health</li>
                          <li>Contributed to the revision of national guidelines on safe abortion</li>
                          <li>Advocated for inclusion of medical abortion in primary healthcare</li>
                          <li>Supported documentation of best practices for policy influence</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Key Outcomes</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-none shadow-md bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Service Availability</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-green-700">92%</span>
                          <span className="text-green-600 ml-2">↑ from 40%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Target facilities providing comprehensive abortion care</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-blue-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Service Utilization</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-blue-700">15,000+</span>
                        </div>
                        <p className="text-gray-700 mt-2">Women received safe abortion or post-abortion care</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-purple-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Complication Rate</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-purple-700">0.5%</span>
                          <span className="text-purple-600 ml-2">↓ from 3%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Complication rate for abortion procedures</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-yellow-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Contraceptive Uptake</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-yellow-700">85%</span>
                          <span className="text-yellow-600 ml-2">↑ from 35%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Post-abortion contraceptive acceptance rate</p>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Challenges & Lessons Learned</h2>
                  <p>
                    The collaboration faced several challenges and generated important lessons for future programming:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Stigma and misconceptions:</strong> Persistent stigma around abortion required continuous
                      community engagement and provider values clarification
                    </li>
                    <li>
                      <strong>Provider turnover:</strong> High staff turnover in public facilities necessitated ongoing
                      training and mentorship
                    </li>
                    <li>
                      <strong>Supply chain issues:</strong> Inconsistent availability of medical abortion drugs required
                      strengthening procurement systems
                    </li>
                    <li>
                      <strong>Documentation challenges:</strong> Providers were sometimes reluctant to document abortion
                      services due to concerns about legal interpretation
                    </li>
                    <li>
                      <strong>Youth access:</strong> Young women faced additional barriers to accessing services,
                      requiring specialized approaches
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Recommendations</h2>
                  <p>Based on the collaboration experience, the report makes the following recommendations:</p>
                  <ol className="list-decimal pl-5 space-y-2 mb-6">
                    <li>
                      <strong>Expand task-sharing</strong> to mid-level providers to increase service availability,
                      especially in rural areas
                    </li>
                    <li>
                      <strong>Integrate comprehensive abortion care</strong> into pre-service education for healthcare
                      providers
                    </li>
                    <li>
                      <strong>Strengthen community-facility linkages</strong> through community health workers and
                      referral systems
                    </li>
                    <li>
                      <strong>Develop youth-friendly services</strong> that address the specific needs and barriers
                      faced by young women
                    </li>
                    <li>
                      <strong>Improve data systems</strong> to better track service provision and outcomes while
                      maintaining confidentiality
                    </li>
                    <li>
                      <strong>Continue advocacy efforts</strong> to clarify legal provisions and reduce administrative
                      barriers to service access
                    </li>
                  </ol>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Conclusion</h2>
                  <p>
                    The collaboration between HEAL Ethiopia and Ipas has made significant contributions to improving
                    access to comprehensive abortion care services within the legal framework of Ethiopia. Through a
                    multi-faceted approach addressing health systems, provider capacity, community awareness, and
                    policy, the program has increased the availability and quality of safe abortion and post-abortion
                    care services.
                  </p>
                  <p>
                    The lessons learned and recommendations from this collaboration provide valuable guidance for future
                    efforts to reduce maternal mortality and morbidity from unsafe abortion in Ethiopia and similar
                    contexts. HEAL Ethiopia remains committed to supporting women's reproductive health and rights
                    through evidence-based interventions and partnerships.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Report Citation</h3>
                    <p className="text-gray-700">
                      HEAL Ethiopia & Ipas (2022). Improving Access to Comprehensive Abortion Care in Ethiopia: Outcomes
                      and Lessons from a Multi-Year Collaboration. Addis Ababa, Ethiopia.
                    </p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <a href="/sample-reports/sample.pdf" download="ipas-collaboration-report.pdf">
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

