import { z } from "zod"

export const createShelterSchema = z.object({
	shelterName: z.string(),
	address: z.string(),
	telephone: z.string(),
	departmentId: z.string(),
	cityId: z.string(),
	description: z.string(),
	image:z.string()
})
export type CreateShelterSchema = z.infer<typeof createShelterSchema>
