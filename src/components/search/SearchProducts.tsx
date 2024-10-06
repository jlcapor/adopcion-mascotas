'use client';

import * as React from 'react';
import { Product } from '@prisma/client';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'; 
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import MobileFilters from './filter/MobileFilters';
import { Sorter } from './filter/Sorter';

interface SearchProductsProps {
	products?: Product[],
}
export default function SearchProducts({ products }: SearchProductsProps) {
	const id = React.useId()
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [isPending, startTransition] = React.useTransition()

	const page = searchParams?.get("page") ?? "1"
	const per_page = searchParams?.get("per_page") ?? "8"
	const sort = searchParams?.get("sort") ?? "createdAt.desc"
	const petTypesParam = searchParams?.get("petTypes") 
	const categoriesParam = searchParams?.get("categories")
	const subcategoriesParam = searchParams?.get("subcategories")

	const createQueryString = React.useCallback(
		(params: Record<string, string | number | null>) => {
		  const newSearchParams = new URLSearchParams(searchParams?.toString())
		  for (const [key, value] of Object.entries(params)) {
			if (value === null) {
			  newSearchParams.delete(key)
			} else {
			  newSearchParams.set(key, String(value))
			}
		  }

		  return newSearchParams.toString()
		},
		[searchParams]
	)

	return (
		<section className="flex flex-col space-y-2 md:pt-4">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				{/* Contenedor del título y párrafo */}
				<div className="flex flex-col">
					<h1 className="text-3xl font-extrabold">hfgfgh</h1>
					<p className="text-muted-foreground">
						ghfghfgh
					</p>
					
				</div>

				{/* Contenedor de los botones */}
				<div className="flex items-center space-x-2 mt-2 sm:mt-0">
					{/* Botón de Filtrar */}
					<MobileFilters/>
					{/* Botón de Ordenar */}
					<Sorter/>
				</div>
			</div>

			{/* Contenido de productos */}
			<div className="-px-4 grid w-full grid-cols-1 items-start gap-1 gap-y-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
				{/* Aquí irán los productos */}
			</div>

			<div className="w-full text-center mt-8">
				{/* Paginación o mensaje cuando no hay productos */}
			</div>
		</section>
	);
}
