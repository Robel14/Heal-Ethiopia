import Link from "next/link"
import { Button } from "./ui/button"

const ProgramsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Program Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2">Program Name 1</h3>
            <p className="text-gray-700">
              Brief description of the program. This should give a general idea of what the program is about.
            </p>
          </div>

          {/* Program Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2">Program Name 2</h3>
            <p className="text-gray-700">
              Brief description of the program. This should give a general idea of what the program is about.
            </p>
          </div>

          {/* Program Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2">Program Name 3</h3>
            <p className="text-gray-700">
              Brief description of the program. This should give a general idea of what the program is about.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/programs">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection

