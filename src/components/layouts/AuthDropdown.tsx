import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronLeftIcon, DogIcon, Heart, Import, LayoutDashboard, LogOut, Plus } from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import type { MainNavItem } from '@/types';
import { User } from '@/types/data';

interface AuthDropdownProps {
	user: User | null
	items?: MainNavItem[],
}

export default function AuthDropdown({ user, items }: AuthDropdownProps) {

	if (!user) {
	  return (
		<Button size="sm" asChild>
		  <Link href="/auth/login">
			Entrar
			<span className="sr-only">Iniciar sesión</span>
		  </Link>
		</Button>
	  );
	}

	const initials = `${user.name?.charAt(0) ?? ""}`

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="secondary" size="icon" className="overflow-hidden rounded-full">
					<Avatar className="size-8">
						<AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
			  			<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end" forceMount>
				<div className="flex items-center justify-start gap-2 p-2">
					<div className="flex flex-col space-y-1 leading-none">
						<p className="text-sm font-medium leading-none">
							{user.name}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user.email}
						</p>
					</div>
				</div>
				<DropdownMenuSeparator />
				    {user.role === "ADMIN" ? (
						<DropdownMenuItem asChild >
							<Link href="/dashboard/shelters" className="cursor-pointer flex gap-2 items-center">
								<LayoutDashboard  className="mr-2 size-5" aria-hidden="true"/>
								Dashboard
							</Link>
						</DropdownMenuItem>
					) : (
						<>
							{items?.map((item, index) => {
								const Icon = item.icon ? item.icon : ChevronLeftIcon;
								return (
									<DropdownMenuItem key={index} className="cursor-pointer flex gap-2 items-center" asChild>
										<Link href={item.href ?? ""}>
											<Icon className="mr-2 size-5" aria-hidden="true"/>
											{item.title}
										</Link>
									</DropdownMenuItem>
								)
							})}
						</>
					)}
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="cursor-pointer"
					onSelect={(event) => {
						event.preventDefault();
						signOut({
							callbackUrl: `${window.location.origin}/auth/login`,
						}).catch((error) => {
							console.error('Error during sign out:', error);
						});
					}}
				>
					<LogOut className="mr-2 size-5" aria-hidden="true" />
					Cerrar sesión
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
