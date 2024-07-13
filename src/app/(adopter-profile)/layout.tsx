import { NavigationBar } from '@/components/layouts/NavigationBar/NavigationBar';
import SiteFooter from '@/components/layouts/SiteFooter';
import TopBar from '@/components/layouts/TopBar/TopBar';

interface AccountLayoutProps {
	children: React.ReactNode,
}
export default function AccountLayout({ children }: AccountLayoutProps) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<TopBar />
			<NavigationBar />
			<div className="flex-1">{children}</div>
			<SiteFooter />
		</div>
	);
}

//https://appmaster.io/es/blog/creacion-de-una-aplicacion-para-la-adopcion-de-mascotas
