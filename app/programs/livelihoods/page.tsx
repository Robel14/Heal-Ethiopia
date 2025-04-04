import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Coins, Sprout, Flower2 } from "lucide-react"

export default function LivelihoodsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
              alt="Livelihoods & Agriculture"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Livelihoods & Agriculture</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Supporting sustainable livelihoods, food security, climate-resilient agriculture, and women's economic
              empowerment.
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
                  HEAL Ethiopia's Livelihoods & Agriculture program aims to improve food security, increase household
                  income, and build resilience to economic and environmental shocks among vulnerable communities across
                  Ethiopia.
                </p>
                <p className="text-gray-700 mb-4">
                  We recognize that sustainable livelihoods are essential for breaking the cycle of poverty and enabling
                  families to meet their basic needs, invest in their children's education, and build assets for the
                  future.
                </p>
                <p className="text-gray-700 mb-4">
                  Our approach integrates agricultural production, market development, financial inclusion, and women's
                  economic empowerment, tailored to the specific contexts and needs of the communities we serve.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_80_2025-03-12_15-06-25.jpg-1QcW4Fs5h3GsfkU5mHP5yLUmhfTCkx.jpeg"
                  alt="Agriculture Program"
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
                Our comprehensive approach addresses the multiple dimensions of sustainable livelihoods.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Sprout className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Sustainable Agriculture</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Climate-smart agricultural practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Improved seeds and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Small-scale irrigation systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Post-harvest handling and storage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                    <Coins className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Financial Inclusion</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Village Savings and Loan Associations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Microfinance linkages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Financial literacy training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Business planning and management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                    <Flower2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Women's Economic Empowerment</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Women's self-help groups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Income-generating activities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Market linkages and value chains</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Leadership and negotiation skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_79_2025-03-12_15-06-25.jpg-hEsko1uqjAPjjX20u9m2IyGHnuFljN.jpeg"
                  alt="Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-700">Success Story: Fatuma's Journey</h2>
                <p className="text-gray-700 mb-4">
                  Fatuma Ahmed, a 35-year-old mother of four from Oromia Region, joined one of our women's self-help
                  groups in 2019. Prior to joining, her family relied solely on her husband's small income from seasonal
                  farming.
                </p>
                <p className="text-gray-700 mb-4">
                  Through the self-help group, Fatuma received training in business skills and financial literacy. She
                  accessed a small loan to start a poultry business, beginning with just 10 chickens.
                </p>
                <p className="text-gray-700 mb-4">
                  Today, Fatuma has expanded her business to include 50 chickens and has diversified into vegetable
                  gardening using improved techniques learned through our agricultural training program. Her monthly
                  income has tripled, enabling her to pay for her children's education and contribute to household
                  expenses.
                </p>
                <p className="text-gray-700">
                  "The skills and confidence I gained through this program have changed my life. I am now a
                  businesswoman and can provide for my family. My husband respects my contribution, and we now make
                  decisions together," says Fatuma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Impact</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Through our Livelihoods & Agriculture program, we have achieved significant results in improving
                economic resilience and food security.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700 mb-2">5,000+</p>
                <p className="text-gray-600">Farmers Trained</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700 mb-2">300+</p>
                <p className="text-gray-600">Self-Help Groups</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700 mb-2">40%</p>
                <p className="text-gray-600">Average Income Increase</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-green-700 mb-2">75%</p>
                <p className="text-gray-600">Reduced Food Insecurity</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/impacts/publications">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Read Our Publications</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Related Programs</h2>
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg"
                      alt="Environment Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Environment & Water</h3>
                    <p className="text-gray-600 mb-4">
                      Promoting environmental conservation, climate change adaptation, and access to clean water.
                    </p>
                    <Link href="/programs/environment">
                      <Button variant="link" className="p-0 text-green-600 hover:text-green-700 flex items-center">
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
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-yellow-700 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your contribution can help us expand our livelihoods program to reach more vulnerable communities across
              Ethiopia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/announcements/volunteer-opportunities">
                <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-50">
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

