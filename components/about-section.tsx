export default function AboutSection() {
  return (
    <section id="o-mnie" className="relative py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            {/* Main image container */}
            <div
              className="relative w-full aspect-square overflow-hidden"
              style={{
                borderRadius: "45% 55% 65% 35% / 35% 45% 55% 65%",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src="/photo.jpg"
                alt="Wiktoria"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -left-14 md:-left-20 -bottom-20 z-10">
              <img
                src="/effect1.png"
                alt="Effect decoration"
                className="w-78 h-78 md:w-90 md:h-90 object-contain"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">Cześć, jestem Wiktoria</h2>
            <div className="space-y-4 text-primary-foreground/90 font-[family-name:var(--font-lato)] font-light leading-relaxed text-lg">
              <p>
                Mam 20 lat, a od dwóch z pasją zajmuję się pieczeniem.
              </p>
              <p>
                Choć na co dzień studiuję kryminologię, to w wolnych chwilach najchętniej spędzam czas w kuchni, tworząc słodkości, które cieszą oko i podniebienie.
              </p>
              <p>
                Pieczenie to dla mnie sposób na relaks, kreatywność i dzielenie się radością z innymi.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Dowóz w okolicy</h4>
                  <p className="text-primary-foreground/80 text-sm font-[family-name:var(--font-lato)] font-light">
                    Darmowy dowóz na terenie Kąkolewnicy i okolic
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Duże imprezy</h4>
                  <p className="text-primary-foreground/80 text-sm font-[family-name:var(--font-lato)] font-light">
                    Obsługa wesel, komunii i dużych przyjęć
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Personalizacja</h4>
                  <p className="text-primary-foreground/80 text-sm font-[family-name:var(--font-lato)] font-light">
                    Projekty dopasowane do Twoich potrzeb i preferencji
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">Ręczna robota</h4>
                  <p className="text-primary-foreground/80 text-sm font-[family-name:var(--font-lato)] font-light">
                    Każdy wypiek tworzony z pasją i dbałością o detale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}