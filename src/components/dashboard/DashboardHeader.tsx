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
		<header className="sticky top-0 z-50 w-full flex h-16 border-b bg-background lg:h-[60px]">
			<div className="container flex h-16 items-center">
				<div className="w-full flex-1">{children}</div> 
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<ModeToggle />
						<AuthDropdown session={session} />
					</nav>
				</div>
			</div>
		</header>
	);
}
