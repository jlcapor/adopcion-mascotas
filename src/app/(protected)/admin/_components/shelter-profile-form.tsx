// 'use client';
// import { Button } from '@/components/ui/button';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { UpdateShelterInput, updateShelterSchema } from '@/lib/validations/shelter';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Shelter } from '@prisma/client';
// import { PencilLine } from 'lucide-react';
// // import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// interface InfoShelterFormFormProps {
// 	shelter: Shelter,
// }

// export default function ShelterProfileForm({ shelter }: InfoShelterFormFormProps) {
// 	const [image, setImage] = useState<string | undefined>(shelter?.image ?? "");
// 	const router = useRouter();
// 	const form = useForm<UpdateShelterInput>({
// 		resolver: zodResolver(updateShelterSchema),
// 		defaultValues: {
// 			shelterName: shelter.name ?? "",
// 			address: shelter.address,
// 			neighborhood: shelter.neighborhood ?? "",
// 			telephone: shelter.telephone ?? "",
//             provinceId: shelter.provinceId ?? undefined,
//             cityId: shelter.cityId ?? undefined,
//             description: shelter.description ?? "",
//             image: shelter.image ?? "",
// 		}
// 	})
	
// 	return (
// 		<Form {...form}>
// 			<form className="mt-8 grid grid-cols-6 gap-4">
// 				<div className="col-span-6 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="shelterName"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Nombre refugio</FormLabel>
// 								<FormControl>
// 									<Input placeholder="Escriba el nombre del refugio aquí." {...field} />
// 								</FormControl>
// 								<FormMessage />
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 sm:col-span-3 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="address"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Dirección</FormLabel>
// 								<FormControl>
// 									<Input placeholder="Escriba la dirección del refugio aquí." {...field} />
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 sm:col-span-3 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="neighborhood"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Ubicación</FormLabel>
// 								<FormControl>
// 									<Input placeholder="Escriba la ubicación del refugio aquí." {...field} />
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="telephone"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Telefono</FormLabel>
// 								<FormControl>
// 									<Input placeholder="Escriba el telefono del refugio aquí." {...field} />
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 sm:col-span-3 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="provinceId"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Provincia</FormLabel>
// 								<FormControl>
// 									<Select
// 									// value={field.value?.toString()}
// 									>
// 										<SelectTrigger className="capitalize">
// 											<SelectValue placeholder={field.value} />
// 										</SelectTrigger>
// 										<SelectContent />
// 									</Select>
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 sm:col-span-3 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="cityId"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Ciudad</FormLabel>
// 								<FormControl>
// 									<Select
// 									// value={field.value?.toString()}
// 									// onValueChange={field.onChange}
// 									>
// 										<SelectTrigger className="capitalize">
// 											<SelectValue placeholder={field.value} />
// 										</SelectTrigger>
// 										<SelectContent />
// 									</Select>
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="image"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Imagen</FormLabel>
// 								<FormControl>
// 								{image ? (
// 									<div className="relative max-w-[400px] min-w-[200px]  max-h-[400px] min-h-[200px] mt-4">
// 										<Image
// 										 	fill
// 											src={image}
// 											alt="productImage"
// 											className="object-cover w-full h-[250px]"
// 										/>
// 										<div className="flex justify-end">
//     										dfgdfgdfg
// 										</div>
// 									</div>
// 									) : null}
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
// 				<div className="col-span-6 space-y-2">
// 					<FormField
// 						control={form.control}
// 						name="description"
// 						render={({ field }) => (
// 							<FormItem>
// 								<FormLabel>Descripción</FormLabel>
// 								<FormControl>
// 									<Textarea
// 										placeholder="Escriba la descripción del refugio aquí"
// 										className="resize-none border rounded-md w-full h-[189px] p-2 mb-12"
// 										{...field}
// 									/>
// 								</FormControl>
// 							</FormItem>
// 						)}
// 					/>
// 				</div>
				
// 				<div className="flex flex-row items-center gap-4">
// 					<Button className="max-w-[180px]">
// 						<PencilLine className="mr-2 h-4 w-4"/> Actualizar
// 					</Button> 
// 					<Button onClick={()=>router.push(`/pets/${shelter.id}`)} variant="outline" type="button">Mascotas</Button>
// 				</div>
// 			</form>
// 		</Form>
// 	);
// }
