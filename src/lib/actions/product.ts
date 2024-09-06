'use server';

import { CreateProductSchema } from '../validations/product';
import { revalidatePath } from 'next/cache';
import { getErrorMessage } from '../handle-error';
import { db } from '@/server/db';
import { ProductFile } from '@/types';


export async function addProduct(input: Omit<CreateProductSchema, "images"> & {
  images: ProductFile[]
}) {
	try {
  
    const product = await db.product.create({
      data: {
        name: input.name,
        description: input.description ?? "",
        price: parseFloat(input.price), 
        quantity: input.quantity, 
        categoryId: parseInt(input.categoryId), 
        subCategoryId: input.subcategoryId ? parseInt(input.subcategoryId) : null,
        petTypeId: input.petTypeId ? parseInt(input.petTypeId) : null,
        images:{
          create: input.images.map(image => ({
            id: image.id,
            name: image.name,
            url: image.url,
          }))
        }
      },
    })
    revalidatePath('/admin/produts')
		return {
			data: product,
			error: null,
		};
	} catch (err) {
		return {
      data: null,
      error: getErrorMessage(err),
    }
	}
}

export async function updateProducts(input: {}) {
  try {
    
  } catch (error) {
    return {
      data: null,
      error: getErrorMessage(error),
    }
  }
}

export async function  deleteProducts(input: { ids: string[] }) {
  try {
    await db.product.deleteMany({
      where: {
        id: {
          in: input.ids,
        }
      }
    })

    revalidatePath("/admin/products")
    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error: getErrorMessage(error),
    }
  }
}
export async function uploadProductImage( input: {productId: string, images: ProductFile[]}) {
  try {

    const images = input.images.map((imageData)=>{
      return {
        id: imageData.id,
        name: imageData.name,
        url: imageData.url,
        productId: input.productId,
      }
    })
    const imageRecords = await db.image.createMany({
      data: images,
    });
    return {
      data: imageRecords,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: getErrorMessage(error),
    }
  }
}
