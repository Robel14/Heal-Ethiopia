import Image from "next/image"

export default function VolunteerHero() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/images/volunteer-hero.jpg"
        alt="Volunteers working in Ethiopia"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Volunteer With Us</h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl">
          Join our mission to create sustainable change in Ethiopia through your time and skills
        </p>
        <div className="mt-8">
          <a
            href="#volunteer-form"
            className="px-8 py-3 bg-[#ffc107] hover:bg-[#e6af06] text-black font-semibold rounded-md transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  )
}

