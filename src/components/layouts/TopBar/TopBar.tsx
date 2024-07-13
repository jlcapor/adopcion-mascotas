import Link from 'next/link';
import React from 'react';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';
import { DogIcon } from 'lucide-react';

export default function TopBar() {
	return (
		<header className="hidden bg-background py-4 lg:block">
			<div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
				<Link href="/" className="hidden items-center space-x-2 lg:flex">
					<DogIcon className="h-5 w-5" />
					<span className="hidden font-bold lg:inline-block">PetFriendly</span>
					<span className="sr-only">Home</span>
				</Link>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<ProfileMenu />
					</nav>
				</div>
			</div>
		</header>
	);
}
