import { db } from '@/server/db';
import { unstable_cache } from 'next/cache';
export async function CategoriesSection() {
	
    return (
        <div className="categories-section"></div>
    )

}

const getPetTypesWithCategoriesAndSubcategories = unstable_cache(
	async () => {
		return db.petType.findMany({
			select: {
				id: true,
				name: true,
				slug: true,
				petTypeCategories: {
					select: {
						category: {
							select: {
								id: true,
								name: true,
								slug: true,
								subCategories: {
									select: {
										id: true,
										name: true,
										slug: true,
										
									},
								},
							},
						},
					},
				},
			},
		});
	},
	[ 'petType-categories-subcategories' ],
	{ revalidate: 3600 }
);
