import { Suspense } from "react"

import Link from "next/link"
import { Icons } from "@/components/Icons"
import MainNav from "../MainNav"
import MobileNav from "../MobileNav"
import ProfileMenu from "@/components/ProfileMenu/ProfileMenu"

export function NavigationBar() {
  
  return (
    <nav className="sticky top-0 z-50 mx-auto my-0 flex w-full flex-wrap content-center items-center justify-between border-b bg-background py-4 lg:border-y">
      <div className="flex justify-start px-4 lg:mx-auto lg:w-full lg:px-0">
        <section className="flex w-full justify-between lg:hidden">
          <MobileNav/>
          <div className="absolute right-4 flex items-center justify-center gap-2">
            {/* <Favorites className="flex lg:hidden" /> */}
            <ProfileMenu/>
          </div>
        </section>
        <section className="flex flex-1 items-center justify-end space-x-4">
          <div className="container flex items-center justify-center">
            <div className="mt-10 flex w-full flex-col gap-8 lg:mt-0 lg:w-auto lg:flex-row lg:items-center lg:justify-start">
              <MainNav/>
            </div>
              
            <div className="relative ml-auto flex items-center">
              <div className="flex gap-2">
                {/* <Favorites className="hidden lg:flex" />
                <CartSheet className="hidden lg:flex" /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  )
}

//Dem0_2023#_.