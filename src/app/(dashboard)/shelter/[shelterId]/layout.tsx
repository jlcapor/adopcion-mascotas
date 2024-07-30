import { ModeToggle } from '@/components/layouts/ModeToggle';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import UserDropdown from '../../../../components/layouts/AuthDropdown';
import { authOptions } from '@/server/auth';
import { SidebarProvider } from '@/context/SidebarContext';
import { sidebarLinks } from '@/config/dashboard';
import { DashboardSidebar } from './_components/DashboardSidebar';
import { MobileSheetSidebar } from './_components/MobileSheetSidebar';

interface DashboardLayoutProps {
	children: React.ReactNode,
}
export default async function DashboardLayout({ children }: DashboardLayoutProps) {
	const user = await getCurrentUser();
	if (!user || user.role !== 'SHELTER') {
		redirect(authOptions?.pages?.signIn ?? "/")
	}

	const filteredLinks = sidebarLinks.map((section) => ({
		...section,
		items: section.items.filter(({ authorizeOnly }) => !authorizeOnly || authorizeOnly === user.role),
	}));

	return (
		<SidebarProvider>
			<div className="relative flex min-h-screen w-full">
				<DashboardSidebar links={filteredLinks} />
				<div className="flex flex-1 flex-col">
					<header className="sticky top-0 z-50 flex h-16 border-b bg-background px-4 lg:h-[60px] xl:px-8">
						<MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
							<MobileSheetSidebar links={filteredLinks} />
							<div className="w-full flex-1">
							</div>
							<ModeToggle />
							<UserDropdown user={user} />
						</MaxWidthWrapper>
					</header>
					<main className="flex-1 p-4 xl:px-8">
						<MaxWidthWrapper className="flex h-full max-w-7xl flex-col gap-4 px-0 lg:gap-6">
							{children}
						</MaxWidthWrapper>
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
