'use client';
import React from 'react';
import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRegistrationForm } from '@/types';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { api } from '@/trpc/react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserRegisterForm() {
	const initialValues: UserRegistrationForm = {
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	};
	const { register, handleSubmit, watch, reset, formState } = useForm<UserRegistrationForm>({ defaultValues: initialValues });

	const createUserMutation = api.auth.createUser.useMutation({
		onError: (error) => {
			toast.error(error.message);
		},
		onSuccess: () => {
			toast.success('Cuenta creada, revisa tu email para confirmarla');
			reset();
		},
	});

	const handleRegister = (data: UserRegistrationForm) => {
		createUserMutation.mutate({
			name: data.name,
			email: data.email,
			password: data.password,
		});
	};

	const password = watch('password');
	return (
		<Card className="w-full max-w-lg">
			<CardHeader className="text-center">
				<Link href="/">
					<Icons.pet className="mx-auto h-10 w-10" />
				</Link>
				<div className="flex flex-col gap-1">
					<CardTitle className="text-2xl font-semibold tracking-tight">Crea una cuenta</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(handleRegister)} className="grid gap-5">
					<div className="col-span-6 space-y-2">
						<Label htmlFor="name">Tu nombre</Label>
						<Input
							id="name"
							type="text"
							{...register('name', {
								required: 'El nombre es obligatorio',
							})}
							placeholder="Nombres y apellidos"
						/>
						{formState.errors.name && (
							<p className="text-sm text-red-500 dark:text-red-500">{formState.errors.name.message}</p>
						)}
					</div>

					<div className="col-span-6 space-y-2">
						<Label htmlFor="email">Correo electrónico</Label>
						<Input
							id="email"
							type="email"
							{...register('email', {
								required: 'El Email es obligatorio',
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'E-mail no válido',
								},
							})}
							placeholder="Correo electrónico"
						/>
						{formState.errors.email && (
							<p className="text-sm text-red-500 dark:text-red-500">{formState.errors.email.message}</p>
						)}
					</div>
					<div className="col-span-6 sm:col-span-3 space-y-2">
						<Label htmlFor="password">Contraseña</Label>
						<Input
							id="password"
							type="password"
							{...register('password', {
								required: 'El Password es obligatorio',
							})}
							placeholder="Contraseña"
						/>
						{formState.errors.password && (
							<p className="text-sm text-red-500 dark:text-red-500">
								{formState.errors.password.message}
							</p>
						)}
					</div>
					<div className="col-span-6 sm:col-span-3 space-y-2">
						<Label htmlFor="password_confirmation">Confirmar contraseña</Label>
						<Input
							id="password_confirmation"
							type="password"
							{...register('password_confirmation', {
								required: 'Repetir Password es obligatorio',
								validate: (value) => value === password || 'Los Passwords no son iguales',
							})}
							placeholder="Confirmar contraseña"
						/>
						{formState.errors.password_confirmation && (
							<p className="text-sm text-red-500 dark:text-red-500">
								{formState.errors.password_confirmation.message}
							</p>
						)}
					</div>

					<div className="col-span-6 mt-6">
						<Button
							type="submit"
							className="w-full text-xs font-bold uppercase"
							disabled={createUserMutation.isPending}
						>
							{createUserMutation.isPending && (
								<Icons.spinner className="mr-2 size-4 animate-spin" aria-hidden="true" />
							)}
							Crear cuenta
							<span className="sr-only">Crear cuenta</span>
						</Button>
					</div>
					<div className="col-span-6 mt-2">
						<div className="text-sm text-muted-foreground text-center">
							¿Ya tienes cuenta? {''}
							<Link
								href={'/login'}
								className="text-primary underline-offset-4 transition-colors hover:underline"
							>
								Iniciar Sesión
							</Link>
						</div>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
