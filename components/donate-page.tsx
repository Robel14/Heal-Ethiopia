import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DonateHero from "@/components/donate-hero"
import DonateForm from "@/components/donate-form"
import DonateInfo from "@/components/donate-info"
import DonateImpact from "@/components/donate-impact"

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <DonateHero />
        <DonateForm />
        <DonateInfo />
        <DonateImpact />
      </main>
      <Footer />
    </>
  )
}

