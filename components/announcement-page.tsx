import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsHero from "@/components/news-hero"
import NewsList from "@/components/news-list"
import NewsFilter from "@/components/news-filter"

export default function AnnouncementPage() {
  return (
    <>
      <Navbar />
      <main>
        <NewsHero />
        <NewsFilter />
        <NewsList />
      </main>
      <Footer />
    </>
  )
}

