"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

interface NewsItem {
  _id: string
  title: string
  excerpt: string
  featuredImage: string
  createdAt: string
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news")
        if (!response.ok) {
          throw new Error("Failed to fetch news")
        }
        const data = await response.json()
        setNews(data.slice(0, 3)) // Get the latest 3 news items
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news:", error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-4 h-64 animate-pulse">
              <div className="bg-gray-200 h-32 rounded-md mb-4"></div>
              <div className="bg-gray-200 h-6 rounded-md mb-2"></div>
              <div className="bg-gray-200 h-4 rounded-md w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
      {news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link href={`/news/${item._id}`} key={item._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.featuredImage || "/placeholder.svg?height=300&width=400"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                  <div className="mt-4 text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No news articles available.</p>
      )}
      <div className="text-center mt-8">
        <Link href="/news" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
          View All News
        </Link>
      </div>
    </div>
  )
}

