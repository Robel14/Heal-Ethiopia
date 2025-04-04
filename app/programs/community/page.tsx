import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Heart, Scale, Award } from "lucide-react"

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-05-16.jpg-mMXrVxaVVNbQgYy54Bew4Y9vLaZVCX.jpeg"
              alt="Community Development"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Development</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Strengthening community structures, promoting gender equality, and building social cohesion and
              resilience.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-700">Program Overview</h2>
                <p className="text-gray-700 mb-4">
                  HEAL Ethiopia's Community Development program aims to build strong, inclusive, and resilient
                  communities where all members have the opportunity to participate in and benefit from development
                  processes.
                </p>
                <p className="text-gray-700 mb-4">
                  We recognize that sustainable development must be community-led and community-owned. Our approach
                  focuses on strengthening local structures, building social capital, promoting gender equality, and
                  enhancing community capacity to identify and address their own development needs.
                </p>
                <p className="text-gray-700 mb-4">
                  By fostering inclusive participation, leadership development, and collective action, we help
                  communities become more cohesive, resilient, and self-reliant in addressing the challenges they face.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_91_2025-03-12_15-06-25.jpg-zSr8MLf3eyetxwID6e5yP8fpeo8hwi.jpeg"
                  alt="Community Program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Interventions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Interventions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach addresses multiple dimensions of community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community Mobilization & Organization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Formation and strengthening of community-based organizations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Participatory needs assessment and planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Community resource mapping and mobilization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Community-led monitoring and evaluation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                    <Scale className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Gender Equality & Social Inclusion</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Women's leadership development and participation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Gender awareness and transformation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Inclusion of marginalized groups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Addressing harmful traditional practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Leadership & Governance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Leadership development for community members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Transparent and accountable governance systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Conflict resolution and peace building</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Rights awareness and advocacy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Social Cohesion & Resilience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Community self-help initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Social safety nets and mutual support systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Disaster risk reduction and response</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Inter-community collaboration and networking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Impact</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Through our Community Development program, we have achieved significant results in building strong,
                inclusive, and resilient communities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-purple-700 mb-2">250+</p>
                <p className="text-gray-600">Community Groups Formed</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-pink-700 mb-2">5,000+</p>
                <p className="text-gray-600">Women in Leadership Roles</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-700 mb-2">150+</p>
                <p className="text-gray-600">Community-Led Projects</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-red-700 mb-2">30+</p>
                <p className="text-gray-600">Communities with Disaster Plans</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/impacts">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Learn More About Our Impact</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_71_2025-03-12_15-06-25.jpg-jNfRxajwHamR01ScZyU7ubzId2ArZR.jpeg"
                  alt="Case Study"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-700">Case Study: Welkite Women's Collaborative</h2>
                <p className="text-gray-700 mb-4">
                  In the Welkite community of SNNPR, HEAL Ethiopia facilitated the formation of a women's collaborative
                  that has transformed gender dynamics and community development processes.
                </p>
                <p className="text-gray-700 mb-4">
                  The collaborative started with 35 women who received leadership training, financial management skills,
                  and organizational development support. They established a savings and credit system and initiated
                  small-scale income-generating activities.
                </p>
                <p className="text-gray-700 mb-4">
                  Over time, the group expanded to include 120 women organized in smaller self-help clusters. They have
                  implemented community improvement projects including a clean water point, school renovations, and an
                  early childhood development center.
                </p>
                <p className="text-gray-700">
                  Most significantly, the collaborative has gained recognition and respect within the community. Women
                  are now represented on local decision-making bodies, and men have become allies in addressing
                  gender-based violence and promoting girls' education. This transformation demonstrates how
                  strengthening women's collective capacity can lead to broader community-wide changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Related Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
                      alt="Health Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Health & Nutrition</h3>
                    <p className="text-gray-600 mb-4">
                      Improving access to quality healthcare services, maternal and child health, and nutrition.
                    </p>
                    <Link href="/programs/health">
                      <Button variant="link" className="p-0 text-green-600 hover:text-green-700 flex items-center">
                        Learn More <span className="ml-2">→</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                      alt="Education Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Education & Youth</h3>
                    <p className="text-gray-600 mb-4">
                      Enhancing access to quality education, youth development programs, and vocational training.
                    </p>
                    <Link href="/programs/education">
                      <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700 flex items-center">
                        Learn More <span className="ml-2">→</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                      alt="Livelihoods Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Livelihoods & Agriculture</h3>
                    <p className="text-gray-600 mb-4">
                      Supporting sustainable livelihoods, food security, and climate-resilient agriculture.
                    </p>
                    <Link href="/programs/livelihoods">
                      <Button variant="link" className="p-0 text-yellow-600 hover:text-yellow-700 flex items-center">
                        Learn More <span className="ml-2">→</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your contribution can help us expand our community development programs to reach more communities across
              Ethiopia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/announcements/volunteer-opportunities">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
                  Volunteer With Us
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

