'use client'
import * as React from 'react';
import { cn, formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { PlaceholderImage } from '@/components/placeholder-image';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/shared/Icons';
import { CheckIcon, EyeOpenIcon, PlusIcon } from '@radix-ui/react-icons';
import { PickedProduct } from '@/types';
interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
	product: PickedProduct
	variant?: "default" | "switchable"
	priority?: boolean
	isAddedToCart?: boolean
	onSwitch?: () => Promise<void>
}
export default function ProductCard({
	product,
	variant = 'default',
	priority = false,
	isAddedToCart = false,
	onSwitch,
	className,
	...props
}: ProductCardProps) {
	const [isUpdatePending, startUpdateTransition] = React.useTransition()
	return (
		<Card
		className={cn("size-full overflow-hidden rounded-md", className)}
		{...props}
		>
			<Link aria-label={product.name}  href={`/product/${product.id}`}>
				<CardHeader className="border-b p-0">
					<AspectRatio ratio={4 / 3}>
						{product.productImages?.length ? (
              <Image
                src={
                product.productImages[0]?.url ?? "/images/product-placeholder.webp"
                }
                alt={product.productImages[0]?.name ?? product.name}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
              ) : (
              <PlaceholderImage className="rounded-none" asChild />
              )}
					</AspectRatio>
				</CardHeader>
				<span className="sr-only">{product.name}</span>
			</Link>
			<Link href={`/product/${product.id}`} tabIndex={-1}>
				<CardContent className="space-y-1.5 p-4">
					<CardTitle className="line-clamp-1">{product.name}</CardTitle>
					<CardDescription className="text-xl line-clamp-1">
						{formatPrice(product.price)}
					</CardDescription>
				</CardContent>
			</Link>
			<CardFooter className="p-4 pt-1">
			{variant === "default" ? (
          <div className="flex w-full items-center space-x-2">
            <Button
              aria-label="Add to cart"
              size="sm"
              className="h-8 w-full rounded-sm"
              onClick={async () => {
                
              }}
              disabled={isUpdatePending}
            >
              {isUpdatePending && (
                <Icons.spinner
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Add to cart
            </Button>
            <Link
              href={`/preview/product/${product.id}`}
              title="Preview"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "icon",
                  className: "h-8 w-8 shrink-0",
                })
              )}
            >
              <EyeOpenIcon className="size-4" aria-hidden="true" />
              <span className="sr-only">Preview</span>
            </Link>
          </div>
        ) : (
          <Button
            aria-label={isAddedToCart ? "Remove from cart" : "Add to cart"}
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={async () => {
              startUpdateTransition(async () => {})
              await onSwitch?.()
            }}
            disabled={isUpdatePending}
          >
            {isUpdatePending ? (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            ) : isAddedToCart ? (
              <CheckIcon className="mr-2 size-4" aria-hidden="true" />
            ) : (
              <PlusIcon className="mr-2 size-4" aria-hidden="true" />
            )}
            {isAddedToCart ? "Added" : "Add to cart"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}