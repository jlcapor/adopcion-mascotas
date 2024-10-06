"use client"
import * as React from "react"
import { 
  createProductSchema, 
  type CreateProductSchema 
} from "@/lib/validations/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger 
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";

import { addProduct } from "@/lib/actions/product";
import { toast } from "sonner";
import { Icons } from "@/components/shared/Icons";
import { getCategories, getSubcategories, getPetTypes } from '@/lib/queries/admin/product';

type AddProductFormProps = {
  promises: Promise<{
    categories: Awaited<ReturnType<typeof getCategories>>
    subcategories: Awaited<ReturnType<typeof getSubcategories>>
    petTypes: Awaited<ReturnType<typeof getPetTypes>>
  }>
}

// Memoize FormMessage to prevent unnecessary re-renders
const MemoizedFormMessage = React.memo(FormMessage);

export default function AddProductForm({ promises }: AddProductFormProps) {
  // const router = useRouter()
  const { categories, subcategories, petTypes } = React.use(promises)

  const [isCreatePending, startCreateTransaction] = React.useTransition();
  const form = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      stock: NaN,
      categoryId: "",
      subcategoryId: "",
      petTypeId: "",
    },
  })

  async function onSubmit(input: CreateProductSchema) {
    // const formData = new FormData();
    startCreateTransaction(async () => {
      const { error } = await addProduct(input)
      if (error) {
        toast.error(error)
        return
      }
      form.reset()
      toast.success("Producto creado exitosamente")
    })
    
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
                <MemoizedFormMessage />
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
                      <SelectValue placeholder="Selecciona un Tipo de Mascota" />
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
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una Categoria" />
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
                <MemoizedFormMessage />
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
                <MemoizedFormMessage />
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
                <MemoizedFormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="stock"
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
                <MemoizedFormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          onClick={() =>
            void form.trigger(["name", "description", "price", "stock"])
          }
          className="w-fit"
          disabled={isCreatePending}
        >
          {isCreatePending && (
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
