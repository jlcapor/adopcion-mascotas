
import { getProducts } from '@/lib/data/product';
import ProductItem from './product-item';
interface ProductsTableProps {
	productsPromise: ReturnType<typeof getProducts>
}
export async function ProductsTable({
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
								created At
							</th>

							<th scope="col" className="px-4 py-3">
								<span className="sr-only">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
					{products.data?.length ? (
						products.data?.map((product) => (
							<ProductItem key={product.id} product={product} />
						))
					) : (
						<tr>
							<td colSpan={8} className="items-center justify-center text-muted-foreground text-center py-4">
								No se encontraron productos.
							</td>
						</tr>
					)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
