import { z } from 'zod';

import { adminProcedure, createTRPCRouter } from '@/server/api/trpc';
import { Prisma, PRODUCT_STATUS } from '@prisma/client';

export const productsAdminRouter = createTRPCRouter({
	get: adminProcedure
		.input(
			z.object({
				page: z.number().int().default(0),
				perPage: z.number().int().default(10),
				name: z.string().optional(),
				price: z.number().optional(),
				status: z.nativeEnum(PRODUCT_STATUS).optional(),
				rating: z.number().min(0).max(5).optional(),
				sortBy: z.enum([ 
                    "name",
                    "status",
                    "quantity",
                    "price",
                    "rating",
                    "createdAt"
                ]).optional(),
				sortDesc: z.boolean().default(false),
			})
		)
		.query(async ({ ctx, input }) => {
			const needFilter =  input.name || input.price || input.status || input.rating;

			const params: Prisma.ProductFindManyArgs = {
				orderBy: input.sortBy 
                    ? { [input.sortBy]: input.sortDesc ? 'desc' : 'asc' } 
                    : undefined,
                where: needFilter
                ? {
                    AND: {
                        name: input.name ? { contains: input.name } : undefined,
                        price: input.price ? { equals: input.price } : undefined,
                        status: input.status ? { equals: input.status } : undefined,
                        rating: input.rating ? { equals: input.rating } : undefined,
                    },
                }
                : undefined,
			};

            const [count, products] = await ctx.db.$transaction([
                ctx.db.product.count({ where: params.where }),
                ctx.db.product.findMany({
                    ...params,
                    skip: input.page * input.perPage,
                    take: input.perPage,
                })
            ])
            return { count, products };
		}),
        
});
