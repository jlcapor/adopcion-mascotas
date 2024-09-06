import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/shared/PageHeader';
import { Shell } from '@/components/shared/Shell';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function IndexPage() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-12 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-up" style={{ animationDelay: "0.20s", animationFillMode: "both" }}>
									Bienvenido a Pet Shop
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up" style={{ animationDelay: "0.30s", animationFillMode: "both" }}>
									Encuentra todo lo que necesitas para el cuidado y bienestar de tus mascotas.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up" style={{ animationDelay: "0.40s", animationFillMode: "both" }}>
								<Link href="/products" className={cn(buttonVariants())}>
									Explorar Productos
								</Link>
								<Link href="/dashboard/stores" className={cn(buttonVariants({ variant: 'outline' }))}>
									Sell now
								</Link>
							</div>
						</div>
						{/* <Image
							alt="Cup of Coffee"
							loading="eager"
							priority={true}
							className="rounded animate-fade-up"
							height={440}
							width={410}
							src="https://files.stripe.com/links/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfaDVvWXowdU9ZbWlobUIyaHpNc1hCeDM200NBzvUjqP"
							style={{
								objectFit: 'cover',
								animationDelay: '0.50s',
								animationFillMode: 'both',
							}}
							sizes="(max-width: 640px) 70vw, 450px"
						/> */}
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Categorías</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Explora nuestras categorías
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Encuentra todo lo que necesitas para el cuidado de tu mascota.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12" />
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Servicios</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Cuidamos de tus mascotas
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ofrecemos una amplia gama de servicios para el cuidado y bienestar de tus mascotas.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
						fdfgdf
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
								Productos por Tipo de Mascota
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Encuentra lo mejor para tu mascota
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ofrecemos una amplia variedad de productos específicos para cada tipo de mascota.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
