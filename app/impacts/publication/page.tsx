import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Download, ExternalLink } from "lucide-react"

const featuredPublications = [
  {
    title: "Breaking the Cycle of Poverty: A Comprehensive Approach",
    date: "March 2023",
    authors: "Dereje Deme, Mentuab Araya, et al.",
    description:
      "This flagship publication outlines HEAL-Ethiopia's holistic approach to addressing poverty through integrated interventions in health, education, economic empowerment, and environmental sustainability.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Research Paper",
    featured: true,
    downloadLink: "#",
  },
]

const publications = [
  {
    title: "Women's Economic Empowerment in Rural Ethiopia",
    date: "January 2023",
    authors: "Dereje Deme, Sarah Johnson",
    description:
      "A study of the impact of women's savings groups and microfinance initiatives on household income, decision-making power, and community development in rural Ethiopia.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Research Paper",
    downloadLink: "#",
  },
  {
    title: "Youth Education and Employment: Bridging the Gap",
    date: "November 2022",
    authors: "Mentuab Araya, David Wilson",
    description:
      "An analysis of the challenges and opportunities in youth education and employment in Ethiopia, with case studies from HEAL-Ethiopia's youth empowerment programs.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Policy Brief",
    downloadLink: "#",
  },
  {
    title: "Climate-Smart Agriculture: Lessons from the Field",
    date: "September 2022",
    authors: "Abebe Tadesse, Maria Garcia",
    description:
      "A practical guide to climate-smart agricultural techniques based on HEAL-Ethiopia's experiences implementing sustainable farming projects in drought-prone regions.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Technical Guide",
    downloadLink: "#",
  },
  {
    title: "Community-Led Development: A Participatory Approach",
    date: "July 2022",
    authors: "Dereje Deme, Fatima Hassan",
    description:
      "This publication explores the principles and practices of community-led development, drawing on HEAL-Ethiopia's experiences in facilitating community-driven initiatives.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Case Study",
    downloadLink: "#",
  },
  {
    title: "Maternal and Child Health in Rural Ethiopia",
    date: "May 2022",
    authors: "Tigist Bekele, John Smith",
    description:
      "A comprehensive study of maternal and child health challenges and interventions in rural Ethiopia, with recommendations for policy and practice.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Research Paper",
    downloadLink: "#",
  },
  {
    title: "Water, Sanitation, and Hygiene: A Community Perspective",
    date: "March 2022",
    authors: "Solomon Abebe, Emma Brown",
    description:
      "This publication examines community perceptions and practices related to water, sanitation, and hygiene, and evaluates the impact of HEAL-Ethiopia's WASH interventions.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Research Paper",
    downloadLink: "#",
  },
]

export default function PublicationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Our Publications" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Publications</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Knowledge Sharing</h2>
              <p className="text-gray-700">
                HEAL-Ethiopia is committed to sharing knowledge, insights, and lessons learned from our work. Our
                publications include research papers, case studies, policy briefs, and practical guides that contribute
                to the broader development discourse and inform evidence-based practice.
              </p>
            </div>

            {/* Featured Publication */}
            {featuredPublications.map((publication, index) => (
              <div key={index} className="max-w-5xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Featured Publication</h2>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-200">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-64 md:h-auto">
                      <Image
                        src={publication.image || "/placeholder.svg"}
                        alt={publication.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                        {publication.type}
                      </div>
                    </div>
                    <CardContent className="p-8 md:w-2/3">
                      <h3 className="text-2xl font-bold text-blue-700 mb-3">{publication.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 text-green-600 mr-2" />
                          <span>{publication.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <FileText className="h-4 w-4 text-green-600 mr-2" />
                          <span>Authors: {publication.authors}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6">{publication.description}</p>
                      <div className="flex space-x-4">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Online
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((publication, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={publication.image || "/placeholder.svg"}
                      alt={publication.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                      {publication.type}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{publication.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-4 w-4 text-green-600 mr-2" />
                        <span>{publication.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <FileText className="h-4 w-4 text-green-600 mr-2" />
                        <span>Authors: {publication.authors}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3">{publication.description}</p>
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-700 hover:bg-blue-50">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Research Collaboration</h3>
              <p className="text-gray-700 mb-6">
                HEAL-Ethiopia welcomes opportunities to collaborate with researchers, academic institutions, and other
                organizations on studies and publications related to sustainable development in Ethiopia.
              </p>
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Contact Our Research Team</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

