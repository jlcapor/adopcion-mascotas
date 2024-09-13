import { unstable_cache as cache } from 'next/cache';

import { db } from '@/server/db';
import { Prisma } from '@prisma/client';
const ITEMS_PER_PAGE = 6;

export async function getProducts(query: string, currentPage: number) {
	const productFilter: Prisma.ProductWhereInput = {
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
		],
	};
	try {
		const skip = (currentPage - 1) * ITEMS_PER_PAGE;
		const [ count, data ] = await db.$transaction([
			db.product.count({ where: productFilter }),
			db.product.findMany({
				where: productFilter,
				take: ITEMS_PER_PAGE,
				skip,
				select: {
					id: true,
					name: true,
					status: true,
					category: true,
					price: true,
					stock: true,
					rating: true,
					images: true,
				},
				orderBy: {
					createdAt: 'asc',
				},
			}),
		]);
		const pageCount = Math.ceil(count / ITEMS_PER_PAGE);
		return {
			data,
			pageCount,
		};
	} catch (error) {
		return {
			data: [],
			pageCount: 0,
		};
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
