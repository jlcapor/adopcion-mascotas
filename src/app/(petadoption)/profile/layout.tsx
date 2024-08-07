import SiteFooter from '@/components/layouts/SiteFooter';
import { SiteHeader } from '@/components/layouts/SiteHeader';
import { SidebarProvider } from '@/context/SidebarContext';
import { getCurrentUser } from '@/lib/session';
import { authOptions } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function PetAdoptionLayout({ children }: React.PropsWithChildren) {
	const user = await getCurrentUser();
	if(!user || user.role !== 'ADOPTER'){
		redirect(authOptions?.pages?.signIn ?? "/profile")
	}
	return (
		<div className='p-8'>
			{children}
		</div>
	);
}
