import { z } from 'zod';

export const searchParamsSchema = z.object({
	page: z.coerce.number().default(1),
	per_page: z.coerce.number().default(10),
	from: z.string().optional(),
	to: z.string().optional(),
	sort: z.string().optional().default('createdAt.desc'),
	name: z.string().optional(),
	operator: z.enum(["AND", "OR"]).optional(),
});

export const productsSearchParamsSchema = searchParamsSchema.extend({
	name: z.string().optional(),
	category: z.string().optional(),
	status: z.string().optional(),
});

export const getProductsSchema = productsSearchParamsSchema

export type GetProductsSchema = z.infer<typeof getProductsSchema>


