'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Cat, Dog, Fish, Bird, Rabbit } from "lucide-react"

const petCategories = [
  {
    name: "Perros",
    slug: "perros",
    icon: Dog,
    subcategories: [
      { name: "Alimento", slug: "alimento" },
      { name: "Juguetes", slug: "juguetes" },
      { name: "Camas", slug: "camas" },
      { name: "Collares y Correas", slug: "collares-y-correas" },
      { name: "Cuidado e Higiene", slug: "cuidado-e-higiene" }
    ]
  },
  {
    name: "Gatos",
    slug: "gatos",
    icon: Cat,
    subcategories: [
      { name: "Alimento", slug: "alimento" },
      { name: "Juguetes", slug: "juguetes" },
      { name: "Rascadores", slug: "rascadores" },
      { name: "Arena", slug: "arena" },
      { name: "Transportadoras", slug: "transportadoras" }
    ]
  },
  // ... (otros tipos de mascotas)
]

export default function PetSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-background border-r">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Categorías de Mascotas</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <Accordion type="multiple" className="w-full">
          {petCategories.map((category, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="hover:no-underline hover:bg-accent px-4">
                <div className="flex items-center space-x-2">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="py-2">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        href={`/mascotas/${category.slug}/${subcategory.slug}`}
                        className={`block px-4 py-2 hover:bg-accent ${
                          pathname === `/mascotas/${category.slug}/${subcategory.slug}` ? 'bg-accent' : ''
                        }`}
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </aside>
  )
}