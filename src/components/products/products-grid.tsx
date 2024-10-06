import React from 'react';
import { SearchParams } from '@/lib/url-state';
import ProductCard from './product-card';
import { fetchProductsWithPagination } from '@/lib/queries/product';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '../page-header';
import { Sorter } from '../search/filter/Sorter';
interface PetProductsProps {
	searchParams: SearchParams,
}
export async function ProductsGrid({ searchParams }: PetProductsProps) {
	const { products, pageCount } = await fetchProductsWithPagination(searchParams);
	if (!products?.length) {
	  return <p>No results for this query</p>
	}
	return (
		<section className="flex flex-col space-y-6">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<PageHeader>
					<PageHeaderHeading size="sm">Productos</PageHeaderHeading>
					<PageHeaderDescription size="sm">
						Explora y descubre todo lo que tu mascota necesita.
					</PageHeaderDescription>
				</PageHeader>
				<div className="flex items-center space-x-2 mt-2 sm:mt-0">
					<Sorter />
				</div>
			</div>
			<div className="mb-4 grid grid-flow-row gap-4 w-full grid-cols-2 md:mb-8 items-start gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-3">
				{products.map((product) => <ProductCard key={product.id} product={product} />)}
			</div>
			<div className="mt-auto p-4 border-t">{pageCount}</div>
		</section>
	);
}
