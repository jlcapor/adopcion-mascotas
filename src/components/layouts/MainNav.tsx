'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuPortal, 
  DropdownMenuSeparator, 
  DropdownMenuSub, 
  DropdownMenuSubContent, 
  DropdownMenuSubTrigger, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Icons } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import { api } from '@/trpc/react'
import { type MainNavItem } from '@/types'

interface MainNavProps {
  items?: MainNavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const { data: menuData, isLoading } = api.products.getPetCategoriesWithSubcategories.useQuery(undefined, {
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClose = () => {
    setIsOpen(false)
  }

  const handleMenuOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className="hidden lg:flex">
      <nav className="flex items-center gap-2 sm:gap-1">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2" onClick={handleMenuOpen}>
              <span className="font-bold">Categorias</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Selecciona un tipo de mascota</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isLoading ? (
              Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between px-2 py-1">
                  <Skeleton className="h-4 w-20 rounded bg-gray-400" />
                  <Skeleton className="h-4 w-4 rounded bg-gray-400" />
                </div>
              ))
            ) : (
              menuData?.map((petType) => (
                <DropdownMenuSub key={petType.id}>
                  <DropdownMenuSubTrigger>
                    <Link
                      href={`/search/${petType.slug}`}
                      className="flex w-full items-center justify-between"
                      onClick={handleMenuClose}
                    >
                      <span>{petType.name}</span>
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {petType.categories.map((category) => (
                        <DropdownMenuItem key={category.id} asChild>
                          <Link
                            href={`/search/${petType.slug}/${category.slug}`}
                            className="flex w-full items-center justify-between"
                            onClick={handleMenuClose}
                          >
                            <span>{category.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/products" className="flex items-center space-x-2.5" onClick={handleMenuClose}>
                <Icons.arrowRight className="size-5" />
                <p className="text-sm">Todos los productos</p>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {items?.map((item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                "mx-2",
                item.href.startsWith(`/${segment}`) ? "text-primary" : "text-muted-foreground",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          )
        )}
      </nav>
    </div>
  )
}