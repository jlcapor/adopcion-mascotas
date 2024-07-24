'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User } from '@/types/data';
import { Icons } from '../Icons';
import { LogOut } from 'lucide-react';

interface AuthDropdownProps {
	user: User | null,
}

export default function ShelterDropdown({ user }: AuthDropdownProps) {
	if (!user) return null;
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
						<p className="text-sm font-medium leading-none">{user.name}</p>
						<p className="text-xs leading-none text-muted-foreground">{user.email}</p>
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={'/dashboard/pets/add-pet'} className="cursor-pointer flex gap-2 items-center">
							<Icons.add className="mr-2 size-5" aria-hidden="true" />
							Crear Mascota
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={'/dashboard/pets'} className="cursor-pointer flex gap-2 items-center">
							<Icons.pet className="mr-2 size-5" aria-hidden="true" />
							Mascotas
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={'/dashboard'} className="cursor-pointer flex gap-2 items-center">
							<Icons.profile className="mr-2 size-5" aria-hidden="true" />
							Perfil
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
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
