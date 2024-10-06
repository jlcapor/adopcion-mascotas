import { CategoriesSection } from '@/components/sections/categories-section';
import HeroSection from '@/components/sections/hero-section';

export default async function HomePage() {
	return (
		<div className="flex w-full flex-col">
			<HeroSection />
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
								Comprar por mascota
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Encuentra lo mejor para tu mascota
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ofrecemos una amplia variedad de productos específicos para cada tipo de mascota.
							</p>
						</div>
					</div>
					<CategoriesSection />
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
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
			<section className="w-full py-10 md:py-20 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Pricing Plans</h2>
					<p className="text-muted-foreground text-center mb-8 md:text-xl">
						Choose the perfect plan for your needs
					</p>
				</div>
			</section>
			<section className="w-full py-10 md:py-20 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Start Your Journey Today
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Join thousands of satisfied customers and take your business to the next level.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
