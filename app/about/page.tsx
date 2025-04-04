import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg"
              alt="About HEAL Ethiopia"
              fill
              className="object-cover brightness-[0.7]"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white mb-4">About HEAL Ethiopia</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Dedicated to improving lives and building resilient communities across Ethiopia through sustainable
                development programs.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  HEAL Ethiopia's mission is to empower communities to achieve sustainable development and improved
                  quality of life through integrated programs in health, education, agriculture, and livelihoods.
                </p>
                <p className="text-gray-700 mb-4">
                  We work in partnership with communities, government, and other stakeholders to address the root causes
                  of poverty and inequality, with a focus on the most vulnerable populations.
                </p>
                <p className="text-gray-700">
                  Through our holistic approach, we strive to create lasting change that enables communities to thrive
                  and become self-reliant.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  We envision a Ethiopia where all communities have equitable access to quality healthcare, education,
                  clean water, food security, and economic opportunities.
                </p>
                <p className="text-gray-700 mb-4">
                  We see a future where individuals and communities are empowered to lead healthy, productive lives and
                  participate fully in the development of their country.
                </p>
                <p className="text-gray-700">
                  Our vision is of resilient communities that can adapt to challenges, including climate change, and
                  sustain their development gains for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Our History</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 sm:before:ml-0 before:ml-2 before:top-8 after:absolute after:left-2 sm:after:left-12 after:w-4 after:h-4 after:rounded-full after:bg-green-600 sm:after:ml-0 after:ml-2">
                  <span className="text-sm text-gray-500 sm:w-24 sm:text-right sm:mr-8 sm:mt-1">2000</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Foundation</h3>
                    <p className="text-gray-700">
                      HEAL Ethiopia was founded by a group of Ethiopian healthcare professionals and community leaders
                      committed to improving health outcomes in underserved communities.
                    </p>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 sm:before:ml-0 before:ml-2 before:top-8 after:absolute after:left-2 sm:after:left-12 after:w-4 after:h-4 after:rounded-full after:bg-blue-600 sm:after:ml-0 after:ml-2">
                    <span className="text-sm text-gray-500 sm:w-24 sm:text-right sm:mr-8 sm:mt-1">2005</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Expansion</h3>
                      <p className="text-gray-700">
                        Expanded our programs to include education and livelihoods, recognizing the interconnected
                        nature of health and development challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 sm:before:ml-0 before:ml-2 before:top-8 after:absolute after:left-2 sm:after:left-12 after:w-4 after:h-4 after:rounded-full after:bg-yellow-500 sm:after:ml-0 after:ml-2">
                    <span className="text-sm text-gray-500 sm:w-24 sm:text-right sm:mr-8 sm:mt-1">2010</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Regional Growth</h3>
                      <p className="text-gray-700">
                        Established regional offices across Ethiopia to better serve diverse communities and respond to
                        local needs and priorities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 sm:before:ml-0 before:ml-2 before:top-8 after:absolute after:left-2 sm:after:left-12 after:w-4 after:h-4 after:rounded-full after:bg-red-500 sm:after:ml-0 after:ml-2">
                    <span className="text-sm text-gray-500 sm:w-24 sm:text-right sm:mr-8 sm:mt-1">2015</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Strategic Partnerships</h3>
                      <p className="text-gray-700">
                        Formed strategic partnerships with international organizations, government agencies, and private
                        sector entities to scale our impact and reach.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-12 before:h-full before:px-px before:bg-gray-300 sm:before:ml-0 before:ml-2 before:top-8 after:absolute after:left-2 sm:after:left-12 after:w-4 after:h-4 after:rounded-full after:bg-green-600 sm:after:ml-0 after:ml-2">
                    <span className="text-sm text-gray-500 sm:w-24 sm:text-right sm:mr-8 sm:mt-1">2020</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Innovation & Resilience</h3>
                      <p className="text-gray-700">
                        Adapted our programs to address emerging challenges, including climate change and public health
                        emergencies, while embracing innovative approaches and technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Community-Centered</h3>
                <p className="text-gray-700">
                  We believe in the wisdom, agency, and potential of communities. Our programs are designed with and for
                  the communities we serve, respecting their knowledge, culture, and priorities.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-600 mb-4">Integrity & Transparency</h3>
                <p className="text-gray-700">
                  We uphold the highest standards of honesty, accountability, and ethical conduct in all our operations.
                  We are transparent about our work, finances, and impact.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-600 mb-4">Excellence & Innovation</h3>
                <p className="text-gray-700">
                  We strive for excellence in all we do and continuously seek innovative solutions to complex
                  development challenges. We learn from our experiences and adapt our approaches accordingly.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">Equity & Inclusion</h3>
                <p className="text-gray-700">
                  We are committed to promoting equity, diversity, and inclusion in our programs and organization. We
                  prioritize the needs of the most vulnerable and marginalized populations.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Collaboration & Partnership</h3>
                <p className="text-gray-700">
                  We believe in the power of collaboration and partnership to achieve greater impact. We work with a
                  diverse range of stakeholders, leveraging complementary strengths and resources.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">Sustainability</h3>
                <p className="text-gray-700">
                  We design our programs with sustainability in mind, ensuring that positive changes endure beyond our
                  direct involvement. We are committed to environmental stewardship in all our operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Partners</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              We collaborate with a diverse range of partners to maximize our impact and reach. Our partners include
              government agencies, international organizations, foundations, and private sector entities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/who-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                  alt="World Health Organization"
                  width={160}
                  height={80}
                  className="object-contain mb-3"
                />
                <p className="text-center font-medium text-gray-700">World Health Organization</p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unicef-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                  alt="UNICEF"
                  width={160}
                  height={80}
                  className="object-contain mb-3"
                />
                <p className="text-center font-medium text-gray-700">UNICEF</p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usaid-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                  alt="USAID"
                  width={160}
                  height={80}
                  className="object-contain mb-3"
                />
                <p className="text-center font-medium text-gray-700">USAID</p>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gates-foundation-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                  alt="Bill & Melinda Gates Foundation"
                  width={160}
                  height={80}
                  className="object-contain mb-3"
                />
                <p className="text-center font-medium text-gray-700">Gates Foundation</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/about/partners">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View All Partners</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating Lasting Change</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Together, we can build stronger, healthier, and more resilient communities across Ethiopia. Your support
              makes our work possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg border-2 border-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/announcement/volunteer-opportunities">
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 shadow-lg border-2 border-green-600"
                >
                  Volunteer With Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg border-2 border-yellow-500"
                >
                  Contact Us
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

