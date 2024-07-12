'use client';
import React from 'react';
import Link from 'next/link';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { cn } from '@/lib/utils';
import { DogIcon } from 'lucide-react';

export default function SiteHeader() {
	const [ isScrolled, setIsScrolled ] = React.useState(false);
	React.useEffect(
		() => {
			const changeBgColor = () => {
				window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
			};
			window.addEventListener('scroll', changeBgColor);
			return () => window.removeEventListener('scroll', changeBgColor);
		},
		[ isScrolled ]
	);
	return (
		<header
			aria-label="Header"
			className={cn('sticky top-0 z-50 w-full', isScrolled ? 'border-b bg-background' : 'bg-transparent')}
		>
			<div className="container flex h-16 max-w-screen-2xl items-center">
				<div className="flex items-center">
					<Link
						href="/"
						className="flex items-center h-auto  py-1.5 text-base hover:bg-neutral-800 focus:ring-0 dark:hover:bg-neutral-800 lg:hidden lg:mr-6"
					>
						<DogIcon className="h-5 w-5 mr-2 transition-all group-hover:scale-110" />
						<span className="font-bold">PetFriendly</span>
						<span className="sr-only">Home</span>
					</Link>
					<MainNav />
				</div>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center gap-4">
						<ProfileMenu />
						<MobileNav />
					</nav>
				</div>
			</div>
		</header>
	);
}
