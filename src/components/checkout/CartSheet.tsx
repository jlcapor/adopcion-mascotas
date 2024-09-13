import { Separator } from '@radix-ui/react-dropdown-menu';
import { Icons } from '../shared/Icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export default function CartSheet() {
	return (
		<Sheet>
		<SheetTrigger asChild>
			<Button
				aria-label="Open cart"
				variant="outline"
				size="icon"
				className="relative h-9 xl:h-9"
			>
				{/* {itemCount > 0 && (
					<Badge
					variant="secondary"
					className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
					>
					{itemCount}
					</Badge>
				)} */}
				<Icons.cart className="size-4" aria-hidden="true" />
			</Button>
		</SheetTrigger>
		<SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
			<SheetHeader className="space-y-2.5 pr-6">
			<SheetTitle>Cart</SheetTitle>
			<Separator />
			</SheetHeader>
		
		</SheetContent>
		</Sheet>
	);
}
