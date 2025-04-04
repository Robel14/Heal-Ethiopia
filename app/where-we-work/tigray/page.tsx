import Image from "next/image"
import { Button } from "@/components/ui/button"
import JoinUsSection from "@/components/join-us-section"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function TigrayPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gray-900">
          <Image
            src="/images/regions/tigray.png"
            alt="Tigray Region"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work in Tigray Region</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Supporting recovery, resilience, and sustainable development in Ethiopia's Tigray Region
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Tigray Region</h2>
                <p className="text-gray-700 mb-4">
                  The Tigray Region in northern Ethiopia has faced significant challenges in recent years due to
                  conflict and humanitarian crises. Our work in Tigray focuses on emergency relief, recovery support,
                  and building resilience for long-term sustainable development.
                </p>
                <p className="text-gray-700 mb-6">
                  We collaborate with local partners and international organizations to provide essential services,
                  rebuild infrastructure, and support communities in their recovery process. Our approach emphasizes
                  community participation, local capacity building, and sustainable solutions.
                </p>
                <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                  Learn More About Our Approach
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/regions/tigray.png" alt="Tigray landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Projects in Tigray</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/regions/project-tigray.png"
                    alt="Food security project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Food Security</h3>
                  <p className="text-gray-700 mb-4">
                    Providing emergency food assistance and supporting agricultural recovery to address immediate needs
                    and build long-term food security.
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
                    src="/images/regions/project-tigray.png"
                    alt="Healthcare project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Rehabilitation</h3>
                  <p className="text-gray-700 mb-4">
                    Supporting the rehabilitation of healthcare facilities and services to ensure access to essential
                    medical care for vulnerable populations.
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
                    src="/images/regions/project-tigray.png"
                    alt="Education project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Education Recovery</h3>
                  <p className="text-gray-700 mb-4">
                    Rebuilding schools, providing educational materials, and supporting teachers to help children resume
                    their education after disruption.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Tigray</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">8,000+</div>
                <p className="text-xl">People Reached</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10</div>
                <p className="text-xl">Active Projects</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">7</div>
                <p className="text-xl">Local Partners</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3</div>
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

