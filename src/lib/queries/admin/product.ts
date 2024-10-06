import { unstable_cache as cache } from 'next/cache';
import { db } from '@/server/db';

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
