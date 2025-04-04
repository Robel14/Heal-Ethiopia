import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_16_2025-03-14_11-41-55.jpg-CgJ2ScNXqlHdglTYpZBhvwFcyJz7OX.jpeg",
    alt: "Community Support",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_13_2025-03-14_11-41-55.jpg-NSgXOOG7fBTT7mQwT2tUGkvNAmX1Uf.jpeg",
    alt: "Healthcare",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_14_2025-03-14_11-41-55.jpg-dsnFq24NmoNlYsosyvxwhphiwqJGBO.jpeg",
    alt: "Youth Programs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_15_2025-03-14_11-41-55.jpg-3bHEHyi8AEKRznrb6YL8ALqiyZo4jM.jpeg",
    alt: "Education",
  },
]

export default function GallerySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our work through images from across Ethiopia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <Link href="/gallery">
                  <Button variant="outline" className="bg-white/80 hover:bg-white">
                    View Larger
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button className="bg-green-600 hover:bg-green-700 text-white">View All Photos</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

