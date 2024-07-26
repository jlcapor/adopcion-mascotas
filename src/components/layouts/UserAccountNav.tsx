"use client";

import React from 'react'
import { useState } from "react";
import { signOut } from 'next-auth/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { Icons } from '../shared/Icons';
import { SessionUser } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
interface SiteHeaderProps {
	user?: SessionUser,
}
export default function UserAccountNav( { user }: SiteHeaderProps) {
  
  if (!user){
    return (
      <Button
        variant="default"
        size="sm"
        rounded="lg"
        className="flex items-center gap-2 px-3"
      >
        <Link href="/login" className="flex items-center gap-2">
          <span>Entrar</span>
          <Icons.arrowRight className="size-4" />
          <span className="sr-only">Iniciar sesión</span>
        </Link>
      </Button>
    );
  }
  const initials = `${user.name?.charAt(0) ?? ""}`
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-8">
            <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        
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
          <>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/pets/add-pet" className="flex items-center space-x-2.5">
                <Icons.add className="size-5" />
                <p className="text-sm">Crear Mascota</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/pets" className="flex items-center space-x-2.5">
                <Icons.pet className="size-5" />
                <p className="text-sm">Mi Mascotas</p>
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem asChild>
              <Link href="/dashboard">
                <Icons.user className="mr-2 size-5" aria-hidden="true" />
                Mi Perfil
              </Link>
            </DropdownMenuItem>
          </>
        ) : user.role === "ADOPTER" ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/profile/pets" className="flex items-center space-x-2.5">
                <Icons.pet className="size-5" />
                <p className="text-sm">Mascotas</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center space-x-2.5">
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
