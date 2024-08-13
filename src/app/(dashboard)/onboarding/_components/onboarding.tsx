// @see https://github.com/juliusmarminge/acme-corp/blob/main/apps/nextjs/src/app/(dashboard)/onboarding/multi-step-form.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { Intro } from './intro';
import CreateShelter from './create-shelter';

interface OnboardingProps {
	userId: string,
}

export function Onboarding({ userId }: OnboardingProps) {
	
	const search = useSearchParams(); 
	const step = search.get('step');
	return (
		<AnimatePresence mode="wait">
			{!step && <Intro key="intro" />}
			{step === 'create-shelter' && <CreateShelter userId={userId}/>}
		</AnimatePresence>
	);
}

//125Julio_$_%_&_/