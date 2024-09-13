import { MainNavItem, SidebarNavItem } from '@/types';
import { USER_ROLE } from '@prisma/client';

export interface DashboardConfig {
	sidebarNav: SidebarNavItem[],
}

export const getSidebarNavDashboardConfig = (segments: string[]): DashboardConfig => {
	return {
		sidebarNav: [
			{
				title: 'Ordenes',
				href: '/admin/orders',
				icon: 'order',
				active: segments.includes('orders'),
			},
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
			{
				title: 'Servicios',
				icon: 'service',
				href: '/admin/services',
				active: segments.includes('services'),
			}
		],
	};
};
