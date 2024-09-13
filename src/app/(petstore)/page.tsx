import HeroSection from '@/components/sections/HeroSection';

export default async function IndexPage() {
	return (
		<div className="flex w-full flex-col">
			<HeroSection/>
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
		</div>
	);
}
