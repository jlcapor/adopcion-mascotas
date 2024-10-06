import { createCallerFactory, createTRPCRouter } from '@/server/api/trpc';
import { adminRouter } from './routers/admin';
import { authRouter } from '@/server/api/routers/auth/auth';
import { productsRouter } from './routers/product/products';
import { PetTypesRouter } from '@/server/api/routers/petType';
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	auth: authRouter,
	products: productsRouter,
	petTypes: PetTypesRouter,
	admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
