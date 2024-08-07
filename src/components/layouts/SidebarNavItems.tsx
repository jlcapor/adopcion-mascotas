import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
import { Icons } from "../shared/Icons";
import Link from "next/link";

interface SidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
  onLinkClick?: () => void;
}

export default function SidebarNavItems({ items, pathname, onLinkClick }: SidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];

        if (!item.href) {
          return (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
            >
              <Icon className="mr-2 size-4" aria-hidden="true" />
              {item.title}
            </span>
          )
        }
        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-2 hover:bg-muted hover:text-foreground mb-2",
              item.active
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground",
              item.disabled && "pointer-events-none opacity-60"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
            onClick={onLinkClick}
          >
            <Icon className="mr-2 size-4" aria-hidden="true" />
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted text-xs leading-none text-muted-foreground">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  ) : null;
}
