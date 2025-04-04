import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SearchResults from "@/components/search-results"
import SearchForm from "@/components/search-form"

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main>
        <SearchForm />
        <SearchResults />
      </main>
      <Footer />
    </>
  )
}

