import React, { ReactNode } from 'react';

// Definir la interfaz de las props
interface SectionProps {
	headerLabel: string,
	title: string,
	description: string,
	className?: string,
	children?: ReactNode, 
	gridCols?: string, 
}

export default function GenericSection({
	headerLabel,
	title,
	description,
	className = '',
	children,
	gridCols = 'lg:grid-cols-4', // valor por defecto para 4 columnas
}: SectionProps) {
	return (
		<section className={`w-full py-12 md:py-24 lg:py-20 ${className}`}>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						{headerLabel && (
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{headerLabel}</div>
						)}
						{title && <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>}
						{description && (
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								{description}
							</p>
						)}
					</div>
				</div>
				<div className={`mx-auto grid max-w-5xl items-center gap-4 py-12 ${gridCols} lg:gap-5`}>
					{children}
				</div>
			</div>
		</section>
	);
}
