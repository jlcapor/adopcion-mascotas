import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 
						className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none sm:text-5xl md:text-6xl xl:text-6xl dark:text-white animate-fade-up"
						style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
					>
						Bienvenido a Pet Shop
					</h1>
					<p 
						className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 sm:text-xl lg:text-lg xl:text-xl dark:text-gray-400 animate-fade-up"
						style={{ animationDelay: '0.30s', animationFillMode: 'both' }}
					>
						Encuentra todo lo que necesitas para el cuidado y bienestar de tus mascotas.
					</p>
					<div
						className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up"
						style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
					>
						<Link href="/products" className={cn(buttonVariants())}>
							Explorar Productos
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
						<Link href="/dashboard/stores" className={cn(buttonVariants({ variant: 'outline' }))}>
							Sell now
						</Link>
					</div>
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<Image
						alt="Cup of Coffee"
						loading="eager"
						priority={true}
						className="rounded animate-fade-up"
						height={440}
						width={440}
						src={'/pet-image.png'}
						style={{
							objectFit: 'cover',
							animationDelay: '0.50s',
							animationFillMode: 'both',
						}}
						sizes="(max-width: 640px) 70vw, 450px"
					/>
				</div>
			</div>
		</section>
	);
}
