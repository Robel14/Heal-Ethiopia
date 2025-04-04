import Image from "next/image"
import { Button } from "@/components/ui/button"
import JoinUsSection from "@/components/join-us-section"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function OromiaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gray-900">
          <Image
            src="/images/regions/oromia.png"
            alt="Oromia Region"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work in Oromia Region</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Supporting sustainable development and community empowerment in Ethiopia's largest region
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Oromia Region</h2>
                <p className="text-gray-700 mb-4">
                  Oromia is Ethiopia's largest region, with diverse landscapes ranging from highlands to lowlands. The
                  region is known for its agricultural production, particularly coffee, but faces challenges related to
                  environmental degradation, healthcare access, and economic development.
                </p>
                <p className="text-gray-700 mb-6">
                  Our work in Oromia focuses on sustainable agriculture, environmental conservation, healthcare
                  improvement, and educational support. We collaborate with local communities and organizations to
                  develop programs that address the specific needs of the region while respecting its rich cultural
                  heritage.
                </p>
                <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                  Learn More About Our Approach
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/regions/oromia.png" alt="Oromia landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Projects in Oromia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/regions/project-oromia.png"
                    alt="Coffee farming project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Coffee Initiative</h3>
                  <p className="text-gray-700 mb-4">
                    Supporting coffee farmers with sustainable farming practices, market access, and fair trade
                    certification to improve livelihoods and environmental conservation.
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
                  <Image
                    src="/images/regions/project-oromia.png"
                    alt="Healthcare project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rural Health Access</h3>
                  <p className="text-gray-700 mb-4">
                    Improving access to healthcare services in remote areas through mobile clinics, health worker
                    training, and community health education programs.
                  </p>
                  <Link href="/impacts/projects/healthcare-access">
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
                    src="/images/regions/project-oromia.png"
                    alt="Reforestation project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Forest Conservation</h3>
                  <p className="text-gray-700 mb-4">
                    Implementing reforestation initiatives and promoting sustainable forest management practices to
                    combat deforestation and protect biodiversity.
                  </p>
                  <Link href="/impacts/projects/environmental-conservation">
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Oromia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">15,000+</div>
                <p className="text-xl">People Reached</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">18</div>
                <p className="text-xl">Active Projects</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12</div>
                <p className="text-xl">Local Partners</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">6</div>
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

