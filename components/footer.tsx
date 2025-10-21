"use client"

import { Instagram } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const navigateToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  const navigateToGallery = () => {
    router.push("/galeria")
  }

  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Kraina Słodyczy - Wiktoria Głowniak</h3>
            <p className="text-muted-foreground font-[family-name:var(--font-lato)] font-light text-sm leading-relaxed">
              Domowe wypieki na zamówienie, tworzone z pasją i z najlepszych składników.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Nawigacja</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 text-muted-foreground font-[family-name:var(--font-lato)] font-light text-sm">
                <li>
                  <button
                    onClick={() => navigateToSection("start")}
                    className="hover:text-accent transition-colors cursor-pointer text-left"
                  >
                    Start
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToSection("o-mnie")}
                    className="hover:text-accent transition-colors cursor-pointer text-left"
                  >
                    O mnie
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToSection("oferta")}
                    className="hover:text-accent transition-colors cursor-pointer text-left"
                  >
                    Oferta
                  </button>
                </li>
              </ul>
              <ul className="space-y-2 text-muted-foreground font-[family-name:var(--font-lato)] font-light text-sm">
                <li>
                  <button
                    onClick={() => navigateToSection("kontakt")}
                    className="hover:text-accent transition-colors cursor-pointer text-left"
                  >
                    Kontakt
                  </button>
                </li>
                <li>
                  <button
                    onClick={navigateToGallery}
                    className="hover:text-accent transition-colors cursor-pointer text-left"
                  >
                    Galeria
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Śledź mnie</h3>
            <a
              href="https://www.instagram.com/_krainaslodyczy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-[family-name:var(--font-lato)] font-light text-sm"
            >
              <Instagram className="w-5 h-5" />
              @_krainaslodyczy
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground font-[family-name:var(--font-lato)] font-light text-sm mb-8 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Kraina Słodyczy. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}