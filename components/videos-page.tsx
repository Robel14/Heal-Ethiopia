import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VideosHero from "@/components/videos-hero"
import VideosGrid from "@/components/videos-grid"
import VideosFilter from "@/components/videos-filter"

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main>
        <VideosHero />
        <VideosFilter />
        <VideosGrid />
      </main>
      <Footer />
    </>
  )
}

