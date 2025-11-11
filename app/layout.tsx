import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shubhanga C S - Developer, Designer & Mentor",
  description:
    "Portfolio of Shubhanga C S - Designer, Developer, and Mentor specializing in Flutter, Next.js, and Golang applications.",
  keywords: ["developer", "designer", "mentor", "flutter", "next.js", "golang", "portfolio"],
  authors: [{ name: "Shubhanga C S" }],
  openGraph: {
    title: "Shubhanga C S - Portfolio",
    description: "Designer and Developer helping brands craft impactful digital experiences",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
