import { Icons } from '@/components/Icons';
import { type SidebarNavItem } from '@/types';

export interface DashboardConfig {
	sidebarNav: SidebarNavItem[],
}

export const dashboardConfig: DashboardConfig = {
	sidebarNav: [
		{
			title: 'Perfil',
			href: '/dashboard',
			icon: Icons.profile,
			items: []
		},
		{
			title: 'Mascotas',
			href: '/dashboard/pets',
			icon: Icons.pet,
			items: [],
		},
		
	],
};
