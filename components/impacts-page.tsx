import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImpactsHero from "@/components/impacts-hero"
import ImpactsOverview from "@/components/impacts-overview"
import ImpactStats from "@/components/impact-stats"
import ProjectsPreview from "@/components/projects-preview"

export default function ImpactsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ImpactsHero />
        <ImpactsOverview />
        <ImpactStats />
        <ProjectsPreview />
      </main>
      <Footer />
    </>
  )
}

