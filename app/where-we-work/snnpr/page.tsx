import Image from "next/image"
import { Button } from "@/components/ui/button"
import JoinUsSection from "@/components/join-us-section"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function SNNPRPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gray-900">
          <Image src="/images/regions/snnpr.png" alt="SNNPR Region" fill className="object-cover opacity-70" priority />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work in SNNPR</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Supporting sustainable development in the diverse Southern Nations, Nationalities, and Peoples' Region
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About SNNPR</h2>
                <p className="text-gray-700 mb-4">
                  The Southern Nations, Nationalities, and Peoples' Region (SNNPR) is known for its cultural diversity,
                  with over 45 ethnic groups. The region has rich agricultural potential but faces challenges related to
                  infrastructure, healthcare access, and environmental conservation.
                </p>
                <p className="text-gray-700 mb-6">
                  Our work in SNNPR focuses on sustainable agriculture, water resource management, healthcare
                  improvement, and educational support. We collaborate with local communities to develop programs that
                  respect cultural diversity while addressing development challenges.
                </p>
                <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                  Learn More About Our Approach
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/regions/snnpr.png" alt="SNNPR landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Projects in SNNPR</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/regions/project-snnpr.png"
                    alt="Agricultural project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diversified Agriculture</h3>
                  <p className="text-gray-700 mb-4">
                    Supporting farmers with sustainable and diversified agricultural practices to improve food security,
                    nutrition, and income generation.
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
                  <Image src="/images/regions/project-snnpr.png" alt="Water project" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Water Access</h3>
                  <p className="text-gray-700 mb-4">
                    Implementing sustainable water solutions in rural communities to ensure clean water access and
                    improve sanitation practices.
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
                    src="/images/regions/project-snnpr.png"
                    alt="Education project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Heritage Preservation</h3>
                  <p className="text-gray-700 mb-4">
                    Supporting initiatives to preserve and promote the rich cultural heritage of the diverse ethnic
                    groups in SNNPR.
                  </p>
                  <Link href="/impacts/projects">
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in SNNPR</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <p className="text-xl">People Reached</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">14</div>
                <p className="text-xl">Active Projects</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">9</div>
                <p className="text-xl">Local Partners</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4</div>
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

