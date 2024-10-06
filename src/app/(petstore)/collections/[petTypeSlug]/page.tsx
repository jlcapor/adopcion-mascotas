import MobileFilters from '@/components/search/filter/MobileFilters';
import { Sorter } from '@/components/search/filter/Sorter';
import { getProducts } from '@/lib/queries/product';
import { SearchParamsType } from '@/types';

interface PetTypePageProps {
	params: {
		petTypeSlug: string,
	},
	searchParams: SearchParamsType,
}
//PetMainNav
export default async function PetTypePage({ params, searchParams }: PetTypePageProps) {
	const productsTransaction = await getProducts(searchParams);
	return (
		<div className="flex flex-col space-y-2 md:pt-4">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col">
					<h1 className="text-3xl font-extrabold">hfgfgh</h1>
					<p className="text-muted-foreground">ghfghfgh</p>
				</div>
				<div className="flex items-center space-x-2 mt-2 sm:mt-0">
					<MobileFilters />
					<Sorter />
				</div>
			</div>
			<div className="-px-4 grid w-full grid-cols-1 items-start gap-1 gap-y-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
				{/* Aquí irán los productos */}
			</div>

			<div className="w-full text-center mt-8">{/* Paginación o mensaje cuando no hay productos */}</div>
		</div>
	);
}
