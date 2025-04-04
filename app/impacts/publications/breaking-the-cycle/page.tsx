import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"

export default function PublicationDetailPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/impacts/publications" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Publications
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Publication Cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-blue-700">
                    Breaking the Cycle of Poverty: A Comprehensive Approach
                  </h1>
                  <p className="text-gray-500">Research Paper | 2023</p>
                </div>
                <a href="/sample-publications/sample.pdf" download="breaking-the-cycle-of-poverty.pdf">
                  <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </a>
              </div>

              <div className="border-b border-gray-200 pb-4 mb-6">
                <p className="font-semibold text-gray-700">Authors: Dereje Deme, Mentuab Araya, et al.</p>
                <p className="text-gray-600">Published: June 2023</p>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Abstract</h2>
                <p className="mb-4">
                  This research paper examines the multifaceted nature of poverty in Ethiopia and presents a
                  comprehensive approach to breaking the cycle of poverty through integrated development initiatives.
                  Drawing on HEAL-Ethiopia's two decades of experience implementing community-based programs, the paper
                  analyzes successful interventions and proposes a framework for sustainable poverty reduction.
                </p>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Key Findings</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Poverty in Ethiopia is multidimensional, requiring interventions that address economic, social,
                    environmental, and political factors simultaneously.
                  </li>
                  <li>
                    Community-led development approaches that engage local stakeholders in planning and implementation
                    lead to more sustainable outcomes.
                  </li>
                  <li>
                    Integrated programs that combine education, healthcare, economic empowerment, and environmental
                    conservation show greater impact than single-sector interventions.
                  </li>
                  <li>Women and youth empowerment is central to breaking intergenerational poverty cycles.</li>
                  <li>
                    Collaboration between government, NGOs, private sector, and communities is essential for scaling
                    impact and sustaining progress.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Research Methodology</h2>
                <p className="mb-4">
                  The research employed a mixed-methods approach, combining quantitative and qualitative data collection
                  and analysis. Methods included:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Household surveys in 12 communities across 4 regions of Ethiopia</li>
                  <li>In-depth interviews with community members, local leaders, and program participants</li>
                  <li>Focus group discussions with diverse stakeholder groups</li>
                  <li>Analysis of program data from HEAL-Ethiopia's interventions over the past 10 years</li>
                  <li>Case studies of successful poverty reduction initiatives</li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Conceptual Framework</h2>
                <p className="mb-6">
                  The paper presents a comprehensive framework for breaking the cycle of poverty that includes 18 key
                  focus areas organized into four main dimensions:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-700 mb-2">Economic Dimension</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Sustainable livelihoods development</li>
                      <li>Access to financial services</li>
                      <li>Market linkages and value chain development</li>
                      <li>Skills training and entrepreneurship support</li>
                      <li>Agricultural innovation and food security</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-700 mb-2">Social Dimension</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Quality education and lifelong learning</li>
                      <li>Healthcare access and preventive services</li>
                      <li>Gender equality and women's empowerment</li>
                      <li>Youth development and leadership</li>
                      <li>Community institutions and social capital</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-bold text-yellow-600 mb-2">Environmental Dimension</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Natural resource management</li>
                      <li>Climate change adaptation and resilience</li>
                      <li>Sustainable energy solutions</li>
                      <li>Water and sanitation services</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold text-red-600 mb-2">Governance Dimension</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Human rights and social justice</li>
                      <li>Inclusive policy development</li>
                      <li>Local governance and accountability</li>
                      <li>Peace building and conflict resolution</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Case Studies</h2>
                <p className="mb-4">
                  The paper presents three detailed case studies that illustrate successful applications of the
                  comprehensive approach to breaking the cycle of poverty:
                </p>

                <div className="border-l-4 border-blue-600 pl-4 py-2 mb-6">
                  <h3 className="font-bold text-blue-700">Case Study 1: Integrated Development in South Omo Zone</h3>
                  <p>
                    This case study examines how comprehensive interventions in maternal health, water access, and
                    sustainable livelihoods transformed communities in six pastoralist woredas, leading to improved
                    health outcomes and economic resilience.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4 py-2 mb-6">
                  <h3 className="font-bold text-green-700">Case Study 2: Youth Empowerment in West Hararghe</h3>
                  <p>
                    This case study documents how youth-centered programs combining education, reproductive health, and
                    entrepreneurship created pathways out of poverty for young people in Oromia Region.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4 py-2 mb-6">
                  <h3 className="font-bold text-red-600">Case Study 3: Women's Economic Empowerment in Tigray</h3>
                  <p>
                    This case study analyzes how women's savings groups and business development support created
                    sustainable livelihoods and transformed gender dynamics in rural communities.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Conclusion and Recommendations</h2>
                <p className="mb-4">
                  The paper concludes that breaking the cycle of poverty requires a holistic, integrated approach that
                  addresses multiple dimensions simultaneously. Key recommendations include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Adopt comprehensive planning frameworks that integrate economic, social, environmental, and
                    governance dimensions
                  </li>
                  <li>Prioritize community ownership and participation in all development initiatives</li>
                  <li>Invest in women and youth as catalysts for sustainable change</li>
                  <li>Strengthen coordination among government, NGOs, private sector, and communities</li>
                  <li>Build adaptable programs that can respond to changing contexts and emerging challenges</li>
                </ul>

                <p className="text-gray-600 italic mt-12">
                  For the complete research paper with detailed methodology, findings, and recommendations, please
                  download the PDF using the button above.
                </p>
                <a href="/sample-publications/sample.pdf" download="breaking-the-cycle-of-poverty.pdf">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Report (PDF)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

