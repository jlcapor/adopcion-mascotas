
import MainNav from './MainNav';
import AuthDropdown from './AuthDropdown';
import { siteConfig } from '@/config/site';
import { Session } from 'next-auth';
import MobileNav from './MobileNav';


interface SiteHeaderProps {
	session: Session | null
}
export function SiteHeader({ session }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
      		<div className="container flex h-16 items-center">
				<MobileNav/>
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<AuthDropdown session={session} className="ml-auto" />
					</nav>
				</div>
			</div>
		</header>
	);
}
