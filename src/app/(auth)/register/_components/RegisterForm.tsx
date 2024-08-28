'use client';
import React from 'react';
import { Icons } from '@/components/shared/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { api } from '@/trpc/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { registrationSchema, RegistrationInput } from '@/lib/validations/auth';
import { PasswordInput } from '@/components/shared/PasswordInput';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';

export default function UserRegisterForm() {
	const { toast } = useToast();
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<RegistrationInput>({ 
		resolver: zodResolver(registrationSchema)
	});

	const createUserMutation = api.auth.createUser.useMutation({
		onError: (error) => {
			toast({
				variant: 'destructive',
				description: error.message
			});
		},
		onSuccess: () => {
			toast({
				variant: 'success',
				description:'Cuenta creada, revisa tu email para confirmarla'
			});
			reset();
		},
	});

	const handleRegister = (data: RegistrationInput) => {
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
				<Link
					className={buttonVariants({
						variant: 'link',
						className: 'gap-1.5',
					})}
					href='/login'>
					¿Ya tienes cuenta? Iniciar Sesión
					<ArrowRight className='h-4 w-4' />
            	</Link>
			</CardHeader>
			<CardContent>
				<form onSubmit={(...args) => void handleSubmit(handleRegister)(...args)} className="grid gap-4">
					<div className="col-span-6 space-y-2">
						<Label htmlFor="name">Tu nombre</Label>
						<Input
							id="name"
							type="text"
							{...register("name", { required: true })}
							className={cn({
								'focus-visible:ring-red-500':
								  errors.name,
							})}
							placeholder="Nombres y apellidos"
						/>
						{errors.name && (
							<p className="text-sm text-red-500 dark:text-red-500">
								{errors.name.message}
							</p>
						)}
					</div>

					<div className="col-span-6 space-y-2">
						<Label htmlFor="email">Correo electrónico</Label>
						<Input
							id="email"
							type="email"
							{...register('email', {
								required: true,
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'E-mail no válido',
								},
							})}
							className={cn({
								'focus-visible:ring-red-500':
								  errors.email,
							})}
							placeholder="Correo electrónico"
						/>
						{errors.email && (
							<p className="text-sm text-red-500 dark:text-red-500">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="col-span-6 space-y-2">
						<Label htmlFor="password">Contraseña</Label>
						<PasswordInput
							id="password"
							{...register('password', {
								required: true,
							})}
							className={cn({
								'focus-visible:ring-red-500':
								  errors.password,
							})}
							placeholder="Contraseña"
						/>
						{errors.password && (
							<p className="text-sm text-red-500 dark:text-red-500">
								{errors.password.message}
							</p>
						)}
					</div>
					<div className="col-span-6 space-y-2">
						<Label htmlFor="password_confirmation">Confirmar contraseña</Label>
						<PasswordInput
							id="password_confirmation"
							{...register('password_confirmation', {
								required: true,
							})}
							className={cn({
								'focus-visible:ring-red-500':
								  errors.password_confirmation,
							})}
							placeholder="Confirmar contraseña"
						/>
						{errors.password_confirmation && (
							<p className="text-sm text-red-500 dark:text-red-500">
								{errors.password_confirmation.message}
							</p>
						)}
					</div>
					
					<div className="col-span-6">
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
					<div className="col-span-6">
						<Button variant="outline" className="w-full text-xs font-bold uppercase" asChild>
							<Link href="/">Cancelar</Link>
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
