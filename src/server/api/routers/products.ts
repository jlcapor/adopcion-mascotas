import { z } from 'zod';

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
});
