import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const PetTypesRouter = createTRPCRouter({
	getPetTypes: publicProcedure.query(async ({ ctx }) => {
		const petTypes = await ctx.db.petType.findMany({
			orderBy: {
				createdAt: 'asc',
			},
		});
        return petTypes;
	}),
});