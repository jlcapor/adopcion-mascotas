'use client'
import React from 'react';
import { UploadButton } from '@/lib/uploadthing';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';
import { Shelter } from '@prisma/client';
import { updateShelterSchema, UpdateShelterSchema } from '@/lib/validations/shelter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Loader2, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface UpdateShelterFormProps {
	shelter: Shelter;
}

export default function UpdateShelterForm({ shelter }: UpdateShelterFormProps) {
  const [image, setImage] = React.useState<string | undefined>('');
  const [imageIsDeletin, setImageIsDeleting] = React.useState(false);

  const form = useForm<UpdateShelterSchema>({
	resolver: zodResolver(updateShelterSchema),
	defaultValues: {
		shelterName: shelter?.name || "",
		address: shelter?.address,
		neighborhood: shelter.neighborhood || "",
		telephone: shelter?.telephone,
		provinceId: shelter.provinceId,
		cityId: shelter.cityId,
		description: shelter?.description || "",
	}
  })

  React.useEffect(() => {
    if(typeof image === 'string'){
      form.setValue('image', image, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true
      })
    }
  }, [image]);

  function onSubmit(input: UpdateShelterSchema) {
	
  }

  
  const handleImageDelete = (image: string) => {
		setImageIsDeleting(true);
		const imageKey = image.substring(image.lastIndexOf('/') + 1);
		axios.post('/api/uploadthing/delete', {imageKey}).then((res)=>{
			if(res.data.success){
				setImage('');
				toast({
				  variant:'success',
				  description:"Image removed.",
				})
			}
		}).catch(()=>{
			toast({
			  variant:'destructive',
			  description:"Something went wrong",
			})
		  }).finally(()=> {
			setImageIsDeleting(false);
		  })
	}
  return (
	<Form {...form}>
      <form className="grid gap-6">
	  	<div className="col-span-6">
			<FormField
				control={form.control}
				name="shelterName"
				render={({ field }) => (
					<FormItem>
						<FormLabel>
							Nombre del refugio
						</FormLabel>
						<FormControl>
							<Input placeholder="Nombre del refugio." {...field} />
						</FormControl>
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
						<FormLabel>Direccion</FormLabel>
						<FormControl>
							<Input placeholder="Direccion" {...field} />
						</FormControl>
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
						<FormControl>
							<Input placeholder="Telefono" {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
		</div>

		<div className="col-span-6">
			<FormField
				control={form.control}
				name="neighborhood"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Barrio</FormLabel>
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
						<FormLabel>Descripción</FormLabel>
						<FormControl>
							<Textarea className="w-full h-40 resize-y" placeholder="Escriba la descripción del refugio aquí" {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
		</div>
		<div className="col-span-6">
			<FormField
				control={form.control}
				name="image"
				render={({ field }) => (
					<FormItem className="flex flex-col w-full">
						<FormLabel>Imagen del Refugio</FormLabel>
							<FormControl>
								{image ? <>
									<div className="relative max-w-[400px] min-w-[200px]  max-h-[400px] min-h-[200px] mt-4">
										<Image
											fill
											src={image}
											alt="Refugio imagen"
											className="object-contain"
										/>
										<Button onClick={()=> handleImageDelete(image)} type="button" size='icon' variant='ghost' className="absolute right-[-12px] top-0">
											{imageIsDeletin ? <Loader2/> : <XCircle/>}
										</Button>
									</div>
									</> : <>
									<div className="flex flex-col items-center max-w-[4000px] p-12 border-2 border-dashed border-primary/50 rounded mt-4">
										<UploadButton
											endpoint="imageUploader"
												onClientUploadComplete={(res) => {
													setImage(res[0]?.url)
													toast({
														title: "Scheduled: Catch up",
														description: "Friday, February 10, 2023 at 5:57 PM",
													})
												}}
												onUploadError={(error: Error) => {
													alert(`ERROR! ${error.message}`);
												}}
											/>
										</div>
									</>
								}
							</FormControl>
												
					</FormItem>
				)}
			/>
		</div>
	  </form>
    </Form>
  )
}
