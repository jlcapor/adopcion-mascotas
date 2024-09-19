"use client";
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { Button, type ButtonProps } from '../ui/button';
import { Icons } from '../shared/Icons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { type Session } from 'next-auth';
import { DashboardIcon, ExclamationTriangleIcon, ExitIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import { LoadingButton } from '../shared/LoadingButton';

interface SiteHeaderProps extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>,
ButtonProps {
  session: Session | null
}

export default function AuthDropdown( { session, className, ...props}: SiteHeaderProps) {
  const user = session?.user
  if (!user) {
    return (
      <Button size="sm" className={cn(className)} {...props} asChild>
        <Link href="/auth/login">
          <LogIn className="h-5 w-5 mr-1" />
          Entrar
          <span className="sr-only">Entrar</span>
        </Link>
      </Button>
    )
  }
  
  const initials =  `${session?.user.name?.charAt(0) ?? ""}`
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
        <DropdownMenuGroup>
          {user.role === "ADMIN" ? (
            <DropdownMenuItem asChild>
            <Link href="/admin/orders" className="flex items-center space-x-2.5">
                <DashboardIcon className="size-5"  />
                <p className="text-sm">Dashboard</p>
              </Link>
            </DropdownMenuItem>
          ) : null}
        
            <DropdownMenuItem asChild>
              <Link href="/profile/pets" className="flex items-center space-x-2.5">
                <Icons.pet className="size-5" />
                <p className="text-sm">Mascotas</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center space-x-2.5">
                <Icons.user className="size-5" />
                <p className="text-sm">Perfil</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/favorites" className="flex items-center space-x-2.5">
                <Icons.heart className="size-5" />
                <p className="text-sm">Favoritos</p>
              </Link>
            </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex items-center">
          <ExitIcon className="mr-2 size-5" aria-hidden="true" />
          <SignoutConfirmation/>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


const SignoutConfirmation = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSignout = async () => {
    setIsLoading(true);
    try {
      await signOut({ callbackUrl: `${window.location.origin}/?redirect=false` });
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message, {
          icon: (
            <ExclamationTriangleIcon className="h-4 w-4 text-destructive" />
          ),
        });
      }
    }finally{
      setOpen(false);
      setIsLoading(false);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        className="px-2 py-1.5 text-sm text-muted-foreground outline-none"
        asChild
      >
        <button>Sign out</button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xs">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Desconectar
          </AlertDialogTitle>
          <AlertDialogDescription>
            ¿Estás seguro que deseas cerrar sesión?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <LoadingButton loading={isLoading} onClick={handleSignout}>
            Cerrar sesion
          </LoadingButton>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}




