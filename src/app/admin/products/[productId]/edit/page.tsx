import { db } from '@/server/db';
import { notFound } from 'next/navigation';

type ProductDetailPageProps = {
	params: {
		productId: string,
	},
};

// async function getProductById(id: string) {
// 	const product = await db.product.findUnique({
// 		where: {
// 			id,
// 		},
// 	});
// 	if (!product) {
// 		notFound();
// 	}

// 	return product;
// }

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
	const product = await db.product.findUnique({
		where: {
		  id: params.productId,
		},
	  });
	
	  if (!product) {
		return notFound();
	  }

	  return (
		<h2>{product.name}</h2>
	  )
}
