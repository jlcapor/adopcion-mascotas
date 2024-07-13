import { NavigationBar } from '@/components/layouts/NavigationBar/NavigationBar';
import SiteFooter from '@/components/layouts/SiteFooter';
import TopBar from '@/components/layouts/TopBar/TopBar';
import { SidebarProvider } from '@/context/SidebarContext';

export default function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<div className="relative flex min-h-screen flex-col">
				<TopBar />
				<NavigationBar />
				<div className="flex-1">{children}</div>
				<SiteFooter />
			</div>
		</SidebarProvider>
	);
}
