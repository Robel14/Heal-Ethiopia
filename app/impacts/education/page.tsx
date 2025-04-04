import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award } from "lucide-react"
import AnimatedStat from "@/components/animated-stat"

export default function EducationImpactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-12_15-05-16.jpg-7edrsPwrFOU0ZdnJEGZCkjAbw2IlNx.jpeg"
              alt="Education Impact"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Youth Education & Empowerment</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Transforming Lives Through Education</h2>
              <p className="text-gray-700 mb-4">
                At HEAL-Ethiopia, we believe that education is a powerful tool for transformation. Our education and
                youth empowerment programs aim to improve access to quality education and skills development for
                children and youth, particularly those from marginalized communities.
              </p>
              <p className="text-gray-700">
                Through school support, teacher training, learning materials, and community engagement, we create
                environments where students can thrive and reach their full potential. We also focus on addressing youth
                unemployment through skills training, job opportunities, entrepreneurship support, and career guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-05-16.jpg-mMXrVxaVVNbQgYy54Bew4Y9vLaZVCX.jpeg"
                  alt="Youth Enlightenment Project participants"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Youth Enlightenment Project</h3>
                <p className="text-gray-700 mb-4">
                  The implementation of the Youth Enlightenment Project by HEAL, in collaboration with the "World Starts
                  with Me" (WSWM) initiative, was conducted at the Asebe Teferi and Hirna Youth centers within the Waste
                  Hareghie Zone, Oromia regional state, where significant positive outcomes were witnessed.
                </p>
                <p className="text-gray-700 mb-4">
                  Building on this success, we partnered with Ipas Ethiopia to enhance awareness and health-seeking
                  behavior among youth at Chiro Youth Center in West Hararghe Zone. This collaboration focused on
                  prevention of unwanted pregnancy and unsafe abortion while promoting comprehensive sexual and
                  reproductive health education.
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <BookOpen className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Enhanced Youth Centers</h4>
                      <p className="text-gray-700">
                        HEAL constructed a new youth center in Chiro town and renovated a center in Hirna town, adding
                        computers, furniture, library materials, and recreational activities.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Users className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Outreach</h4>
                      <p className="text-gray-700">
                        The project reached 7800 youths within the centers and an additional 1500 youths from
                        surrounding areas through outreach programs, creating vital referral linkages with public health
                        facilities.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Award className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Socio-economic Empowerment</h4>
                      <p className="text-gray-700">
                        Twenty girl peer promoters were trained in the production of local sanitary napkins, providing
                        both affordable products and income generation opportunities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Our Education Programs</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-12_15-06-25.jpg-8u9cVs1JwypAYn603l0JgG8lVUq2Ly.jpeg"
                      alt="Youth Leadership Program"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Youth Leadership Program</h4>
                    <p className="text-gray-700">
                      Fifty young people graduated from HEAL's Youth Leadership Program, equipped with skills in
                      leadership, project management, and community mobilization.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_4_2025-03-12_15-06-25.jpg-7T1NZrk7supk9JOCfHJ7PtaCyuZ0g0.jpeg"
                      alt="Economic Empowerment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Economic Empowerment</h4>
                    <p className="text-gray-700">
                      Supporting youth through skills training, entrepreneurship education, and access to resources for
                      starting small businesses and income-generating activities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-06-25.jpg-KOrp1zegMicGoxJqcKhEy2AcUkfJTE.jpeg"
                      alt="School Support Programs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">School Support Programs</h4>
                    <p className="text-gray-700">
                      Providing educational materials, scholarships, and infrastructure improvements to enhance learning
                      environments and increase school attendance.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <AnimatedStat value="7,800+" label="Youth Reached" color="text-green-700" />
                <AnimatedStat value="50+" label="Leaders Trained" color="text-green-700" />
                <AnimatedStat value="2" label="Youth Centers" color="text-green-700" />
                <AnimatedStat value="20" label="Girl Entrepreneurs" color="text-green-700" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Success Story</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-12_15-06-25.jpg-8u9cVs1JwypAYn603l0JgG8lVUq2Ly.jpeg"
                        alt="Youth Program Participant"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">From Participant to Leader</h4>
                    <p className="text-gray-700 mb-4">
                      One of our Youth Enlightenment Project participants, after completing the program, went on to
                      establish a community initiative that now helps other young people in their area access
                      educational resources and develop skills.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Through the training received at HEAL's youth center, they gained not only practical skills but
                      also the confidence and leadership abilities needed to make a difference in their community.
                    </p>
                    <p className="text-gray-700 italic">
                      "The program changed my perspective on what I could achieve. Now I'm helping other young people
                      realize their potential too." - Youth Program Graduate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

