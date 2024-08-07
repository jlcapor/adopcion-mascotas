import type { MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;
const links = {
	github: 'https://github.com/jlcapor/adopcion-mascotas',
	githubAccount: 'https://github.com/jlcapor',
	linkedinAccount: 'https://www.linkedin.com/in/jose-luis-capote-dsw/',
};
export const siteConfig = {
	name: 'Amor Peludo',
	description: 'Adopta una mascota y transforma una vida. Explora nuestra variedad de animales en busca de un hogar amoroso y encuentra el compañero perfecto para ti',
	links,
	mainNav: [
		{
			title: 'Inicio',
			href: '/',
			items: [],
		},
		{
			title: 'Mascotas',
			href: '/pets',
			items: [],
		},
		{
			title: 'Refugios',
			href: '/shelters',
			items: [],
		},
	] satisfies MainNavItem[],
	footerNav: [
		{
			title: 'Social',
			items: [
				{
					title: 'Github',
					link: links.githubAccount,
				},
				{
					title: 'Linkedin',
					link: links.linkedinAccount,
				},
			],
		},
	],
};
