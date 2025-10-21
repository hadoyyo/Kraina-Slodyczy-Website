"use client"

import { useState, useEffect } from "react"

const images = [
  "/slodkosci/slodkosci13.jpg",
  "/torty/tort2.webp",
  "/slodkosci/slodkosci1.jpg",
  "/slodkosci/slodkosci20.jpg",
  "/torty/tort11.webp",
  "torty/tort17.jpg"
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section id="start" className="relative pt-32 pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Słodkie chwile,
              <span className="block text-accent">stworzone z pasją</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-[family-name:var(--font-lato)] font-light leading-relaxed">
              Każdy wypiek to wyjątkowa historia. Tworzę domowe ciasta, torty i desery, które zachwycają smakiem i
              wyglądem.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("oferta")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-[family-name:var(--font-lato)] font-normal text-md cursor-pointer tracking-wide hover:opacity-90 transition-opacity"
            >
              Zobacz ofertę
            </button>
          </div>

          {/* Right side */}
          <div className="relative flex justify-center items-center">
            <div
              className="relative w-full max-w-[400px] md:max-w-md aspect-[4/5] overflow-hidden transition-transform duration-500 mx-auto"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {images.map((src, index) => (
                <img
                  key={src}
                  src={src || "/placeholder.svg"}
                  alt={`Wypiek ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${isHovered ? "scale-110" : "scale-100"}`}
                />
              ))}
            </div>
            
            {/* Brush image */}
            <div className="absolute bottom-0 right-8 sm:right-26 md:right-2 h-80 md:h-90 z-10 transform  translate-y-1/2">
              <img
                src="/brush1.png"
                alt="Brush decoration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}