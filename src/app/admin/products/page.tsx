import React from 'react';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategories, getProducts } from '@/lib/data/product';
import { searchParamsSchema } from '@/lib/validations/params';
import { ProductsTable } from './_components/products-table';
import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton';
import { SearchParams } from '@/types';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Products',
	description: 'Manage your products',
};

export interface ProductsPageProps {
	searchParams: SearchParams,
}

export type Products = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
	const search = searchParamsSchema.parse(searchParams);

	const products = await getProducts(search);

	const categories = await getCategories();
	return (
		<div className="grid items-center gap-8 pb-8 pt-6 lg:py-2">
			<div className="flex items-center justify-between gap-2 md:mt-4">
				<h1 className="text-2xl font-bold tracking-tight">Productos</h1>
				<Link href="/admin/products/new">
					<Button>
						<span className="hidden md:block">Crear producto</span>{' '}
						<Plus size={18} className="h-5 md:ml-4" />
					</Button>
				</Link>
			</div>
			
				<ProductsTable data={products.data} pageCount={products.pageCount} categories={categories} />
			
		</div>
	);
}
//
