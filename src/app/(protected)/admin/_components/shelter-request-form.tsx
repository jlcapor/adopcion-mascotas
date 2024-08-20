// 'use client';
// import { Input } from '@/components/ui/input';
// import { CreateShelterSchema } from '@/lib/validations/shelter';
// import { UseFormReturn } from 'react-hook-form';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { api } from '@/trpc/react';
// import { cn } from '@/lib/utils';

// interface ShelterRequestFormProps
//   extends Omit<React.ComponentPropsWithRef<"form">, "onSubmit"> {
//   children: React.ReactNode
//   form: UseFormReturn<CreateShelterSchema>
//   onSubmit: (data: CreateShelterSchema) => void
// }

// export default function ShelterRequestForm({
//     children,
//     form,
//     onSubmit,
//     className,
//     ...props
// }: ShelterRequestFormProps) {
	
	
// 	const { data: regions } = api.shelter.getProvinces.useQuery(); 
// 	const regionId = Number(form.watch('provinceId'));
	
// 	const { data: cities } = api.shelter.getCitiesByRegionId.useQuery(
// 		regionId, {
// 			enabled: !!regionId,
// 		}
// 	);
	
// 	return (
// 		<Form {...form}>
// 			<form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off" className={cn("grid w-full gap-4", className)}>
// 				<div className="col-span-6">
// 					<FormField
// 						control={form.control}
// 						name="shelterName"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Nombre del refugio</FormLabel>
// 								<Input type="text" placeholder="Nombre del refugio" {...field} />
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6">
// 					<FormField
// 						control={form.control}
// 						name="address"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Dirección</FormLabel>
// 									<Input type="text" placeholder="Dirección" {...field} />
// 								</FormItem>
// 							)}
// 						/>
// 				</div>
// 				<div className="col-span-6">
// 					<FormField
// 						control={form.control}
// 						name="neighborhood"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Área</FormLabel>
// 								<Input type="text" placeholder="Barrio" {...field} />
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6">
// 					<FormField
// 						control={form.control}
// 						name="telephone"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Telefono</FormLabel>
// 								<Input type="number" placeholder="Telefono" {...field} />
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 sm:col-span-3">
// 					<FormField
// 						control={form.control}
// 						name="provinceId"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Departamento</FormLabel>
// 									<Select
//                                         value={field.value?.toString()}
//                                         onValueChange={(value: typeof field.value) =>
// 											field.onChange(value)
// 										}
// 									>
// 										<FormControl>
// 											<SelectTrigger>
// 												<SelectValue placeholder="Seleccione un departamento" />
// 											</SelectTrigger>
// 										</FormControl>
// 										<SelectContent>
// 											<SelectGroup>
// 												{regions?.map((option) => (
// 													<SelectItem
// 														key={option.id}
// 														value={option.id.toString()}
// 														className="uppercase"
// 													>
// 														{option.name.toUpperCase()}
// 													</SelectItem>
// 												))}
// 											</SelectGroup>
// 										</SelectContent>
// 									</Select>
// 								</FormItem>
// 							)}
// 						/>
// 				</div>
// 				<div className="col-span-6 sm:col-span-3">
// 					<FormField
// 						control={form.control}
// 						name="cityId"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Ciudad</FormLabel>
// 								<Select
//                                     value={field.value?.toString()}
//                                     onValueChange={field.onChange}
// 								>
// 									<FormControl>
// 										<SelectTrigger>
// 											<SelectValue placeholder="Seleccione una ciudad" />
// 										</SelectTrigger>
// 									</FormControl>
// 										<SelectContent>
// 											<SelectGroup>
// 											{cities?.map((option) => (
// 												<SelectItem 
// 													key={option.id} 
// 													value={option.id.toString()}
// 													className="uppercase"
// 												>
// 													{option.name.toUpperCase()}
// 												</SelectItem>
// 											))}
// 											</SelectGroup>
// 										</SelectContent>
// 								</Select>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6">
// 					<FormField
// 						control={form.control}
// 						name="description"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Description</FormLabel>
// 								<FormControl>
// 									<Textarea className="w-full h-40 resize-y" placeholder="Escriba la descripción del refugio aquí" {...field} />
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
					
// 				<div className="col-span-6 mt-5">
// 					{children}
// 				</div>
// 			</form>
// 		</Form>
// 	);
// }

// //439699623675734
