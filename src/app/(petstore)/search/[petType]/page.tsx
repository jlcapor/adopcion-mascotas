'use client';

import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';

// interface PetTypePageProps {
// 	params: {
// 		petType: string,
// 	},
// }

// interface Filters {
// 	category: string[],
// 	brand: string[],
// 	price: {
// 		min: number,
// 		max: number,
// 	},
// }
export default function PetTypePage() {
	
	// const [filters, setFilters] = useState<Filters>({
    //     category: [],
    //     brand: [],
    //     price: {
    //       min: 0,
    //       max: 500,
    //     },
    // });
	// const products = [
	// 	{
	// 		id: 1,
	// 		name: 'Alimento para Perros Adultos',
	// 		brand: 'Purina',
	// 		category: 'Alimentos',
	// 		price: 29.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Juguete para Gatos Interactivo',
	// 		brand: 'Whisker',
	// 		category: 'Juguetes',
	// 		price: 12.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Cama para Mascotas Acolchada',
	// 		brand: 'Petmate',
	// 		category: 'Accesorios',
	// 		price: 39.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Correa para Perros Reflectante',
	// 		brand: 'Paw',
	// 		category: 'Accesorios',
	// 		price: 14.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Comida Húmeda para Gatos',
	// 		brand: 'Fancy Feast',
	// 		category: 'Alimentos',
	// 		price: 1.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 6,
	// 		name: 'Rascador para Gatos de Sisal',
	// 		brand: 'Trixie',
	// 		category: 'Juguetes',
	// 		price: 24.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 7,
	// 		name: 'Collar Antipulgas para Perros',
	// 		brand: 'Seresto',
	// 		category: 'Salud',
	// 		price: 59.99,
	// 		image: '/placeholder.svg',
	// 	},
	// 	{
	// 		id: 8,
	// 		name: 'Transportín para Mascotas',
	// 		brand: 'Petmate',
	// 		category: 'Accesorios',
	// 		price: 49.99,
	// 		image: '/placeholder.svg',
	// 	},
	// ];

	// const filteredProducts = useMemo(
	// 	() => {
	// 		return products.filter((product) => {
	// 			if (filters.category.length > 0 && !filters.category.includes(product.category)) {
	// 				return false;
	// 			}
	// 			if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
	// 				return false;
	// 			}
	// 			if (product.price < filters.price.min || product.price > filters.price.max) {
	// 				return false;
	// 			}
	// 			return true;
	// 		});
	// 	},
	// 	[ filters ]
	// );


	return (
		<section className="flex flex-col space-y-6">
            <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                <h1 className="text-2xl font-bold mb-4 sm:mb-0">Productos</h1>
                <div className="flex items-center space-x-4">
                    <Button aria-label="Filter products" size="sm" className='flex w-full items-center justify-center px-3 py-2 text-sm font-medium'>
						<Icons.filter className="size-5 mr-1" />
                        <span className="text-sm">Filters</span>
                    </Button>
                    <button className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'>2</button>
                </div>
            </div>
			<div className="-px-4 grid w-full grid-cols-1 items-start gap-1 gap-y-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
				{/* {filteredProducts.map((product) => (
					<div key={product.id} className="bg-background border rounded-lg overflow-hidden">
						<Link href="#" prefetch={false}>
							<img
								src="/images/product-placeholder.webp"
								alt={product.name}
								width={400}
								height={400}
								className="w-full h-48 object-cover"
								style={{ aspectRatio: '400/400', objectFit: 'cover' }}
							/>
							<div className="p-4">
								<h3 className="text-lg font-medium mb-2">{product.name}</h3>
								<p className="text-muted-foreground mb-4">{product.brand}</p>
								<div className="flex items-center justify-between">
									<span className="text-primary font-medium">${product.price.toFixed(2)}</span>
									<Button size="sm">Agregar al carrito</Button>
								</div>
							</div>
						</Link>
					</div>
				))} */}
			</div>
            <div className="w-full text-center">
                <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
            </div>
		</section>
	);
}
