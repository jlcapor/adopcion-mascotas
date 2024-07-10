import SiteFooter from '@/components/layouts/SiteFooter';
import SiteHeader from '@/components/layouts/SiteHeader';
import React from 'react';

export default function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen w-full flex flex-col">
			<SiteHeader />
			<div className="flex-1">{children}</div>
			<SiteFooter />
		</div>
	);
}
