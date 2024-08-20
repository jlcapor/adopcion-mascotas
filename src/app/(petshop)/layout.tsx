import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { getSession } from '@/lib/session';

export default async function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	const session = await getSession();
	return (
		<div className="relative flex flex-col min-h-screen bg-secondary">
			<SiteHeader session={session} />
			<div className="flex-grow flex-1">{children}</div>
			<SiteFooter />
		</div>
	);
}
