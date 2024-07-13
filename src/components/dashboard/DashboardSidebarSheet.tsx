'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import Link from 'next/link';
import { ChevronLeftIcon, DogIcon } from 'lucide-react';
import { useSelectedLayoutSegments } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { SidebarNavItem } from '@/types';
import { useSidebar } from '@/hooks/UseSidebar';

export interface DashboardSidebarSheetProps {
	items: SidebarNavItem[],
}
export default function DashboardSidebarSheet({ items }: DashboardSidebarSheetProps) {
	const { open, setOpen } = useSidebar()
	const segment = useSelectedLayoutSegments();
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	if (isDesktop) return null;
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="size-7 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
				>
					<Icons.menu aria-hidden="true" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="inset-y-0 flex h-auto w-[18.75rem] flex-col items-center gap-4 px-0 py-4"
			>
				<div className="w-full px-7">
					<Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
						<DogIcon className="mr-2 size-6" aria-hidden="true" />
						<span className="font-bold">PetFriendly</span>
						<span className="sr-only">Home</span>
					</Link>
					<div className="flex items-start justify-center gap-2 flex-col mt-6">
						{items.map((item, index) => {
							const Icon = item.icon ? item.icon : ChevronLeftIcon;

							return item.href ? (
								<Link
									aria-label={item.title}
									key={index}
									href={item.href}
									target={item.external ? '_blank' : ''}
									rel={item.external ? 'noreferrer' : ''}
									onClick={() => {
										if (open) setOpen(false);
									}}
								>
									<span
										className={cn(
											'group flex w-60 items-center rounded-md border border-transparent px-2 py-2 mr-6 hover:bg-muted hover:text-foreground',
											item.href.includes(String(segment))
												? 'bg-muted font-medium text-foreground'
												: 'text-muted-foreground',
											item.disabled && 'pointer-events-none opacity-60'
										)}
									>
										<Icon className="mr-2 size-4" aria-hidden="true" />
										<span>{item.title}</span>
									</span>
								</Link>
							) : (
								<span
									key={index}
									className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
								>
									<Icon className="mr-2 size-4" aria-hidden="true" />
									{item.title}
								</span>
							);
						})}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
