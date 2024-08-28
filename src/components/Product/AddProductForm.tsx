"use client"
import * as React from "react"
import { createProductSchema, CreateProductSchema } from "@/lib/validations/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Icons } from "../shared/Icons";
import { Button } from "../ui/button";
import { useUploadFile } from "@/hooks/use-upload-file";
import { FileUploader } from "../shared/FileUploader";
import { ProductFile } from "@/types";
import { addProduct } from "@/lib/actions/product";
import { getCategories, getSubcategories, getPetTypes } from '@/lib/data/product';
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handle-error";
import { Files } from "../files";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

type AddProductFormProps = {
  promises: Promise<{
    categories: Awaited<ReturnType<typeof getCategories>>
    subcategories: Awaited<ReturnType<typeof getSubcategories>>
    petTypes: Awaited<ReturnType<typeof getPetTypes>>
  }>
}
export default function AddProductForm({ promises }: AddProductFormProps) {
  const { categories, subcategories, petTypes } = React.use(promises)
  const [loading, setLoading] = React.useState(false)
  const { uploadFiles, progresses, uploadedFiles, isUploading }=useUploadFile("imageUploader")
  const form = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      quantity: NaN,
      categoryId: "",
      subcategoryId: "",
      petTypeId: "",
      images: [] ,
    },
  })


  function onSubmit(input: CreateProductSchema) {
    // const formData = new FormData();
    setLoading(true)

    toast.promise(
      uploadFiles(input.images ?? []).then(() => { 
        return addProduct({
          ...input,
          images: JSON.stringify(uploadedFiles) as unknown as ProductFile[],
        })
      }),
      {
        loading: "Agregando producto...",
        success: () => {
          form.reset()
          setLoading(false)
          return "Producto"
        },
        error: (err) => {
          setLoading(false)
          return getErrorMessage(err)
        },
      }
    )
    // for (const field of Object.keys(input) as Array<keyof typeof input>) {
    //   console.log(input[field])
    //   formData.append(`${field}`, `${input[field]}`);
    // }

    
   
  }
	return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del producto</FormLabel>
                <FormControl>
                  <Input placeholder="Escriba el nombre del producto aquí." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 space-y-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripcion</FormLabel>
                <FormControl>
                  <Textarea
                     placeholder="Escriba la descripción del producto aquí."
                     {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 space-y-2">
          <FormField
             control={form.control}
             name="petTypeId"
             render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tipo de Mascota</FormLabel>
                <Select
                  value={field.value?.toString()}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subcategory" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {petTypes.map((option) => (
                        <SelectItem key={option.id} value={option.id.toString()}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
             )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Categoria</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value: typeof field.value) =>
                    field.onChange(value)
                  }
                >
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder={field.value} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map((option) => (
                        <SelectItem
                          key={option.id}
                          value={option.id.toString()}
                          className="capitalize"
                        >
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      
        <div className="col-span-6 sm:col-span-3">
          <FormField
              control={form.control}
              name="subcategoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Subcategoría</FormLabel>
                  <Select
                    value={field.value?.toString()}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una Subcategoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {subcategories.map((option) => (
                          <SelectItem key={option.id} value={option.id.toString()}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Escriba el precio del producto aquí."
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Escriba la cantidad del producto aquí."
                      value={Number.isNaN(field.value) ? "" : field.value}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 space-y-2">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <div className="space-y-12">
                <FormItem className="w-full">
                  <FormLabel>Imagenes</FormLabel>
                  <FormControl>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Upload files</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Upload files</DialogTitle>
                          <DialogDescription>
                            Arrastre y suelte sus archivos aquí o haga clic para explorar.
                          </DialogDescription>
                        </DialogHeader>
                          <FileUploader
                            value={field.value ?? []}
                            onValueChange={field.onChange}
                            maxFiles={4}
                            maxSize={4 * 1024 * 1024}
                            progresses={progresses}
                            disabled={isUploading}
                          />
                      </DialogContent>
                    </Dialog>
                  </FormControl>
                </FormItem>
                {uploadedFiles.length > 0 ? (
                  <Files files={uploadedFiles} />
                ) : null}
              </div>
            )}
          />
        </div>
        <Button
          onClick={() =>
            void form.trigger(["name", "description", "price", "quantity"])
          }
          className="w-fit"
          disabled={loading}
        >
          {loading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Crear producto
          <span className="sr-only">Add Product</span>
        </Button>
      </form>
    </Form>
	);
}
