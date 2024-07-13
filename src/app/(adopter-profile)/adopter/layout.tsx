import { Shell } from '@/components/Shell';
import AdopterTags from './_components/AdopterTags';
import { PageHeader, PageHeaderHeading } from '@/components/PageHeader';

interface AccountLayoutProps {
	children: React.ReactNode,
}
export default function AdopterLayout({ children }: AccountLayoutProps) {
	return (
		<Shell>
			<PageHeader>
				<PageHeaderHeading size="sm">Su cuenta</PageHeaderHeading>
			</PageHeader>
			<AdopterTags />
			<div className="space-y-8 overflow-auto">{children}</div>
		</Shell>
	);
}

//https://appmaster.io/es/blog/creacion-de-una-aplicacion-para-la-adopcion-de-mascotas
