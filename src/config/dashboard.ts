import { Icons } from '@/components/Icons';
import { type SidebarNavItem } from '@/types';

export interface DashboardConfig {
	sidebarNav: SidebarNavItem[],
}

export const dashboardConfig: DashboardConfig = {
	sidebarNav: [
		{
			title: 'Refugios',
			href: '/dashboard/shelters',
			icon: Icons.profile,
			items: [],
		},
		
	],
};
