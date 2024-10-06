import * as React from 'react';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { Plus } from 'lucide-react';
import { type Metadata } from 'next';
import Link from 'next/link';
import { ProductsTable } from './_components/products-table';
import Search from '../_components/search';
import { DataTableSkeleton } from '../_components/data-table-skeleton';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Products',
	description: 'Manage your products',
};

export default async function ProductsPage({
	searchParams,
}: {
	searchParams?: {
		query?: string,
		page?: string,
	},
}) {
	const query = searchParams?.query ?? ""
	const currentPage = Number(searchParams?.page) || 1
	if (currentPage < 0) redirect('/admin/products');

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
			<React.Suspense
				key={query + currentPage}
				fallback={<DataTableSkeleton columnCount={7} withPagination={false} />}
			>
				<ProductsTable query={query} currentPage={currentPage} />
			</React.Suspense>
		</div>
	);
}
//
