import type { Icons } from '@/components/shared/Icons';
import { USER_ROLE } from '@prisma/client';
import { ClientUploadedFileData } from 'uploadthing/types';

export interface NavItem {
	title: string,
	href?: string,
	badge?: number;
	onClick?: () => void
	active?: boolean,
	disabled?: boolean,
	external?: boolean,
	authorizeOnly?: USER_ROLE;
	icon?: keyof typeof Icons;
	label?: string,
	description?: string,
}

export interface NavItemWithChildren extends NavItem {
	items?: NavItemWithChildren[]
}

export interface FooterItem {
	title: string
	items: {
	  title: string
	  href: string
	  external?: boolean
	}[]
}
export type MainNavItem = NavItemWithChildren

export type SidebarNavItem = NavItemWithChildren

export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> {}

export type ProductFile = {
	id: string;
	name: string
	url: string;
};











