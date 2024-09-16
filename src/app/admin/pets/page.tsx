import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { Plus } from 'lucide-react';
import { type Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Mascotas',
	description: 'Administra tus mascotas',
};

export default function PetsPage() {
	return (
		<div className="grid items-center gap-8 pb-8 pt-6 lg:py-6">
			<div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
				<div className="flex items-center justify-between gap-2 md:mt-4">
					<h1 className="text-2xl font-bold tracking-tight">Mascotas</h1>
					<Link href="/admin/pets/new">
						<Button>
							<span className="hidden md:block">Crear mascota</span>{' '}
							<Plus size={18} className="h-5 md:ml-4" />
						</Button>
					</Link>
				</div>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        hfghfghfgh
      </div>
		</div>
	);
}
