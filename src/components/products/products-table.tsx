import { Button } from '@/components/ui/button';
import { 
	DropdownMenu, 
	DropdownMenuContent, 
	DropdownMenuItem, 
	DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { getProducts } from '@/lib/data/product';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Icons } from '../shared/Icons';
import Link from 'next/link';


export default async function ProductsTable({
	query,
	currentPage,
  }: {
	query: string;
	currentPage: number;
  }) {
	const products = await getProducts({query, currentPage});
	return (
		<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-4 py-3">
								producto
							</th>
							<th scope="col" className="px-4 py-3">
								estado
							</th>
							<th scope="col" className="px-4 py-3">
								categoria
							</th>
							<th scope="col" className="px-4 py-3">
								precio
							</th>
							<th scope="col" className="px-4 py-3">
								cantidad
							</th>
							<th scope="col" className="px-4 py-3">
								calificacion
							</th>

							<th scope="col" className="px-4 py-3">
								<span className="sr-only">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{products.data?.map((product) => (
							<tr key={product.id} className="border-b dark:border-gray-700">
								<th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
								<td className="px-4 py-3 lowercase">{product.status}</td>
								<td className="px-4 py-3">{product.category.name}</td>
								<td className="px-4 py-3">{product.price}</td>
								<td className="px-4 py-3">{product.stock}</td>
								<td className="px-4 py-3">{product.rating}</td>
								<td className="px-4 py-3">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												aria-label="Open menu"
												variant="ghost"
												className="flex size-8 p-0 data-[state=open]:bg-muted"
												>
												<DotsHorizontalIcon className="size-4" aria-hidden="true" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="w-40">
											<DropdownMenuItem asChild>
												<Link href={`/admin/products/${product.id}/edit`} className="flex items-center space-x-2.5">
													<Icons.pencil className="size-5 mr-2" />
													<p className="text-sm">Actualizar</p>
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Icons.close className="size-5 mr-2 " />
												<p className="text-sm space-x-2.5">Eliminar</p>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
