import { SidebarNavItem } from '@/types/nav';
import { USER_ROLE } from '@prisma/client';

export const sidebarLinks: SidebarNavItem[] = [
	{
		title: 'MENU',
		items: [
			{
				title: 'Refugio',
				icon: 'profile',
				href: '/shelter',
				authorizeOnly: USER_ROLE.SHELTER,
			},
			{
				title: 'Mascotas',
				icon: 'pet',
				href: '/shelter/pets',
				authorizeOnly: USER_ROLE.SHELTER,
			},
		],
	},
	{
		title: 'OPCIONES',
		items: [
			{
				href: '/',
				icon: 'home',
				title: 'Inicio',
			},
		],
	},
];
