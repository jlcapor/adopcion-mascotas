import AddProductForm from '@/components/products/add-product-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCategories, getPetTypes, getSubcategories } from '@/lib/data/product';

export default async function CreateProductForm() {
	const promises = Promise.all([
		getCategories(),
		getSubcategories(),
		getPetTypes(),
	]).then(([ categories, subcategories, petTypes ]) => ({ categories, subcategories, petTypes }));

	//[ categories, subcategories, petTypes ]
	return (
		<div className="flex flex-col items-center space-y-8">
			<Card className="w-full max-w-3xl">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Crear producto</CardTitle>
					<CardDescription>Crea un nuevo producto para tu tienda</CardDescription>
				</CardHeader>
				<CardContent>
					<AddProductForm promises={promises} />
				</CardContent>
			</Card>
		</div>
	);
}
