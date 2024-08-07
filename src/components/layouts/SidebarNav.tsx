import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import SidebarNavItems from "./SidebarNavItems";
import { usePathname } from "next/navigation";

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}

export default function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const { open, setOpen } = useSidebar();

  return items.length ? (
    <div className={cn("flex w-full flex-col gap-2 text-base", className)} {...props}>
      <SidebarNavItems
        items={items}
        pathname={pathname}
        onLinkClick={() => {
          if (open) setOpen(false);
        }}
      />
    </div>
    ) : null
}
