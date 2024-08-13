import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { ModeToggle } from '@/components/layouts/ModeToggle';
import AuthDropdown from '@/components/layouts/AuthDropdown';
import { SessionUser } from '@/types';
import { Session } from 'next-auth';

interface DashboardHeaderProps {
	user?: SessionUser,
	session: Session | null
	children: React.ReactNode,
}

export default function DashboardHeader({ session, children }: DashboardHeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full flex h-16 border-b bg-background px-4 lg:h-[60px] xl:px-8">
			<MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
				<div className="w-full flex-1">{children}</div> 
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<ModeToggle />
						<AuthDropdown session={session} />
					</nav>
				</div>
			</MaxWidthWrapper>
		</header>
	);
}
