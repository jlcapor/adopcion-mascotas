
// "use client"
import React from 'react';
import ProductItem from './product-item';
import Pagination from '../../_components/pagination';
import { db } from '@/server/db';


const ITEMS_PER_PAGE = 10;

export async function getProductsAndCount(query: string, currentPage: number) {
    const offset = ((currentPage ?? 1) - 1) * ITEMS_PER_PAGE;

    try {
        // Utiliza una transacción para optimizar las consultas
        const [totalCount, products] = await db.$transaction([
            // Obtener el conteo total de productos
            db.product.count({
                where: {
                    name: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            }),
            // Obtener los productos paginados
            db.product.findMany({
                where: {
                    name: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
                take: ITEMS_PER_PAGE,
                skip: offset,
                select: {
                    id: true,
                    name: true,
                    status: true,
                    price: true,
                    stock: true,
                    rating: true,
                    createdAt: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            }),
        ]);

        // Calcular el total de páginas
        const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
        return { products, totalPages };
    } catch (error) {
        console.error('Error fetching products and count:', error);
        return { products: [], totalPages: 0 };
    }
}

export async function  ProductsTable({
	query,
	currentPage,
  }: {
	query: string;
	currentPage: number;
  }) {
	const { products, totalPages } = await getProductsAndCount(query, currentPage)
	return (
		<>
			<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-4 py-3">
									producto
								</th>
								<th scope="col" className="px-4 py-3">
									estado
								</th>
								<th scope="col" className="px-4 py-3">
									precio
								</th>
								<th scope="col" className="px-4 py-3">
									cantidad
								</th>
								<th scope="col" className="px-4 py-3">
									calificacion
								</th>
								<th scope="col" className="px-4 py-3">
									created At
								</th>

								<th scope="col" className="px-4 py-3">
									<span className="sr-only">Actions</span>
								</th>
							</tr>
						</thead>
						<tbody>
						{products?.length ? (
							products?.map((product) => (
								<ProductItem key={product.id} product={product} />
							))
						) : (
							<tr>
								<td colSpan={8} className="items-center justify-center text-muted-foreground text-center py-4">
									No se encontraron productos.
								</td>
							</tr>
						)}
						</tbody>
					</table>
				</div>
				
			</div>
			<div className='flex w-full justify-center'>
				<Pagination totalPages={totalPages} />
			</div>
		</>
	);
}
