import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DoosMoos AirBend - Premium Wireless Earbuds | Bend The Rules of Sound",
  description:
    "Experience revolutionary DoosMoos AirBend wireless earbuds with bend technology, 48-hour battery life, active noise cancellation, and crystal-clear HD audio. Premium audio innovation.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  keywords: "wireless earbuds, premium audio, noise cancellation, bluetooth earbuds, DoosMoos AirBend",
  authors: [{ name: "DoosMoos" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://airbend.dosmoos.com",
    title: "DoosMoos AirBend - Premium Wireless Earbuds",
    description: "Bend the rules of sound with revolutionary wireless earbuds featuring bend technology.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oxMmilE90kh7uZcKXbr8YLiLrBxSN1.png",
        width: 1200,
        height: 630,
        alt: "DoosMoos AirBend Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoosMoos AirBend - Premium Wireless Earbuds",
    description: "Bend the rules of sound with revolutionary wireless earbuds.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oxMmilE90kh7uZcKXbr8YLiLrBxSN1.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
