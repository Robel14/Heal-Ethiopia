"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar } from "lucide-react"
import Link from "next/link"
import { downloadPDF } from "@/utils/download-helper"

// Update the reports array to include the actual documents provided
const reports = [
  {
    title: "RMNH Service Uptake Trend Analysis Report",
    date: "January 2017",
    description:
      "A comprehensive analysis of Reproductive, Maternal and Neonatal Health service uptake trends in six pastoralist woredas of South Omo Zone, implemented with support from UKAid/FMoH. The report documents significant improvements in maternal health services after our intervention, including a 50.8% increase in skilled birth attendance.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-14_11-41-55.jpg-lGxbP6tUFNQJF63gNnweDw2Driq7QH.jpeg",
    highlights: [
      "Analysis of service uptake before and after RIF project intervention",
      "Overall 18.1% average increase in RMNH service uptake across all indicators",
      "Significant 50.8% increase in skilled birth attendance",
      "Improvements in antenatal care, postnatal care, and family planning services",
      "Detailed data analysis from six pastoralist woredas showing consistent improvements",
    ],
    downloadPath: `/sample-reports/rmnh-service-uptake-trend-analysis-report.pdf`,
    readMorePath: "/impacts/reports/rmnh-service",
  },
  {
    title: "Pathfinder International Ethiopia Partnership Testimony",
    date: "August 2016",
    description:
      "A testimonial letter from Pathfinder International Ethiopia highlighting HEAL-Ethiopia's successful implementation of HIV/AIDS prevention, community-based care, and youth reproductive health programs from 2005 to 2011. The letter specifically commends HEAL's remarkable performance in maternal and neonatal health services in pastoral areas.",
    image: "/placeholder.svg?height=300&width=500",
    highlights: [
      "Partnership from 2005 to 2011 under Pathfinder/Sida funding",
      "Successful implementation of HIV/AIDS prevention and community-based care programs",
      "Strong performance in maternal and neonatal health services in pastoral areas",
      "Recognition of HEAL's commitment and dedication to project implementation",
      "Recommendation for future partnerships based on proven track record",
    ],
    downloadPath: `/sample-reports/pathfinder-international-ethiopia-partnership-testimony.pdf`,
    readMorePath: "/impacts/reports/pathfinder-partnership",
  },
  {
    title: "Project Concern International (PCI) Partnership Report",
    date: "May 2010",
    description:
      "A detailed report on the five-year PEPFAR-funded BELONG program implemented in collaboration with PCI, focusing on orphans and vulnerable children in Maichew and Endamekhoni Woredas of Southern Zone, Tigray Region. The program reached over 550 orphans and vulnerable children with essential services and empowered 675 women through self-help groups.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
    highlights: [
      "Reached over 550 orphans and vulnerable children with comprehensive support services",
      "Economic empowerment of 675 women through self-help groups and income-generating activities",
      "Community engagement through Woreda Advisory Committees and other local structures",
      "Holistic approach addressing education, healthcare, psychosocial support, and economic needs",
      "Sustainable community-based systems established for ongoing support",
    ],
    downloadPath: `/sample-reports/project-concern-international-(pci)-partnership-report.pdf`,
    readMorePath: "/impacts/reports/pci-partnership",
  },
  {
    title: "Ipas Ethiopia Collaboration Certificate",
    date: "November 2013",
    description:
      "A testimonial from Ipas Ethiopia on the collaboration with HEAL-Ethiopia to implement a project on enhancing awareness and health-seeking behavior among youth at Chiro Youth Center, West Hararghe Zone, Oromia Region.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
    highlights: [
      "Focus on prevention of unwanted pregnancy and unsafe abortion",
      "Promotion of sexual and reproductive health education for young people",
      "Creation of referral linkages with public health facilities",
    ],
    downloadPath: `/sample-reports/ipas-ethiopia-collaboration-certificate.pdf`,
    readMorePath: "/impacts/reports/ipas-collaboration",
  },
  {
    title: "Southern Zone Administration Office Recommendation",
    date: "2015",
    description:
      "A recommendation letter from the Southern Zone Administration Office of Tigray Region highlighting HEAL-Ethiopia's positive impact on communities in the region.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
    highlights: [
      "Recognition of community-based program implementation",
      "Acknowledgment of effective partnership with local government",
      "Recommendation for future collaborations",
    ],
    downloadPath: `/sample-reports/southern-zone-administration-office-recommendation.pdf`,
    readMorePath: "/impacts/reports/southern-zone",
  },
  {
    title: "Annual Report 2022",
    date: "March 2023",
    description:
      "A comprehensive overview of HEAL-Ethiopia's programs, achievements, challenges, and financial performance in 2022.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
    highlights: [
      "Summary of key achievements across all program areas",
      "Financial transparency and accountability report",
      "Strategic goals and directions for future work",
    ],
    downloadPath: `/sample-reports/annual-report-2022.pdf`,
    readMorePath: "/impacts/reports/annual-report-2022",
  },
]

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Our Reports" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Reports</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Annual Reports & Evaluations</h2>
              <p className="text-gray-700">
                HEAL-Ethiopia is committed to transparency and accountability. Our reports provide detailed information
                about our programs, impact, challenges, and financial performance. We regularly conduct evaluations to
                assess our effectiveness and identify areas for improvement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reports.map((report, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={report.image || "/placeholder.svg"}
                        alt={report.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-blue-700">{report.title}</h3>
                        <FileText className="h-5 w-5 text-green-600 flex-shrink-0" />
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{report.date}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{report.description}</p>

                      <h4 className="text-sm font-semibold text-green-700 mb-1">Key Highlights:</h4>
                      <ul className="list-disc pl-5 space-y-1 mb-4 text-xs text-gray-700">
                        {report.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>

                      {/* Update the link components to use the actual paths */}
                      <div className="flex space-x-2">
                        <a
                          href={report.downloadPath}
                          target="_blank"
                          download={`${report.title.toLowerCase().replace(/\s+/g, "-")}.pdf`}
                          className="inline-block"
                          rel="noreferrer"
                        >
                          <Button
                            onClick={() =>
                              downloadPDF(report.downloadPath, `${report.title.toLowerCase().replace(/\s+/g, "-")}.pdf`)
                            }
                            variant="outline"
                            size="sm"
                            className="flex items-center bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </a>
                        <Link href={report.readMorePath}>
                          <Button size="sm" className="flex items-center bg-green-600 hover:bg-green-700 text-white">
                            Read Summary
                          </Button>
                        </Link>
                      </div>
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

