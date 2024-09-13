import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export default function HeroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-12 bg-muted">
			<div className="container px-4 md:px-6">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1
								className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-up"
								style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
							>
								Bienvenido a Pet Shop
							</h1>
							<p
								className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up"
								style={{ animationDelay: '0.30s', animationFillMode: 'both' }}
							>
								Encuentra todo lo que necesitas para el cuidado y bienestar de tus mascotas.
							</p>
						</div>
						<div
							className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up"
							style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
						>
							<Link href="/products" className={cn(buttonVariants())}>
								Explorar Productos
							</Link>
							<Link href="/dashboard/stores" className={cn(buttonVariants({ variant: 'outline' }))}>
								Sell now
							</Link>
						</div>
					</div>
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
