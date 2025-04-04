import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OurVisionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Our Vision" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Vision & Mission</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Breaking the Cycle of Poverty"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-blue-700 mb-6">Breaking the Cycle of Poverty</h2>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "Tackling poverty demands a comprehensive approach, involving enhancing education, fostering job
                  creation, ensuring healthcare access, advocating for inclusive policies, and addressing environmental
                  issues."
                </p>
                <p className="text-gray-700 mb-4">
                  At HEAL-Ethiopia, we firmly believe in and actively work on collaborative efforts among governments,
                  NGOs, universities, research institutions, communities, and the private sector. These partnerships are
                  pivotal in effectively combating the root causes and breaking the cycle of poverty.
                </p>
                <p className="text-gray-700">
                  Our comprehensive approach includes 18 key focus areas that address the multifaceted nature of poverty
                  and development challenges in Ethiopia.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Our Focus Areas</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Environment & Climate</h3>
                    <p className="text-gray-700">
                      Promotion of environment protection, climate change adaptation, sustainable practices, and
                      biodiversity conservation.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-3">Human Rights</h3>
                    <p className="text-gray-700">
                      Advocacy, education, and legal support to ensure fundamental rights and freedoms are upheld for
                      all individuals.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-600 mb-3">Peace and Security</h3>
                    <p className="text-gray-700">
                      Initiatives focused on conflict resolution, peace building, and fostering stable and secure
                      communities.
                    </p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-600 mb-3">Youth Employment</h3>
                    <p className="text-gray-700">
                      Programs aimed at providing skills training, job opportunities, entrepreneurship support, and
                      career guidance to reduce youth unemployment rates.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-600 mb-3">Agribusiness</h3>
                    <p className="text-gray-700">
                      Supporting agricultural entrepreneurship, sustainable farming practices, market access, and value
                      chain development to improve agricultural productivity and livelihoods.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Water and Sanitation</h3>
                    <p className="text-gray-700">
                      Providing access to clean water sources, sanitation facilities, hygiene education, and
                      infrastructure development in underserved communities.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <Image src="/placeholder.svg?height=400&width=800" alt="Our Approach" fill className="object-cover" />
                </div>
                <h2 className="text-3xl font-bold text-green-700 mb-6">How We Work</h2>
                <p className="text-gray-700 mb-4">
                  Helping Ethiopia Achieve Longevity operates under a board-led structure with Executive Director Mr.
                  Dereje Deme overseeing day-to-day activities, including program implementation, finances, and
                  administration.
                </p>
                <p className="text-gray-700 mb-4">
                  For almost two decades, HEAL has diligently pursued its mission by closely collaborating with
                  marginalized communities, governmental bodies, and partner agencies. Our wide-ranging initiatives
                  encompass sustainable development programs, health services, inclusive education, livelihood
                  enhancement, empowerment for women and youth, natural resource management, human rights advocacy,
                  peace and security initiatives, and community awareness efforts.
                </p>
                <p className="text-gray-700">
                  Our committed and diverse staff goes above and beyond their duties, reflected in the establishment of
                  community response structures such as the Woreda Advisory Committee (WAC/PAC). These structures
                  prioritize addressing the needs of vulnerable groups, ensuring program sustainability and community
                  engagement. HEAL's transparent partnerships and strong stakeholder engagement, combined with our
                  commitment to ethical work practices, have garnered trust and respect from both donors and
                  communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

