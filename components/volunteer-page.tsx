import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VolunteerHero from "@/components/volunteer-hero"
import VolunteerForm from "@/components/volunteer-form"
import VolunteerInfo from "@/components/volunteer-info"
import VolunteerOpportunities from "@/components/volunteer-opportunities"

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main>
        <VolunteerHero />
        <VolunteerInfo />
        <VolunteerOpportunities />
        <VolunteerForm />
      </main>
      <Footer />
    </>
  )
}

