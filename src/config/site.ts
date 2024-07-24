import type { MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;
const links = {
	github: 'https://github.com/jlcapor/adopcion-mascotas',
	githubAccount: 'https://github.com/jlcapor',
	linkedinAccount: 'https://www.linkedin.com/in/jose-luis-capote-dsw/',
};
export const siteConfig = {
	name: 'PetFriendl',
	links,
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
