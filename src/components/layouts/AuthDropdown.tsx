'use client'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { Icons } from '../shared/Icons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { Session } from 'next-auth';
import { ExitIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { api } from '@/trpc/react';



interface SiteHeaderProps extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>,
ButtonProps {
  session: Session | null
}

export default  function AuthDropdown( { session, className, ...props}: SiteHeaderProps) {
  const router = useRouter();
  const user = session?.user
  if (!user) {
    return (
      <Button size="sm" className={cn(className)} {...props} asChild>
        <Link href="/login">
          <LogIn className="h-5 w-5 mr-1" />
          Entrar
          <span className="sr-only">Entrar</span>
        </Link>
      </Button>
    )
  }
  
  const initials = `${session?.user.name?.charAt(0) ?? ""}`
  const { data: shelter } = api.shelter.getShelterByUserId.useQuery(
		user.id, {
			enabled: !!user.id,
      retry: false
		}
	);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className} asChild>
      <Button
          variant="secondary"
          className={cn("size-8 rounded-full", className)}
          {...props}
        >
        <Avatar className="size-8">
            <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        {user.role === "SHELTER" ? (
            <DropdownMenuItem className="cursor-pointer flex gap-2 items-center" onClick={() => router.push(shelter ? `/shelter/${shelter.id}` : "/onboarding")}>
                <Icons.dashboard className="mr-2 size-5" aria-hidden="true" />
                Dashboard
            </DropdownMenuItem>
        ) : user.role === "ADOPTER" ? (
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/profile/pets" className="flex items-center space-x-2.5">
                <Icons.pet className="size-5" />
                <p className="text-sm">Mi Mascotas</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center space-x-2.5">
                <Icons.user className="size-5" />
                <p className="text-sm">Mi Perfil</p>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ): null}

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/signout">
            <ExitIcon className="mr-2 size-4" aria-hidden="true" />
            Cerrar sesión
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


