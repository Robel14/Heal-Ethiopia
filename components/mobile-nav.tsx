import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

interface NavItem {
  name: string
  href: string
  dropdown?: { name: string; href: string }[]
}

const MobileNav = () => {
  const navigationItems: NavItem[] = [
    { name: "About Us", href: "/about-us" },
    { name: "What We Do", href: "/what-we-do" },
    {
      name: "WHERE WE WORK",
      href: "/where-we-work",
      dropdown: [
        { name: "Addis Ababa", href: "/where-we-work/addis-ababa" },
        { name: "Amhara", href: "/where-we-work/amhara" },
        { name: "Oromia", href: "/where-we-work/oromia" },
        { name: "Tigray", href: "/where-we-work/tigray" },
        { name: "SNNPR", href: "/where-we-work/snnpr" },
      ],
    },
    { name: "Our Impact", href: "/our-impact" },
    { name: "News & Stories", href: "/news-stories" },
    { name: "Get Involved", href: "/get-involved" },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-1/2 md:w-3/5 lg:w-2/5">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Explore our site.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {navigationItems.map((item) => (
            <div key={item.name}>
              <Link href={item.href} className="block py-2 hover:underline">
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="ml-4">
                  {item.dropdown.map((dropdownItem) => (
                    <Link key={dropdownItem.name} href={dropdownItem.href} className="block py-2 hover:underline">
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

