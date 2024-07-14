import Link from 'next/link';
import React from 'react';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';
import { Icons } from '@/components/Icons';

export default function TopBar() {
	return (
		<header className="hidden bg-background py-4 lg:block">
			<div className="max-w-container-lg mx-auto flex items-center justify-between px-4">
				<Link href="/" className="hidden items-center space-x-2 lg:flex">
					<Icons.pet className="h-6 w-6" />
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
