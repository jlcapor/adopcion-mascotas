import { unstable_cache as cache } from 'next/cache';

import { db } from '@/server/db';
import { Prisma, Product } from '@prisma/client';
import { GetProductsSchema } from '../validations/params';


export async function getProducts(input: GetProductsSchema) {
	
	const { page, per_page, sort, from, to, operator, status, name, category } = input

	try {
		const fallbackPage = isNaN(page) || page < 1 ? 1 : page
		const limit = isNaN(per_page) ? 10 : per_page
		const skip = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0
		const [column, order] = (sort?.split('.') as [
			keyof Prisma.ProductOrderByWithRelationInput,
			'asc' | 'desc'
		]) ?? ['createdAt', 'desc']
	  
		const categoryIds = category?.split(".") ?? []
	  
		const fromDay = from ? new Date(from) : undefined
		const toDay = to ? new Date(to) : undefined
		const expressions: Prisma.ProductWhereInput[] = [
			name
			  ? { name: { contains: name, mode: 'insensitive' } }
			  : undefined,
			!!status
			  ? { status }
			  : undefined,
			categoryIds.length > 0
			  ? { categoryId: { in: categoryIds } }
			  : undefined,
			fromDay && toDay
			  ? { createdAt: { gte: fromDay, lte: toDay } }
			  : undefined,
		].filter(Boolean) as Prisma.ProductWhereInput[];

		const where: Prisma.ProductWhereInput = !operator || operator === 'OR'
		  ? { AND: expressions }
		  : { OR: expressions };
		
		
		const [ count, data ] = await db.$transaction([
			db.product.count({ where }),
			db.product.findMany({
				where,
				take: limit,
				skip,
				orderBy: { [column]: order },
			}),
		]);
		const pageCount = Math.ceil(count / limit);
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
				}
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
