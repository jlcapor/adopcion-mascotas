'use client';
import React from 'react';
import { Category, Product } from '@prisma/client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { Icons } from '../shared/Icons';
import { formatPrice } from '@/lib/utils';
import { toast } from 'sonner';
import { getErrorMessage } from '@/lib/handle-error';
import { deleteProduct } from '@/lib/actions/product';

type PickedCategory = Pick<Category, 'id' | 'name'>;

type ProductProps = {
	product: Pick<Product, 'id' | 'name' | 'status' | 'price' | 'stock' | 'rating' | 'createdAt'> & {
		category: PickedCategory,
	},
};
export default function ProductItem({ product }: ProductProps) {
	const [ isPending, startTransition ] = React.useTransition();
	return (
		<tr key={product.id} className="border-b dark:border-gray-700">
			<th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
				{product.name}
			</th>
			<td className="px-4 py-3 lowercase">{product.status}</td>
			<td className="px-4 py-3">{product.category.name}</td>
			<td className="px-4 py-3">{formatPrice(product.price)}</td>
			<td className="px-4 py-3">{product.stock}</td>
			<td className="px-4 py-3">{product.rating}</td>
			<td className="px-4 py-3">{product.createdAt.toLocaleDateString('es-ES')}</td>
			<td className="px-4 py-3">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button aria-haspopup="true" size="icon" variant="ghost">
							<MoreHorizontal className="h-4 w-4" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-40">
						<DropdownMenuLabel>Acciones</DropdownMenuLabel>
						<DropdownMenuItem
							className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
							asChild
						>
							<Link href={`/admin/products/${product.id}/edit`}>
								<Icons.pencil className="size-5 mr-2" />
								<p className="text-sm">Actualizar</p>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
							<Icons.eye className="size-5 mr-2" />
							<p className="text-sm">Ver</p>
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								startTransition(() => {
									toast.promise(deleteProduct({ productId: product.id }), {
										loading: 'Eliminando producto...',
										success: () => 'Producto eliminado exitosamente.',
										error: (err: unknown) => getErrorMessage(err),
									});
								});
							}}
							disabled={isPending}
							className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
						>
							<Icons.delete className="size-5 mr-2 " />
							<p className="text-sm">Eliminar</p>
						</DropdownMenuItem>
						<DropdownMenuItem className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200" asChild>
							<Link href={`/admin/products/${product.id}/upload-product`}>
								<Icons.image className="size-5 mr-2" />
								<p className="text-sm">Subir imagen</p>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</td>
		</tr>
	);
}


//upload-product