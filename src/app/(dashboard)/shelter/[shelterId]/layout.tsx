import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import {getSession } from '@/lib/session';
import { authOptions } from '@/server/auth';
import { SidebarProvider } from '@/context/SidebarContext';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { redirect } from 'next/navigation';
import { DashboardSheetSidebar } from '@/components/dashboard/DashboardSheetSidebar';
import { db } from '@/server/db';
import { ShelterSwitcher } from '@/components/dashboard/ShelterSwitcher';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/trpc/react';
import { getSheltersByUserId } from '@/lib/queries/shelter';
import { Console } from 'console';

interface DashboardLayoutProps {
	params: {
		shelterId: string
	  }
	children: React.ReactNode,
}

export default async function DashboardLayout({ children, params }: DashboardLayoutProps) {
	const shelterId = params.shelterId
	const session = await getSession()
	if (!session || session.user.role !== 'SHELTER') {
		redirect(authOptions?.pages?.signIn ?? "/")
	}

	const sheltersPromise = getSheltersByUserId({ userId: session.user.id })
	
	return (
		<SidebarProvider>
			<div className="grid min-h-screen w-full lg:grid-cols-[17.5rem_1fr]">
				<DashboardSidebar shelterId={shelterId} className="top-0 z-30 hidden flex-col gap-4 border-r border-border/60 lg:sticky lg:block">
					<React.Suspense fallback={<Skeleton className="h-10 w-full" />}>
						<ShelterSwitcher
							userId={session.user.id}
							sheltersPromise={sheltersPromise}
						/>
					</React.Suspense>
				</DashboardSidebar>
				<div className="flex flex-1 flex-col">
					<DashboardHeader session={session}>
						<DashboardSheetSidebar className="lg:hidden">
							<DashboardSidebar shelterId={shelterId}>
								<React.Suspense fallback={<Skeleton className="h-10 w-full" />}>
									<ShelterSwitcher
										userId={session.user.id}
										sheltersPromise={sheltersPromise}
									/>
								</React.Suspense>
							</DashboardSidebar>
						</DashboardSheetSidebar>
					</DashboardHeader>
					<main className="flex-1 p-4 xl:px-8">
						<MaxWidthWrapper className="flex h-full max-w-7xl flex-col gap-4 px-0 lg:gap-6">
							{children}
						</MaxWidthWrapper>
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
