import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"

export default function YouthEmpowermentDetailPage() {
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                alt="Youth Empowerment Publication Cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-blue-700">
                    Youth Empowerment as a Catalyst for Community Development
                  </h1>
                  <p className="text-gray-500">Case Study | 2022</p>
                </div>
                <a href="/sample-publications/sample.pdf" download="youth-empowerment-catalyst.pdf">
                  <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </a>
              </div>

              <div className="border-b border-gray-200 pb-4 mb-6">
                <p className="font-semibold text-gray-700">Authors: HEAL-Ethiopia Research Team</p>
                <p className="text-gray-600">Published: September 2022</p>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Executive Summary</h2>
                <p className="mb-4">
                  This case study documents the impact of HEAL-Ethiopia's youth empowerment programs in Oromia Region,
                  highlighting successful approaches and lessons learned. The study focuses on our Youth Enlightenment
                  Project implemented at Asebe Teferi and Hirna Youth centers in Waste Hararghe Zone and our
                  collaboration with Ipas Ethiopia at Chiro Youth Center in West Hararghe Zone.
                </p>
                <p className="mb-4">
                  Based on qualitative and quantitative data collected over a five-year period, the study demonstrates
                  how investing in youth development creates ripple effects that benefit entire communities, making
                  youth empowerment a powerful catalyst for broader community development.
                </p>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Background and Context</h2>
                <p className="mb-4">
                  Ethiopia has one of the youngest populations in Africa, with over 70% under the age of 30. This
                  demographic dividend presents both challenges and opportunities, particularly in rural and semi-urban
                  areas where youth face limited access to education, healthcare, and economic opportunities.
                </p>
                <p className="mb-4">
                  West Hararghe Zone in Oromia Region faces particular challenges related to youth development,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>High youth unemployment rates</li>
                  <li>Limited access to quality education and vocational training</li>
                  <li>Inadequate reproductive health services and information for young people</li>
                  <li>Few spaces for youth leadership development and civic engagement</li>
                  <li>Migration of youth to urban areas or abroad in search of opportunities</li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Program Description</h2>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Youth Enlightenment Project</h3>
                <p className="mb-4">
                  The Youth Enlightenment Project implemented in collaboration with the "World Starts with Me" (WSWM)
                  initiative at Asebe Teferi and Hirna Youth centers aimed to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Create safe and supportive spaces for youth development and engagement</li>
                  <li>Provide access to information, resources, and skills development opportunities</li>
                  <li>Promote youth leadership and community involvement</li>
                  <li>Support youth-led initiatives addressing local challenges</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Chiro Youth Center Collaboration</h3>
                <p className="mb-4">
                  Our collaboration with Ipas Ethiopia at Chiro Youth Center focused specifically on enhancing awareness
                  and health-seeking behavior among youth, with emphasis on reproductive health education and services.
                  This component aimed to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Provide comprehensive sexual and reproductive health education</li>
                  <li>Prevent unwanted pregnancy and unsafe abortion</li>
                  <li>Create referral linkages with public health facilities</li>
                  <li>Train peer educators to sustain program impact</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Key Program Elements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-blue-600 mb-2">Infrastructure Development</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Construction of a new youth center in Chiro town</li>
                        <li>Renovation of existing center in Hirna town</li>
                        <li>Provision of computers, furniture, and educational materials</li>
                        <li>Creation of recreational and meeting spaces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 mb-2">Capacity Building</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Computer skills and digital literacy training</li>
                        <li>Leadership and project management training</li>
                        <li>Reproductive health peer education</li>
                        <li>Life skills and entrepreneurship development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 mb-2">Community Engagement</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Youth-led community service initiatives</li>
                        <li>Dialogues between youth and community leaders</li>
                        <li>Cultural and sports events organized by youth</li>
                        <li>Awareness campaigns on social issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 mb-2">Health and Wellbeing</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Comprehensive reproductive health education</li>
                        <li>Referral services to health facilities</li>
                        <li>Psychosocial support and counseling</li>
                        <li>Production of local sanitary napkins by girl peer promoters</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Methodology</h2>
                <p className="mb-4">
                  The case study employed a mixed-methods approach to document and analyze the impact of the youth
                  empowerment programs:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Surveys with 500 youth participants across the three centers</li>
                  <li>In-depth interviews with 30 youth leaders and program graduates</li>
                  <li>Focus group discussions with community members and stakeholders</li>
                  <li>Analysis of program monitoring data from 2017-2022</li>
                  <li>Documentation of 15 youth-led initiatives as mini case studies</li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Key Findings</h2>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Direct Impact on Youth</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Reached 7,800 youth directly through the centers and an additional 1,500 through outreach programs
                  </li>
                  <li>50 young people completed comprehensive leadership training program</li>
                  <li>500+ youth gained computer skills and digital literacy</li>
                  <li>Increased knowledge of reproductive health among 85% of participants</li>
                  <li>
                    20 girl peer promoters trained in production of local sanitary napkins, providing both health
                    benefits and income generation
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Community-Level Impact</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    25 youth-led community service initiatives implemented, benefiting approximately 5,000 community
                    members
                  </li>
                  <li>
                    Decreased teen pregnancy rates in target communities by 30% according to local health center data
                  </li>
                  <li>Increased school retention rates, particularly for girls</li>
                  <li>Strengthened relationships between youth and community leaders</li>
                  <li>Reduced migration of youth to urban areas from participating communities</li>
                </ul>

                <div className="border-l-4 border-green-600 pl-4 py-2 my-6">
                  <p className="italic text-gray-700">
                    "Before the youth center was established, young people in our community had nowhere to go and
                    nothing productive to do. Now they are learning, creating, and solving problems. The change is
                    remarkable. They are now helping the community instead of being seen as a problem for the
                    community."
                  </p>
                  <p className="text-green-700 font-semibold">— Community Elder, Chiro Town</p>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Success Factors</h2>
                <p className="mb-4">
                  The study identified several key factors that contributed to the success of the youth empowerment
                  programs:
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>
                    <span className="font-semibold">Youth-centered approach:</span> Involving young people in program
                    design, implementation, and evaluation created ownership and relevance.
                  </li>
                  <li>
                    <span className="font-semibold">Comprehensive services:</span> Addressing multiple dimensions of
                    youth development (educational, economic, social, health) provided holistic support.
                  </li>
                  <li>
                    <span className="font-semibold">Community engagement:</span> Building relationships between youth
                    and community leaders created an enabling environment for youth initiatives.
                  </li>
                  <li>
                    <span className="font-semibold">Strategic partnerships:</span> Collaboration with Ipas Ethiopia and
                    other stakeholders leveraged resources and expertise.
                  </li>
                  <li>
                    <span className="font-semibold">Peer-to-peer approach:</span> Training youth as peer educators and
                    mentors amplified program reach and sustainability.
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Challenges and Lessons Learned</h2>
                <p className="mb-4">
                  The implementation of youth empowerment programs faced several challenges, providing valuable lessons:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <span className="font-semibold">Cultural barriers:</span> Conservative attitudes toward youth
                    reproductive health required careful community engagement and involvement of religious and community
                    leaders.
                  </li>
                  <li>
                    <span className="font-semibold">Resource constraints:</span> Limited funding and infrastructure
                    challenged program expansion, highlighting the need for sustainable funding models.
                  </li>
                  <li>
                    <span className="font-semibold">Youth mobility:</span> Migration of trained youth to urban areas
                    affected continuity, suggesting the need for stronger economic components in programming.
                  </li>
                  <li>
                    <span className="font-semibold">Gender disparities:</span> Lower participation of girls in some
                    program components highlighted the need for targeted gender-sensitive approaches.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Conclusion and Recommendations</h2>
                <p className="mb-4">
                  The case study demonstrates that youth empowerment can serve as a powerful catalyst for community
                  development when programs are comprehensive, participatory, and rooted in local context. Youth who are
                  educated, healthy, and engaged become agents of change in their communities, creating positive ripple
                  effects that benefit all community members.
                </p>
                <p className="mb-4">Based on the findings, we recommend:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Expanding the youth center model to additional communities with adaptations based on local context
                  </li>
                  <li>
                    Strengthening the economic component of youth programs through enhanced entrepreneurship training
                    and support
                  </li>
                  <li>
                    Developing sustainable funding models that combine community contributions, government support, and
                    income-generating activities
                  </li>
                  <li>Enhancing gender-sensitive approaches to ensure equal benefit for girls and young women</li>
                  <li>Building stronger linkages between youth programs and formal education and employment systems</li>
                  <li>Advocating for youth-friendly policies at local and regional levels</li>
                </ul>

                <p className="text-gray-600 italic mt-12">
                  For the complete case study with detailed analysis, youth testimonials, and implementation guides,
                  please download the PDF using the button above.
                </p>
                <a href="/sample-publications/sample.pdf" download="youth-empowerment-catalyst.pdf">
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

