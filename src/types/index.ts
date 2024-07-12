export type NavItem = {
	title: string,
	href?: string,
	active?: boolean,
	disabled?: boolean,
	external?: boolean,
	icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
	label?: string,
	description?: string,
};
