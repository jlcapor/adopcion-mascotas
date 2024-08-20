import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

export const shelterRouter = createTRPCRouter({
	createShelter: protectedProcedure
		.input(
			z.object({
				shelterName: z.string(),
				address: z.string(),
				neighborhood: z.string(),
				telephone: z.string(),
				provinceId: z.string(),
				cityId: z.string(),
				description: z.string(),
				userId: z.string(),
			})
		)
		.mutation(async ({ ctx, input }) => {
			const shelter = await ctx.db.shelter.create({
				data: {
					name: input.shelterName,
					address: input.address,
					neighborhood: input.neighborhood,
					telephone: input.telephone,
					provinceId: +input.provinceId,
					cityId: +input.cityId,
					description: input.description,
					userId: input.userId,
				},
			});
			return shelter;
		}),
	getProvinces: protectedProcedure.query(async ({ ctx, input }) => {
		return await ctx.db.province.findMany({
			orderBy: {
				name: 'asc',
			},
		});
	}),

	getCitiesByRegionId: protectedProcedure.input(z.number().int()).query(async ({ ctx, input }) => {
		const cities = await ctx.db.city.findMany({
			where: {
				provinceId: input,
			},
			orderBy: {
				name: 'asc',
			},
		});

		return cities;
	}),
});
