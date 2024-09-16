import { getCurrentUser } from '@/lib/services/auth/session';
import { authOptions } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function PetAdoptionLayout({ children }: React.PropsWithChildren) {
	const user = await getCurrentUser();
	if (!user) {
		redirect(authOptions?.pages?.signIn ?? "/login")
	}
	return (
		<>
			<div className="flex-grow">
				{children}
			</div>
		</>
	);
}
