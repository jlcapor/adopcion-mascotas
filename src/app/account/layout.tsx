import SiteFooter from '@/components/layouts/SiteFooter';
import SiteHeader from '@/components/layouts/SiteHeader';

interface AccountLayoutProps {
	children: React.ReactNode,
}
export default function AccountLayout({ children }: AccountLayoutProps) {
	return (
		<div className="relative min-h-screen w-full flex flex-col">
			<SiteHeader />
			<div className="flex-1">{children}</div>
			<SiteFooter />
		</div>
	);
}

//https://appmaster.io/es/blog/creacion-de-una-aplicacion-para-la-adopcion-de-mascotas
