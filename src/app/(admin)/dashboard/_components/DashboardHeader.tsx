'use client';
import React from 'react';
import { dashboardConfig } from '@/config/dashboard';
import DashboardSidebarSheet from './DashboardSidebarSheet';
import Link from 'next/link';
import { Icons } from '../../../../components/Icons';
import { Session } from 'next-auth';
import AuthDropdown from '../../../../components/layouts/AuthDropdown';
interface DashboardHeaderProps {
	session: Session | null,
}
export default function DashboardHeader({ session }: DashboardHeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between py-4">
				<DashboardSidebarSheet items={dashboardConfig.sidebarNav} />
				<Link href="/" className="hidden items-center space-x-2 lg:flex">
					<Icons.pet className="size-7" aria-hidden="true" />
					<span className="hidden font-bold lg:inline-block">PetFriendly</span>
					<span className="sr-only">Home</span>
				</Link>
				<div className="flex items-center space-x-3">
					<AuthDropdown session={session} />
				</div>
			</div>
		</header>
	);
}
