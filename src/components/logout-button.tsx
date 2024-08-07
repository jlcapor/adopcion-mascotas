"use client"

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import { Skeleton } from '@/components/ui/skeleton';
import { Button, buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { Icons } from './shared/Icons';

export function LogOutButton() {
  const router = useRouter()
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
        void signOut({ callbackUrl: `${window.location.origin}/?redirect=false` });
    } catch (error) {
      console.error('Error during sign-out:', error);
      
    }
  };

  return (
    <div className="flex w-full items-center space-x-2">
      {session ? (
        <Button
          aria-label="Log out"
          size="sm"
          className="w-full"
          onClick={handleSignOut}
          disabled={isLoading}
        >
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Cerrar sesion
        </Button>
      ) : (
        <Skeleton
        className={cn(
          buttonVariants({ size: "sm" }),
          "w-full bg-muted text-muted-foreground"
        )}
        >
          Cerrar sesion
        </Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isLoading}
      >
        Regresar
      </Button>
    </div>
  );
}