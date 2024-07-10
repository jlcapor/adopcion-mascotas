import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { GearIcon } from '@radix-ui/react-icons';
import { DogIcon, Heart, LogOut, PlusCircle } from 'lucide-react';

export default function ProfileDropdown() {
	return (
		<div className="ml-auto flex items-center gap-4">
			<Button size="sm" className="h-8 flex items-center justify-center gap-1 lg:gap-0">
				<PlusCircle className="h-5 lg:mr-2" />
				<span className="hidden lg:block">Crear Mascota</span>
			</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon" className="overflow-hidden rounded-full">
						<Image
							src={'/placeholder-user.jpg'}
							width={36}
							height={36}
							alt="Avatar"
							className="overflow-hidden rounded-full"
						/>
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">Jhon Vargas</p>
							<p className="text-xs leading-none text-muted-foreground">correo@corre.com</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
						{/* {user.role === 'refugio' ? <ShelterDropdownGroup /> : <AdopterDropdownGroup />} */}
						<ShelterDropdownGroup />
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link href="/">
							<LogOut className="mr-2 size-5" aria-hidden="true" />
							Cerrar sesión
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

function AdopterDropdownGroup() {
	return (
		<DropdownMenuGroup>
			<DropdownMenuItem asChild />
		</DropdownMenuGroup>
	);
}

async function ShelterDropdownGroup() {
	return (
		<DropdownMenuGroup>
			<DropdownMenuItem asChild>
				<Link href="">
					<DogIcon className="mr-2 size-5" aria-hidden="true" />
					Mascotas
					<DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem asChild>
				<Link href="">
					<Heart className="mr-2 size-5" aria-hidden="true" />
					Favoritos
					<DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
				</Link>
			</DropdownMenuItem>
			<DropdownMenuItem asChild>
				<Link href="">
					<GearIcon className="mr-2 size-5" aria-hidden="true" />
					Mi Perfil
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</Link>
			</DropdownMenuItem>
		</DropdownMenuGroup>
	);
}
