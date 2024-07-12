'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { DogIcon } from 'lucide-react';
import Link from 'next/link';
import { Icons } from '../Icons';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ScrollArea } from '../ui/scroll-area';

export default function MobileNav() {
	const isDesktop = useMediaQuery("(min-width: 1024px)")
	const [ open, setOpen ] = React.useState(false);
	if (isDesktop) return null
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					size="icon"
					variant="ghost"
					className="size-7 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
				>
					<Icons.menu aria-hidden="true" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="sm:max-w-xs">
				<div className="grid gap-6 text-lg font-medium">
					<Link href="#" className="flex items-center" onClick={() => setOpen(false)}>
						<DogIcon className="h-5 w-5 mr-2 transition-all group-hover:scale-110" />
						<span className="font-bold">PetFriendly</span>
						<span className="sr-only">Home</span>
					</Link>
				</div>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">

				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
