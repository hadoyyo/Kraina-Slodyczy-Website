import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Skontaktuj się ze mną</h2>
        <p className="text-lg text-primary-foreground/90 font-[family-name:var(--font-lato)] font-light mb-12 max-w-2xl mx-auto">
          Masz pytania lub chcesz złożyć zamówienie? Napisz lub zadzwoń - chętnie odpowiem na wszystkie pytania!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a
            href="mailto:wiktoria@kraina-slodyczy.pl"
            className="flex items-center justify-center gap-3 bg-white text-foreground p-6 rounded-2xl hover:shadow-lg transition-shadow"
          >
            <Mail className="w-6 h-6 text-accent" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground font-[family-name:var(--font-lato)] font-light">Email</div>
              <div className="font-[family-name:var(--font-lato)] font-normal">wiktoria@kraina-slodyczy.pl</div>
            </div>
          </a>

          <a
            href="tel:+48530020033"
            className="flex items-center justify-center gap-3 bg-white text-foreground p-6 rounded-2xl hover:shadow-lg transition-shadow"
          >
            <Phone className="w-6 h-6 text-accent" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground font-[family-name:var(--font-lato)] font-light">
                Telefon
              </div>
              <div className="font-[family-name:var(--font-lato)] font-normal">+48 530 020 033</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
