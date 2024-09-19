import { z } from 'zod';

export const listProductsSchema = z.object({
	page: z.number().int().default(1),
	perPage: z.number().int().default(12),
});

export type ListProductsInput = z.infer<typeof listProductsSchema>;

export const getProductSchema = z.object({
	id: z.string(),
});

export type GetProductInput = z.infer<typeof getProductSchema>;

export const createProductSchema = z.object({
	title: z.string().min(3).max(255),
	excerpt: z.string().min(3).max(255),
	content: z.string().min(3),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = createProductSchema.extend({
	id: z.string(),
});

export type UpdateProductInput = z.infer<typeof updateProductSchema>;

export const deleteProductSchema = z.object({
	id: z.string(),
});

export type DeleteProductInput = z.infer<typeof deleteProductSchema>;
