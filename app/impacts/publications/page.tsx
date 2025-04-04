"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { downloadPDF } from "@/utils/download-helper"

const publications = [
  {
    title: "Breaking the Cycle of Poverty: A Comprehensive Approach",
    type: "Research Paper",
    year: "2023",
    authors: "Dereje Deme, Mentuab Araya, et al.",
    description:
      "This research paper examines the multifaceted nature of poverty in Ethiopia and presents a comprehensive approach to breaking the cycle of poverty through integrated development initiatives.",
    image: "/placeholder.svg?height=300&width=500",
    downloadPath: `/sample-publications/breaking-the-cycle-of-poverty-a-comprehensive-approach.pdf`,
    readMorePath: "/impacts/publications/breaking-the-cycle",
  },
  {
    title: "Youth Empowerment as a Catalyst for Community Development",
    type: "Case Study",
    year: "2022",
    authors: "HEAL-Ethiopia Research Team",
    description:
      "This case study documents the impact of HEAL's youth empowerment programs in Oromia Region, highlighting successful approaches and lessons learned.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
    downloadPath: `/sample-publications/youth-empowerment-as-a-catalyst-for-community-development.pdf`,
    readMorePath: "/impacts/publications/youth-empowerment",
  },
  {
    title: "Women's Economic Empowerment: Pathways to Sustainable Livelihoods",
    type: "Policy Brief",
    year: "2022",
    authors: "Mentuab Araya, Tigist Alemu",
    description:
      "This policy brief presents evidence-based recommendations for promoting women's economic empowerment in rural Ethiopia, drawing on HEAL's experience implementing savings groups and business development programs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
    downloadPath: `/sample-publications/women's-economic-empowerment-pathways-to-sustainable-livelihoods.pdf`,
    readMorePath: "/impacts/publications/womens-empowerment",
  },
  {
    title: "Climate Resilience and Sustainable Agriculture in Ethiopia",
    type: "Research Paper",
    year: "2021",
    authors: "Dereje Deme, Solomon Tadesse, et al.",
    description:
      "This research paper examines the impact of climate change on agricultural communities in Ethiopia and presents strategies for building resilience through sustainable farming practices.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
    downloadPath: `/sample-publications/climate-resilience-and-sustainable-agriculture-in-ethiopia.pdf`,
    readMorePath: "/impacts/publications/climate-resilience",
  },
  {
    title: "Community-Based Approaches to HIV/AIDS Prevention and Care",
    type: "Case Study",
    year: "2020",
    authors: "HEAL-Ethiopia Health Team",
    description:
      "This case study documents HEAL's community-based approach to HIV/AIDS prevention and care, highlighting the role of community health workers and peer educators in reducing stigma and improving access to services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
    downloadPath: `/sample-publications/community-based-approaches-to-hivaids-prevention-and-care.pdf`,
    readMorePath: "/impacts/publications/hiv-aids-prevention",
  },
  {
    title: "ቤተሰብ እቅድ እና የስነ-ተዋልዶ፣ እናቶችና ህፃናት ጤና (Family Planning and Reproductive, Maternal and Child Health)",
    type: "Health Education Brochure",
    year: "2019",
    authors: "HEAL-Ethiopia WASH Team",
    description:
      "This comprehensive health education brochure in Amharic provides essential information about family planning methods, maternal health services, and child health care. It covers topics such as contraceptive options, prenatal care, safe delivery practices, postpartum care, and child nutrition. The brochure uses simple language and illustrations to make the information accessible to communities with varying literacy levels.",
    image: "/placeholder.svg?height=300&width=500",
    downloadPath: `/sample-publications/ቤተሰብ-እቅድ-እና-የስነ-ተዋልዶ፣-እናቶችና-ህፃናት-ጤና-(family-planning-and-reproductive,-maternal-and-child-health).pdf`,
    readMorePath: "/impacts/publications/family-planning",
  },
]

export default function PublicationsPage() {
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
              <h1 className="text-4xl font-bold text-white">Publications</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Research and Publications</h2>
              <p className="text-gray-700">
                HEAL-Ethiopia is committed to sharing knowledge and insights from our work through research papers, case
                studies, policy briefs, and technical guides. Our publications aim to contribute to the broader
                development discourse and inform evidence-based practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((publication, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={publication.image || "/placeholder.svg"}
                        alt={publication.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-blue-700">{publication.title}</h3>
                          <p className="text-sm text-gray-500">
                            {publication.type} | {publication.year}
                          </p>
                        </div>
                        <FileText className="h-5 w-5 text-green-600 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-gray-700 mb-2">Authors: {publication.authors}</p>
                      <p className="text-sm text-gray-700 mb-4">{publication.description}</p>
                      <Button
                        onClick={() =>
                          downloadPDF(
                            publication.downloadPath,
                            `${publication.title.toLowerCase().replace(/\s+/g, "-")}.pdf`,
                          )
                        }
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                      <Link href={publication.readMorePath}>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Read Online
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

