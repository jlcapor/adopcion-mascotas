'use server';
import { CreateProductSchema } from '../validations/product';
import { revalidatePath } from 'next/cache';
import { getErrorMessage } from '../handle-error';
import { db } from '@/server/db';
import { ProductFile } from '@/types';

export async function addProduct(input: CreateProductSchema) {
	try {
  
    const product = await db.product.create({
      data: {
        name: input.name,
        description: input.description ?? "",
        price: parseFloat(input.price), 
        stock: input.stock, 
        categoryId: parseInt(input.categoryId), 
        subCategoryId: input.subcategoryId ? parseInt(input.subcategoryId) : null,
        petTypeId: input.petTypeId ? parseInt(input.petTypeId) : null,
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

export async function  deleteProduct(input: { productId: string }) {
  try {

    const product = await db.product.findUnique({
      where: {
        id: input.productId,
      }
    })
    if (!product) {
      throw new Error("Product not found.")
    }
    await db.product.delete({
      where: {
        id: input.productId,
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
    const imageRecords = await db.productImage.createMany({
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
