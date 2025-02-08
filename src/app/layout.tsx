import "./globals.css"
import { Inter } from "next/font/google"
import Image from "next/image"
import type React from "react"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Spice Weave Garments",
  description: "Browse our wide selection of wholesale garments",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-white p-4 flex gap-4 items-center justify-center">
          <Image
            width='60'
            height='60'
            src={'/sw100.png'}
          />

          <h1 className="text-2xl font-bold text-[#d65b27]">Spice Weave Garments</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}

