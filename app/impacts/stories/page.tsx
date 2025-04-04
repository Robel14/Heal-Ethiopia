import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const successStories = [
  {
    title: "From Dropout to Graduate",
    category: "Education",
    summary:
      "Mekonnen dropped out of school at age 12 to support his family. Through our education support program, he was able to return to school and eventually graduate from high school.",
    image: "/placeholder.svg?height=300&width=500",
    quote:
      "Education has given me opportunities I never thought possible. I can now dream of a better future for myself and my family.",
  },
  {
    title: "A Mother's Journey to Health",
    category: "Healthcare",
    summary:
      "Fatima faced complications during her pregnancy with limited access to healthcare. Our maternal health program provided her with prenatal care, a safe delivery, and postnatal support.",
    image: "/placeholder.svg?height=300&width=500",
    quote:
      "The support I received changed my life and the lives of my children. Now I'm helping other mothers in my community have healthy pregnancies and babies.",
  },
  {
    title: "Transforming a Village Through Water",
    category: "Community Development",
    summary:
      "Kebele village struggled with water scarcity until our water project helped them construct a well and establish a water management committee. This has transformed health, agriculture, and daily life in the village.",
    image: "/placeholder.svg?height=300&width=500",
    quote:
      "Our village has transformed in ways we never thought possible. We now have water, better harvests, and hope for the future.",
  },
  {
    title: "Women's Savings Group Success",
    category: "Economic Empowerment",
    summary:
      "A group of women in Adama started a savings group with our support. They have since launched successful small businesses, improved their families' wellbeing, and become leaders in their community.",
    image: "/placeholder.svg?height=300&width=500",
    quote:
      "Through our savings group, we've not only improved our economic situation but also gained confidence and respect in our community.",
  },
  {
    title: "Youth Leading Change",
    category: "Youth Development",
    summary:
      "A youth club in Bahir Dar received training and support to address local challenges. They initiated a community clean-up campaign that has improved the local environment and inspired others to take action.",
    image: "/placeholder.svg?height=300&width=500",
    quote:
      "We realized that we don't have to wait for others to solve our problems. We have the power to create positive change in our community.",
  },
  {
    title: "Farming for the Future",
    category: "Sustainable Agriculture",
    summary:
      "Farmers in Oromia learned sustainable farming techniques through our agricultural program. They have increased their yields, diversified their crops, and become more resilient to climate change.",
    image: "/placeholder.svg?height=300&width=500",
    quote:
      "The new farming methods have changed everything. My harvests are better, my soil is healthier, and my family is more food secure.",
  },
]

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src="/placeholder.svg?height=300&width=1200" alt="Success Stories" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Success Stories</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Stories of Transformation</h2>
              <p className="text-gray-700">
                Behind every statistic are real people whose lives have been transformed through our programs. These
                success stories illustrate the impact of our work and the resilience of the communities we serve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {successStories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                      {story.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{story.title}</h3>
                    <p className="text-gray-700 mb-4">{story.summary}</p>
                    <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4 py-2 mb-4">
                      "{story.quote}"
                    </blockquote>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Read Full Story</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Share Your Story</h3>
              <p className="text-gray-700 text-center mb-6">
                Have you been impacted by our programs? We'd love to hear your story and share it with others to inspire
                hope and action.
              </p>
              <div className="text-center">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">Submit Your Story</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Featured Story</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Abeba's Journey"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-xl font-bold text-green-700 mb-2">Abeba's Journey: From Struggle to Success</h4>
                    <p className="text-gray-700 mb-4">
                      Abeba grew up in a rural village where girls rarely completed their education. When her parents
                      couldn't afford to keep her in school, our education support program stepped in to help.
                    </p>
                    <p className="text-gray-700 mb-4">
                      With a scholarship, mentoring, and learning materials, Abeba not only completed high school but
                      went on to university. Today, she is a teacher in her community, inspiring other girls to pursue
                      their education.
                    </p>
                    <p className="text-gray-700 mb-4">
                      "Education changed everything for me. It opened doors I never knew existed and gave me the chance
                      to give back to my community. Now I'm helping the next generation of girls achieve their dreams."
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Read Abeba's Full Story</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

