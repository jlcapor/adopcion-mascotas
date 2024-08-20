import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { Shell } from '@/components/shared/Shell';

interface DashboardShelterPageProps {
	params: {
		shelterId: string,
	},
}

export default async function DashboardShelterPage() {
	return (
		<Shell className="flex flex-col items-center">
			<Card className="w-full max-w-3xl p-2">
				<CardHeader className="space-y-1">
					{/* <CardTitle className="text-2xl">{shelter.name}</CardTitle> */}
					<CardDescription className="font-medium">
						Aquí está la información completa de tu refugio
					</CardDescription>
				</CardHeader>
				<CardContent>
					
				</CardContent>
			</Card>
		</Shell>
	);
}
