import {getSession } from '@/lib/session';
import { authOptions } from '@/server/auth';
import { SidebarProvider } from '@/context/SidebarContext';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { redirect } from 'next/navigation';
import { DashboardSheetSidebar } from '@/components/dashboard/DashboardSheetSidebar';
import React from 'react';

interface DashboardLayoutProps {
	children: React.ReactNode,
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
	const session = await getSession()
	if (!session || session.user.role !== 'ADMIN') {
		redirect(authOptions?.pages?.signIn ?? "/")
	}

	return (
		<SidebarProvider>
			<div className="grid min-h-screen w-full lg:grid-cols-[17.5rem_1fr]">
				<DashboardSidebar className="top-0 z-30 hidden flex-col gap-4 border-r border-b bg-background lg:sticky lg:block">
					Admin
				</DashboardSidebar>
				<div className="flex flex-1 flex-col">
					<DashboardHeader session={session}>
						<DashboardSheetSidebar className="lg:hidden">
							<DashboardSidebar>
								
							</DashboardSidebar>
						</DashboardSheetSidebar>
					</DashboardHeader>
					<main className="flex-1 overflow-hidden px-6 pt-6">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
