import type { Metadata } from "next"
import EventsHero from "@/components/events-hero"
import EventsList from "@/components/events-list"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Events | HEAL Ethiopia",
  description: "Upcoming and past events organized by HEAL Ethiopia",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <EventsHero />
      <EventsList />
      <ScrollToTop />
    </main>
  )
}

