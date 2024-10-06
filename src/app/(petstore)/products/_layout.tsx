import { Filter, FilterFallback } from '@/components/search/filter/FiltersSidebar';
import { Suspense } from 'react';
interface ProductsLayoutProps {
	children: React.ReactNode,
}
export default function ProductsLayout({ children }: ProductsLayoutProps) {
	return (
		<div className="flex w-full">
			<div className="hidden lg:block">
				<Suspense fallback={<FilterFallback />}>
					<Filter />
				</Suspense>
			</div>

			<div className="flex-1 overflow-hidden px-2 pt-6">{children}</div>
		</div>
	);
}

///https://github.com/routerso/router/tree/main
