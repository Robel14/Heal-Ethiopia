import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}

