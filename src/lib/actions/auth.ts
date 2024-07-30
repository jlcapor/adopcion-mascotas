import { db } from "@/server/db";
import { SignupInput, signupSchema } from "../validations/auth";

export interface ActionResponse<T> {
    fieldError?: Partial<Record<keyof T, string | undefined>>;
    formError?: string;
}

//https://github.com/saasykits/next-lucia-auth/blob/main/src/lib/auth/actions.ts

// export async function login(formData: FormData): Promise<ActionResponse<SignupInput>> {
//     const obj = Object.fromEntries(formData.entries());
//     const parsed = signupSchema.safeParse(obj);
//     if (!parsed.success) {
//         const err = parsed.error.flatten();
//         return {
//             fieldError: {
//                 name: err.fieldErrors.name?.[0],
//                 email: err.fieldErrors.email?.[0],
//                 password: err.fieldErrors.password?.[0],
//             }
//         }
//     }
//     const { name, email, password } = parsed.data;
//     const existingUser = await db.user.findFirst({
//         where: {
//             email
//         }
//     })
//     if(existingUser){
//         return {
//             formError: "Cannot create account with that email",
//         }
//     }

// }