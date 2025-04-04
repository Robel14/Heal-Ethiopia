import type { Metadata } from "next"
import AudioHero from "@/components/audio-hero"
import AudioList from "@/components/audio-list"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Audio Content | HEAL Ethiopia",
  description: "Listen to audio content from HEAL Ethiopia",
}

export default function AudioPage() {
  return (
    <main className="min-h-screen">
      <AudioHero />
      <AudioList />
      <ScrollToTop />
    </main>
  )
}

