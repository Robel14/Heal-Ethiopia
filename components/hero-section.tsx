"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slideImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
    title: "Digital Skills Development",
    description: "Empowering youth through computer literacy and technology education",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_8_2025-03-14_11-41-55.jpg-D9PWLX50kpkQwJAYoP3k1JZgtX7HuR.jpeg",
    title: "Youth Empowerment",
    description: "Creating opportunities for education and personal development",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_48_2025-03-12_15-06-25.jpg-lI2mqp6Dc23a72cTibJjkMYG4Hm6EJ.jpeg",
    title: "Youth Education",
    description: "Supporting youth through education and uniform provision programs",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_46_2025-03-12_15-06-25.jpg-SurqupKYYd7BzqVqN01I1dj4eoHaW8.jpeg",
    title: "Community Programs",
    description: "Engaging youth in educational and development activities",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_44_2025-03-12_15-06-25.jpg-SU372DkMdTxIQ9VZYOMmW26djjtRpZ.jpeg",
    title: "Women's Programs",
    description: "Empowering women through skills development and community support",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_50_2025-03-12_15-06-25.jpg-WE4ftYMj7T88I2FLKj6bhkFpG1sOPn.jpeg",
    title: "Sustainable Agriculture",
    description: "Promoting sustainable farming practices and food security",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_53_2025-03-12_15-06-25.jpg-r9g0DhErI4elGWFdM6VoFweYjbaST0.jpeg",
    title: "Agricultural Training",
    description: "Teaching modern farming techniques and crop management",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_45_2025-03-12_15-06-25.jpg-o2XDjhrkxzwuXiGzboJM7IFH5GgTVM.jpeg",
    title: "Youth Development",
    description: "Building confidence and skills in young community members",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_7_2025-03-14_11-41-55.jpg-Ey2d6N2oPepp00EjK5FEOvyQlGHMTD.jpeg",
    title: "Sustainable Livelihoods",
    description: "Supporting communities through livestock and agricultural programs",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_1_2025-03-14_11-41-55.jpg-iGMFoK00tFUypZBOY3uZAHPHiaDvXU.jpeg",
    title: "Women's Empowerment",
    description: "Building stronger communities through women's leadership",
  },
]

export default function HeroSection() {
  // const [currentSlide, setCurrentSlide] = useState(0)

  // // Auto-advance slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [])

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  // }

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  // }

  // return (
  //   <section className="relative h-[500px] md:h-[600px]">
  //     <AnimatePresence mode="wait">
  //       <motion.div
  //         key={currentSlide}
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //         transition={{ duration: 1 }}
  //         className="absolute inset-0"
  //       >
  //         <Image
  //           src={slideImages[currentSlide].url || "/placeholder.svg"}
  //           alt={slideImages[currentSlide].title}
  //           fill
  //           className="object-cover"
  //           priority
  //         />
  //         <div className="absolute inset-0 bg-black/50"></div>
  //       </motion.div>
  //     </AnimatePresence>

  //     {/* Navigation arrows */}
  //     <button
  //       onClick={prevSlide}
  //       className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
  //       aria-label="Previous slide"
  //     >
  //       <ChevronLeft size={24} />
  //     </button>
  //     <button
  //       onClick={nextSlide}
  //       className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
  //       aria-label="Next slide"
  //     >
  //       <ChevronRight size={24} />
  //     </button>

  //     {/* Slide indicators */}
  //     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
  //       {slideImages.map((_, index) => (
  //         <button
  //           key={index}
  //           onClick={() => setCurrentSlide(index)}
  //           className={`w-3 h-3 rounded-full transition-colors duration-300 ${
  //             currentSlide === index ? "bg-white" : "bg-white/50"
  //           }`}
  //           aria-label={`Go to slide ${index + 1}`}
  //         />
  //       ))}
  //     </div>

  //     <div className="relative h-full flex items-center">
  //       <div className="container mx-auto px-4">
  //         <motion.div
  //           className="max-w-2xl text-white"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ delay: 0.5, duration: 0.8 }}
  //         >
  //           <h1 className="text-4xl md:text-5xl font-bold mb-4">{slideImages[currentSlide].title}</h1>
  //           <p className="text-lg md:text-xl mb-8">{slideImages[currentSlide].description}</p>
  //           <div className="flex flex-wrap gap-4">
  //             <Link href="/about">
  //               <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
  //             </Link>
  //             <Link href="/donate">
  //               <Button className="bg-red-600 hover:bg-red-700 text-white">Support Our Cause</Button>
  //             </Link>
  //           </div>
  //         </motion.div>
  //       </div>
  //     </div>
  //   </section>
  // )
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          opacity: 0.4,
        }}
      ></div>
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Helping Ethiopia Achieve Longevity</h1>
          <p className="text-xl mb-8">
            Empowering communities and transforming lives through sustainable development initiatives across Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about">
              <Button className="w-full sm:w-auto bg-ethiopia-green hover:bg-ethiopia-green/90">Learn More</Button>
            </Link>
            <Link href="/donate">
              <Button className="w-full sm:w-auto bg-ethiopia-red hover:bg-ethiopia-red/90">Donate Now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-ethiopia-green via-ethiopia-yellow to-ethiopia-red"></div>
    </section>
  )
}

