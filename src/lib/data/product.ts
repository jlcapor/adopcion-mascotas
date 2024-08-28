import { unstable_cache as cache, unstable_noStore as noStore } from 'next/cache';
import { db } from '@/server/db';

const PAGE_SIZE = 6;

export async function productCount() {
	const count = await db.product.count();
	const totalPages = Math.ceil(count / PAGE_SIZE);
	return totalPages;
}

export async function getFilteredProducts(query: string, currentPage: number) {
	const skip = (currentPage - 1) * PAGE_SIZE;
	
	try {
		const products = await db.product.findMany({
			take: PAGE_SIZE,
			skip,
			where: {
				OR: [
					{
						name: {
							contains: query,
							mode: 'insensitive',
						},
					},
					{
						category: {
							name: {
								contains: query,
								mode: 'insensitive',
							},
						},
					},
					{
						subCategory: {
							name: {
								contains: query,
								mode: 'insensitive',
							},
						},
					},
				],
			},
			
			include: {
				category: true,

			},
		});

		return products;
	} catch (error) {
		console.error(error);
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
			revalidate: 3600, // every hour
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
			revalidate: 3600, // every hour
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
