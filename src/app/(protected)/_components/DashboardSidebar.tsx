'use client';
import  { dashboardConfig } from '@/config/dashboard';
import DashboardNav from './DashboardNav';

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-[200px] flex-col md:flex">
			<DashboardNav items={dashboardConfig.sidebarNav}/>		
    </aside>
  )
}
