import { ProductsWithCategory } from "@/app/admin/products/page";
import { getFilteredProducts } from "@/lib/data/product";
import Image from "next/image";

type ProductTableProps = {
    products: ProductsWithCategory
}
export default async function ProductsTable({ products }: ProductTableProps) {
	// const products = await getFilteredProducts(query, currentPage);
	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg p-2 md:pt-0">
					<div className="md:hidden">
						{/* {invoices?.map((invoice) => ( */}

						{/* ))} */}
					</div>
					<table className="hidden min-w-full divide-y md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col" className="px-4 py-5 font-medium sm:pl-6">
									Producto
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Precio
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Cantidad
								</th>
								<th scope="col" className="relative py-3 pl-6 pr-3">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{products?.map((product) => (
							<tr key={product.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
								<td className="whitespace-nowrap py-3 pl-6 pr-3">
									<div className="flex items-center gap-3">
										<Image
											src={product.images}
											className="rounded-full"
											width={28}
											height={28}
											alt={`${product.name}'s profile picture`}
										/> 
										 <p>{product.name}</p>
									</div>
								</td>
								<td className="whitespace-nowrap px-3 py-3">
									<p>{product.price}</p>
								</td>
								<td className="whitespace-nowrap px-3 py-3">
									<p>{product.quantity}</p>
								</td>
								
								<td className="whitespace-nowrap py-3 pl-6 pr-3">
									<div className="flex justify-end gap-3" />
								</td>
							</tr>
						))} 
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
