"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Categories for filtering
const categories = ["All", "Education", "Healthcare", "Community Support", "Youth Programs", "Agriculture", "Livestock"]

const images = [
  // Original images
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_16_2025-03-14_11-41-55.jpg-CgJ2ScNXqlHdglTYpZBhvwFcyJz7OX.jpeg",
    category: "Community Support",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_13_2025-03-14_11-41-55.jpg-NSgXOOG7fBTT7mQwT2tUGkvNAmX1Uf.jpeg",
    category: "Healthcare",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_14_2025-03-14_11-41-55.jpg-dsnFq24NmoNlYsosyvxwhphiwqJGBO.jpeg",
    category: "Youth Programs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_15_2025-03-14_11-41-55.jpg-3bHEHyi8AEKRznrb6YL8ALqiyZo4jM.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_17_2025-03-14_11-41-55.jpg-wkPUAhRhvwB4JWhLNLpjrWoMMrzSIM.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_19_2025-03-14_11-41-55.jpg-w7RaKeelE8OksWvF9LhumSsckQPols.jpeg",
    category: "Community Support",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_11_2025-03-14_11-41-55.jpg-UT5XjjdVg1dRjUg9GwlK978ZqSJArK.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_20_2025-03-14_11-41-55.jpg-MYW2hJ55rcwfe7UBZJkmelWvJOUqwH.jpeg",
    category: "Community Support",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_18_2025-03-14_11-41-55.jpg-y1OLgHt1oYEvPsyO0dfp2oevWjtWXt.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_12_2025-03-14_11-41-55.jpg-s1TTXtQS3UC2UEDf07yU5jjFNHTafd.jpeg",
    category: "Agriculture",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-12_15-05-16.jpg-7edrsPwrFOU0ZdnJEGZCkjAbw2IlNx.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_4_2025-03-12_15-06-25.jpg-7T1NZrk7supk9JOCfHJ7PtaCyuZ0g0.jpeg",
    category: "Economic Empowerment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-05-16.jpg-mMXrVxaVVNbQgYy54Bew4Y9vLaZVCX.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5_2025-03-12_15-06-25.jpg-VJTcLRgPSZFGChVGEt5efohdpriphp.jpeg",
    category: "Leadership",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_93_2025-03-12_15-06-25.jpg-WdMfFbCAgjs0d2XV5K5mC0yZm0ZcBR.jpeg",
    category: "Aid Distribution",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_94_2025-03-12_15-06-25.jpg-pXBq4yC17xwDaTAImCCiq1wpuar7PQ.jpeg",
    category: "Agriculture",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_95_2025-03-12_15-06-25.jpg-VaxDAFxde5CkaLVIHUFWO1wiADxqZU.jpeg",
    category: "Agriculture",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_96_2025-03-12_15-06-25.jpg-xoCacpyN1pYxpQ3OLga0cDzZNPCzDG.jpeg",
    category: "Livestock",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_97_2025-03-12_15-06-25.jpg-V6kiyfBdEHPy3NjOITllFS9ap9XjLg.jpeg",
    category: "Livestock",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_98_2025-03-12_15-06-25.jpg-7dsCtmKxOLKLxItstCKYndQqcS9h5R.jpeg",
    category: "Livestock",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_99_2025-03-12_15-06-25.jpg-plBmkdlZxEUEHmjngeJuhKFUGZP9oP.jpeg",
    category: "Livestock",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_100_2025-03-12_15-06-25.jpg-EE2UHxXVk3kdAAWTTJfqWofohkbzG9.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_91_2025-03-12_15-06-25.jpg-zSr8MLf3eyetxwID6e5yP8fpeo8hwi.jpeg",
    category: "Community",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_92_2025-03-12_15-06-25.jpg-mZBs7QEiqOl3OSWBO5R7dO5P4YCObF.jpeg",
    category: "Documentation",
  },

  // New images
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_87_2025-03-12_15-06-25.jpg-XUWwE5IfoLIghoKrDwMxfX9LSkTzlV.jpeg",
    category: "Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_84_2025-03-12_15-06-25.jpg-lpJZdCa2uGsQg2tAJEciJKWv8D8wLF.jpeg",
    category: "Meetings",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_83_2025-03-12_15-06-25.jpg-Z4jKLILrbXw2bwPcSclcYnmB3mAc1V.jpeg",
    category: "Infrastructure",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_81_2025-03-12_15-06-25.jpg-qOHlYfE7tsK0HKT2KmfsUu27f1owry.jpeg",
    category: "Community",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_82_2025-03-12_15-06-25.jpg-aP9YVxoZsCd5yBYKSpqgcoI5mrSdGh.jpeg",
    category: "Agriculture",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_85_2025-03-12_15-06-25.jpg-QwtOjcH1wv9FvQ4AY990rePGePL0ND.jpeg",
    category: "Agriculture",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
    category: "Healthcare",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_88_2025-03-12_15-06-25.jpg-2TjRsxT4SKxOvzGJL7UG8blwk3BW1J.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_89_2025-03-12_15-06-25.jpg-tBOec0cZwjQR74PcN2Chr4YReexIfI.jpeg",
    category: "Documentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_90_2025-03-12_15-06-25.jpg-HYgi1GgZHGOOymphhWGdEFzijh0Rki.jpeg",
    category: "Livestock",
  },

  // Hero slideshow images
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_8_2025-03-14_11-41-55.jpg-D9PWLX50kpkQwJAYoP3k1JZgtX7HuR.jpeg",
    category: "Youth",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_7_2025-03-14_11-41-55.jpg-Ey2d6N2oPepp00EjK5FEOvyQlGHMTD.jpeg",
    category: "Livelihoods",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-14_11-41-55.jpg-iGMFoK00tFUypZBOY3uZAHPHiaDvXU.jpeg",
    category: "Women",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5_2025-03-14_11-41-55.jpg-5qJKo9WATgq26e3InEFqOjcqGFfmfa.jpeg",
    category: "Youth",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_71_2025-03-12_15-06-25.jpg-jNfRxajwHamR01ScZyU7ubzId2ArZR.jpeg",
    category: "Team",
    description: "HEAL Ethiopia team members and staff",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_72_2025-03-12_15-06-25.jpg-9hh8hXTVJNjM34Ipdkoe8iawH7oVrE.jpeg",
    category: "Education",
    description: "Computer training and skills development program",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_73_2025-03-12_15-06-25.jpg-SdeP3SOzK1sXtVRu1KHaUuHDr4uUlP.jpeg",
    category: "Aid Distribution",
    description: "Distribution of essential supplies to communities",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg",
    category: "Agriculture",
    description: "Community farming initiative",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-WGFC18ypLPYT2bBYCzVvoqJ823CElI.jpeg",
    category: "Community Outreach",
    description: "Engagement with traditional communities",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_76_2025-03-12_15-06-25.jpg-SKY6PFtAtHRAnxOTTFxYKnW1lUFEEw.jpeg",
    category: "Community",
    description: "Community gathering and support programs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_77_2025-03-12_15-06-25.jpg-lySQYHf2iDNEKBGuorsLDEudkftn2Y.jpeg",
    category: "Women Empowerment",
    description: "Women's group meeting and training",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_78_2025-03-12_15-06-25.jpg-XwBjLIVuib4YnLmuqrFxEIMPo9uh1G.jpeg",
    category: "Economic Empowerment",
    description: "Small business development program",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_79_2025-03-12_15-06-25.jpg-hEsko1uqjAPjjX20u9m2IyGHnuFljN.jpeg",
    category: "Women Empowerment",
    description: "Women's community development project",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_80_2025-03-12_15-06-25.jpg-1QcW4Fs5h3GsfkU5mHP5yLUmhfTCkx.jpeg",
    category: "Agriculture",
    description: "Sustainable farming project results",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredImages, setFilteredImages] = useState(images)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(images)
    } else {
      setFilteredImages(images.filter((img) => img.category === activeCategory))
    }
  }, [activeCategory])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return

    if (e.key === "Escape") setSelectedImage(null)
    if (e.key === "ArrowLeft")
      setSelectedImage((prev) => (prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length))
    if (e.key === "ArrowRight") setSelectedImage((prev) => (prev === null ? null : (prev + 1) % filteredImages.length))
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, filteredImages])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Gallery</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                A visual journey through our work and impact across Ethiopia
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.category} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {image.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video & Audio Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Videos & Audio</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Videos</h3>
                <p className="text-gray-600 mb-4">
                  Watch videos about our programs, success stories, and community impact.
                </p>
                <Link href="/videos" className="inline-block">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    Watch Videos
                  </button>
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Audio</h3>
                <p className="text-gray-600 mb-4">
                  Listen to interviews, testimonials, and stories from our community.
                </p>
                <Link href="/audio" className="inline-block">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    Listen Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <button
                className="absolute left-4 text-white hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) =>
                    prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length,
                  )
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="absolute right-4 text-white hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev === null ? null : (prev + 1) % filteredImages.length))
                }}
              >
                <ChevronRight size={24} />
              </button>

              <div className="relative max-w-5xl w-full h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].category}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <p className="font-semibold text-lg">{filteredImages[selectedImage].category}</p>
                  <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

