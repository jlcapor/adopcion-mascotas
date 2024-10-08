import Link from 'next/link';
import { Shell } from '../shared/Shell';
import { Icons } from '../shared/Icons';
import { ModeToggle } from './ModeToggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Logo } from './SiteHeader';

export default function SiteFooter() {
	return (
		<footer className="w-full border-t bg-background">
			<Shell>
				<section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
					<section>
						<Logo/>
					</section>
					<section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">yy</section>

					<section className="space-y-3">yy</section>

					<section className="flex items-center space-x-4">
						<div className="flex-1 text-left text-sm leading-loose text-muted-foreground">yy</div>
						<div className="flex items-center space-x-1">
							<Link
								href={siteConfig.links.github}
								target="_blank"
								rel="noreferrer"
								className={cn(
									buttonVariants({
										size: 'icon',
										variant: 'ghost',
									})
								)}
							>
								<Icons.gitHub className="size-4" aria-hidden="true" />
								<span className="sr-only">GitHub</span>
							</Link>
							<ModeToggle />
						</div>
					</section>
				</section>
			</Shell>
		</footer>
	);
}
