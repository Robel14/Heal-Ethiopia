import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Abebe Bekele, MD",
      role: "Executive Director",
      bio: "Dr. Abebe brings over 20 years of experience in public health and international development.",
    },
    {
      name: "Sara Haile, MPH",
      role: "Programs Director",
      bio: "Sara oversees all our program implementation and community partnerships across Ethiopia.",
    },
    {
      name: "Daniel Tadesse, MBA",
      role: "Finance & Operations",
      bio: "Daniel ensures our organization operates efficiently and maintains financial transparency.",
    },
    {
      name: "Tigist Mengesha, PhD",
      role: "Research & Evaluation",
      bio: "Dr. Tigist leads our monitoring and evaluation efforts to measure and improve our impact.",
    },
    {
      name: "Solomon Girma, MSc",
      role: "Partnerships & Development",
      bio: "Solomon builds and maintains our relationships with donors, partners, and stakeholders.",
    },
    {
      name: "Hiwot Alemayehu, MA",
      role: "Communications",
      bio: "Hiwot manages our communications strategy and raises awareness about our work.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals guiding our organization's mission and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

