'use client';

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import SidebarNav from '@/components/layouts/SidebarNav';
import { getSidebarNavDashboardConfig } from '@/config/dashboard';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '../shared/Icons';
import { siteConfig } from '@/config/site';
interface DashboardSidebarProps extends React.HTMLAttributes<HTMLElement> {
	shelterId: string,
	children?: React.ReactNode,
}
export function DashboardSidebar({ shelterId, children, className, ...props }: DashboardSidebarProps) {
	const segments = useSelectedLayoutSegments();
	const sidebarNav = getSidebarNavDashboardConfig(shelterId, segments);

	return (
		<aside className={cn('h-screen w-full', className)} {...props}>
			<div className="flex h-full max-h-screen flex-1 flex-col gap-2">
				<div className="hidden h-16 items-center p-4 lg:h-[60px] border-b border-border/60 px-6 lg:flex">
					<Link href="/" className="flex items-center space-x-3 px-4">
						<Icons.pet className="w-6 h-6 text-muted-foreground fill-current" aria-hidden="true" />
						<span className="font-bold">{siteConfig.name}</span>
					</Link>
				</div>
				<div className="flex flex-col gap-2.5 px-4 pt-6 lg:px-6 lg:pt-4">{children}</div>
				<ScrollArea className="h-[calc(100vh-8rem)] px-3 py-2.5 lg:px-5">
					<SidebarNav items={sidebarNav.sidebarNav} className="p-1 pt-4" />
				</ScrollArea>
			</div>
		</aside>
	);
}
