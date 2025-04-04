"use client"

import { useState, useEffect } from "react"
import { FileText, Download, ExternalLink } from "lucide-react"

interface PublicationItem {
  _id: string
  title: string
  type: string
  description: string
  fileUrl: string
  thumbnailUrl: string
  publishedDate: string
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<PublicationItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeType, setActiveType] = useState("all")

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch("/api/publications")
        if (!response.ok) {
          throw new Error("Failed to fetch publications")
        }
        const data = await response.json()
        setPublications(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching publications:", error)
        setLoading(false)
      }
    }

    fetchPublications()
  }, [])

  const publicationTypes = ["all", ...Array.from(new Set(publications.map((p) => p.type)))]

  const filteredPublications = activeType === "all" ? publications : publications.filter((p) => p.type === activeType)

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Publications</h1>
            <p className="max-w-2xl mx-auto">Access our reports, research papers, and other publications.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 h-10 w-64 rounded-md animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="max-w-2xl mx-auto">Access our reports, research papers, and other publications.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-2 p-1">
            {publicationTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-md capitalize whitespace-nowrap ${
                  activeType === type ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {filteredPublications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => (
              <div key={publication._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                      <p className="text-sm text-gray-500 mb-2 capitalize">{publication.type}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        {new Date(publication.publishedDate).toLocaleDateString()}
                      </p>
                      <div
                        className="prose max-w-none mb-4"
                        dangerouslySetInnerHTML={{ __html: publication.description }}
                      />
                      <div className="flex space-x-3">
                        <a
                          href={publication.fileUrl}
                          download
                          className="flex items-center text-sm text-primary hover:text-primary/80"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </a>
                        <a
                          href={publication.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No publications available in this category.</p>
        )}
      </div>
    </div>
  )
}

