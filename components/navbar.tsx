"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Instagram } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 150
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navigateToGallery = () => {
    router.push("/galeria")
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 relative">
          <div className="flex-1 flex items-center md:hidden">
            <a
              href="https://www.instagram.com/_krainaslodyczy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-32">
            <button
              onClick={() => scrollToSection("start")}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection("o-mnie")}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer"
            >
              O mnie
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-14 -translate-y-1/2 transition-all duration-300">
            <div
              className={cn(
                "rounded-full bg-white flex items-center justify-center transition-all duration-300 overflow-hidden",
                isScrolled ? "w-22 h-22" : "w-26 h-26 shadow-lg",
              )}
            >
              <div className={cn(
                "relative transition-all duration-300",
                isScrolled ? "w-22 h-22" : "w-26 h-26"
              )}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                  priority
                  sizes="(max-width: 768px) 80px, 96px"
                  quality={90}
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 justify-start pl-32">
            <div className="flex items-center gap-8 mr-auto">
              <button
                onClick={() => scrollToSection("oferta")}
                className="text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer"
              >
                Oferta
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className="text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer"
              >
                Kontakt
              </button>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={navigateToGallery}
                className="text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer"
              >
                Galeria
              </button>
              <a
                href="https://www.instagram.com/_krainaslodyczy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-end flex-1">
            <button className="p-2 z-10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-4 pt-16">
            <button
              onClick={() => scrollToSection("start")}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold"
            >
              Start
            </button>
            <button
              onClick={() => scrollToSection("o-mnie")}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("oferta")}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold"
            >
              Kontakt
            </button>
            <button
              onClick={navigateToGallery}
              className="text-foreground hover:text-accent transition-colors text-lg font-semibold"
            >
              Galeria
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}