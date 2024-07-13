'use client';

import SidebarNav from '@/components/layouts/SidebarNav';
import { ScrollArea } from '@/components/ui/scroll-area';
import { dashboardConfig } from '@/config/dashboard';

export function DashboardSidebar() {
	return (
		<aside className="hidden w-[200px] flex-col lg:flex">
			<SidebarNav items={dashboardConfig.sidebarNav} className="p-1 pt-4" />
		</aside>
	);
}
