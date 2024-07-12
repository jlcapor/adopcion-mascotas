export type SiteConfig = typeof siteConfig;

const links = {
	github: 'https://github.com/sadmann7/skateshop',
};
export const siteConfig = {
	name: 'Skateshop',
    links,
    mainNav: [
        { 
            title: 'Home', 
            href: '/' 
        },
        {
            title: 'Adopta',
            href: '/adopta'
        }
    ]
};
