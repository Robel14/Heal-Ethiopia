import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Download, ExternalLink, BarChart } from "lucide-react"

const annualReports = [
  {
    title: "Annual Report 2022",
    date: "March 2023",
    description:
      "A comprehensive overview of HEAL-Ethiopia's activities, achievements, challenges, and financial performance in 2022. The report highlights our impact across all program areas and our progress toward strategic objectives.",
    image: "/placeholder.svg?height=300&width=500",
    downloadLink: "#",
    featured: true,
  },
  {
    title: "Annual Report 2021",
    date: "March 2022",
    description:
      "A detailed report on HEAL-Ethiopia's programs, projects, and financial performance in 2021, with a special focus on our COVID-19 response and adaptation strategies.",
    image: "/placeholder.svg?height=300&width=500",
    downloadLink: "#",
  },
  {
    title: "Annual Report 2020",
    date: "March 2021",
    description:
      "An overview of HEAL-Ethiopia's work in 2020, highlighting our achievements, challenges, and financial management during the first year of the COVID-19 pandemic.",
    image: "/placeholder.svg?height=300&width=500",
    downloadLink: "#",
  },
]

const projectReports = [
  {
    title: "Youth Empowerment Project: Midterm Evaluation",
    date: "December 2022",
    description:
      "A midterm evaluation of our Youth Empowerment Initiative, assessing progress toward objectives, documenting lessons learned, and making recommendations for the remaining project period.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Evaluation Report",
    downloadLink: "#",
  },
  {
    title: "Clean Water Access Program: Impact Assessment",
    date: "October 2022",
    description:
      "An assessment of the impact of our Clean Water Access Program on health outcomes, time use, and quality of life in target communities in the Amhara Region.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Impact Assessment",
    downloadLink: "#",
  },
  {
    title: "Maternal and Child Health Initiative: Final Report",
    date: "August 2022",
    description:
      "The final report of our Maternal and Child Health Initiative in the Tigray Region, documenting achievements, challenges, lessons learned, and recommendations for future programming.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Final Project Report",
    downloadLink: "#",
  },
  {
    title: "Sustainable Agriculture Project: Baseline Study",
    date: "June 2022",
    description:
      "A baseline study for our Sustainable Agriculture Project in SNNPR, establishing initial conditions and key indicators for monitoring and evaluation.",
    image: "/placeholder.svg?height=300&width=500",
    type: "Baseline Report",
    downloadLink: "#",
  },
]

export default function ReportPage() {
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
              <h1 className="text-4xl font-bold text-white">Our Reports</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Transparency and Accountability</h2>
              <p className="text-gray-700">
                HEAL-Ethiopia is committed to transparency and accountability in all our operations. We regularly
                publish reports on our activities, achievements, challenges, and financial performance to share with our
                stakeholders and the public.
              </p>
            </div>

            {/* Annual Reports */}
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Annual Reports</h2>

              {/* Featured Annual Report */}
              {annualReports
                .filter((report) => report.featured)
                .map((report, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-200 mb-8"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <Image
                          src={report.image || "/placeholder.svg"}
                          alt={report.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                          Latest
                        </div>
                      </div>
                      <CardContent className="p-8 md:w-2/3">
                        <h3 className="text-2xl font-bold text-blue-700 mb-3">{report.title}</h3>
                        <div className="flex items-center text-gray-700 mb-4">
                          <Calendar className="h-4 w-4 text-green-600 mr-2" />
                          <span>Published: {report.date}</span>
                        </div>
                        <p className="text-gray-700 mb-6">{report.description}</p>
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
                ))}

              {/* Other Annual Reports */}
              <div className="grid md:grid-cols-2 gap-8">
                {annualReports
                  .filter((report) => !report.featured)
                  .map((report, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={report.image || "/placeholder.svg"}
                          alt={report.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-2">{report.title}</h3>
                        <div className="flex items-center text-gray-700 mb-4">
                          <Calendar className="h-4 w-4 text-green-600 mr-2" />
                          <span>Published: {report.date}</span>
                        </div>
                        <p className="text-gray-700 mb-4 line-clamp-3">{report.description}</p>
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

            {/* Project Reports */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Project Reports</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projectReports.map((report, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={report.image || "/placeholder.svg"}
                        alt={report.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                        {report.type}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">{report.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 text-green-600 mr-2" />
                          <span>{report.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <BarChart className="h-4 w-4 text-green-600 mr-2" />
                          <span>{report.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">{report.description}</p>
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
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Financial Transparency</h3>
              <p className="text-gray-700 mb-6">
                HEAL-Ethiopia is committed to financial transparency and accountability. Our financial statements are
                audited annually by independent auditors, and we maintain strict internal controls to ensure proper use
                of resources.
              </p>
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Request Financial Information</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

