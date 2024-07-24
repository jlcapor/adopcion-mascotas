import MainNav from '@/components/layouts/MainNav';
import MobileNav from '@/components/layouts/MobileNav';
import ShelterDropdown from '@/components/layouts/ShelterDropdown';
import { User } from '@/types/data';
import React from 'react';

interface DashboardHeaderProps {
	user: User | null,
}
export default function DashboardHeader({ user }: DashboardHeaderProps) {
	return (
		<header className="sticky top-0 z-50 lg:px-4 px-2 w-full border-b bg-background">
			<div className="container flex h-16 items-center justify-between py-4">
				<MainNav/>
        <MobileNav />
        <div className="flex items-center space-x-3">
					<ShelterDropdown user={user} />
				</div>
			</div>
		</header>
	);
}
