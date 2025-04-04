import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"

export default function WomensEmpowermentDetailPage() {
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
                alt="Women's Empowerment Publication Cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-blue-700">
                    Women's Economic Empowerment: Pathways to Sustainable Livelihoods
                  </h1>
                  <p className="text-gray-500">Policy Brief | 2022</p>
                </div>
                <a href="/sample-publications/sample.pdf" download="womens-economic-empowerment.pdf">
                  <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </a>
              </div>

              <div className="border-b border-gray-200 pb-4 mb-6">
                <p className="font-semibold text-gray-700">Authors: Mentuab Araya, Tigist Alemu</p>
                <p className="text-gray-600">Published: May 2022</p>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Executive Summary</h2>
                <p className="mb-4">
                  This policy brief presents evidence-based recommendations for promoting women's economic empowerment
                  in rural Ethiopia, drawing on HEAL-Ethiopia's experience implementing savings groups and business
                  development programs. The brief highlights the critical role of women's economic empowerment in
                  poverty reduction, household wellbeing, and community development.
                </p>
                <p className="mb-4">
                  Based on data from our programs in Tigray and Oromia regions, including the BELONG program that
                  empowered 675 women through self-help groups, the brief identifies effective approaches and supportive
                  policy frameworks needed to scale women's economic empowerment initiatives across Ethiopia.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-bold text-yellow-700 mb-3">Key Policy Recommendations</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      Increase investment in women's savings groups and self-help groups as proven pathways to economic
                      empowerment in rural communities
                    </li>
                    <li>
                      Strengthen the policy framework for women's access to financial services, including simplified
                      requirements for women-owned businesses
                    </li>
                    <li>
                      Develop targeted skills training programs for rural women that combine technical, business, and
                      financial literacy skills
                    </li>
                    <li>
                      Create market linkages and value chain opportunities that specifically include women producers and
                      entrepreneurs
                    </li>
                    <li>
                      Implement gender-responsive budgeting at all levels of government to ensure adequate resources for
                      women's economic empowerment initiatives
                    </li>
                  </ol>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Background and Context</h2>
                <p className="mb-4">
                  Women in rural Ethiopia face significant barriers to economic participation and empowerment,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Limited access to financial services and credit</li>
                  <li>Heavy burden of unpaid care and domestic work</li>
                  <li>Restricted access to productive resources, including land</li>
                  <li>Gender-based discrimination in markets and value chains</li>
                  <li>Limited mobility and decision-making authority</li>
                  <li>Gaps in education, skills, and business knowledge</li>
                </ul>
                <p className="mb-4">
                  Despite these challenges, evidence shows that when women have access to economic opportunities and
                  resources, they invest in their families and communities, creating powerful multiplier effects.
                  Women's economic empowerment is therefore a critical pathway not only for gender equality but for
                  broader poverty reduction and community development.
                </p>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">
                  HEAL-Ethiopia's Approach to Women's Economic Empowerment
                </h2>
                <p className="mb-4">
                  Drawing on our experience implementing women's economic empowerment programs across Ethiopia,
                  including our work in Tigray Region where we supported 675 women through self-help groups,
                  HEAL-Ethiopia has developed a comprehensive approach that combines:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-700 mb-2">Financial Inclusion</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Village savings and loan associations</li>
                      <li>Self-help groups with internal lending</li>
                      <li>Linkages to formal financial institutions</li>
                      <li>Financial literacy training</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-700 mb-2">Skills Development</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Business planning and management</li>
                      <li>Market analysis and marketing</li>
                      <li>Vocational and technical skills</li>
                      <li>Leadership and negotiation skills</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-700 mb-2">Enabling Environment</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Community engagement and sensitization</li>
                      <li>Engagement of male household members</li>
                      <li>Market linkages and value chain development</li>
                      <li>Policy advocacy for gender equality</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Evidence of Impact</h2>
                <p className="mb-4">
                  Our programs have demonstrated significant impacts on women's economic empowerment and broader
                  development outcomes:
                </p>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Economic Outcomes</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>70% average increase in household income among women participants</li>
                  <li>85% of women in savings groups built productive assets</li>
                  <li>90% repayment rate on internal loans within self-help groups</li>
                  <li>300+ women-owned businesses established or expanded</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Household and Community Outcomes</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Increased investment in children's education, especially for girls</li>
                  <li>Improved household nutrition and food security</li>
                  <li>Enhanced women's decision-making power within households</li>
                  <li>Reduced gender-based violence as reported by community stakeholders</li>
                  <li>Greater participation of women in community leadership and governance</li>
                </ul>

                <div className="border-l-4 border-green-600 pl-4 py-2 my-6">
                  <p className="italic text-gray-700">
                    "Before joining the savings group, I depended entirely on my husband. Now I have my own business
                    selling vegetables, and I contribute to household expenses. My husband respects me more, and my
                    children see that a woman can be a businessperson too. I have even been able to help other women
                    start their own businesses."
                  </p>
                  <p className="text-green-700 font-semibold">— Savings Group Member, Tigray Region</p>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Policy Recommendations in Detail</h2>

                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  1. Scale up women's savings groups and self-help groups
                </h3>
                <p className="mb-4">
                  Government and development partners should invest in establishing and strengthening women's savings
                  groups and self-help groups across rural Ethiopia. Specific actions include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Develop a national strategy for promoting women's savings groups with clear targets and funding
                  </li>
                  <li>Train and deploy community facilitators to establish and support groups</li>
                  <li>Create standardized but flexible methodologies adapted to different contexts</li>
                  <li>Establish monitoring systems to track progress and impact</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  2. Strengthen the financial inclusion policy framework
                </h3>
                <p className="mb-4">Policy reforms are needed to improve women's access to financial services:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Simplify documentation requirements for women to open accounts and access credit</li>
                  <li>Create incentives for financial institutions to develop products tailored to women's needs</li>
                  <li>Establish credit guarantee schemes for women entrepreneurs</li>
                  <li>Support digital financial services that can reach women in remote areas</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">3. Develop targeted skills training programs</h3>
                <p className="mb-4">Comprehensive skills development is essential for women's economic success:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Integrate business skills into vocational training programs for women</li>
                  <li>Provide mobile training services that can reach women in rural communities</li>
                  <li>Develop mentorship and coaching systems to provide ongoing support</li>
                  <li>Use digital technologies to expand access to training and information</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  4. Create inclusive market linkages and value chains
                </h3>
                <p className="mb-4">Proactive measures are needed to ensure women can access markets:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Develop women-friendly marketplaces with appropriate facilities and security</li>
                  <li>Support collective marketing initiatives for women producers</li>
                  <li>Create incentives for private sector companies to source from women suppliers</li>
                  <li>Invest in value addition technologies appropriate for women-owned enterprises</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">5. Implement gender-responsive budgeting</h3>
                <p className="mb-4">Ensuring adequate resources are allocated to women's economic empowerment:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Integrate gender analysis into planning and budgeting processes at all levels</li>
                  <li>Set minimum targets for funding allocations to women's economic empowerment initiatives</li>
                  <li>Build capacity of government officials to implement gender-responsive budgeting</li>
                  <li>Establish accountability mechanisms to track resource allocations and impact</li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Conclusion</h2>
                <p className="mb-4">
                  Women's economic empowerment is not only a matter of gender equality but a powerful strategy for
                  poverty reduction and community development. HEAL-Ethiopia's experience demonstrates that with
                  appropriate support, rural women can become successful economic actors who drive positive change in
                  their households and communities.
                </p>
                <p className="mb-4">
                  Implementing the policy recommendations outlined in this brief would create an enabling environment
                  for women's economic empowerment at scale, contributing to Ethiopia's broader development goals.
                </p>

                <p className="text-gray-600 italic mt-12">
                  For the complete policy brief with detailed analysis, case studies, and implementation guidance,
                  please download the PDF using the button above.
                </p>
                <a href="/sample-publications/sample.pdf" download="womens-economic-empowerment.pdf">
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

