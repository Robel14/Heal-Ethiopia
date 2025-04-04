import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

const latestNews = {
  id: "news-1",
  title: "HEAL Ethiopia Launches New Youth Development Center",
  date: "March 14, 2023",
  summary:
    "A state-of-the-art youth development center has been inaugurated in Addis Ababa, featuring computer training facilities, recreational areas, and educational resources.",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
  category: "Latest News",
}

const newsItems = [
  {
    id: "news-2",
    title: "Partnership with Ministry of Health Announced",
    date: "February 15, 2023",
    summary:
      "HEAL Ethiopia has signed a memorandum of understanding with the Ministry of Health to collaborate on improving healthcare services in underserved communities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-14_11-41-55.jpg-9wk3XctmUTAoxpFp7E7UY0nBqeVmLl.jpeg",
    category: "Partnership",
  },
  {
    id: "news-3",
    title: "Annual Report Shows Significant Impact",
    date: "January 30, 2023",
    summary:
      "Our annual report for 2022 shows significant impact across all program areas, reaching over 20,000 beneficiaries through various initiatives.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-14_11-41-55.jpg-lGxbP6tUFNQJF63gNnweDw2Driq7QH.jpeg",
    category: "Report",
  },
  {
    id: "news-4",
    title: "New Water Project Completed in Oromia Region",
    date: "December 12, 2022",
    summary:
      "Hiwot Ethiopia has completed a major water project in the Oromia Region, providing clean water to five communities. The project included well construction, water distribution systems, and hygiene education.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
    category: "Project Completion",
  },
  {
    id: "news-5",
    title: "Hiwot Ethiopia Receives Award for Excellence",
    date: "November 5, 2022",
    summary:
      "Hiwot Ethiopia has been recognized with an award for excellence in nonprofit management by the Ethiopian Charities and Societies Agency. The award acknowledges the organization's transparency, effectiveness, and impact.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
    category: "Recognition",
  },
  {
    id: "news-6",
    title: "Youth Leadership Program Graduates 50 Young Leaders",
    date: "October 20, 2022",
    summary:
      "Fifty young people have graduated from Hiwot Ethiopia's Youth Leadership Program, equipped with skills in leadership, project management, and community mobilization. Many have already initiated projects in their communities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_14_2025-03-14_11-41-55.jpg-dsnFq24NmoNlYsosyvxwhphiwqJGBO.jpeg",
    category: "Program Update",
  },
]

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[300px]">
          <div className="absolute inset-0">
            <Image src={latestNews.image || "/placeholder.svg"} alt="News and Updates" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-white">News and Updates</h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Latest News Feature */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">Latest News</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={latestNews.image || "/placeholder.svg"}
                      alt={latestNews.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center text-gray-500 mb-2">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm">{latestNews.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">{latestNews.title}</h3>
                    <p className="text-gray-700 mb-6">{latestNews.summary}</p>
                    <Link href={`/news/${latestNews.id}`}>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">Read Full Story</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                      {item.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-500 mb-2">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.summary}</p>
                    <Link href={`/news/${item.id}`}>
                      <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <nav className="inline-flex">
                <Link href="/announcement/news?page=1">
                  <Button variant="outline" className="rounded-l-md border-r-0">
                    Previous
                  </Button>
                </Link>
                <Link href="/announcement/news?page=1">
                  <Button variant="outline" className="border-x-0 bg-blue-50">
                    1
                  </Button>
                </Link>
                <Link href="/announcement/news?page=2">
                  <Button variant="outline" className="border-x-0">
                    2
                  </Button>
                </Link>
                <Link href="/announcement/news?page=3">
                  <Button variant="outline" className="border-x-0">
                    3
                  </Button>
                </Link>
                <Link href="/announcement/news?page=2">
                  <Button variant="outline" className="rounded-r-md border-l-0">
                    Next
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700 mb-6">
                Stay informed about our work, impact stories, and upcoming events by subscribing to our monthly
                newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

