import { Prisma } from '@prisma/client';
import { db } from '@/server/db';
import { SearchParams } from '../url-state';

export const ITEMS_PER_PAGE = 28;

const searchFilter = (q?: string): Prisma.ProductWhereInput | undefined => {
    if (q) {
        const searchTerms = q.trim().split(/\s+/);
        return {
            OR: searchTerms.map(term => ({
                name: {
                    contains: term,
                    mode: 'insensitive' as const, // Aseguramos que sea un literal
                },
            })),
        };
    }
    return undefined; // Devuelve undefined si no hay términos
};

const categoryFilter = (categoryIds?: string[]) => {
    if (categoryIds && categoryIds.length > 0) {
        return {
            categoryId: {
                in: categoryIds.map(id => parseInt(id)), // Suponiendo que los IDs son numéricos
            }
        };
    }
    return undefined;
};

const subcategoryFilter = (subcategoryIds?: string[]): Prisma.ProductWhereInput | undefined => {
    if (subcategoryIds && subcategoryIds.length > 0) {
        return {
            subCategoryId: {
                in: subcategoryIds.map(id => parseInt(id, 10)), // Convertir IDs a números
            },
        };
    }
    return undefined;
};

export async function fetchProductsWithPagination(searchParams: SearchParams) {
    let requestedPage = Math.max(1, Number(searchParams?.page) || 1);
    const offset = (requestedPage - 1) * ITEMS_PER_PAGE;

    try {
        const [count, products] = await db.$transaction([
            db.product.count({}),
            db.product.findMany({
                take: ITEMS_PER_PAGE,
                skip: offset,
                select: {
                    id: true,
                    name: true,
                    price: true,
                    stock: true,
                    rating: true,
                    productImages: {
                        select: {
                            id: true,
                            name: true,
                            url: true,
                        }
                    }
                }
            })
        ])
        const pageCount = Math.ceil(count / ITEMS_PER_PAGE)
        return {
            products,
            pageCount,
        }
    } catch (error) {
        return {
            products: [], 
            pageCount: 0, 
        };
    }
}




