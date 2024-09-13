'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/shared/Icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PasswordInput } from '@/components/shared/PasswordInput';
import { toast } from 'sonner';
import { LoginSchema } from '@/lib/validations/auth';
// import { useFormState } from 'react-dom';

export default function LoginForm() {
	const initialValues: LoginSchema = {
		email: '',
		password: '',
	};

	const router = useRouter();
	const [ isLoading, setIsLoading ] = useState(false);
	const { register, handleSubmit, formState: { errors }, setError } = useForm({ defaultValues: initialValues });
	const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
	// const [state, formAction] = useFormState('', null);
	const handleLogin = async (formData: LoginSchema) => {
		setIsLoading(true);
		const callback = await signIn('credentials', {
			email: formData.email.toLowerCase(),
			password: formData.password,
			redirect: false,
		});

		 setIsLoading(false);

		 if (callback?.ok) {
		   router.push('/');
		   router.refresh();
		 }
		 if (callback?.error) {
		   setError("root", { message: callback.error })
		 }
	};
	return (
		<Card className="w-full max-w-lg">
			<CardHeader className="text-center">
				<Link href="/">
					<Icons.pet className="mx-auto h-10 w-10" />
				</Link>
				<div className="flex flex-col gap-1">
					<CardTitle className="text-2xl font-semibold tracking-tight">Iniciar Sesión</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<Button 
					variant="outline" 
					className="w-full"
					onClick={() => {
						setIsGoogleLoading(true);
						signIn("google");
					}}
					disabled={isLoading || isGoogleLoading}
				>
					{isGoogleLoading ? (
						<Icons.spinner className="mr-2 size-4 animate-spin" />
					) : (
						<Icons.google className="mr-2 size-4" />
					)}{" "}
					Google
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
							disabled={isLoading || isGoogleLoading}
							placeholder="Correo electrónico"
							{...register('email', {
								required: 'El Email es obligatorio',
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'E-mail no válido',
								},
							})}
						/>
						{errors.email && (
							<p className="text-sm text-red-500 dark:text-red-500">{errors.email.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Contraseña</Label>
						<PasswordInput
							id="password"
							placeholder="password"
							disabled={isLoading || isGoogleLoading}
							{...register('password', {
								required: 'El Password es obligatorio',
							})}
						/>
						{errors.password && (
							<p className="text-sm text-red-500 dark:text-red-500">{errors.password.message}</p>
						)}
					</div>

					<div className="flex flex-wrap justify-between">
						<Button variant={"link"} size={"sm"} className="p-0" asChild>
							<Link href={"/auth/register"} className=''>¿No tienes cuenta? Crear Una</Link>
						</Button>
						<Button variant={"link"} size={"sm"} className="p-0" asChild>
							<Link href={"/auth/reset-password"}>¿Olvidaste tu contraseña?</Link>
						</Button>
					</div>

					{errors.root?.message && <p className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">{errors.root?.message}</p>}
					<Button type="submit" className="w-full text-xs font-bold uppercase" disabled={isLoading}>
						{isLoading && <Icons.spinner className="mr-2 size-4 animate-spin" aria-hidden="true" />}
						Iniciar Sesión
						<span className="sr-only">Iniciar Sesión</span>
					</Button>
					<Button variant="outline" className="w-full" asChild>
						<Link href="/">Cancelar</Link>
					</Button>
					{/* <nav className="flex flex-col space-y-4 ">
						<div className="text-sm text-muted-foreground text-center">
							¿No tienes cuenta? {''}
							<Link
								href={'/register'}
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
					</nav> */}
				</form>
			</CardContent>
		</Card>
	);
}
