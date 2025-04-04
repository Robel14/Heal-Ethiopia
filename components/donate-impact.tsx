import { Button } from "@/components/ui/button"

export default function DonateImpact() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Your Impact</h2>
            <p className="text-gray-700">
              See how your donation can make a real difference in the lives of Ethiopian communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 font-bold text-2xl mb-2">ETB 1,000</div>
              <p className="text-gray-700">
                Provides clean water access for a family for one month, preventing waterborne diseases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 font-bold text-2xl mb-2">ETB 5,000</div>
              <p className="text-gray-700">
                Supplies educational materials for 10 students, supporting their academic journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-green-600 font-bold text-2xl mb-2">ETB 10,000</div>
              <p className="text-gray-700">
                Funds healthcare services for 20 mothers and children in rural communities.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              For questions about donations or to discuss other ways to support our work, please contact us.
            </p>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Contact Our Donation Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

