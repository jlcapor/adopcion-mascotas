import { Icons } from '@/components/Icons';
import Link from 'next/link';

export async function AuthLayoutForm({
	children,
	title,
	subtitle,
}: {
	title: string,
	subtitle?: React.ReactNode,
	children: React.ReactNode,
}) {
	return (
		<div className="flex flex-col px-6 pb-20 pt-10">
			<div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-xl border border-surface-secondary bg-surface-primary p-5 shadow-md dark:border-dark-border dark:bg-dark-surface-secondary dark:shadow-none">
				<header className="flex flex-col space-y-2 text-center">
					<Link href="/">
						<Icons.pet className="mx-auto h-10 w-10" />
					</Link>
					<div className="flex flex-col gap-1">
						<h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
						<p className="text-sm text-muted-foreground">{subtitle}</p>
					</div>
				</header>
				{children}
			</div>
		</div>
	);
}
