import type { Metadata } from 'next';
import { env } from '@/env.js';
import { Shell } from '@/components/shared/Shell';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/shared/PageHeader';
import { LogOutButton } from '@/components/logout-button';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Desconectar', 
	description: 'Cerrar sesión en su cuenta',
};

export default function SignOutPage() {
	return (
		<Shell className="max-w-md">
			<PageHeader className="text-center">
				<PageHeaderHeading size="sm">Desconectar</PageHeaderHeading>
				<PageHeaderDescription size="sm">¿Estás seguro que deseas cerrar sesión?</PageHeaderDescription>
			</PageHeader>
			<LogOutButton />
		</Shell>
	);
}
