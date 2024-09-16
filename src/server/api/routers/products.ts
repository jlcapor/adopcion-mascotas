import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const productsRouter = createTRPCRouter({
	get: publicProcedure.query(async ({ ctx }) => {
		const products = await ctx.db.product.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
		return products;
	}),

	getPetCategories: publicProcedure.query(async ({ ctx }) => {
		const petCategories = await ctx.db.petType.findMany({
			select: {
			  id: true,
			  name: true,
			  slug: true,
			  // Solo obtenemos las categorías relacionadas, sin subcategorías
			  petTypeCategories: {
				select: {
				  category: {
					select: {
					  id: true,
					  name: true,
					  slug: true,
					},
				  },
				},
			  },
			},
		  });
		
		  return petCategories.map((petType) => ({
			id: petType.id,
			name: petType.name,
			slug: petType.slug,
			// Mapeamos solo las categorías sin incluir las subcategorías
			categories: petType.petTypeCategories.map((ptc) => ({
			  id: ptc.category.id,
			  name: ptc.category.name,
			  slug: ptc.category.slug,
			})),
		  }));
	}),
});