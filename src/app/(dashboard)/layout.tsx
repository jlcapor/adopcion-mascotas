import getCurrentUser from '@/actions/getCurrentUser';
import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { SidebarProvider } from '@/context/SidebarContext';

export default async function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	const user = await getCurrentUser();
	return (
		<SidebarProvider>
			<div className="relative flex min-h-screen flex-col">
				<SiteHeader user={user}/>
				<div className="flex-1">{children}</div>
				<SiteFooter />
			</div>
		</SidebarProvider>
	);
}
