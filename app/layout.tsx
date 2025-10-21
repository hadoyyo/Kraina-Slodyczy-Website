import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Kraina Słodyczy - Torty i Domowe Wypieki na zamówienie",
  description: "Domowe wypieki na zamówienie - torty, bezy, ptysie, eklerki, cake pops i więcej. Kąkolewnica, Międzyrzec Podlaski, Radzyń Podlaski - Darmowy dowóz!",
  keywords: [
    "torty na zamówienie",
    "tort na zamówienie",
    "domowe wypieki",
    "Kąkolewnica",
    "Międzyrzec Podlaski", 
    "Radzyń Podlaski",
    "bezy",
    "ptysie",
    "eklerki",
    "wypieki cukiernicze",
    "torty okolicznościowe"
  ].join(", "),
  authors: [{ name: "Kraina Słodyczy" }],
  creator: "Kraina Słodyczy",
  publisher: "Kraina Słodyczy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kraina-slodyczy.pl"),
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://kraina-slodyczy.pl",
    title: "Kraina Słodyczy - Torty i Domowe Wypieki na zamówienie",
    description: "Domowe wypieki na zamówienie - torty, bezy, ptysie, eklerki, cake pops i więcej. Kąkolewnica, Międzyrzec Podlaski, Radzyń Podlaski.",
    siteName: "Kraina Słodyczy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kraina Słodyczy - Domowe Wypieki na Zamówienie - Kąkolewnica i okolice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraina Słodyczy - Torty i Domowe Wypieki na zamówienie",
    description: "Torty, bezy, ptysie, eklerki, cake pops i więcej - Kąkolewnica i okolice",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}