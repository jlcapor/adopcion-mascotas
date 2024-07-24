import { Icons } from '@/components/Icons';
import Link from 'next/link';
import React from 'react';
import RegisterForm from './_components/RegisterForm';

export default async function RegisterPage() {
	
	return (
		<div className="flex flex-col px-6 pb-20 pt-8">
			<div className="mx-auto flex w-full max-w-lg flex-col gap-5 rounded-xl border p-5 shadow-md dark:shadow-none">
				<header className="flex flex-col space-y-2 text-center">
					<Link href="/">
						<Icons.pet className="mx-auto h-10 w-10" />
					</Link>
					<div className="flex flex-col gap-1">
						<h1 className="text-2xl font-semibold tracking-tight">Crea una cuenta</h1>
					</div>
				</header>
				<RegisterForm />
			</div>
		</div>
	);
}
