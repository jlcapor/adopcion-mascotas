import FiltersSidebar from '@/components/search/filter/FiltersSidebar';
interface PetTypeLayoutProps {
	children: React.ReactNode,
}
export default function PetTypeLayout({ children }: PetTypeLayoutProps) {
	return (
		<div className="space-y-9">
			
			<div className="flex-1">
				{children}
			</div>
		</div>
		
	);
}
