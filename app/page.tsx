"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import OfferSection from "@/components/offer-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScallopedBorder from "@/components/scalloped-border"
import ScallopedBorderBottom from "@/components/scalled-border-bottom"
import { ArrowUp } from "lucide-react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ScallopedBorder 
        topColor="rgb(247, 203, 205)"
        bottomColor="#fef7ff"
        className="-mb-1"
      />
      <AboutSection />
      <ScallopedBorderBottom
        topColor="rgb(247, 203, 205)"
        bottomColor="#fef7ff"
        className="-mt-1"
      />
      <OfferSection />
      <ScallopedBorder 
        topColor="rgb(247, 203, 205)"
        bottomColor="#fef7ff"
        className="-mb-1"
      />
      <ContactSection />
      <ScallopedBorderBottom
        topColor="rgb(247, 203, 205)"
        bottomColor="#fef7ff"
        className="-mt-1"
      />
      <Footer />

      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{
          backgroundColor: '#dc9b90',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e6a296ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#dc9b90';
        }}
        aria-label="Przewiń do góry"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </main>
  )
}