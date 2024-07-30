"use client";

import React from 'react'
import { signOut } from 'next-auth/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from 'next/link';
import { LogIn, LogOut } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { Icons } from '../shared/Icons';
import { SessionUser } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

interface SiteHeaderProps extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>,
ButtonProps {
	user?: SessionUser,
}
export default function AuthDropdown( { user, className, ...props}: SiteHeaderProps) {
  
  if (!user) {
    return (
      <Link href="/login">
        <Button variant="ghost" className="relative h-8 w-8 rounded-sm">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-transparent">
              <LogIn className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </Link>
    )
  }
  const initials = `${user.name?.charAt(0) ?? ""}`
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
                {user?.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        {user.role === "SHELTER" ? (
            <DropdownMenuItem asChild>
              <Link href={`/shelter/${666}`}>
                <Icons.dashboard className="mr-2 size-5" aria-hidden="true" />
                Dashboard
              </Link>
            </DropdownMenuItem>
        ) : user.role === "ADOPTER" ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/account/pets" className="flex items-center space-x-2.5">
                <Icons.pet className="size-5" />
                <p className="text-sm">Mascotas</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account" className="flex items-center space-x-2.5">
                <Icons.user className="size-5" />
                <p className="text-sm">Mi Perfil</p>
              </Link>
            </DropdownMenuItem>
          </>
        ): null}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/`,
            });
          }}
        >
          <div className="flex items-center space-x-2.5">
            <LogOut className="size-4" />
            <p className="text-sm">Log out </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


