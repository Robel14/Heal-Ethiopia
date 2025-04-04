import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative bg-blue-700 text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="About Heal Ethiopia"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Heal Ethiopia</h1>
          <p className="text-xl mb-8">
            We are a dedicated non-profit organization working to improve lives and create sustainable development in
            Ethiopia through community-driven initiatives.
          </p>
        </div>
      </div>
    </section>
  )
}

