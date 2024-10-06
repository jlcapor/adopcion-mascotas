'use client';

import { Icons } from '@/components/shared/Icons';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { AlignLeftIcon } from 'lucide-react';
import Link from 'next/link';

export interface DashboardSheetSidebarProps extends React.ComponentPropsWithRef<typeof SheetTrigger>, ButtonProps {
	children?: React.ReactNode,
}

export function DashboardSheetSidebar({ children, className, ...props }: DashboardSheetSidebarProps) {
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const { open, setOpen } = useSidebar();

	if (isDesktop) return null;

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost" 
					size="icon"
					className={cn(
						'size-7 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
						className
					)}
					{...props}
				>
					<AlignLeftIcon />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pl-1 pr-0 p-0 pt-4 w-[18.75rem]">
				<SheetClose asChild>
					<Link href="/" className="mx-6 flex items-center space-x-3" onClick={() => setOpen(false)}>
						<Icons.pet className="w-6 h-6 text-muted-foreground fill-current" aria-hidden="true" />
						<span className="font-bold">{siteConfig.name}</span>
					</Link>
				</SheetClose>
				{children}
			</SheetContent>
		</Sheet>
	);

	return <div className="flex size-9 animate-pulse rounded-lg bg-muted md:hidden" />;
}
