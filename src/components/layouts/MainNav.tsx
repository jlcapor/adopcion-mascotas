'use client';

import Link from 'next/link';
import { Icons } from '../shared/Icons';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import { siteConfig } from '@/config/site';
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
} from '../ui/dropdown-menu';
import { type MainNavItem } from '@/types';
import { Button } from '../ui/button';
import { api } from '@/trpc/react'; 
import { Skeleton } from '../ui/skeleton';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';

interface MainNavProps {
  items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const { data: menuData, isLoading } = api.products.getPetCategories.useQuery();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="hidden gap-6 md:flex">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.pet className="h-6 w-6 text-primary" aria-hidden="true" />
        <span className="ml-2 text-xl font-semibold text-gray-900">{siteConfig.name}</span>
        {/* <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span> */}
      </Link>
      <nav className="flex items-center gap-2 sm:gap-1">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2" onClick={handleMenuOpen}>
              <AlignJustify className="h-5 w-5" />
              <span className="font-bold">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Selecciona un tipo de mascota</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isLoading ? (
              Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="px-2 py-1 flex justify-between items-center">
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
                      className="flex items-center justify-between w-full"
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
                            className="flex items-center justify-between w-full"
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
  );
}
