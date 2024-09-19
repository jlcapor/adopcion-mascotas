'use client';

import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useUploadFile } from '@/hooks/use-upload-file';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { getErrorMessage } from '@/lib/handle-error';
import { FileUploader } from '@/components/shared/FileUploader';
import { Button } from '@/components/ui/button';
import { UploadedFilesCard } from '@/components/shared/UploadedFilesCard';
import { uploadProductImageSchema, type UploadProductImageSchema } from '@/lib/validations/product';
import { uploadProductImage } from '@/lib/actions/product';
import { ProductFile } from '@/types';

interface ProductImageUploaderProps {
	productId: string;
	images: ProductFile[]
}

export default function ProductImageUploader({ productId, images}: ProductImageUploaderProps) {
	const [ loading, setLoading ] = React.useState(false);
	const { uploadFiles, progresses, uploadedFiles, isUploading } = useUploadFile('imageUploader', {
		defaultUploadedFiles: images,
	});
	const form = useForm<UploadProductImageSchema>({
	    resolver: zodResolver(uploadProductImageSchema),
	    defaultValues: {
	      images: [],
	    },
	})
	function onSubmit(input: UploadProductImageSchema) {
		setLoading(true);
		toast.promise(
		    uploadFiles(input.images ?? []).then((uploadedFiles) => {
				return uploadProductImage({
					productId,
					images: uploadedFiles
				})
		    }),
		    {
		      loading: "Adding product...",
		      success: () => {
		        form.reset()
		        setLoading(false)
		        return "Product"
		      },
		      error: (err) => {
		        setLoading(false)
		        return getErrorMessage(err)
		      },
		    }
		)
	}
	return (
		<Form {...form}>
			<form className="w-full max-w-4xl mx-auto space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="images"
					render={({ field }) => (
						<div className="space-y-6">
							<FormItem className="w-full">
								<FormLabel>Imagenes</FormLabel>
								<FormControl>
									<FileUploader
										value={field.value ?? []}
										onValueChange={field.onChange}
										maxFiles={3}
										maxSize={4 * 1024 * 1024}
										progresses={progresses}
										disabled={isUploading}
									/>
								</FormControl>
							</FormItem>
							{uploadedFiles.length > 0 ? (
                                <UploadedFilesCard files={uploadedFiles} />
                            ) : null}
						</div>
					)}
				/>
				<Button className="w-fit" disabled={loading}>
					Guardar Imagen
				</Button>
			</form>
		</Form>
	);
}
