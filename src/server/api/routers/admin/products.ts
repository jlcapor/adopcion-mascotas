import { z } from 'zod';

import { adminProcedure, createTRPCRouter } from '@/server/api/trpc';

export const productsAdminRouter = createTRPCRouter({
	hello: adminProcedure.input(z.object({ text: z.string() })).query(({ ctx, input }) => {
		return {
			greeting: input.text,
		};
	}),
	create: adminProcedure
		.input(
			z.object({
				name: z.string(),
				description: z.string().optional(),
				categoryId: z.string(),
				subcategoryId: z.string().optional().nullable(),
				petTypeId: z.string().optional().nullable(),
				price: z.string(),
				stock: z.number(),
			})
		)
		.mutation(async ({ ctx, input }) => {
			const product = await ctx.db.product.create({
				data: {
					name: input.name,
					description: input.description ?? "",
					categoryId: parseInt(input.categoryId), 
					subCategoryId: input.subcategoryId ? parseInt(input.subcategoryId) : null,
					petTypeId: input.petTypeId ? parseInt(input.petTypeId) : null,
					price: parseFloat(input.price), 
					stock: input.stock, 
				},
			});
			return product;
		}),
	delete: adminProcedure
		.input(z.object({ ids: z.array(z.string()) }))
		.mutation(async ({ ctx, input }) => {
			const products = await ctx.db.product.deleteMany(
				{
					where: {
						id: { in: input.ids },
					}
				}
			)
			return products;
		}),
	getProductById: adminProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.query(async ({ ctx, input }) => {
			const product = await ctx.db.product.findUnique({ where: { id: input.id } });
			return product;
		}),
});
