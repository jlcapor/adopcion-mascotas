import ProductImageUploader from './_components/product-image-uploader';
import { db } from '@/server/db';
import { notFound } from 'next/navigation';

interface ImageProductPageProps {
	params: {
		productId: string,
	},
}

async function getProductById(productId: string) {
	const product = await db.product.findUnique({
		where: {
			id: productId,
		},
		include: {
			images: {
				select: { 
					id: true,
					url: true,
					name: true,
				},
			},
		},
	});
	if (!product) {
		notFound();
	}

	return product;
}
export default async function ImageProductPage({ params }: ImageProductPageProps) {
	const productId = params.productId;
	const product = await getProductById(productId);
	return (
		<div className="grid items-center gap-8 pb-8 pt-6 lg:py-6">
			<ProductImageUploader productId={productId} images={product.images}/>
		</div>
	);
}
