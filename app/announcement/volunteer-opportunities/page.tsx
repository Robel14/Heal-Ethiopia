import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Briefcase } from "lucide-react"

const volunteerOpportunities = [
  {
    title: "Youth Mentor",
    location: "Addis Ababa",
    commitment: "5-10 hours per week",
    duration: "3-6 months",
    description:
      "Mentor young people in our youth centers, providing guidance on education, career development, and life skills. Help youth develop confidence, set goals, and work towards achieving their dreams.",
    requirements: ["Experience working with youth", "Strong communication skills", "Commitment to youth development"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
  },
  {
    title: "Digital Skills Trainer",
    location: "Oromia Region",
    commitment: "10-15 hours per week",
    duration: "3 months",
    description:
      "Teach basic and intermediate computer skills to youth and women in our community centers. Help bridge the digital divide by providing training in computer basics, internet use, and productivity software.",
    requirements: [
      "Proficiency in computer applications",
      "Teaching or training experience",
      "Patience and good communication skills",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_72_2025-03-12_15-06-25.jpg-9hh8hXTVJNjM34Ipdkoe8iawH7oVrE.jpeg",
  },
  {
    title: "Agricultural Advisor",
    location: "Amhara Region",
    commitment: "Full-time for 1-3 months",
    duration: "1-3 months",
    description:
      "Support our sustainable agriculture programs by providing technical advice to farmers. Share knowledge on improved farming techniques, crop management, and sustainable practices to increase productivity and resilience.",
    requirements: [
      "Background in agriculture or related field",
      "Knowledge of sustainable farming practices",
      "Willingness to work in rural areas",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
  },
  {
    title: "Health Educator",
    location: "SNNPR",
    commitment: "15-20 hours per week",
    duration: "3-6 months",
    description:
      "Conduct health education sessions in communities on topics such as maternal and child health, nutrition, hygiene, and disease prevention. Help improve health knowledge and practices in underserved areas.",
    requirements: [
      "Background in healthcare or public health",
      "Experience in community education",
      "Cultural sensitivity",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
  },
  {
    title: "Communications Volunteer",
    location: "Addis Ababa (with field visits)",
    commitment: "10-20 hours per week",
    duration: "3-6 months",
    description:
      "Support our communications team in documenting and sharing our work. Help with photography, videography, story collection, social media, and content creation to raise awareness about our programs and impact.",
    requirements: [
      "Skills in photography, videography, or writing",
      "Social media experience",
      "Strong storytelling abilities",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_89_2025-03-12_15-06-25.jpg-tBOec0cZwjQR74PcN2Chr4YReexIfI.jpeg",
  },
  {
    title: "Women's Empowerment Facilitator",
    location: "Tigray Region",
    commitment: "15-20 hours per week",
    duration: "3-6 months",
    description:
      "Facilitate women's savings groups and business skills training. Support women in developing business plans, managing finances, and accessing markets to improve their economic independence.",
    requirements: [
      "Experience in business or finance",
      "Strong facilitation skills",
      "Commitment to women's empowerment",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
  },
]

export default function VolunteerOpportunitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-14_11-41-55.jpg-iGMFoK00tFUypZBOY3uZAHPHiaDvXU.jpeg"
              alt="Volunteer Opportunities"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Volunteer Opportunities</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Join Our Team as a Volunteer</h2>
              <p className="text-gray-700 mb-6">
                HEAL-Ethiopia welcomes volunteers who are passionate about making a difference in the lives of Ethiopian
                communities. Whether you have a few hours a week or can commit to several months, your skills and
                dedication can contribute to our mission of breaking the cycle of poverty.
              </p>
              <p className="text-gray-700">
                Our volunteer opportunities span various fields including education, healthcare, agriculture, women's
                empowerment, and communications. We match volunteers with roles that align with their skills, interests,
                and availability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={opportunity.image || "/placeholder.svg"}
                      alt={opportunity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{opportunity.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-green-600 mr-1" />
                        {opportunity.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-green-600 mr-1" />
                        {opportunity.commitment}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="h-4 w-4 text-green-600 mr-1" />
                        {opportunity.duration}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{opportunity.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {opportunity.requirements.map((req, i) => (
                          <li key={i} className="text-gray-700 text-sm">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Apply Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Volunteer Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Make an Impact</h4>
                  <p className="text-gray-700 text-sm">
                    Contribute directly to improving lives and communities in Ethiopia
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Briefcase className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Gain Experience</h4>
                  <p className="text-gray-700 text-sm">
                    Develop professional skills and international development experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cultural Exchange</h4>
                  <p className="text-gray-700 text-sm">
                    Immerse yourself in Ethiopian culture and build cross-cultural connections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">How to Apply</h3>
              <p className="text-gray-700 mb-8">
                If you're interested in volunteering with HEAL-Ethiopia, please complete our volunteer application form.
                Our volunteer coordinator will review your application and contact you to discuss potential
                opportunities that match your skills and interests.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Apply to Volunteer</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                    Contact Volunteer Coordinator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

