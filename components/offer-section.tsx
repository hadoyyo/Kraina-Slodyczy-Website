import * as React from 'react'
import { cn } from '@/lib/utils'
import Link from "next/link"
import Image from 'next/image'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

const products = [
  {
    title: "Torty",
    description:
      "Wyjątkowe torty na każdą okazję - urodziny, rocznice, chrzciny i inne imprezy okolicznościowe. Każdy projekt jest unikalny i dostosowany do Twoich życzeń.",
    image: "/torty/tort25.webp",
  },
  {
    title: "Bezy",
    description: "Delikatne, chrupiące bezy w różnych smakach i kolorach. Idealne na słodki stół lub jako prezent.",
    image: "/slodkosci/slodkosci6.jpg",
  },
  {
    title: "Ptysie",
    description: "Klasyczne ptysie z kremem waniliowym, czekoladowym lub owocowym. Zawsze świeże i pyszne.",
    image: "/slodkosci/slodkosci11.jpg",
  },
  {
    title: "Eklerki",
    description: "Eleganckie eklerki z różnymi nadzieniami i polewami. Perfekcyjne na przyjęcia i spotkania.",
    image: "/slodkosci/slodkosci2.jpg",
  },
  {
    title: "Babeczki",
    description: "Pyszne babeczki z kremowymi dekoracjami. Dostępne w wielu smakach.",
    image: "/slodkosci/slodkosci15.jpg",
  },
  {
    title: "Ice pops",
    description: "Rozpływająca się w ustach słodka przekąska, która znakomicie się sprawdzi podczas różnych imprez okolicznościowych.",
    image: "/slodkosci/slodkosci16.jpg",
  },
  {
    title: "Cake pops",
    description: "Urocze cake popsy - mini ciasta na patyku w różnych smakach i dekoracjach.",
    image: "/slodkosci/slodkosci4.jpg",
  },
]

export default function OfferSection() {
  return (
    <section id="oferta" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 relative z-10">
            Moja oferta
          </h2>
          <div className="absolute -top-1 md:-top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0">
            <Image
              src="/brush2.png"
              alt=""
              width={250}
              height={250}
              className="w-60 md:w-70"
            />
          </div>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-lato)] font-light max-w-2xl mx-auto relative z-10">
            Odkryj pełną gamę moich wypieków. Każdy produkt tworzony jest z najwyższą starannością.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.title}
              className="overflow-hidden border-2 border-border hover:border-accent transition-colors group p-0 z-10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-lato)] font-light leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/galeria"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-[family-name:var(--font-lato)] font-normal text-md cursor-pointer tracking-wide hover:opacity-90 transition-opacity"
          >
            Zobacz galerię
          </Link>
        </div>
      </div>
    </section>
  )
}