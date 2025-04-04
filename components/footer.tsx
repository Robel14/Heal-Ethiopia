import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ethiopia-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HEAL-Ethiopia</h3>
            <p className="mb-4">
              Helping Ethiopia Achieve Longevity - Empowering communities and transforming lives through sustainable
              development initiatives.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ethiopia-yellow"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ethiopia-yellow"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ethiopia-yellow"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-ethiopia-yellow"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-ethiopia-yellow">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ethiopia-yellow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/where-we-work" className="hover:text-ethiopia-yellow">
                  Where We Work
                </Link>
              </li>
              <li>
                <Link href="/impacts" className="hover:text-ethiopia-yellow">
                  Impacts
                </Link>
              </li>
              <li>
                <Link href="/announcement" className="hover:text-ethiopia-yellow">
                  Announcement
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ethiopia-yellow">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Impact Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impacts/education" className="hover:text-ethiopia-yellow">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/impacts/healthcare" className="hover:text-ethiopia-yellow">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/impacts/community" className="hover:text-ethiopia-yellow">
                  Community Development
                </Link>
              </li>
              <li>
                <Link href="/impacts/stories" className="hover:text-ethiopia-yellow">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-ethiopia-yellow flex-shrink-0 mt-0.5" />
                <span>P.O. Box: 2473, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-ethiopia-yellow" />
                <span>+251 911-24-51-06 / 911-82-44-08</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-ethiopia-yellow" />
                <span>+251 111 564197 / 555841</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-ethiopia-yellow" />
                <Link href="mailto:demedere@gmail.com">demedere@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ethiopia-green/30 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} HEAL-Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

