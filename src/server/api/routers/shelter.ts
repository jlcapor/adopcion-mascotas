import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';

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

	getSheltersByUserId: protectedProcedure.query(async ({ ctx }) => {
		const shelters = await ctx.db.shelter.findMany({
			where: {
				userId: ctx.session.user.id,
			},
			select: {
				id: true,
				name: true,
				address: true,
				telephone: true,
				provinceId: true,
				cityId: true,
				description: true,
			}
		});
		return shelters;
	}),
	getShelterByUserId: protectedProcedure.input(z.string()).query(async ({ ctx, input }) => {
		const shelter = await ctx.db.shelter.findFirst({
			where: {
				userId: input,
			},
		});

		if (!shelter) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Shelter not found',
			});
		}
		return shelter;
	}),
	getProvinces: protectedProcedure.query(async ({ ctx, input }) => {
		return await ctx.db.province.findMany({
			orderBy: {
				name: 'asc',
			},
		});
	}),

	getCitiesByRegionId: protectedProcedure
		.input(z.number().int()) // Asegúrate de que 'regionId' sea un número entero
		.query(async ({ ctx, input }) => {
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
