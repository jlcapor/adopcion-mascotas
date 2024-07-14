'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-dropdown-menu';

export default function AdopterTags() {
	const router = useRouter();
	const pathname = usePathname();

	const tabs = [
		{
			title: 'Mi Perfil',
			href: '/adopter',
			isActive: pathname === '/adopter',
		},
		{
			title: 'Mis Mascotas',
			href: '/adopter/pets',
			isActive: pathname === '/adopter/pets',
		},
        {
            title: 'Mis Favoritos',
            href: '/adopter/favorites',
            isActive: pathname === '/adopter/favorites',
        }
	];

	return (
		<Tabs
			defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
			className="sticky top-0 z-30 w-full overflow-auto bg-background px-1"
			onValueChange={(value) => router.push(value)}
		>
			<TabsList className="inline-flex items-center justify-center space-x-1.5 text-muted-foreground">
				{tabs.map((tab) => (
					<div
						role="none"
						key={tab.href}
						className={cn('border-b-2 border-transparent py-1.5', tab.isActive && 'border-foreground')}
					>
						<TabsTrigger
							value={tab.href}
							className={cn(
								"inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-semibold text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
								tab.isActive && "text-foreground"
							)}
						>
							{tab.title}
						</TabsTrigger>
					</div>
				))}
			</TabsList>
			<Separator />
		</Tabs>
	);
}
