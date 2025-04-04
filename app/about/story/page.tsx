import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Our Story" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Story</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">Founder Story & History of HEAL</h2>

              <div className="mb-12">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Mentuab Araya, Founder of HEAL"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Mentuab Araya: The Visionary Behind HEAL</h3>
                <p className="text-gray-700 mb-4">
                  Mentuab Araya is a dynamic individual with a profound commitment to humanitarian causes and extensive
                  experience spanning over three decades. As a US citizen born in Ethiopia, she holds a BA in Social
                  Work and an MA in Urban Government Administration from Georgia State University. Her career
                  encompasses a rich tapestry of roles within both public and private institutions.
                </p>
                <p className="text-gray-700 mb-4">
                  With a remarkable track record, Mentuab has made significant contributions across various spheres.
                  Notably, she represented the mayor's office in Atlanta at numerous international conferences,
                  including co-organizing the UNIDO-sponsored International Trade and Development Symposium and actively
                  participating in initiatives like the African Famine Task Force and UNICEF's Strategy Planning
                  Conference for Child Survival Campaign.
                </p>
                <p className="text-gray-700">
                  Her dedication goes beyond representation, as she engaged in fundraising endeavors and social
                  activism, raising over $450,000 to combat famine in Africa. Through coordinated efforts with
                  organizations such as CARE, Church World Services, and UNICEF, she played a pivotal role in strategic
                  development and fundraising campaigns.
                </p>
              </div>

              <div className="mb-12">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Mentuab Araya's work in humanitarian causes"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">A Journey of Impact</h3>
                <p className="text-gray-700 mb-4">
                  Mentuab's impactful initiatives extended to fostering business relations between Africa and Georgia,
                  evidenced by her coordination and organization of the United Nations Industrial Development
                  Organization (UNIDO) workshop in Atlanta in January 1990.
                </p>
                <p className="text-gray-700 mb-4">
                  Recognitions and accolades have followed her impactful journey. She was nominated for "Outstanding
                  Young Women in America," featured on NOVA/PBS for her UNICEF Campaign for Child Survival, and
                  acknowledged in Ebony Magazine for her contributions to local communities.
                </p>
                <p className="text-gray-700">
                  Her commitment to humanitarian causes continued as she served in leadership positions on the boards of
                  prominent organizations in Atlanta, including Care International, UNICEF, and The Carter Center's
                  Mickey Leland Fellows, among others.
                </p>
              </div>

              <div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="HEAL's work in Ethiopia"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">The Birth of HEAL</h3>
                <p className="text-gray-700 mb-4">
                  Returning to Ethiopia after two decades in the US, Mentuab sought to assist a country grappling with
                  civil war and famine. Her efforts brought foreign investment, notably the BGI group, which now owns
                  breweries and a winery, contributing to the nation's economic revival.
                </p>
                <p className="text-gray-700 mb-4">
                  However, Mentuab's transformative journey took a new direction when she realized her true calling lay
                  in aiding those in need. This realization prompted her return to the US, where she conceived the idea
                  of establishing a credible NGO in Ethiopia. Drawing from her extensive experience volunteering with
                  international and local NGOs in Atlanta, she founded Helping Ethiopia Achieve Longevity (HEAL),
                  formerly known as Nutrition plus Holistic Home Care (NPHHC), in September 2003.
                </p>
                <p className="text-gray-700">
                  As the founding volunteer Executive Director, Mentuab played a pivotal role in HEAL's inception. Since
                  its establishment, HEAL has positively impacted over 1.3 million lives, focusing on HIV/AIDS, Climate,
                  Women and Youth Empowerment, and Hospice Care, Maternal Neonatal Health, embodying her unwavering
                  commitment to humanitarian causes.
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

