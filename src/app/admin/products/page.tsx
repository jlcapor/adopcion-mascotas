import Search from '@/app/admin/_components/search';
import { Button } from '@/components/ui/button';
import { env } from '@/env';
import { db } from '@/server/db';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Pagination from '../_components/pagination';
import ProductsTable from '@/components/Product/ProductsTable';
import { getFilteredProducts, productCount } from '@/lib/data/product';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Products',
	description: 'Manage your products',
};


export type ProductsWithCategory = Awaited<ReturnType<typeof getFilteredProducts>>

export default async function ProductsPage({
	searchParams,
}: {
	searchParams?: {
		query?: string,
		page?: string,
	},
}) {
	const query = searchParams?.query || '';
  	const currentPage = Number(searchParams?.page) || 1;
	const productsData = await getFilteredProducts(query, currentPage);
	const totalProductsData = await productCount();
	const [ products, totalProducts] = await Promise.all([productsData, totalProductsData])

	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className="text-2xl font-bold tracking-tight">Productos</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<Search placeholder="Buscar productos..." />
				<Link href="/admin/products/new">
					<Button>
						<span className="hidden md:block">Crear producto</span>{' '}
						<Plus size={18} className="h-5 md:ml-4" />
					</Button>
				</Link>
			</div>
			<ProductsTable products={products} />
			<div className="mt-5 flex w-full justify-center">
				<Pagination totalPages={totalProducts} />
			</div>
		</div>
	);
}
