import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';
import { Onboarding } from './_components/onboarding';
import { Shell } from '@/components/shared/Shell';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import { authOptions } from '@/server/auth';
import { getShelterByUserId } from '@/lib/queries/shelter';

export default async function OnboardingPage() {
	const user = await getCurrentUser()
	if (!user || user.role !== 'SHELTER') {
		redirect(authOptions?.pages?.signIn ?? "/login")
	}

	const userShelter = await getShelterByUserId(user.id);
	if (userShelter) {
		redirect(`/shelter/${userShelter.id}/overview`); // Redirige al refugio del usuario
	}
	
	return (
		<Shell className="h-[calc(100vh-4rem)] max-w-screen-md">
			<React.Suspense fallback={<Skeleton className="size-fit" />}>
				<Onboarding userId={user.id}/>
			</React.Suspense>
		</Shell>
	);
}


