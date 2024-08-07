import { z } from 'zod';

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';

export const shelterRouter = createTRPCRouter({
	getShelterByUserId: protectedProcedure
		.input(
			z.object({
				userId: z.string(),
			})
		)
		.query(async ({ ctx, input }) => {

			const shelter = await ctx.db.shelter.findFirst({
				where: {
					userId: input.userId,
				},

			});
			return shelter;
		}),
});
