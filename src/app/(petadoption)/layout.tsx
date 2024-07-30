import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { getCurrentUser } from '@/lib/session';

export default async function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	const user = await getCurrentUser();
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader user={user} />
			<div className="flex-1">{children}</div>
			<SiteFooter />
		</div>
	);
}
