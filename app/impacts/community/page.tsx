import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Droplet, Leaf, Users } from "lucide-react"

export default function CommunityDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=300&width=1200"
              alt="Community Development"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Community Development</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Building Stronger Communities</h2>
              <p className="text-gray-700 mb-4">
                At Hiwot Ethiopia, we believe that sustainable development starts at the community level. Our community
                development programs focus on empowering communities to identify their needs, mobilize resources, and
                implement solutions that create lasting change.
              </p>
              <p className="text-gray-700">
                Through participatory approaches, capacity building, and infrastructure development, we help communities
                become more resilient, self-reliant, and prosperous.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community development project"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Our Approach to Community Development</h3>
                <p className="text-gray-700 mb-4">
                  We take a holistic approach to community development, addressing the interconnected factors that
                  affect community wellbeing. As recognized by the Southern Zone Administration Office of Tigray Region,
                  our community-based programs have created lasting positive impacts through strong partnerships with
                  local government and community structures.
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <Users className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Participatory Planning</h4>
                      <p className="text-gray-700">
                        Engaging community members in identifying needs, setting priorities, and planning interventions
                        through structures like the Woreda Advisory Committee (WAC).
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Home className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Infrastructure Development</h4>
                      <p className="text-gray-700">
                        Building and improving community facilities, water systems, and other essential infrastructure
                        based on community-identified priorities.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Leaf className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sustainable Livelihoods</h4>
                      <p className="text-gray-700">
                        Supporting income-generating activities, agricultural improvements, and access to markets, as
                        demonstrated in our work with 675 women through self-help groups in Tigray Region.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Droplet className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Environmental Sustainability</h4>
                      <p className="text-gray-700">
                        Promoting sustainable natural resource management and climate change adaptation through
                        community education and engagement.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Our Community Development Programs</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Water and Sanitation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Water and Sanitation</h4>
                    <p className="text-gray-700">
                      Improving access to clean water and sanitation facilities through well construction, water
                      harvesting, and hygiene education.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Sustainable Agriculture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Sustainable Agriculture</h4>
                    <p className="text-gray-700">
                      Promoting improved farming techniques, drought-resistant crops, and market access to enhance food
                      security and income.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Women's Empowerment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Women's Empowerment</h4>
                    <p className="text-gray-700">
                      Supporting women's savings groups, income-generating activities, and leadership development to
                      promote gender equality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-yellow-600">550+</p>
                  <p className="text-gray-700">Orphans & Vulnerable Children Supported</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-600">675</p>
                  <p className="text-gray-700">Women in Self-Help Groups</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-600">2</p>
                  <p className="text-gray-700">Woredas in Tigray Region</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-600">5</p>
                  <p className="text-gray-700">Years of BELONG Program</p>
                </div>
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
                        src="/placeholder.svg?height=300&width=300"
                        alt="Kebele Community"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-green-700 mb-2">Transforming Kebele Village</h4>
                    <p className="text-gray-700 mb-4">
                      Kebele village faced challenges with water scarcity, low agricultural productivity, and limited
                      economic opportunities. Through our community development program, the village established a water
                      management committee, constructed a well, and implemented improved farming techniques.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Today, the village has reliable access to clean water, increased crop yields, and thriving small
                      businesses. Community members have taken ownership of these initiatives and continue to build on
                      their success.
                    </p>
                    <p className="text-gray-700 italic">
                      "Our village has transformed in ways we never thought possible. We now have water, better
                      harvests, and hope for the future." - Kebele Village Elder
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

