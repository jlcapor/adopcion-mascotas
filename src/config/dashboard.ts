import { MainNavItem, SidebarNavItem } from '@/types';
import { USER_ROLE } from '@prisma/client';

export interface DashboardConfig {
	sidebarNav: SidebarNavItem[],
}

export const getSidebarNavDashboardConfig = (segments: string[]): DashboardConfig => {
	return {
		sidebarNav: [
			{
				title: 'Mascotas',
				href: '/admin/pets',
				icon: 'pet',
				active: segments.includes('pets'),
			},
			{
				title: 'Productos',
				href: '/admin/products',
				icon: 'product',
				active: segments.includes('products'),
			},
		],
	};
};
