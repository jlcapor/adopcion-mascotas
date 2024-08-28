'use server';

import type { ProductFile } from '@/types';
import { CreateProductSchema } from '../validations/product';
import { revalidatePath } from 'next/cache';
import { getErrorMessage } from '../handle-error';
import { db } from '@/server/db';

export async function addProduct(
	input: Omit<CreateProductSchema, 'images'> & {
		images: ProductFile[],
	}
) {
	try {
    const createProduct = await db.product.create({
      data: {
        name: input.name,
        description: input.description ?? "",
        price: parseFloat(input.price), 
        quantity: input.quantity,
        categoryId: parseInt(input.categoryId), 
        subCategoryId: input.subcategoryId ? parseInt(input.subcategoryId) : null,
        petTypeId: input.petTypeId ? parseInt(input.petTypeId) : null,
        images: JSON.stringify(input.images) as unknown as ProductFile[],
      },
    })
    revalidatePath(`/admin/produt/${createProduct.id}/edit.`)

		return {
			data: createProduct,
			error: null,
		};
	} catch (err) {
		return {
      data: null,
      error: getErrorMessage(err),
    }
	}
}
