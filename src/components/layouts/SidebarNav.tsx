'use client';

import type { SidebarNavItem } from '@/types';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeftIcon } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
	items: SidebarNavItem[],
}

export default function SidebarNav({ items, className, ...props }: SidebarNavProps) {
	const segment = useSelectedLayoutSegment();
	const [ open, setOpen ] = React.useState(false);
	if (!items?.length) return null
	return (
		<div className={cn('flex w-full flex-col gap-2 text-sm', className)} {...props}>
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
								'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground',
								item.href.includes(String(segment))
									? 'bg-muted font-medium text-foreground'
									: 'text-muted-foreground',
								item.disabled  && 'pointer-events-none opacity-60'
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
						{item.title}
					</span>
				);
			})}
		</div>
	);
}
