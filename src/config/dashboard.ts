import { Icons } from '@/components/Icons';
import { type SidebarNavItem } from '@/types';

export interface DashboardConfig {
	sidebarNav: SidebarNavItem[],
}

export const dashboardConfig: DashboardConfig = {
	sidebarNav: [
		{
			title: 'Mi Perfil',
			icon: Icons.profile,
			href: '/dashboard/shelter-profile',
		},
		{
			title: 'Mascotas',
			icon: Icons.pet,
			href: '/dashboard/pets',
		},
	],
};
