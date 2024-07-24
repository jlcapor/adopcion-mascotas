import { Icons } from '@/components/Icons';

export type DropdownItemsConfig = typeof dropdownItemsConfig;

export const dropdownItemsConfig = {
	shelterItems: [
		
		{
			title: 'Mascotas',
			icon: Icons.pet,
			href: '/shelter/pets',
		},
		{
			title: 'Mi Perfil',
			icon: Icons.profile,
			href: '/shelter',
		},
	],

    adopterItems: [
        {
            title: 'Mis Mascotas',
            icon: Icons.pet,
            href: '/adopter/pets',
        },
        {
            title: 'Mi Favoritos',
            icon: Icons.favorite,
            href: '/adopter/favorites',
        },
        {
            title: 'Mi Perfil',
            icon: Icons.profile,
            href: '/adopter',
        }
    ]
};
