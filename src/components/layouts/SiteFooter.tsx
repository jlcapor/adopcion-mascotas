import Link from 'next/link';
import { Shell } from '../Shell';
import { Icons } from '../Icons';
import { ModeToggle } from './ModeToggle';

export default function SiteFooter() {
	return (
		<footer className="w-full border-t bg-background">
			<Shell>
				<section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
					<section>
						<Link href="/" className="flex w-fit items-center space-x-2">
							<Icons.pet className="size-6" aria-hidden="true" />
							<span className="font-bold">PetFriendly</span>
							<span className="sr-only">Home</span>
						</Link>
					</section>
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">

          </section>

          <section className="space-y-3">

          </section>

          <section className="flex items-center space-x-4">
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground"></div>
          <div className="flex items-center space-x-1">
          <ModeToggle />
          </div>
          </section>
				</section>
			</Shell>
		</footer>
	);
}
