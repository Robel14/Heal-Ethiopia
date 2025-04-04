import Link from "next/link"

export default function ImpactSection() {
  return (
    <section className="bg-gradient-to-r from-[#078930] via-[#FCDD09] to-[#EB0028] py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Creating Lasting Change</h2>
        <p className="text-white mb-8 max-w-3xl mx-auto">
          Together, we can build stronger, healthier, and more resilient communities across Ethiopia. Your support makes
          our work possible.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/donate">
            <button className="bg-white text-[#078930] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md w-full sm:w-auto min-w-[200px]">
              Donate Now
            </button>
          </Link>
          <Link href="/volunteer">
            <button className="bg-white text-[#EB0028] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md w-full sm:w-auto min-w-[200px]">
              Volunteer With Us
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white text-[#0072C6] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md w-full sm:w-auto min-w-[200px]">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

