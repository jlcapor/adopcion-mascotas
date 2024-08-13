import { MainNavItem, SidebarNavItem } from '@/types';
import { USER_ROLE } from '@prisma/client';

export interface DashboardConfig {
	sidebarNav: SidebarNavItem[],
}

export const getSidebarNavDashboardConfig = (shelterId: string, segments: string[]): DashboardConfig => {
	return {
		sidebarNav: [
			{
				title: 'Refugio',
				href: `/shelter/${shelterId}/overview`,
				icon: 'shelter',
				active: segments.includes('overview'),
			},
			{
				title: 'Mascotas',
				href: `/shelter/${shelterId}/pets`,
				icon: 'pet',
				active: segments.includes('pets'),
			},
		],
	};
};
