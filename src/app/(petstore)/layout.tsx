import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { getSession } from '@/lib/services/auth/session';

export default async function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	const session = await getSession();
	return (
		<>
			<SiteHeader session={session} />
			<div className="flex-1">{children}</div>
			<SiteFooter /> 
		</>
	);
}
