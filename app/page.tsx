import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, Users, Heart, BookOpen, Lightbulb } from "lucide-react"
import ImageSlideshow from "@/components/image-slideshow"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section with Slideshow */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          <ImageSlideshow
            images={[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
                alt: "Community health workers providing care",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
                alt: "Children in educational program",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
                alt: "Agricultural training program",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
                alt: "Clean water initiative",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_13_2025-03-14_11-41-55.jpg-NSgXOOG7fBTT7mQwT2tUGkvNAmX1Uf.jpeg",
                alt: "Women's empowerment program",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_14_2025-03-14_11-41-55.jpg-dsnFq24NmoNlYsosyvxwhphiwqJGBO.jpeg",
                alt: "Healthcare outreach in rural areas",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_15_2025-03-14_11-41-55.jpg-3bHEHyi8AEKRznrb6YL8ALqiyZo4jM.jpeg",
                alt: "Youth development activities",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_16_2025-03-14_11-41-55.jpg-CgJ2ScNXqlHdglTYpZBhvwFcyJz7OX.jpeg",
                alt: "Community building project",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
                alt: "Educational materials distribution",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
                alt: "Healthcare professionals training",
              },
            ]}
            fullscreen={true}
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Empowering Communities for Sustainable Development
              </h1>
              <p className="text-xl text-white/90 mb-8">
                HEAL Ethiopia is dedicated to improving lives through integrated development programs in health,
                education, agriculture, and livelihoods across Ethiopia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Learn About Us
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                  >
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-green-600 py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">20+</p>
                <p className="text-lg">Years of Service</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">500K+</p>
                <p className="text-lg">Lives Impacted</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">120+</p>
                <p className="text-lg">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
                <p className="text-lg">Regional Offices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement integrated development programs that address the interconnected challenges facing Ethiopian
                communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
                      alt="Health Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Health & Nutrition</h3>
                    <p className="text-gray-600 mb-4">
                      Improving access to quality healthcare services, maternal and child health, nutrition, and
                      HIV/AIDS prevention and care.
                    </p>
                    <Link href="/programs/health">
                      <Button variant="link" className="p-0 text-green-600 hover:text-green-700 flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg"
                      alt="Education Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Education & Youth</h3>
                    <p className="text-gray-600 mb-4">
                      Enhancing access to quality education, youth development programs, and vocational training for
                      sustainable livelihoods.
                    </p>
                    <Link href="/programs/education">
                      <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700 flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg"
                      alt="Livelihoods Program"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Livelihoods & Agriculture</h3>
                    <p className="text-gray-600 mb-4">
                      Supporting sustainable livelihoods, food security, climate-resilient agriculture, and women's
                      economic empowerment.
                    </p>
                    <Link href="/programs/livelihoods">
                      <Button variant="link" className="p-0 text-yellow-600 hover:text-yellow-700 flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/programs">
                <Button className="bg-green-600 hover:bg-green-700 text-white">View All Programs</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery and Media Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery & Media</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our work through photos, videos, and audio content from our projects across Ethiopia.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/gallery">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                  Photo Gallery
                </Button>
              </Link>
              <Link href="/videos">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Videos
                </Button>
              </Link>
              <Link href="/audio">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8">
                  Audio Content
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_16_2025-03-14_11-41-55.jpg-CgJ2ScNXqlHdglTYpZBhvwFcyJz7OX.jpeg"
                  alt="Gallery Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_13_2025-03-14_11-41-55.jpg-NSgXOOG7fBTT7mQwT2tUGkvNAmX1Uf.jpeg"
                  alt="Gallery Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_14_2025-03-14_11-41-55.jpg-dsnFq24NmoNlYsosyvxwhphiwqJGBO.jpeg"
                  alt="Gallery Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_15_2025-03-14_11-41-55.jpg-3bHEHyi8AEKRznrb6YL8ALqiyZo4jM.jpeg"
                  alt="Gallery Preview"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Integrated Community Development Project</h2>
                <p className="text-gray-600 mb-6">
                  Our flagship project combines health, education, livelihoods, and environmental interventions to
                  create sustainable change in rural communities. Working with local partners and community members,
                  we've improved access to clean water, healthcare, education, and economic opportunities for over
                  50,000 people.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600">Oromia Region, Ethiopia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p className="text-gray-600">2020 - 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Beneficiaries</h4>
                      <p className="text-gray-600">50,000+ community members</p>
                    </div>
                  </div>
                </div>
                <Link href="/projects/integrated-development">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">View Project Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Voices from Our Communities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from the people whose lives have been transformed through our programs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-woman-1-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpg"
                        alt="Abeba Tadesse"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Abeba Tadesse</h3>
                      <p className="text-gray-600">Farmer, Oromia Region</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The agricultural training and support I received has transformed my farm. I've doubled my yield and
                    now grow a variety of crops that feed my family and provide income. My children can now attend
                    school regularly."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-man-1-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpg"
                        alt="Dawit Haile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Dawit Haile</h3>
                      <p className="text-gray-600">Youth Leader, Tigray Region</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The youth center has given us a place to learn, connect, and grow. Through the leadership program,
                    I've gained skills and confidence to start a community initiative that addresses local challenges."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial-woman-2-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpg"
                        alt="Fatuma Ahmed"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Fatuma Ahmed</h3>
                      <p className="text-gray-600">Community Health Worker</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "As a community health worker, I've seen remarkable changes in maternal and child health. Women now
                    seek prenatal care, deliver with skilled attendants, and practice better nutrition and hygiene."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating Lasting Change</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Together, we can build stronger, healthier, and more resilient communities across Ethiopia. Your support
              makes our work possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg border-2 border-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/announcement/volunteer-opportunities">
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 shadow-lg border-2 border-green-600"
                >
                  Volunteer With Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg border-2 border-yellow-500"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

