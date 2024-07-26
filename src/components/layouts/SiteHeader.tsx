'use client';

import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { SessionUser } from '@/types';
import UserAccountNav from './UserAccountNav';

interface SiteHeaderProps {
	user?: SessionUser,
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
						<UserAccountNav user={user} />
					</nav>
				</div>
			</div>
		</header>
	);
}
