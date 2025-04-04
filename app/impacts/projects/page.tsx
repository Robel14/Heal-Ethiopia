import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: "maternal-health",
    title: "Youth Empowerment Initiative",
    status: "Ongoing",
    location: "Addis Ababa, Oromia",
    description:
      "Empowering youth through education, skills development, and leadership training to create sustainable livelihoods and community engagement.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
    achievements: [
      "Trained over 500 youth in digital skills",
      "Established 2 youth centers with computer facilities",
      "Supported 50 youth-led community initiatives",
    ],
  },
  {
    id: "agricultural-development",
    title: "Sustainable Agriculture Program",
    status: "Ongoing",
    location: "Amhara, SNNPR",
    description:
      "Promoting sustainable farming practices, improving food security, and increasing agricultural productivity through training and resource provision.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
    achievements: [
      "Introduced drought-resistant crops to 200 farmers",
      "Established 15 community demonstration farms",
      "Increased crop yields by 30% for participating farmers",
    ],
  },
  {
    id: "youth-education",
    title: "Women's Economic Empowerment",
    status: "Ongoing",
    location: "Tigray, Oromia",
    description:
      "Supporting women through savings groups, business skills training, and market access to improve economic independence and household wellbeing.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
    achievements: [
      "Established 25 women's savings groups with 500+ members",
      "Provided business training to 300 women entrepreneurs",
      "Facilitated access to microloans for 150 women-led businesses",
    ],
  },
  {
    id: "clean-water",
    title: "Clean Water Initiative",
    status: "Completed",
    location: "SNNPR, Afar",
    description:
      "Improving access to clean water through well construction, water harvesting systems, and community water management training.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg",
    achievements: [
      "Constructed 30 wells serving 15,000 people",
      "Trained 50 community water committees",
      "Reduced waterborne diseases by 40% in target communities",
    ],
  },
  {
    id: "healthcare-access",
    title: "Maternal and Child Health Program",
    status: "Ongoing",
    location: "Addis Ababa, Amhara",
    description:
      "Enhancing maternal and child health through improved healthcare access, nutrition support, and health education.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
    achievements: [
      "Provided prenatal care to 2,000 mothers",
      "Trained 100 community health workers",
      "Established 5 mother-child health centers",
    ],
  },
  {
    id: "environmental-conservation",
    title: "Environmental Conservation Project",
    status: "Ongoing",
    location: "Oromia, SNNPR",
    description:
      "Protecting natural resources through reforestation, sustainable land management, and environmental education.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-12_15-05-16.jpg-qQxd8G6Lnzf9dW6GwMeiObsaY2009z.jpeg",
    achievements: [
      "Planted 50,000 trees across 10 communities",
      "Implemented soil conservation measures on 500 hectares",
      "Trained 1,000 farmers in sustainable land management",
    ],
  },
  // More projects...
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-06-25.jpg-TTqX57rTTwAdCtE0fG9iqZYdYwKSp9.jpeg"
              alt="Our Projects"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">Our Projects</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Current and Past Projects</h2>
              <p className="text-gray-700">
                HEAL-Ethiopia implements a variety of projects across different regions of Ethiopia, focusing on
                sustainable development, community empowerment, and improving quality of life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                      {project.status}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">Location: {project.location}</p>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <h4 className="font-semibold text-green-700 mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <Link href={`/impacts/projects/${project.id}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        View Project Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

