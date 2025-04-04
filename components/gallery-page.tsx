import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryHero from "@/components/gallery-hero"
import GalleryGrid from "@/components/gallery-grid"
import GalleryFilter from "@/components/gallery-filter"

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryFilter />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  )
}

