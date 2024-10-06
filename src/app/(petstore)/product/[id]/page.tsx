import React from 'react';
import { Button } from '@/components/ui/button';
import { SearchParams, stringifySearchParams } from '@/lib/url-state';
import { db } from '@/server/db';
import { ArrowLeftIcon, MoveLeft } from 'lucide-react';
import Link from 'next/link';

async function fetchProductById(id: string) {
	const product = await db.product.findUnique({
		where: { id },
		include: {
			productImages: true,
		},
	});
	return product;
}

export default async function ProductDetailPage({
	params,
	searchParams,
}: {
	params: { id: string },
	searchParams: SearchParams,
}) {
	const petProduct = await fetchProductById(params.id);
	return (
		<div className="relative mx-auto px-4 xl:px-4">
			<div className="mb:pb-8 relative w-fit py-4 md:pt-12">
				<Button variant="ghost" className="mb-4" asChild>
					<Link href={`/products?${stringifySearchParams(searchParams)}`}>
						<MoveLeft className="size-8 mr-2 cursor-pointer fill-black transition-transform hover:scale-110" />{' '}
						Volver a productos
					</Link>
				</Button>
				<div className="flex flex-col md:flex-row gap-8">
					<div className="w-1/2 md:w-1/4 mx-auto md:mx-0" />
				</div>
			</div>
			<main className="max-w-container-sm mx-auto">
				<div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-xl md:grid-cols-12 md:gap-8">
					
				</div>
			</main>
		</div>
	);
}
