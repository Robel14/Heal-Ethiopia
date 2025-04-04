import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Shield, Baby, Users, Brain } from "lucide-react"

export default function HealthProgramPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
              alt="Health Program"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Health & Nutrition Programs</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Improving access to quality healthcare services and promoting better health outcomes for vulnerable
              communities.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-700">Program Overview</h2>
                <p className="text-gray-700 mb-4">
                  HEAL Ethiopia's Health and Nutrition programs aim to improve health outcomes for vulnerable
                  communities by increasing access to quality healthcare services, promoting preventive health
                  practices, and addressing the underlying determinants of health.
                </p>
                <p className="text-gray-700 mb-4">
                  Our integrated approach combines facility-based interventions with community-based activities,
                  recognizing that sustainable health improvements require both strengthened health systems and
                  empowered communities. We work closely with government health departments, local health facilities,
                  and community structures to ensure coordination and sustainability.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the past two decades, our health programs have reached over 300,000 people across multiple
                  regions of Ethiopia, contributing to improved maternal and child health outcomes, reduced disease
                  burden, and enhanced community health practices.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Contact Us About This Program
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                  alt="Health Program Overview"
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
                We implement comprehensive health interventions that address priority health challenges facing Ethiopian
                communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Maternal & Child Health</h3>
                  <p className="text-gray-600 mb-4">
                    We work to improve maternal and child health outcomes through antenatal care, skilled birth
                    attendance, postnatal care, immunization, and integrated management of childhood illnesses.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">
                        Training of healthcare workers and traditional birth attendants
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Community mobilization for maternal health services</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Support for health facilities with equipment and supplies</span>
                    </li>
                  </ul>
                  <Link href="/programs/health/maternal-child-health">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Disease Prevention & Control</h3>
                  <p className="text-gray-600 mb-4">
                    We implement comprehensive disease prevention and control programs focusing on HIV/AIDS, malaria,
                    tuberculosis, and other communicable diseases.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Community-based HIV prevention and care</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Malaria prevention through bed net distribution</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">TB screening and treatment support</span>
                    </li>
                  </ul>
                  <Link href="/programs/health/disease-prevention">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <Baby className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nutrition & Food Security</h3>
                  <p className="text-gray-600 mb-4">
                    We address malnutrition through integrated nutrition interventions that combine direct nutrition
                    services with food security and livelihood support.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Growth monitoring and promotion for children</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Nutrition education and cooking demonstrations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Support for home gardens and dietary diversity</span>
                    </li>
                  </ul>
                  <Link href="/programs/health/nutrition">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
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
                  <h3 className="text-xl font-bold mb-2">Community Health Systems</h3>
                  <p className="text-gray-600 mb-4">
                    We strengthen community health systems through training and support for community health workers,
                    health committees, and community-based organizations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Training and equipping community health workers</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Establishing and strengthening health committees</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Community-based health monitoring systems</span>
                    </li>
                  </ul>
                  <Link href="/programs/health/community-systems">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mental Health & Psychosocial Support</h3>
                  <p className="text-gray-600 mb-4">
                    We integrate mental health and psychosocial support into our health programs, recognizing the
                    importance of mental wellbeing for overall health.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Mental health awareness and education</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Training for health workers on mental health</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Support groups for vulnerable populations</span>
                    </li>
                  </ul>
                  <Link href="/programs/health/mental-health">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Water, Sanitation & Hygiene</h3>
                  <p className="text-gray-600 mb-4">
                    We implement WASH interventions as an essential component of our health programs, recognizing the
                    critical link between water, sanitation, hygiene, and health outcomes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Clean water access through wells and springs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Sanitation facilities and hygiene promotion</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">WASH in schools and health facilities</span>
                    </li>
                  </ul>
                  <Link href="/programs/health/wash">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
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
                See how our health programs are making a difference in Ethiopian communities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-700">
                    Transforming Maternal Health in Oromia Region
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In the rural communities of West Hararghe Zone, Oromia Region, maternal mortality was a significant
                    challenge due to limited access to skilled birth attendance and emergency obstetric care.
                    Traditional practices often prevented women from seeking facility-based care, and health facilities
                    lacked essential equipment and trained staff.
                  </p>
                  <p className="text-gray-600 mb-4">
                    HEAL Ethiopia implemented a comprehensive maternal health program that combined facility
                    strengthening with community mobilization. We trained healthcare workers, equipped health centers
                    with essential supplies, established a referral system for complications, and engaged community
                    leaders and traditional birth attendants as advocates for safe motherhood.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Within three years, skilled birth attendance increased from 26% to 68%, and maternal deaths
                    decreased by 60% in the target communities. The program has been recognized as a model approach by
                    the Regional Health Bureau and is being scaled to additional districts.
                  </p>
                  <Link href="/impacts/stories/maternal-health-oromia">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Read Full Story</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Over the past five years, our health programs have achieved significant results across Ethiopia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">85%</p>
                <p className="text-lg">Increase in skilled birth attendance in target communities</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">120K</p>
                <p className="text-lg">Children under five reached with nutrition interventions</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">1,500+</p>
                <p className="text-lg">Community health workers trained and supported</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">75%</p>
                <p className="text-lg">Reduction in waterborne diseases in WASH program areas</p>
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
                Explore our publications, reports, and other resources related to health and nutrition.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                      alt="Publication"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Community-Based Approaches to HIV/AIDS Prevention and Care
                    </h3>
                    <p className="text-gray-600 mb-4">
                      This case study documents HEAL-Ethiopia's community-based approach to HIV/AIDS prevention and
                      care, highlighting the role of community health workers and peer educators.
                    </p>
                    <Link href="/impacts/publications/hiv-aids-prevention">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
                      alt="Report"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Annual Health Program Report 2022</h3>
                    <p className="text-gray-600 mb-4">
                      This comprehensive report details the achievements, challenges, and lessons learned from our
                      health programs implemented in 2022 across multiple regions.
                    </p>
                    <Link href="/impacts/reports/health-program-2022">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                      alt="Resource"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Community Health Worker Training Manual</h3>
                    <p className="text-gray-600 mb-4">
                      This comprehensive training manual provides guidance for training community health workers on
                      essential health services and community mobilization.
                    </p>
                    <Link href="/resources/chw-training-manual">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                        Download Resource
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/impacts/publications">
                <Button className="bg-green-600 hover:bg-green-700 text-white">View All Resources</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Health Programs</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your support can help us expand our health programs to reach more vulnerable communities across Ethiopia.
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

