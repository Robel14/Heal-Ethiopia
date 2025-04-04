import Image from "next/image"
import { Button } from "@/components/ui/button"
import JoinUsSection from "@/components/join-us-section"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function AmharaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gray-900">
          <Image
            src="/images/regions/amhara.png"
            alt="Amhara Region"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work in Amhara Region</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Supporting rural communities and sustainable development in Ethiopia's Amhara Region
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Amhara Region</h2>
                <p className="text-gray-700 mb-4">
                  The Amhara Region is one of Ethiopia's largest regions, known for its rich cultural heritage,
                  historical sites, and agricultural importance. However, the region faces challenges related to food
                  security, healthcare access, and environmental degradation.
                </p>
                <p className="text-gray-700 mb-6">
                  Our work in Amhara focuses on sustainable agriculture, water resource management, healthcare
                  improvement, and educational support for rural communities. We partner with local organizations to
                  ensure our programs are culturally appropriate and address the specific needs of the region.
                </p>
                <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                  Learn More About Our Approach
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/regions/amhara.png" alt="Amhara landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Projects in Amhara</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/regions/project-amhara.png"
                    alt="Agricultural project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Farming Initiative</h3>
                  <p className="text-gray-700 mb-4">
                    Promoting climate-smart agricultural practices to improve crop yields, enhance food security, and
                    increase farmer incomes in rural Amhara.
                  </p>
                  <Link href="/impacts/projects/agricultural-development">
                    <Button variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/regions/project-amhara.png" alt="Water project" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Water Access</h3>
                  <p className="text-gray-700 mb-4">
                    Developing sustainable water sources and improving sanitation facilities in remote villages to
                    reduce waterborne diseases.
                  </p>
                  <Link href="/impacts/projects/clean-water">
                    <Button variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/regions/project-amhara.png"
                    alt="Education project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rural Education Support</h3>
                  <p className="text-gray-700 mb-4">
                    Improving educational infrastructure and providing learning materials to enhance educational
                    outcomes for children in rural Amhara.
                  </p>
                  <Link href="/impacts/projects/youth-education">
                    <Button variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-ethiopia-green text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Amhara</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">12,000+</div>
                <p className="text-xl">People Reached</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15</div>
                <p className="text-xl">Active Projects</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10</div>
                <p className="text-xl">Local Partners</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5</div>
                <p className="text-xl">Years of Operation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <JoinUsSection />
      </main>
    </>
  )
}

