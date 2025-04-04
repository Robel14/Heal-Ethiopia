import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LocationsMap from "@/components/locations-map"
import RegionsGrid from "@/components/regions-grid"
import ImpactStats from "@/components/impact-stats"

export default function WhereWeWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <LocationsMap />
        <RegionsGrid />
        <ImpactStats />
      </main>
      <Footer />
    </>
  )
}

