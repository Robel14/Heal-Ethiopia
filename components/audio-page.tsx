import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AudioHero from "@/components/audio-hero"
import AudioList from "@/components/audio-list"
import AudioFilter from "@/components/audio-filter"

export default function AudioPage() {
  return (
    <>
      <Navbar />
      <main>
        <AudioHero />
        <AudioFilter />
        <AudioList />
      </main>
      <Footer />
    </>
  )
}

