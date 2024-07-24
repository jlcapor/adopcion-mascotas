import type { Icons } from '@/components/Icons';
import { User } from '@prisma/client';
import { z } from 'zod';

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


const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
})

type Auth = z.infer<typeof authSchema>
export type UserLoginForm = Pick<Auth, 'email' | 'password'>
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'password_confirmation'>






