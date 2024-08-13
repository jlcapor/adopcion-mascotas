import { z } from 'zod';

export const createShelterSchema = z.object({
	shelterName: z.string(),
	address: z.string(),
	neighborhood: z.string(),
	telephone: z.string(),
	provinceId: z.string(),
	cityId: z.string(),
	description: z.string(),
});

export const updateShelterSchema = z.object({
	shelterName: z.string().trim().min(1, 'El nombre del refugio no puede ir vacio'),
	address: z.string().trim().min(1, 'La dirección del refugio es obligatoria'),
	neighborhood: z.string(),
	telephone: z.string(),
	provinceId: z.number().nullable(),
	cityId: z.number().nullable(),
	description: z.string(),
	image: z.string().nullable(),
});
export type CreateShelterSchema = z.infer<typeof createShelterSchema>;
export type UpdateShelterSchema = z.infer<typeof updateShelterSchema>;

//126Julio_$_%_&_.
