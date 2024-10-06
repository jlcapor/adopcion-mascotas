import { Suspense } from 'react';
import { ProductsGrid } from '@/components/products/products-grid';
import { Filter, FilterFallback } from '@/components/search/filter/FiltersSidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductCardSkeleton } from '@/components/product-card-skeleton';

export const metadata = {
	title: 'Productos para Mascotas',
	description: 'Todo lo que tu mascota necesita en un solo lugar.',
};

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>,
}) {
	return (
		<div className="flex w-full">
			<div className="hidden lg:block">
				<Suspense fallback={<FilterFallback />}>
					<Filter />
				</Suspense>
			</div>

			<div className="flex-1 overflow-hidden px-2 pt-6">
				<div className="grid items-center gap-8 pb-8 pt-6 lg:py-6 p-4">
					<Suspense fallback={<ProductGridSkeleton />}>
						<ProductsGrid searchParams={searchParams} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}

export function PageHeaderSkeleton() {
	return (
		<div className="flex flex-col space-y-2">
			<Skeleton className="h-6 w-1/4" /> {/* Simulación de PageHeaderHeading */}
			<Skeleton className="h-4 w-1/2" /> {/* Simulación de PageHeaderDescription */}
		</div>
	);
}

export function ProductGridSkeleton() {
	return (
		<div className="flex w-full flex-col">
			{/* Esqueleto para PageHeader */}
			<PageHeaderSkeleton />

			{/* Esqueleto para las tarjetas de productos */}
			<div className="flex-1 overflow-hidden px-2 pt-6">
				<div className="mb-4 grid grid-flow-row gap-4 w-full grid-cols-2 md:mb-8 items-start gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-3">
					{Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)}
				</div>
			</div>
		</div>
	);
}
