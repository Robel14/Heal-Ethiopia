import Image from "next/image"

export default function VolunteerOpportunities() {
  const opportunities = [
    {
      title: "Healthcare Support",
      image: "/images/volunteer-healthcare.jpg",
      description:
        "Assist in community health outreach programs, medical camps, and health education initiatives. Ideal for medical professionals, nurses, public health specialists, and students.",
      commitment: "1-6 months",
      location: "Various regions in Ethiopia",
      skills: "Medical background, public health knowledge, teaching ability",
    },
    {
      title: "Education & Teaching",
      image: "/images/volunteer-education.jpg",
      description:
        "Teach English, mathematics, science, or computer skills in schools and community centers. Help develop curriculum materials and train local teachers.",
      commitment: "3+ months preferred",
      location: "Addis Ababa and rural communities",
      skills: "Teaching experience, subject expertise, patience",
    },
    {
      title: "Agricultural Development",
      image: "/images/volunteer-agriculture.jpg",
      description:
        "Support sustainable farming initiatives, irrigation projects, and agricultural training programs for local farmers to improve food security.",
      commitment: "1-3 months",
      location: "Rural communities",
      skills: "Agricultural knowledge, environmental science, project management",
    },
    {
      title: "Digital Skills Training",
      image: "/images/volunteer-digital.jpg",
      description:
        "Provide training in basic computer skills, digital literacy, and specific software applications to youth and adults to enhance employability.",
      commitment: "1-3 months (including remote options)",
      location: "Addis Ababa (or remote)",
      skills: "IT expertise, teaching ability, patience",
    },
    {
      title: "Communications & Media",
      image: "/images/volunteer-communications.jpg",
      description:
        "Help document our work through photography, videography, and storytelling. Assist with social media management, content creation, and website updates.",
      commitment: "1-3 months (including remote options)",
      location: "Addis Ababa (or remote)",
      skills: "Photography, videography, writing, social media management",
    },
    {
      title: "Administrative Support",
      image: "/images/volunteer-admin.jpg",
      description:
        "Assist with office administration, grant writing, fundraising initiatives, and organizational development to strengthen our operational capacity.",
      commitment: "3+ months preferred (including remote options)",
      location: "Addis Ababa (or remote)",
      skills: "Organizational skills, writing ability, fundraising experience",
    },
  ]

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-[#006400]">Current Volunteer Opportunities</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Join our team of dedicated volunteers making a difference in Ethiopia. Below are our current opportunities, but
        we're always open to discussing how your unique skills can contribute to our mission.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opportunities.map((opportunity, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={opportunity.image || "/placeholder.svg"}
                alt={opportunity.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>

              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  <span className="font-semibold">Time Commitment:</span> {opportunity.commitment}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Location:</span> {opportunity.location}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Skills Needed:</span> {opportunity.skills}
                </p>
              </div>

              <a
                href="#volunteer-form"
                className="inline-block px-4 py-2 bg-[#006400] text-white rounded hover:bg-[#004d00] transition duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4 text-[#006400]">Don't see a match for your skills?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We're always interested in hearing from passionate individuals with diverse skills. Let us know how you'd like
          to contribute to our mission.
        </p>
        <a
          href="#volunteer-form"
          className="inline-block px-6 py-3 bg-[#ffc107] text-black font-semibold rounded-md hover:bg-[#e6af06] transition duration-300"
        >
          Contact Us About Volunteering
        </a>
      </div>
    </div>
  )
}

