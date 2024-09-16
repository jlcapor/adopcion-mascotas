import MainNav from './MainNav';
import AuthDropdown from './AuthDropdown';
import { type Session } from 'next-auth';
import CartSheet from '../checkout/CartSheet';
import { siteConfig } from '@/config/site';
import { ProductsCommand } from '../shared/ProductsCommand';

interface SiteHeaderProps {
	session: Session | null,
}
export function SiteHeader({ session }: SiteHeaderProps) {
	
	return (
		// relative z-10 flex max-w-max flex-1 items-center justify-center
		<header className="sticky top-0 z-50 w-full border-b bg-background">
			<div className="container flex h-16 items-center">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-3">
						<ProductsCommand/>
						<CartSheet />
						<AuthDropdown session={session} className="ml-auto" />
					</nav>
				</div>
			</div>
		</header>
	);
}
