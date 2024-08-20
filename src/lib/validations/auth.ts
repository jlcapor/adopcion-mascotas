import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export const registrationSchema = z
	.object({
		name: z.string().trim().min(1, { message: 'Tu Nombre es Obligatorio' }),
		email: z.string().trim().email({ message: 'Debe ser un correo electrónico válido' }),
		password: z.string().refine((val) => {
			return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(val);
		}, {
			message:
				'La contraseña debe tener al menos 8 caracteres y contener al menos un carácter en mayúscula, un carácter en minúscula y un símbolo especial',
		}),
		password_confirmation: z.string(),
	})
	.superRefine((val, ctx) => {
		if (val.password !== val.password_confirmation) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: [ 'password_confirmation' ],
				message: 'Las contraseñas no coinciden',
			});
		}
	});

export const forgotPasswordSchema = z.object({
	email: z.string().email(),
});

export const resetPasswordSchema = z.object({
	token: z.string().min(1, 'Token no válido'),
	password: z.string().min(8, 'La contraseña es demasiado corta').max(255),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegistrationInput = z.infer<typeof registrationSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
