import getCurrentUser from '@/actions/getCurrentUser';
import SiteFooter from '@/components/layouts/SiteFooter';
import React from 'react';
import DashboardHeader from './_components/DashboardHeader';
import DashboardSidebar from './_components/DashboardSidebar';
import { SidebarProvider } from '@/context/SidebarContext';
interface DashboardLayoutProps {
	children: React.ReactNode,
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
	const user = await getCurrentUser();
	return (
		<SidebarProvider>
		<div className="flex min-h-screen flex-col space-y-6">
			<DashboardHeader user={user}/>
			<div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
			    <DashboardSidebar/>
				<main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
			</div>
			<SiteFooter />
		</div>
		</SidebarProvider>
	);
}
