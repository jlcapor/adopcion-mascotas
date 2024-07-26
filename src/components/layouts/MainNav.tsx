'use client';
import Link from 'next/link';
import React from 'react';
import { Icons } from '../shared/Icons';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function MainNav() {
	const pathname = usePathname();
	return (
		<div className="mr-6 hidden gap-6 lg:flex">
			<Link href="/" className="mr-4 hidden items-center space-x-2 lg:flex lg:mr-6">
				<Icons.pet className="size-7" aria-hidden="true" />
				<span className="hidden font-bold lg:inline-block">PetFriendly</span>
				<span className="sr-only">Home</span>
			</Link>
			<nav className="flex items-center gap-4 text-sm lg:gap-6">
				<Link
					href="/"
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname === '/' ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					Inicio
				</Link>
				<Link
					href="/pets"
					className={cn(
					"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/pets") 
						? "text-foreground"
						: "text-foreground/60"
				  	)}
				>
					Mascotas
				</Link>
				<Link
					href="/shelters"
					className={cn(
						"transition-colors hover:text-foreground/80",
						pathname?.startsWith("/shelters")
						  ? "text-foreground"
						  : "text-foreground/60"
					  )}
				>
					Refugios
				</Link>
			</nav>
		</div>
	);
}
