import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Map from "@/components/map"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <Map />
      </main>
      <Footer />
    </>
  )
}

