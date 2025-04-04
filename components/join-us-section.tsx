import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JoinUsSection() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating Lasting Change</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Together, we can build stronger, healthier, and more resilient communities across Ethiopia. Your support makes
          our work possible.
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
  )
}

