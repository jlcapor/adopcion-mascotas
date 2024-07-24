import SiteFooter from '@/components/layouts/SiteFooter';
import AdminHeader from './_components/AdminHeader';
import { AdminSidebar } from './_components/AdminSidebar';
import { SidebarProvider } from '@/context/SidebarContext';
import { notFound } from 'next/navigation';
import getCurrentUser from '@/actions/getCurrentUser';

interface AccountLayoutProps {
	children: React.ReactNode,
}
export default async function AdminShelterLayout({ children }: AccountLayoutProps) {
	const user = await getCurrentUser();
	if (!user || user?.role !== 'ADMIN') {
		return notFound();
	}
	return (
		<SidebarProvider>
			<div className="flex min-h-screen flex-col space-y-6">
				<AdminHeader user={user}/>
				<div className="container grid flex-1 gap-12 lg:grid-cols-[200px_1fr]">
					<AdminSidebar />
					<main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
				</div>
				<SiteFooter />
			</div>
		</SidebarProvider>
	);
}

//https://appmaster.io/es/blog/creacion-de-una-aplicacion-para-la-adopcion-de-mascotas
