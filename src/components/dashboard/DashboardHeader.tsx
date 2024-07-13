'use client';
import ProfileMenu from '@/components/ProfileMenu/ProfileMenu';
import React from 'react';
import MainNav from '@/components/layouts/MainNav';
import { dashboardConfig } from '@/config/dashboard';
import DashboardSidebarSheet from './DashboardSidebarSheet';
import Link from 'next/link';
import { DogIcon } from 'lucide-react';

export default function DashboardHeader() {
	return (
		<header className="sticky top-0 z-40 border-b bg-background">
			<div className="container flex h-16 items-center justify-between py-4">
				<DashboardSidebarSheet items={dashboardConfig.sidebarNav} />
				<Link href="/" className="hidden items-center space-x-2 lg:flex">
					<DogIcon className="h-5 w-5" />
					<span className="hidden font-bold lg:inline-block">PetFriendly</span>
					<span className="sr-only">Home</span>
				</Link>
				<div className="flex items-center space-x-3">
					<ProfileMenu />
				</div>
			</div>
		</header>
	);
}
