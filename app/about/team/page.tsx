import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Mentuab Araya",
    position: "Founder",
    bio: "A dynamic individual with a profound commitment to humanitarian causes and extensive experience spanning over three decades. As a US citizen born in Ethiopia, she holds a BA in Social Work and an MA in Urban Government Administration from Georgia State University.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dereje Deme",
    position: "Executive Director",
    bio: "Brings over two decades of experience in public and private institutions. He holds a BA in Organizational Management and a Diploma in Agriculture and oversees daily operations, external relations, and fundraising endeavors of HEAL.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const boardMembers = [
  {
    name: "Board Member 1",
    position: "Board Chair",
    bio: "Experienced professional with extensive background in nonprofit governance and international development.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Board Member 2",
    position: "Board Secretary",
    bio: "Brings valuable expertise to our board, helping to ensure good governance and compliance.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Board Member 3",
    position: "Board Treasurer",
    bio: "Has a background in finance and business management, providing oversight of our financial operations.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Board Member 4",
    position: "Board Member",
    bio: "Professional who advises on our health-related programs and initiatives.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Our Team" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Team</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Meet the People Behind HEAL-Ethiopia</h2>
              <p className="text-gray-700">
                Our dedicated team of professionals works tirelessly to create positive change in communities across
                Ethiopia. Each member brings unique skills and perspectives, united by a shared commitment to our
                mission.
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">Leadership Team</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-64">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-green-700">{member.name}</h4>
                      <p className="text-blue-700 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-700 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">Board of Directors</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {boardMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-64">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-green-700">{member.name}</h4>
                      <p className="text-blue-700 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-700 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

