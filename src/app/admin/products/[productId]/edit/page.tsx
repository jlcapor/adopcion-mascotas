import { notFound } from 'next/navigation';
import { db } from '@/server/db';

type ProductDetailPageProps = {
	params: {
		productId: string,
	},
};

async function getProductById(id: string) {
	const product = await db.product.findUnique({
		where: {
			id,
		},
	});
	if (!product) {
		notFound();
	}

	return product;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = await getProductById(params.productId);
	return <h1>{product.name}</h1>;
}
