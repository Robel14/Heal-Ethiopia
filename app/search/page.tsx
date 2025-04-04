"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock search results for demonstration
const generateSearchResults = (query: string) => {
  return [
    {
      title: `Education Program in ${query}`,
      description: `Our education initiatives in ${query} focus on improving access to quality education for children and youth.`,
      link: "/impacts/education",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: `Healthcare Services in ${query}`,
      description: `We provide essential healthcare services to communities in ${query}, focusing on preventive care and health education.`,
      link: "/impacts/healthcare",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: `Community Development in ${query}`,
      description: `Our community development programs in ${query} empower local residents to lead their own development initiatives.`,
      link: "/impacts/community",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: `Success Stories from ${query}`,
      description: `Read inspiring stories of transformation from individuals and communities in ${query}.`,
      link: "/impacts/stories",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const results = query ? generateSearchResults(query) : []

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-blue-700 mb-4">Search Results</h1>
              {query ? (
                <>
                  <p className="text-gray-700 mb-8">
                    Showing results for: <span className="font-semibold">"{query}"</span>
                  </p>

                  <div className="space-y-6">
                    {results.map((result, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 relative h-48 md:h-auto">
                            <Image
                              src={result.image || "/placeholder.svg"}
                              alt={result.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:w-3/4">
                            <h2 className="text-xl font-bold text-blue-700 mb-2">{result.title}</h2>
                            <p className="text-gray-700 mb-4">{result.description}</p>
                            <Link href={result.link}>
                              <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
                            </Link>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-700 mb-6">Please enter a search term to find content.</p>
                  <Link href="/">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white">Return to Home</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

