import getCurrentUser from '@/actions/getCurrentUser';
import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { SidebarProvider } from '@/context/SidebarContext';
import { authOptions } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	const user = await getCurrentUser();
	if(!user || user.role !== 'ADOPTER'){
		redirect(authOptions?.pages?.signIn ?? "/")
	}
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
