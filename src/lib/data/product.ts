import { unstable_cache as cache } from 'next/cache';

import { db } from '@/server/db';
import { getErrorMessage } from '../handle-error';


const ITEMS_PER_PAGE = 10;

export async function productsPages(query: string){
	try {
		const count  = await db.product.count({
			where: {
				name: {
					contains: query,
					mode: 'insensitive'
				}
			}
		})
		const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    	return totalPages;
	} catch (error) {
		console.error('Database Error:', error);
    	throw new Error('Failed to fetch total number of invoices.');
	}
}
export async function getProducts({
	query,
	currentPage,
}: {
	query?: string | undefined,
	currentPage: number | undefined,
}) {
	const offset = ((currentPage ?? 1) - 1) * ITEMS_PER_PAGE;
	try {
		const products = await db.product.findMany({
			where: {
				name: {
					contains: query,
					mode: 'insensitive'
				}
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
				category: {
					select: {
						id: true,
						name: true,
						slug: true
					}
				}
			},
			orderBy: {
				createdAt: "desc"
			}
		})
		
		return {
			data: products,
			error: null,
		}
	} catch (error) {
		console.error('Error fetching products:', error);
		return {
			data: null,
			error: getErrorMessage(error),
		}
	}
}

export async function getCategories() {
	return await cache(
		async () => {
			return db.category.findMany({
				select: {
					id: true,
					name: true,
					slug: true,
				},
			});
		},
		[ 'categories' ],
		{
			revalidate: 3600,
			tags: [ 'categories' ],
		}
	)();
}

export async function getSubcategories() {
	return await cache(
		async () => {
			return db.subCategory.findMany({
				select: {
					id: true,
					name: true,
					slug: true,
				},
			});
		},
		[ 'subcategories' ],
		{
			revalidate: 3600,
			tags: [ 'subcategories' ],
		}
	)();
}

export async function getPetTypes() {
	return await cache(
		async () => {
			return db.petType.findMany({
				select: {
					id: true,
					name: true,
					slug: true,
				},
			});
		},
		[ 'petTypes' ],
		{
			revalidate: 3600, // every hour
			tags: [ 'petTypes' ],
		}
	)();
}
