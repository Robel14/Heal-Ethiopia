import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Wrap the children with the SessionProvider
  // Find the return statement in the RootLayout component and modify it to:
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>HEAL-Ethiopia</title>
        <meta name="description" content="Helping Ethiopia Achieve Longevity" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="heal-theme">
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

