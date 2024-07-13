import SiteFooter from '@/components/layouts/SiteFooter';
import DashboardHeader from '../../../components/dashboard/DashboardHeader';
import { DashboardSidebar } from '../../../components/dashboard/DashboardSidebar';
import { SidebarProvider } from '@/context/SidebarContext';

interface AccountLayoutProps {
	children: React.ReactNode,
}
export default function DashboardShelterLayout({ children }: AccountLayoutProps) {
	return (
		<SidebarProvider>
			<div className="flex min-h-screen flex-col space-y-6">
				<DashboardHeader />
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
