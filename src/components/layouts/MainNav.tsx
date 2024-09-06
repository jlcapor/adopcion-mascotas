'use client';

import Link from 'next/link';
import { Icons } from '../shared/Icons';
import { cn } from '@/lib/utils';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { MainNavItem } from '@/types';

interface MainNavProps {
    items?: MainNavItem[],
}

export default function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname()
  
  return (
    <div className="hidden gap-6 md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-1.5">
        <Icons.pet className="mb-1 mr-1 size-6 text-muted-foreground fill-current" aria-hidden="true" />
				<span className="hidden font-bold md:inline-block">{siteConfig.name}</span>
			</Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link
                href="#"
                className={cn(
                    "transition-colors hover:text-foreground/80 flex items-center gap-2 font-medium text-sm",
                    pathname === "#" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Mascotas
                <ChevronDownIcon className="h-4 w-4" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                <Link href="/admin/pets" className="flex items-center space-x-2.5">
                <Icons.pet className="size-5"  />
                <p className="text-sm">Perros</p>
              </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {items?.length ? 
            items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    prefetch={true}
                    className={cn(
                      "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm h-12",
                      item.href === '/' && segment === null ? "text-foreground" :
                      item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                      item.disabled && "cursor-not-allowed opacity-80",
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )
            : null}
      </nav>
    </div>
  )
}

