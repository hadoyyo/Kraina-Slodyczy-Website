"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight, Instagram, Menu, ArrowUp } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import ScallopedBorderBottom from "@/components/scalled-border-bottom"
import Footer from "@/components/footer"

type GalleryItem = {
  src: string
  category: "torty" | "słodkości"
}

const galleryImages: GalleryItem[] = [
  { src: "/torty/tort1.webp", category: "torty" },
  { src: "/torty/tort2.webp", category: "torty" },
  { src: "/torty/tort3.webp", category: "torty" },
  { src: "/torty/tort4.webp", category: "torty" },
  { src: "/torty/tort5.webp", category: "torty" },
  { src: "/torty/tort6.webp", category: "torty" },
  { src: "/torty/tort7.webp", category: "torty" },
  { src: "/torty/tort8.webp", category: "torty" },
  { src: "/torty/tort9.webp", category: "torty" },
  { src: "/torty/tort10.webp", category: "torty" },
  { src: "/torty/tort11.webp", category: "torty" },
  { src: "/torty/tort12.webp", category: "torty" },
  { src: "/torty/tort13.webp", category: "torty" },
  { src: "/torty/tort14.webp", category: "torty" },
  { src: "/torty/tort15.webp", category: "torty" },
  { src: "/torty/tort16.jpg", category: "torty" },
  { src: "/torty/tort17.jpg", category: "torty" },
  { src: "/torty/tort18.jpg", category: "torty" },
  { src: "/torty/tort19.jpg", category: "torty" },
  { src: "/torty/tort20.jpg", category: "torty" },
  { src: "/torty/tort21.webp", category: "torty" },
  { src: "/torty/tort22.webp", category: "torty" },
  { src: "/torty/tort23.webp", category: "torty" },
  { src: "/torty/tort24.webp", category: "torty" },
  { src: "/torty/tort25.webp", category: "torty" },
  { src: "/torty/tort26.webp", category: "torty" },
  { src: "/torty/tort27.webp", category: "torty" },
  { src: "/torty/tort28.webp", category: "torty" },
  { src: "/torty/tort29.webp", category: "torty" },
  { src: "/torty/tort30.webp", category: "torty" },
  { src: "/torty/tort31.webp", category: "torty" },
  { src: "/torty/tort32.webp", category: "torty" },
  { src: "/torty/tort33.webp", category: "torty" },
  { src: "/torty/tort34.webp", category: "torty" },
  { src: "/torty/tort35.webp", category: "torty" },
  { src: "/torty/tort36.webp", category: "torty" },
  { src: "/torty/tort37.webp", category: "torty" },
  { src: "/torty/tort38.webp", category: "torty" },
  { src: "/torty/tort39.webp", category: "torty" },
  { src: "/torty/tort40.webp", category: "torty" },
  { src: "/torty/tort41.webp", category: "torty" },

  { src: "/slodkosci/slodkosci1.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci2.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci3.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci4.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci5.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci6.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci7.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci8.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci9.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci10.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci11.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci12.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci13.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci14.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci15.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci16.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci17.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci18.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci19.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci20.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci21.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci22.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci23.jpg", category: "słodkości" },
  { src: "/slodkosci/slodkosci24.jpeg", category: "słodkości" },
  { src: "/slodkosci/slodkosci25.jpeg", category: "słodkości" },
  { src: "/slodkosci/slodkosci26.jpeg", category: "słodkości" },
  { src: "/slodkosci/slodkosci27.jpeg", category: "słodkości" },
  { src: "/slodkosci/slodkosci28.jpeg", category: "słodkości" }
]

type CategoryFilter = "wszystko" | "torty" | "słodkości"

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("wszystko")
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const buttonRefs = useRef<{ [key in CategoryFilter]: HTMLButtonElement | null }>({
    wszystko: null,
    torty: null,
    słodkości: null
  })
  const galleryRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const filteredImages = galleryImages.filter(image => 
    activeFilter === "wszystko" || image.category === activeFilter
  )

  // kategorie
  const categorizedImages = {
    torty: galleryImages.filter(image => image.category === "torty"),
    słodkości: galleryImages.filter(image => image.category === "słodkości")
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[activeFilter]
      if (activeButton) {
        const { offsetWidth, offsetLeft } = activeButton
        setIndicatorStyle({
          width: offsetWidth,
          left: offsetLeft
        })
      }
    }

    setTimeout(updateIndicator, 10)
    
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeFilter])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
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

  const openLightbox = (index: number) => {

    if (activeFilter !== "wszystko") {
      const imageSrc = filteredImages[index].src;
      const globalIndex = galleryImages.findIndex(img => img.src === imageSrc);
      setSelectedImage(globalIndex);
    } else {
      setSelectedImage(index);
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {

      // indeks sekcji - oryginalny
      const currentFilteredIndex = filteredImages.findIndex(img => img.src === galleryImages[selectedImage].src);
      const previousFilteredIndex = currentFilteredIndex === 0 ? filteredImages.length - 1 : currentFilteredIndex - 1;
      
      const previousImageSrc = filteredImages[previousFilteredIndex].src;
      const previousGlobalIndex = galleryImages.findIndex(img => img.src === previousImageSrc);
      
      setSelectedImage(previousGlobalIndex);
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      
      // indeks sekcji - oryginalny
      const currentFilteredIndex = filteredImages.findIndex(img => img.src === galleryImages[selectedImage].src);
      const nextFilteredIndex = currentFilteredIndex === filteredImages.length - 1 ? 0 : currentFilteredIndex + 1;
      
      const nextImageSrc = filteredImages[nextFilteredIndex].src;
      const nextGlobalIndex = galleryImages.findIndex(img => img.src === nextImageSrc);
      
      setSelectedImage(nextGlobalIndex);
    }
  }

  const handleFilterChange = (filter: CategoryFilter) => {
    if (filter === activeFilter) return
    
    setIsTransitioning(true)
    
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
    
    setTimeout(() => {
      setActiveFilter(filter)
    }, 300)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const scrollToSection = (id: string) => {
    router.push(`/#${id}`)
    setIsMobileMenuOpen(false)
  }

  const navigateToHome = () => {
    router.push("/")
    setIsMobileMenuOpen(false)
  }

  // klawiatura
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, filteredImages])

  return (
    <main className="min-h-screen">
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

            <button
              onClick={navigateToHome}
              className="hidden md:flex text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót
            </button>

            <div className="md:hidden flex items-center justify-end flex-1">
              <button
                onClick={navigateToHome}
                className="text-foreground hover:text-accent transition-colors text-lg font-semibold cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Powrót
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ backgroundColor: 'rgb(247, 203, 205)' }}>
        <div className="max-w-7xl mx-auto px-4 pt-38 pb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Galeria wypieków</h1>
            <p className="text-lg text-foreground font-[family-name:var(--font-lato)] font-light max-w-2xl mx-auto">
              Zobacz moje wcześniejsze realizacje
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative bg-white/30 rounded-full p-2 inline-flex">
              <div
                className="absolute bg-white rounded-full shadow-md transition-all duration-300 ease-in-out h-10 sm:h-12"
                style={{
                  width: `${indicatorStyle.width}px`,
                  left: `${indicatorStyle.left}px`,
                  top: isMobile ? '8px' : '10px'
                }}
              />

              <button
                ref={el => { buttonRefs.current.wszystko = el }}
                onClick={() => handleFilterChange("wszystko")}
                className={cn(
                  "cursor-pointer relative z-10 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-[family-name:var(--font-lato)] font-medium transition-colors duration-300 text-base sm:text-lg",
                  activeFilter === "wszystko"
                    ? "text-[#dc9b90] font-semibold"
                    : "text-foreground hover:text-[#dc9b90]",
                  isTransitioning && "pointer-events-none"
                )}
                disabled={isTransitioning}
              >
                Wszystko
              </button>

              <button
                ref={el => { buttonRefs.current.torty = el }}
                onClick={() => handleFilterChange("torty")}
                className={cn(
                  "cursor-pointer relative z-10 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-[family-name:var(--font-lato)] font-medium transition-colors duration-300 text-base sm:text-lg",
                  activeFilter === "torty"
                    ? "text-[#dc9b90] font-semibold"
                    : "text-foreground hover:text-[#dc9b90]",
                  isTransitioning && "pointer-events-none"
                )}
                disabled={isTransitioning}
              >
                Torty
              </button>

              <button
                ref={el => { buttonRefs.current.słodkości = el }}
                onClick={() => handleFilterChange("słodkości")}
                className={cn(
                  "cursor-pointer relative z-10 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-[family-name:var(--font-lato)] font-medium transition-colors duration-300 text-base sm:text-lg",
                  activeFilter === "słodkości"
                    ? "text-[#dc9b90] font-semibold"
                    : "text-foreground hover:text-[#dc9b90]",
                  isTransitioning && "pointer-events-none"
                )}
                disabled={isTransitioning}
              >
                Słodkości
              </button>
            </div>
          </div>
        </div>
      </div>

      <ScallopedBorderBottom 
        topColor="rgb(247, 203, 205)"
        bottomColor="#ffffff"
        className="-mt-1"
      />

      <div ref={galleryRef} className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {activeFilter === "wszystko" ? (
            <>
            {/* Sekcja Torty */}
            {categorizedImages.torty.length > 0 && (
              <section className={cn(
                "transition-all duration-500 ease-in-out delay-100 mb-10",
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                <div className="relative flex justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <Image
                        src="/brush3.png"
                        alt="Brush decoration"
                        width={200}
                        height={60}
                        className="mx-auto object-contain"
                      />
                      <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
                        Torty
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorizedImages.torty.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 group cursor-pointer transform"
                      onClick={() => {
                        const globalIndex = galleryImages.findIndex(img => img.src === image.src)
                        openLightbox(globalIndex)
                      }}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={`Tort ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Sekcja Słodkości */}
            {categorizedImages.słodkości.length > 0 && (
              <section className={cn(
                "transition-all duration-500 ease-in-out delay-100",
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                <div className="relative flex justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <Image
                        src="/brush2.png"
                        alt="Brush decoration"
                        width={200}
                        height={60}
                        className="mx-auto object-contain"
                      />
                      <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
                        Słodkości
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorizedImages.słodkości.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 group cursor-pointer transform"
                      onClick={() => {
                        const globalIndex = galleryImages.findIndex(img => img.src === image.src)
                        openLightbox(globalIndex)
                      }}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={`Słodkość ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
            </>
          ) : (
            <div className={cn(
              "transition-all duration-500 ease-in-out",
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            )}>
              {activeFilter === "torty" && categorizedImages.torty.length > 0 && (
                <div className={cn(
                  "transition-all duration-500 ease-in-out delay-100",
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                )}>
                  <div className="relative flex justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <Image
                          src="/brush3.png"
                          alt="Brush decoration"
                          width={200}
                          height={60}
                          className="mx-auto object-contain"
                        />
                        <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
                          Torty
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFilter === "słodkości" && categorizedImages.słodkości.length > 0 && (
                <div className={cn(
                  "transition-all duration-500 ease-in-out delay-100",
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                )}>
                  <div className="relative flex justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <Image
                          src="/brush2.png"
                          alt="Brush decoration"
                          width={200}
                          height={60}
                          className="mx-auto object-contain"
                        />
                        <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
                          Słodkości
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Galeria zdjęć */}
              <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out",
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 group cursor-pointer",
                      isTransitioning ? "transform translate-y-4" : "transform translate-y-0"
                    )}
                    style={{
                      transitionDelay: isTransitioning ? '0ms' : `${index * 50}ms`
                    }}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={`${activeFilter === "torty" ? "Tort" : "Słodkość"} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={`Zdjęcie ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain transition-transform duration-300"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {filteredImages.findIndex(img => img.src === galleryImages[selectedImage].src) + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      <button
        onClick={scrollToTop}
        className={cn(
          "cursor-pointer fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40",
          showScrollTop 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
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
      <Footer></Footer>
    </main>
  )
}