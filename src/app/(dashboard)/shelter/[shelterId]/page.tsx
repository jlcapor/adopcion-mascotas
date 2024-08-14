import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import UpdateShelterForm from './_components/update-shelter-form';
import { getShelterById } from '@/lib/queries/shelter';

interface ShelterOverviewPageProps {
	params: {
		shelterId: string,
	},
}
export default async function ShelterOverviewPage({ params }: ShelterOverviewPageProps) {
	const shelterId = params.shelterId;
	const shelter = await getShelterById(shelterId);
  
	if (!shelter) {
		notFound();
	}

	return (
		<div className="flex items-center justify-center pt-6 lg:py-6">
			<Card className="w-full max-w-3xl">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Refugio</CardTitle>
					<CardDescription>Actualiza la información de tu refugio</CardDescription>
				</CardHeader>
				<CardContent>
					<UpdateShelterForm shelter={shelter} />
				</CardContent>
			</Card>
		</div>
	);
}
