import * as React from 'react';
import MainNav from './MainNav';
import AuthDropdown from './AuthDropdown';
import { type Session } from 'next-auth';
import CartSheet from '../checkout/CartSheet';
import { siteConfig } from '@/config/site';
import { ProductsCommand } from '../shared/ProductsCommand';
import MobileNav from './MobileNav';
import Link from 'next/link';
import { Icons } from '../shared/Icons';

interface SiteHeaderProps {
	session: Session | null,
}

export function SiteHeader({ session }: SiteHeaderProps) {
		return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="sm:container mx-auto w-[95vw] h-16 flex items-center justify-between md:gap-2">
				<div className="flex items-center gap-5">
					<MobileNav />
					<div className="flex items-center gap-6">
						<div className="lg:flex hidden">
							<Logo />
						</div>
						<div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
							<MainNav items={siteConfig.mainNav} />
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<ProductsCommand />
					<CartSheet />
					<AuthDropdown session={session} />
				</div>
			</div>
		</header>
		
	);
}

export function Logo() {
	return (
		<Link href="/" className="flex items-center space-x-2">
			<Icons.pet className="h-6 w-6 text-muted-foreground fill-current" strokeWidth={3} />
			<h2 className="ml-2 text-xl font-semibold">{siteConfig.name}</h2>
		</Link>
	);
}
