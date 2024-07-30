'use client';

import MainNav from './MainNav';
import { SessionUser } from '@/types';
import AuthDropdown from './AuthDropdown';
import { siteConfig } from '@/config/site';

interface SiteHeaderProps {
	user?: SessionUser,
}
export function SiteHeader({ user }: SiteHeaderProps) {
	
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
      		<div className="container flex h-16 items-center">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<AuthDropdown user={user} className="ml-auto" />
					</nav>
				</div>
			</div>
		</header>
	);
}
