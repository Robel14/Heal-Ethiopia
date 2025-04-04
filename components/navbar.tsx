"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT US",
    href: "/about",
    dropdown: [
      { title: "Our Story", href: "/about/story" },
      { title: "Our Team", href: "/about/team" },
      { title: "Our Vision", href: "/about/vision" },
    ],
  },
  {
    title: "WHERE WE WORK",
    href: "/where-we-work",
    dropdown: [
      { title: "Addis Ababa", href: "/where-we-work/addis-ababa" },
      { title: "Amhara", href: "/where-we-work/amhara" },
      { title: "Oromia", href: "/where-we-work/oromia" },
      { title: "Tigray", href: "/where-we-work/tigray" },
      { title: "SNNPR", href: "/where-we-work/snnpr" },
    ],
  },
  {
    title: "IMPACTS",
    href: "/impacts",
    dropdown: [
      { title: "Projects", href: "/impacts/projects" },
      { title: "Publications", href: "/impacts/publications" },
      { title: "Reports", href: "/impacts/reports" },
    ],
  },
  {
    title: "ANNOUNCEMENT",
    href: "/announcement/news",
    dropdown: [
      { title: "News", href: "/announcement/news" },
      { title: "Volunteer Opportunities", href: "/announcement/volunteer-opportunities" },
    ],
  },
  {
    title: "CONTACT US",
    href: "/contact",
  },
]

export default function Navbar() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-ethiopia-green via-ethiopia-yellow to-ethiopia-red"></div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative h-16 w-16">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-04_04-52-20.jpg-osYFzvcsBGk5tfyWaIQWoRElMjSXRv.jpeg"
                alt="HEAL - Helping Ethiopia Achieve Longevity"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-ethiopia-red">HEAL</div>
              <div className="text-xs text-gray-600">Helping Ethiopia Achieve Longevity</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className="px-2 py-2 text-sm font-medium text-gray-800 hover:text-ethiopia-green transition-colors whitespace-nowrap"
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100 z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-ethiopia-green/10 hover:text-ethiopia-green"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right side elements */}
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search here..."
                  className="w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            <Link href="/donate">
              <Button className="bg-ethiopia-red hover:bg-ethiopia-red/90 text-white">Donate</Button>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search here..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost" size="icon" className="ml-1" aria-label="Search">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-ethiopia-green"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="px-3 py-1 text-sm text-gray-700 hover:text-ethiopia-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

