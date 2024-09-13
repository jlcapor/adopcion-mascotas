import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
interface SearchLayoutProps {
	children: React.ReactNode,
}

export default function SearchLayout({ children }: SearchLayoutProps) {
	return (
		<div className="border-b">
			<div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
				<aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block lg:w-[280px]">
					<ScrollArea className="h-full py-6 pr-6 lg:py-8">
						<h2 className="text-xl font-bold mb-4">Filtros</h2>
					</ScrollArea>
				</aside>
				{children}
			</div>
		</div>
	);
}
