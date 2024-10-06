import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function Sorter() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button aria-label="Sort products" size="sm">
					Sort
					<ChevronDownIcon className="ml-2 size-4" aria-hidden="true" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-52 mx-3">
				<DropdownMenuLabel>Sort by</DropdownMenuLabel>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
