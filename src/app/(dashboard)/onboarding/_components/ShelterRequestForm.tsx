'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/shared/Icons';
import Link from 'next/link';
import { createShelterSchema, CreateShelterSchema } from '@/lib/validations/shelter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { PasswordInput } from '@/components/shared/PasswordInput';
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from '@/components/ui/select';
import { USER_ROLE } from '@prisma/client';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';

export default function ShelterRequestForm() {
	const [ loading, setLoading ] = React.useState(false);

	const form = useForm<CreateShelterSchema>({
		resolver: zodResolver(createShelterSchema),
		defaultValues: {
			shelterName: '', 
			address: '',
			telephone: '',
			departmentId: '',
			cityId: '',
			description: '',
			image: ''
		},
	});

	

	function onSubmit(input: CreateShelterSchema) {
		// createShelterMutation.mutate({
		// 	// firstName: input.firstName,
		// 	// lastName: input.lastName,
		// 	// address: input.address,
		// 	// telephone: input.telephone,
		// 	// departmentId: input.departmentId,
		// 	// cityId: input.cityId,
		// 	// email: input.email,
		// 	// password: input.password,
		// 	// role: input.role
		// })
	}
	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-6  gap-4 p-2">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="shelterName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nombre del refugio</FormLabel>
									<Input type="text" placeholder="Nombre del refugio" {...field} />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Dirección</FormLabel>
									<Input type="text" placeholder="Dirección" {...field} />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<FormField
							control={form.control}
							name="telephone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefono</FormLabel>
									<Input type="number" placeholder="Telefono" {...field} />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<FormField
							control={form.control}
							name="departmentId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Departamento</FormLabel>
									<Select
										value={field.value?.toString()}
										onValueChange={field.onChange}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccione un departamento" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup />
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<FormField
							control={form.control}
							name="cityId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ciudad</FormLabel>
									<Select
										value={field.value?.toString()}
										onValueChange={field.onChange}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccione una ciudad" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup />
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea placeholder="Escriba la descripción del refugio aquí" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-6 mt-5">
						<Button className="w-full uppercase text-sm font-bold" disabled={loading}>
							{loading && <Icons.spinner className="mr-2 size-4 animate-spin" aria-hidden="true" />}
							Crear Refugio
							<span className="sr-only">Crear Refugio</span>
						</Button>
					</div>
				</form>
			</Form>
			
		</div>
	);
}
