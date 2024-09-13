import type { MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;
const links = {
	github: 'https://github.com/jlcapor/adopcion-mascotas',
	githubAccount: 'https://github.com/jlcapor',
	linkedinAccount: 'https://www.linkedin.com/in/jose-luis-capote-dsw/',
};
export const siteConfig = {
	name: 'Pet Shop',
	description: 'Adopta una mascota y transforma una vida. Explora nuestra variedad de animales en busca de un hogar amoroso y encuentra el compañero perfecto para ti',
	links,
	mainNav: [
		
		{
			title: 'Mascotas',
			href: '/pets',
			items: [],
		},
		{
			title: 'Servicios',
			href: '/services',
			items: [],
		},
		{
			title: 'Blog',
			href: '/blog',
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
