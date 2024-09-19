import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { hashPassword } from "@/utils/auth";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
    createUser: publicProcedure
    .input(z.object({
        name: z.string(), 
        email: z.string().email(),
        password: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
        const { name, email, password } = input;

        const userExist = await ctx.db.user.findUnique({
            where: { email: input.email },
        })

        if (userExist) {
            throw new TRPCError({
                code: "FORBIDDEN",
                message: "El Usuario ya esta registrado",
            })
        }

        const userPassword = await hashPassword(password)
        const user = await ctx.db.user.create({
            data: {
                name,
                email,
                password: userPassword,
            }
        })
        return user;
    }),

})

// name, lastName, email, password