'use client';

import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function MobileFilters() {
	return (
		<div className="lg:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button aria-label="Filter products" size="sm">
						<Icons.filter className="size-5 mr-1" />
						<span className="text-sm">Filtrar</span>
					</Button>
				</SheetTrigger>
				<SheetContent className="flex flex-col">
					<SheetHeader className="px-1">
						<SheetTitle>Filters</SheetTitle>
					</SheetHeader>
					<Separator />
					<div className="flex flex-1 flex-col gap-5 overflow-hidden p-1">
						<div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
							fhfhfghhfhfh
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
