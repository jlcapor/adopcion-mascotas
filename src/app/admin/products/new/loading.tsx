import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function NewProductLoading() {
	return (
		<div className="flex flex-col items-center space-y-8">
			<Card className="w-full max-w-3xl">
				<CardHeader className="space-y-1">
					<Skeleton className="h-8 w-1/2" />
					<Skeleton className="h-6 w-1/3" />
				</CardHeader>
				<CardContent>
					<div className="mt-8 grid grid-cols-6 gap-6">
						<div className="col-span-6 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full" />
						</div>
						<div className="col-span-6 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-20 w-full" />
						</div>
						<div className="col-span-6 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full rounded-lg" />
						</div>
						<div className="col-span-6 sm:col-span-3 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full rounded-lg" />
						</div>
						<div className="col-span-6 sm:col-span-3 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full rounded-lg" />
						</div>
						<div className="col-span-6 sm:col-span-3 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full rounded-lg" />
						</div>
						<div className="col-span-6 sm:col-span-3 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full rounded-lg" />
						</div>
						<div className="col-span-6 space-y-2">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-10 w-full rounded-lg" />
						</div>
						<div className="col-span-6 flex justify-start space-x-4">
							<Skeleton className="h-10 w-32 rounded-lg" />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
