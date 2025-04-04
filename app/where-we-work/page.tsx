import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import JoinUsSection from "@/components/join-us-section"
import Navbar from "@/components/navbar"

export default function WhereWeWorkPage() {
  const regions = [
    {
      name: "Addis Ababa",
      description: "Supporting sustainable development and community empowerment in Ethiopia's capital city",
      image: "/images/regions/addis-ababa.png",
      link: "/where-we-work/addis-ababa",
    },
    {
      name: "Amhara",
      description: "Supporting rural communities and sustainable development in Ethiopia's Amhara Region",
      image: "/images/regions/amhara.png",
      link: "/where-we-work/amhara",
    },
    {
      name: "Oromia",
      description: "Supporting sustainable development and community empowerment in Ethiopia's largest region",
      image: "/images/regions/oromia.png",
      link: "/where-we-work/oromia",
    },
    {
      name: "Tigray",
      description: "Supporting recovery, resilience, and sustainable development in Ethiopia's Tigray Region",
      image: "/images/regions/tigray.png",
      link: "/where-we-work/tigray",
    },
    {
      name: "SNNPR",
      description:
        "Supporting sustainable development in the diverse Southern Nations, Nationalities, and Peoples' Region",
      image: "/images/regions/snnpr.png",
      link: "/where-we-work/snnpr",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gray-900">
          <Image
            src="/images/regions/ethiopia-map.png"
            alt="Where We Work"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Where We Work</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                HEAL Ethiopia operates across multiple regions in Ethiopia, addressing the unique challenges and
                opportunities in each area
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Presence Across Ethiopia</h2>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src="/images/regions/ethiopia-map.png"
                alt="Map of Ethiopia showing our work locations"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-700 max-w-3xl mx-auto">
              HEAL Ethiopia currently operates in five key regions across Ethiopia, each with its own unique challenges
              and opportunities. Our programs are tailored to address the specific needs of each region while
              maintaining our core focus on sustainable development and community empowerment.
            </p>
          </div>
        </section>

        {/* Regions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Our Work By Region</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region) => (
                <div key={region.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image src={region.image || "/placeholder.svg"} alt={region.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                    <p className="text-gray-700 mb-4">{region.description}</p>
                    <Link href={region.link}>
                      <Button className="w-full bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Regional Approach</h2>
                <p className="text-gray-700 mb-4">
                  At HEAL Ethiopia, we recognize that each region has its own unique challenges, opportunities, and
                  cultural contexts. Our regional approach allows us to develop targeted interventions that address the
                  specific needs of each community while leveraging local knowledge and resources.
                </p>
                <p className="text-gray-700 mb-4">
                  We work closely with local partners, community leaders, and government agencies to ensure our programs
                  are culturally appropriate, sustainable, and aligned with national development priorities. This
                  collaborative approach enables us to maximize our impact and build local capacity for long-term
                  development.
                </p>
                <p className="text-gray-700 mb-6">
                  While our programs vary by region, they all share a common focus on sustainable development, community
                  empowerment, and building resilience to address current and future challenges.
                </p>
                <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                  Learn More About Our Approach
                </Button>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/regions/ethiopia-map.png"
                  alt="HEAL Ethiopia team working with local communities"
                  fill
                  className="object-cover"
                />
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

