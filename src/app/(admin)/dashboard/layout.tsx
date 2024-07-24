import SiteFooter from '@/components/layouts/SiteFooter';
import DashboardHeader from './_components/DashboardHeader';
import { DashboardSidebar } from './_components/DashboardSidebar';
import { SidebarProvider } from '@/context/SidebarContext';
import { getSession } from '@/lib/session';
import { notFound, redirect } from 'next/navigation';

interface AccountLayoutProps {
	children: React.ReactNode,
}
export default async function DashboardShelterLayout({ children }: AccountLayoutProps) {
	const session = await getSession();
	if (!session || session.user?.role !== 'ADMIN') {
		return notFound();
	}
	return (
		<SidebarProvider>
			<div className="flex min-h-screen flex-col space-y-6">
				<DashboardHeader session={session}/>
				<div className="container grid flex-1 gap-12 lg:grid-cols-[200px_1fr]">
					<DashboardSidebar />
					<main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
				</div>
				<SiteFooter />
			</div>
		</SidebarProvider>
	);
}

//https://appmaster.io/es/blog/creacion-de-una-aplicacion-para-la-adopcion-de-mascotas
