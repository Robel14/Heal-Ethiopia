import { Clock, MapPin, Award, Heart } from "lucide-react"

export default function VolunteerInfo() {
  const infoCards = [
    {
      icon: <Clock className="h-10 w-10 text-[#006400]" />,
      title: "Time Commitment",
      description:
        "We offer flexible volunteering opportunities ranging from short-term projects (1-3 months) to long-term commitments (3+ months). Remote volunteering options are also available for those unable to travel to Ethiopia.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#c00]" />,
      title: "Locations",
      description:
        "Our volunteer opportunities are primarily based in Addis Ababa and surrounding rural communities. Specific placements depend on project needs and your skills.",
    },
    {
      icon: <Award className="h-10 w-10 text-[#ffc107]" />,
      title: "Skills Needed",
      description:
        "We welcome volunteers with backgrounds in healthcare, education, agriculture, engineering, IT, communications, and administration. Both skilled professionals and enthusiastic learners are valued.",
    },
    {
      icon: <Heart className="h-10 w-10 text-[#c00]" />,
      title: "Support Provided",
      description:
        "Volunteers receive orientation, cultural training, and ongoing support from our team. While we don't provide housing or stipends, we can assist with finding affordable accommodation and local transportation.",
    },
  ]

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">Volunteer Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-3">{card.title}</h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-[#006400]">Volunteer Process</h3>

          <ol className="relative border-l border-gray-200 ml-3 space-y-6">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#006400] rounded-full -left-4 ring-4 ring-white text-white">
                1
              </span>
              <h4 className="text-lg font-semibold">Application</h4>
              <p className="text-gray-600">
                Complete and submit the volunteer application form with your details, skills, and availability.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#006400] rounded-full -left-4 ring-4 ring-white text-white">
                2
              </span>
              <h4 className="text-lg font-semibold">Interview</h4>
              <p className="text-gray-600">
                Selected applicants will be invited for a virtual interview to discuss skills, expectations, and
                potential placements.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#006400] rounded-full -left-4 ring-4 ring-white text-white">
                3
              </span>
              <h4 className="text-lg font-semibold">Orientation</h4>
              <p className="text-gray-600">
                Accepted volunteers receive pre-departure information, cultural orientation, and project-specific
                training.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#006400] rounded-full -left-4 ring-4 ring-white text-white">
                4
              </span>
              <h4 className="text-lg font-semibold">Placement</h4>
              <p className="text-gray-600">
                Begin your volunteer experience with ongoing support from our team throughout your service.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

