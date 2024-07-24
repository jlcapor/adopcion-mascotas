import getCurrentUser from '@/actions/getCurrentUser';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function AdopterLayout({ children }: { children: React.ReactNode }) {
	const session = await getCurrentUser();
	if (!session || session.role !== 'SHELTER') {
		return notFound();
	}
	return (
		<div className="relative flex min-h-screen flex-col">
			<div className="flex-1">{children}</div>
		</div>
	);
}
