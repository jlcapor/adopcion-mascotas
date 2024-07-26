import { Icons } from '@/components/shared/Icons';
import Link from 'next/link';
import ShelterRequestForm from './_components/ShelterRequestForm';

export default function RegisterShelterPage() {
	return (
		<div className="flex flex-col px-6 pb-20 pt-8">
			<div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-xl border p-5 shadow-md dark:shadow-none">
				<header className="flex flex-col space-y-2 text-center">
					<Link href="/">
						<Icons.pet className="mx-auto h-10 w-10" />
					</Link>
					<div className="flex flex-col gap-1">
						<h1 className="text-2xl font-semibold tracking-tight">Registro de Refugios</h1>
					</div>
				</header>
				<ShelterRequestForm />
			</div>
		</div>
	);
}
