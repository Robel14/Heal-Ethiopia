import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, BookOpen, Users, Award, Lightbulb } from "lucide-react"

export default function YouthEnlightenmentStoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
              alt="Youth Enlightenment Program"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">
                Youth Enlightenment: Transforming Lives Through Education
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Success Story
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <div className="text-gray-500 text-sm">Published: February 10, 2023</div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <p className="lead text-xl mb-6">
                    In the urban areas of Addis Ababa, many young people face significant challenges in accessing
                    quality education and developing the skills needed for meaningful employment. Our Youth
                    Enlightenment Program is changing this narrative by providing comprehensive educational support and
                    skills development.
                  </p>

                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                      alt="Youth in computer training"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">The Challenge</h2>
                  <p>
                    Youth unemployment in urban Ethiopia remains persistently high, with many young people lacking the
                    education and skills needed in today's job market. Limited access to technology, inadequate career
                    guidance, and few opportunities for practical skills development leave many youth feeling hopeless
                    about their future prospects.
                  </p>
                  <p>
                    For young people from disadvantaged backgrounds, these challenges are even more acute. Many are
                    forced to drop out of school to support their families, creating a cycle of limited opportunity that
                    is difficult to break.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Our Approach</h2>
                  <p>
                    In 2019, we launched the Youth Enlightenment Program with a comprehensive approach to youth
                    development:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <BookOpen className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-blue-700">Education Support</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Tutoring and academic support</li>
                          <li>School supplies and uniforms</li>
                          <li>Scholarships for higher education</li>
                          <li>Literacy programs for out-of-school youth</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <Lightbulb className="h-6 w-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-green-700">Skills Development</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Computer literacy and digital skills</li>
                          <li>Vocational training in high-demand fields</li>
                          <li>Entrepreneurship education</li>
                          <li>Financial literacy</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                            <Users className="h-6 w-6 text-yellow-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-yellow-600">Mentorship & Leadership</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>One-on-one mentoring with professionals</li>
                          <li>Leadership development workshops</li>
                          <li>Community service projects</li>
                          <li>Peer support networks</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                            <Award className="h-6 w-6 text-red-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-red-600">Career Development</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          <li>Career counseling and guidance</li>
                          <li>Job readiness training</li>
                          <li>Internship placements</li>
                          <li>Job search support and networking</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <div className="flex items-start">
                      <Quote className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
                      <blockquote className="italic">
                        "Before joining the Youth Enlightenment Program, I had dropped out of school and was working odd
                        jobs with no clear future. The program gave me a second chance. I completed my education,
                        learned computer skills, and now I work as an IT assistant at a local company. I can support my
                        family and I'm saving for university."
                        <footer className="text-gray-600 mt-2 not-italic">— Dawit, 22, Program Graduate</footer>
                      </blockquote>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">The Impact</h2>
                  <p>Since its inception, the Youth Enlightenment Program has achieved remarkable results:</p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="border-none shadow-md bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">Program Participants</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-green-700">1,200+</span>
                        </div>
                        <p className="text-gray-700 mt-2">Young people have participated in the program</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-blue-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Education Completion</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-blue-700">85%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Of participants complete their secondary education</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-purple-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Employment Rate</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-purple-700">70%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Of graduates secure employment or start businesses</p>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-yellow-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Higher Education</h3>
                        <div className="flex items-end">
                          <span className="text-4xl font-bold text-yellow-700">40%</span>
                        </div>
                        <p className="text-gray-700 mt-2">Of graduates continue to higher education</p>
                      </CardContent>
                    </Card>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Meron's Journey</h2>
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-6">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_8_2025-03-14_11-41-55.jpg-D9PWLX50kpkQwJAYoP3k1JZgtX7HuR.jpeg"
                      alt="Meron at her graduation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p>
                    Meron grew up in a low-income neighborhood in Addis Ababa. Her parents, both working long hours in
                    low-wage jobs, struggled to support the family. When Meron was 16, she considered dropping out of
                    school to help earn income.
                  </p>
                  <p>
                    A teacher referred Meron to our Youth Enlightenment Program. She received a scholarship to continue
                    her education, along with tutoring support that helped her excel in her studies. Through the
                    program's computer training, Meron discovered a passion for graphic design.
                  </p>
                  <p>
                    With mentorship from a professional designer and access to our computer lab, Meron developed
                    impressive skills. The program helped her secure an internship at a local marketing firm, which
                    later hired her as a junior designer. Today, Meron is pursuing a degree in digital media while
                    working part-time, and she mentors younger participants in the program.
                  </p>
                  <p>
                    "The program didn't just give me skills – it gave me confidence and a vision for my future," says
                    Meron. "Now I know I can achieve my dreams, and I want to help other young people do the same."
                  </p>

                  <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">Looking Forward</h2>
                  <p>
                    Building on the success of the Youth Enlightenment Program, we are expanding to reach more young
                    people in Addis Ababa and beyond. Key initiatives include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Opening a second youth center in another neighborhood of Addis Ababa</li>
                    <li>Developing advanced digital skills courses, including coding and web development</li>
                    <li>Creating a youth entrepreneurship incubator to support business startups</li>
                    <li>Establishing formal partnerships with employers for internship and job placement</li>
                  </ul>
                  <p>
                    We're also working to document and share our model with other organizations, creating a network of
                    youth development programs across Ethiopia.
                  </p>

                  <div className="flex justify-center mt-8">
                    <Link href="/donate">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">Support Youth Education</Button>
                    </Link>
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

