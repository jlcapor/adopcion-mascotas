"use client"
import { Icons } from "@/components/shared/Icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSidebar } from "@/hooks/UseSidebar";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types/nav";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface MobileSheetSidebarProps {
	links?: SidebarNavItem[],
}

export function MobileSheetSidebar({ links }: MobileSheetSidebarProps) {
	const path = usePathname();
	const { isSm, isMobile } = useMediaQuery();
	const { open, setOpen } = useSidebar();

	if (isSm || isMobile) {
		return (
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="size-9 shrink-0 md:hidden">
						<Menu className="size-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="pl-1 pr-0 p-0 pt-4">
					<div className="w-full px-7">
						<Link href="/" className="flex items-center space-x-3" onClick={() => setOpen(false)}>
							<Icons.pet className="w-6 h-6 text-muted-foreground fill-current" aria-hidden="true" />
							<span className="font-bold">{siteConfig.name}</span>
						</Link>
					</div>
					<ScrollArea className="h-full overflow-y-auto">
						<div className="flex h-screen flex-col">
							<nav className="flex flex-1 flex-col gap-y-6 p-4 text-lg font-medium mt-6">
								{links?.map((section) => (
									<section
										key={section.title}
										className="flex flex-col gap-0.5"
									>
										<p className="text-xs text-muted-foreground mb-4">
											{section.title}
										</p>
										{section.items.map((item) => {
											const Icon = Icons[item.icon || "arrowRight"];
											return (
												item.href && (
													<Fragment key={`link-fragment-${item.title}`}>
														<Link
															key={`link-${item.title}`}
															onClick={() => {
																if (!item.disabled) setOpen(false);
															}}
															href={item.disabled ? "#" : item.href}
															className={cn(
																"flex items-center gap-3 rounded-md p-2 text-sm font-medium hover:bg-muted",
																path === item.href
																? "bg-muted"
																: "text-muted-foreground hover:text-accent-foreground",
																item.disabled &&
																"cursor-not-allowed opacity-80 hover:bg-transparent hover:text-muted-foreground",
															)}
														>
															<Icon className="size-5" />
															{item.title}
														</Link>
													</Fragment>
												)
											)
										})}
									</section>
								))}
							</nav>
						</div>
					</ScrollArea>
				</SheetContent>
			</Sheet>
		);
	}

	return <div className="flex size-9 animate-pulse rounded-lg bg-muted md:hidden" />;
}