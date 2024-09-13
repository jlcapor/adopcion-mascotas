import * as z from "zod"

export const createProductSchema = z.object({
  name: z.string().min(1, {
    message: "El Nombre del Producto no puede ir vacio",
  }),
  description: z.string().optional(),
  categoryId: z.string(),
  subcategoryId: z.string().optional().nullable(),
  petTypeId: z.string().optional().nullable(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Debe ser un precio válido.",
  }),
  stock: z.number(),
})

export const updateProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: "El Nombre del Producto no puede ir vacio",
  }),
  description: z.string().optional(),
  categoryId: z.string(),
  subcategoryId: z.string().optional().nullable(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Debe ser un precio válido.",
  }),
  quantity: z.number(),
  images: z
  .custom<File[] | undefined | null>()
  .optional()
  .nullable()
  .default(null),
})

export const uploadProductImageSchema = z.object({
  images: z
  .custom<File[] | undefined | null>()
  .optional()
  .nullable()
  .default(null),
})

export type CreateProductSchema = z.infer<typeof createProductSchema>
export type UpdateProductSchema = z.infer<typeof updateProductSchema>
export type UploadProductImageSchema = z.infer<typeof uploadProductImageSchema>


