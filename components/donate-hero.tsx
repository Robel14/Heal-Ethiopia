import Image from "next/image"

export default function DonateHero() {
  return (
    <section className="relative h-[400px]">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-06-25.jpg-TTqX57rTTwAdCtE0fG9iqZYdYwKSp9.jpeg"
          alt="Donate to HEAL-Ethiopia"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Difference Today</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Your donation helps us continue our vital work in healthcare, education, and community development across
            Ethiopia.
          </p>
        </div>
      </div>
    </section>
  )
}

