import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getProducts } from '@/lib/data/product';
import { SearchParams } from '@/types';
import ProductsTable from './_components/products-table';
import Search from '../_components/search';
import Pagination from '../_components/pagination';
import { DataTableSkeleton } from '../_components/data-table-skeleton';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Products',
	description: 'Manage your products',
};

export interface ProductsPageProps {
	searchParams: SearchParams,
}

// export type Products = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
	searchParams,
  }: {
	searchParams?: {
	  query?: string;
	  page?: string;
	};
  }) {
	// const search = searchParamsSchema.parse(searchParams);
	// const products = await getProducts(search);
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;
	const products = await getProducts(query, currentPage);

	return (
		<div className="grid items-center gap-8 pb-8 pt-6 lg:py-6">
			<div className="flex w-full items-center justify-between">
				<h1 className="text-2xl font-bold tracking-tight">Productos</h1>
			</div>
			<div className="flex items-center justify-between gap-2 md:mt-4">
				<Search placeholder="Search products..." />
				<Link href="/admin/products/new">
					<Button>
						<span className="hidden md:block">Crear producto</span>{' '}
						<Plus size={18} className="h-5 md:ml-4" />
					</Button>
				</Link>
			</div>
				<Suspense fallback={<DataTableSkeleton columnCount={6}/>}>
					<ProductsTable/>
				</Suspense>
			<div className="mt-5 flex w-full justify-center">
				<Pagination totalPages={products.pageCount} />
			</div>
		</div>
	);
}
//
