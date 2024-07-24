'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { UserLoginForm } from '@/types';
import InputError from '@/components/InputError';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PasswordInput } from '@/components/PasswordInput';

export default function LoginForm() {
	const initialValues: UserLoginForm = {
		email: '',
		password: '',
	};

	const router = useRouter();
	const [ isLoading, setIsLoading ] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

	const handleLogin = async (formData: UserLoginForm) => {
		setIsLoading(true);
		const callback = await signIn('credentials', {
			email: formData.email,
			password: formData.password,
			redirect: false,
		});
		 setIsLoading(false);
		 if (callback?.ok) {
		   router.push('/');
		   router.refresh();
		 }
		 if (callback?.error) {
		   alert(callback.error);
		 }
	};
	return (
		<Card className="w-full max-w-md">
			<CardHeader className="text-center">
				<Link href="/">
					<Icons.pet className="mx-auto h-10 w-10" />
				</Link>
				<div className="flex flex-col gap-1">
					<CardTitle className="text-2xl font-semibold tracking-tight">Iniciar Sesión</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<Button variant="outline" className="w-full" asChild>
					<Link href="#">
						<Icons.google className="mr-2 h-5 w-5" />
						Log in with Google
					</Link>
				</Button>
				<div className="my-2 flex items-center">
					<div className="flex-grow border-t border-muted" />
					<div className="mx-2 text-muted-foreground">or</div>
					<div className="flex-grow border-t border-muted" />
				</div>
				<form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
					<div className="space-y-2">
						<Label htmlFor="email">Correo electrónico</Label>
						<Input
							id="email"
							type="email"
							placeholder="Correo electrónico"
							{...register('email', {
								required: 'El Email es obligatorio',
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'E-mail no válido',
								},
							})}
						/>
						{errors.email && <InputError>{errors.email.message}</InputError>}
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Contraseña</Label>
						<Input
							id="password"
							type="password"
							placeholder="password"
							{...register('password', {
								required: 'El Password es obligatorio',
							})}
						/>
						{errors.password && <InputError>{errors.password.message}</InputError>}
					</div>

					<Button type="submit" className="w-full text-xs font-bold uppercase" disabled={isLoading}>
						{isLoading && <Icons.spinner className="mr-2 size-4 animate-spin" aria-hidden="true" />}
						Iniciar Sesión
						<span className="sr-only">Iniciar Sesión</span>
					</Button>
					<Button variant="outline" className="w-full" asChild>
						<Link href="/">Cancelar</Link>
					</Button>
					<nav className="flex flex-col space-y-4 ">
						<div className="text-sm text-muted-foreground text-center">
							¿No tienes cuenta? {''}
							<Link
								href={'/auth/register'}
								className="text-primary underline-offset-4 transition-colors hover:underline"
							>
								Crear Una
							</Link>
						</div>
						<div className="text-sm text-muted-foreground text-center">
							¿Olvidaste tu contraseña? {''}
							<Link
								href={'/forgot-password'}
								className="text-primary underline-offset-4 transition-colors hover:underline"
							>
								Reestablecer
							</Link>
						</div>
					</nav>
				</form>
			</CardContent>
		</Card>
	);
}
