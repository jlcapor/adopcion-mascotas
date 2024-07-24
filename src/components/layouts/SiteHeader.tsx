'use client';

import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import AuthDropdown from './AuthDropdown';
import { User } from '@/types/data';
import { Button } from '../ui/button';
import Link from 'next/link';
import ShelterDropdown from './ShelterDropdown';

interface SiteHeaderProps {
	user: User | null,
}
export function SiteHeader({ user }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-50 lg:px-4 px-2 w-full border-b bg-background">
			<div className="container flex h-16 max-w-screen-2xl items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none mr-3">searhc</div>
					<nav className="flex items-center space-x-2">
						{!user ? (
							<Button size="sm" asChild>
								<Link href="/auth/login">
									Entrar
									<span className="sr-only">Iniciar sesión</span>
								</Link>
							</Button>
						) : user.role === 'SHELTER' ? (
							<ShelterDropdown user={user} />
						) : (
							<AuthDropdown user={user} />
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
