'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icons } from '../shared/Icons';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { MainNavItem } from '@/types';
import { siteConfig } from '@/config/site';

interface MainNavProps {
  items?: MainNavItem[],
}

export default function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="mr-4 flex items-center space-x-1.5">
        <Icons.pet className="mr-1 w-6 h-6 text-muted-foreground fill-current" aria-hidden="true" />
				<span className="font-bold">{siteConfig.name}</span>
			</Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href === '/' && segment === null ? "text-foreground" :
                    item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

