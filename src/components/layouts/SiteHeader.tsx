import Link from 'next/link';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

export default function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
			<div className="container flex h-16 items-center">
				<div className="flex items-center gap-8">
					<Link href="/" className="hidden items-center space-x-2 lg:flex">
						<span className="hidden font-bold lg:inline-block">PetFriendly</span>
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
