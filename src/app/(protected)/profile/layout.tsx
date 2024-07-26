import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { SidebarProvider } from '@/context/SidebarContext';
import { getCurrentUser } from '@/lib/session';
import { authOptions } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function PetAdoptionLayout({ children }: React.PropsWithChildren) {
	const user = await getCurrentUser();
	console.log(user?.role)
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
