'use client';

import React from 'react';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import AuthDropdown from './AuthDropdown';
import { DropdownItemsConfig, dropdownItemsConfig } from '@/config/dropdownItems';
import { User } from '@/types/data';

interface SiteHeaderProps {
	user: User | null;
}
export function SiteHeader({ user }: SiteHeaderProps) {

	const getDropdownItems = (role: string | undefined): DropdownItemsConfig[keyof DropdownItemsConfig] => {
		switch (role) {
		  case 'SHELTER':
			return dropdownItemsConfig.shelterItems;
		  case 'ADOPTER':
			return dropdownItemsConfig.adopterItems;
		  default:
			return [];
		}
	  };
	
	const dropdownItems = getDropdownItems(user?.role);
	
	return (
		<header className="sticky top-0 z-50 lg:px-4 px-2 w-full border-b bg-background">
			<div className="container flex h-16 max-w-screen-2xl items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none mr-3">searhc</div>
					<nav className="flex items-center space-x-2">
						<AuthDropdown user={user} items={dropdownItems} />
					</nav>
				</div>
			</div>
		</header>
	);
}
