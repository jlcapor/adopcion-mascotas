"use client"
import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { AlignLeftIcon } from 'lucide-react'
import { DialogTitle } from '../ui/dialog'
import { ScrollArea } from '../ui/scroll-area'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Icons } from '../shared/Icons'
import { useMediaQuery } from "@/hooks/use-media-query"

export default function MobileNav() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [open, setOpen] = React.useState(false)
  if (isDesktop) return null
  return (
    <Sheet open={open} onOpenChange={setOpen}>
       <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden flex">
            <AlignLeftIcon />
            <span className="sr-only">Toggle Menu</span>
        </Button>
       </SheetTrigger>
       <SheetContent className="flex flex-col h-auto w-[18.75rem] gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
          <div className="w-full px-7">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <Icons.pet className="h-6 w-6 text-muted-foreground fill-current" aria-hidden="true" />
              <span className="ml-2 text-xl font-semibold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <ScrollArea className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5 mt-4 mx-2 px-5">
                1
              </div>
              <div className="mx-2 px-5">
                2
              </div>
              <div className="p-6 pb-4 flex gap-2.5 mx-1">
                3
              </div>
          </ScrollArea>
       </SheetContent>
    </Sheet>
  )
}
