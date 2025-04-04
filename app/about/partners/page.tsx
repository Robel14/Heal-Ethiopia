import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-700 mb-8">Our Partners</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/care-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="CARE International"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">CARE International</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/save-the-children-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="Save the Children"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">Save the Children</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ethiopian-ministry-of-health-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="Ethiopian Ministry of Health"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">Ethiopian Ministry of Health</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pathfinder-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="Pathfinder International"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">Pathfinder International</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amref-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="Amref Health Africa"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">Amref Health Africa</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-bank-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="World Bank"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">World Bank</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/undp-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="UNDP"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">UNDP</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/psi-logo-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
                alt="Population Services International"
                width={160}
                height={80}
                className="object-contain mb-3"
              />
              <p className="text-center font-medium text-gray-700">PSI</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Approach to Partnership</h2>
            <p className="text-gray-700 mb-6">
              HEAL-Ethiopia believes in the power of strategic partnerships to maximize our impact and reach. We
              collaborate with a diverse range of partners including government agencies, international organizations,
              academic institutions, and private sector entities to leverage resources, expertise, and influence for
              greater impact.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Partnership Principles</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mutual respect and shared vision</li>
                <li>Transparency and accountability</li>
                <li>Complementary expertise and resources</li>
                <li>Long-term commitment to sustainable change</li>
                <li>Joint learning and innovation</li>
              </ul>
            </div>

            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

