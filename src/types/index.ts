import type { Icons } from '@/components/Icons';

export interface NavItem {
	title: string,
	href?: string,
	active?: boolean,
	disabled?: boolean,
	external?: boolean,
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
	label?: string,
	description?: string,
};

export interface NavItemWithChildren extends NavItem {
	items?: NavItemWithChildren[],
}

export type MainNavItem = NavItemWithChildren;
export type SidebarNavItem = NavItemWithChildren;
