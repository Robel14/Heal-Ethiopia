import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Users, Lightbulb, School } from "lucide-react"

export default function EducationProgramPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
              alt="Education Program"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Youth Programs</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Empowering children and youth through quality education, skills development, and leadership opportunities.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Program Overview</h2>
                <p className="text-gray-700 mb-4">
                  HEAL Ethiopia's Education and Youth programs aim to improve access to quality education and create
                  opportunities for young people to develop the knowledge, skills, and confidence they need to reach
                  their full potential.
                </p>
                <p className="text-gray-700 mb-4">
                  We recognize that education is a powerful tool for breaking the cycle of poverty and creating
                  sustainable development. Our programs address barriers to education, enhance the quality of learning,
                  and create pathways for youth to transition to meaningful livelihoods and active citizenship.
                </p>
                <p className="text-gray-700 mb-4">
                  Working in partnership with schools, communities, government education departments, and youth
                  organizations, we implement holistic interventions that support children and youth at different stages
                  of their educational journey.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us About This Program</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
                  alt="Education Program Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement comprehensive education and youth development interventions that address key challenges
                facing Ethiopian children and youth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Early Childhood Education</h3>
                  <p className="text-gray-600 mb-4">
                    We support early childhood education to build strong foundations for lifelong learning, focusing on
                    cognitive, social, and emotional development.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Establishing and equipping kindergartens</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Training early childhood educators</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Parenting education on child development</span>
                    </li>
                  </ul>
                  <Link href="/programs/education/early-childhood">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <School className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Primary & Secondary Education</h3>
                  <p className="text-gray-600 mb-4">
                    We work to improve access to quality primary and secondary education, with a focus on vulnerable
                    children and girls.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">School infrastructure improvement</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Teacher training and professional development</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Scholarships for vulnerable children</span>
                    </li>
                  </ul>
                  <Link href="/programs/education/primary-secondary">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Vocational Training</h3>
                  <p className="text-gray-600 mb-4">
                    We provide vocational training and skills development to help youth transition to employment and
                    entrepreneurship.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Market-driven vocational skills training</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Entrepreneurship and business development</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Apprenticeships and job placement support</span>
                    </li>
                  </ul>
                  <Link href="/programs/education/vocational-training">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Youth Leadership & Empowerment</h3>
                  <p className="text-gray-600 mb-4">
                    We develop youth leadership and create opportunities for meaningful youth participation in community
                    development.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Youth leadership training programs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Youth-led community service initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Youth centers and safe spaces</span>
                    </li>
                  </ul>
                  <Link href="/programs/education/youth-leadership">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Life Skills & Health Education</h3>
                  <p className="text-gray-600 mb-4">
                    We integrate life skills and health education into our programs to promote holistic development and
                    healthy behaviors.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Comprehensive sexuality education</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">HIV/AIDS awareness and prevention</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Communication and decision-making skills</span>
                    </li>
                  </ul>
                  <Link href="/programs/education/life-skills">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Digital Literacy & Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    We equip young people with digital skills and foster innovation to prepare them for the 21st-century
                    economy.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Computer labs and digital learning centers</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Basic and advanced digital skills training</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Innovation challenges and hackathons</span>
                    </li>
                  </ul>
                  <Link href="/programs/education/digital-literacy">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our education programs are transforming lives and communities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700">
                    Youth Enlightenment Project in West Hararghe
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In West Hararghe Zone, Oromia Region, young people faced limited opportunities for education, skills
                    development, and meaningful engagement. Many dropped out of school early, and those who completed
                    their education struggled to find employment or start businesses.
                  </p>
                  <p className="text-gray-600 mb-4">
                    HEAL Ethiopia implemented the Youth Enlightenment Project, establishing youth centers in Asebe
                    Teferi, Hirna, and Chiro towns. These centers provided comprehensive services including educational
                    support, vocational training, life skills education, and leadership development.
                  </p>
                  <p className="text-gray-600 mb-6">
                    The project has directly benefited over 7,800 young people, with remarkable outcomes: 85% of
                    participants reported increased knowledge of reproductive health, 500+ youth gained computer skills,
                    and 25 youth-led community service initiatives were implemented, benefiting approximately 5,000
                    community members.
                  </p>
                  <Link href="/impacts/stories/youth-enlightenment">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Read Full Story</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Over the past five years, our education and youth programs have achieved significant results across
                Ethiopia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-lg">Schools constructed or renovated</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">25K+</p>
                <p className="text-lg">Children supported with educational materials</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">3,000+</p>
                <p className="text-lg">Youth trained in vocational and business skills</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">90%</p>
                <p className="text-lg">Employment rate for vocational training graduates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Resources</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our publications, reports, and other resources related to education and youth development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                      alt="Publication"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Youth Empowerment as a Catalyst for Community Development
                    </h3>
                    <p className="text-gray-600 mb-4">
                      This case study documents the impact of HEAL-Ethiopia's youth empowerment programs in Oromia
                      Region, highlighting successful approaches and lessons learned.
                    </p>
                    <Link href="/impacts/publications/youth-empowerment">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        Read Publication
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
                      alt="Report"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Annual Education Program Report 2022</h3>
                    <p className="text-gray-600 mb-4">
                      This comprehensive report details the achievements, challenges, and lessons learned from our
                      education programs implemented in 2022 across multiple regions.
                    </p>
                    <Link href="/impacts/reports/education-program-2022">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        View Report
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg"
                      alt="Resource"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Youth Leadership Training Manual</h3>
                    <p className="text-gray-600 mb-4">
                      This comprehensive training manual provides guidance for developing youth leadership skills and
                      implementing youth-led community initiatives.
                    </p>
                    <Link href="/resources/youth-leadership-manual">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        Download Resource
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/impacts/publications">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View All Resources</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Education Programs</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your support can help us expand our education programs to reach more children and youth across Ethiopia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Make a Donation
                </Button>
              </Link>
              <Link href="/announcements/volunteer-opportunities">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
                  Volunteer With Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

