import { Shell } from '@/components/shared/Shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { env } from '@/env';
import { type Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Nueva mascota',
	description: 'Agregar una nueva mascota',
};
export default function page() {
	return (
		<Shell className="flex flex-col items-center">
			<Card className="w-full max-w-3xl p-2">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Crear mascota</CardTitle>
					<CardDescription className="font-medium">Agregar una nueva mascota</CardDescription>
				</CardHeader>
				<CardContent>

				</CardContent>
			</Card>
		</Shell>
	);
}
