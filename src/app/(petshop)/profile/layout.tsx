import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { Container } from '@/components/shared/Container';
import { SidebarProvider } from '@/context/SidebarContext';
import { getCurrentUser } from '@/lib/session';
import { authOptions } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function PetAdoptionLayout({ children }: React.PropsWithChildren) {
	const user = await getCurrentUser();
	if (!user) {
		redirect(authOptions?.pages?.signIn ?? "/login")
	}
	return (
		<div className="flex flex-col min-h-screen bg-secondary">
			<div className="flex-grow">
				<Container>{children}</Container>
			</div>
		</div>
	);
}
