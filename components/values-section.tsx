import { Shield, Heart, Users, Globe } from "lucide-react"

export default function ValuesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide our work and define our organizational culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">We uphold the highest ethical standards in all our actions and decisions.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600">We approach our work with empathy and a genuine desire to improve lives.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
            <p className="text-gray-600">We believe in the power of partnerships and community involvement.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
            <p className="text-gray-600">We develop solutions that create lasting positive change for generations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

