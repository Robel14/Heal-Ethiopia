import Image from "next/image"
import { Button } from "@/components/ui/button"
import JoinUsSection from "@/components/join-us-section"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function AddisAbabaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gray-900">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/addis-ababa-skyline-pexels-photo-3889843-Yd0Iy9"
            alt="Addis Ababa"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work in Addis Ababa</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Supporting urban communities and sustainable development in Ethiopia's capital
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Addis Ababa</h2>
                <p className="text-gray-700 mb-4">
                  Addis Ababa, the capital and largest city of Ethiopia, faces unique challenges related to rapid
                  urbanization, infrastructure development, and social services. Our work in Addis Ababa focuses on
                  supporting vulnerable communities, improving access to healthcare and education, and promoting
                  sustainable urban development.
                </p>
                <p className="text-gray-700 mb-6">
                  Through partnerships with local organizations and government agencies, we implement programs that
                  address the specific needs of urban communities while building capacity for long-term sustainability.
                </p>
                <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
                  Learn More About Our Approach
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Addis Ababa cityscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Projects in Addis Ababa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Healthcare project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Urban Healthcare Initiative</h3>
                  <p className="text-gray-700 mb-4">
                    Improving access to quality healthcare services for underserved communities in Addis Ababa through
                    mobile clinics and health education programs.
                  </p>
                  <Link href="/impacts/projects/healthcare-access">
                    <Button variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Education project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Youth Education & Skills</h3>
                  <p className="text-gray-700 mb-4">
                    Providing educational support and vocational training for youth in urban areas to increase
                    employment opportunities and economic independence.
                  </p>
                  <Link href="/impacts/projects/youth-education">
                    <Button variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Water project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Water Access</h3>
                  <p className="text-gray-700 mb-4">
                    Implementing sustainable water solutions in urban neighborhoods to ensure clean water access and
                    improve sanitation practices.
                  </p>
                  <Link href="/impacts/projects/clean-water">
                    <Button variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-ethiopia-green text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Addis Ababa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <p className="text-xl">People Reached</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12</div>
                <p className="text-xl">Active Projects</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">8</div>
                <p className="text-xl">Local Partners</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3</div>
                <p className="text-xl">Years of Operation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <JoinUsSection />
      </main>
    </>
  )
}

