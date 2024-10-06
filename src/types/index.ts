import type { Icons } from '@/components/shared/Icons';
import { Product, ProductImage, USER_ROLE } from '@prisma/client';
import { ClientUploadedFileData } from 'uploadthing/types';



export interface SearchParams {
	[key: string]: string | string[] | undefined
  }
  
  export interface Option {
	label: string
	value: string
	icon?: React.ComponentType<{ className?: string }>
	withCount?: boolean
  }

  export interface DataTableFilterField<TData> {
	label: string
	value: keyof TData
	placeholder?: string
	options?: Option[]
  }
  
  export interface DataTableFilterOption<TData> {
	id: string
	label: string
	value: keyof TData
	options: Option[]
	filterValues?: string[]
	filterOperator?: string
	isMulti?: boolean
  }

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


export type PickedProductImage = Pick<ProductImage, "id" | "name" | "url">

export type PickedProduct = Pick<
  Product,
  "id" | "name" | "price" | "stock" | "rating"
> & {
	productImages: PickedProductImage[]
}








