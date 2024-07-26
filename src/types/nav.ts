import { Icons } from '@/components/shared/Icons';
import { USER_ROLE } from '@prisma/client';

export type NavItem = {
	title: string,
	href: string,
	badge?: number,
	disabled?: boolean,
	external?: boolean,
	authorizeOnly?: USER_ROLE,
	icon?: keyof typeof Icons;
};


export type MainNavItem = NavItem;


export type  SidebarNavItem = {
    title: string;
    items: NavItem[];
    authorizeOnly?: USER_ROLE;
    icon?: keyof typeof Icons;
};
