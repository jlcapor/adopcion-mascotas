"use client"

import React from 'react'
import { type getSheltersByUserId } from '@/lib/queries/shelter'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CaretSortIcon, CheckIcon, FrameIcon } from '@radix-ui/react-icons'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'


interface ShelterSwitcherProps
  extends React.ComponentPropsWithoutRef<typeof PopoverTrigger> {
  userId: string
  sheltersPromise: ReturnType<typeof getSheltersByUserId>
}
export  function ShelterSwitcher({
  userId, 
  sheltersPromise,
  className,
  ...props
}: ShelterSwitcherProps) {
  const { shelterId } = useParams<{ shelterId: string }>()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const shelters = React.use(sheltersPromise)
  const selectedShelter = shelters.find((shelter) => shelter.id === shelterId)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a shelter"
            className={cn("w-full justify-between", className)}
            {...props}
        >
          {selectedShelter?.name ?? "Select a store"}
          <CaretSortIcon
              className="ml-auto size-4 shrink-0 opacity-50"
              aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search shelter..." />
            <CommandEmpty>No shelter found.</CommandEmpty>
            <CommandGroup>
              {shelters.map((shelter) => (
                <CommandItem
                  key={shelter.id}
                  onSelect={() => {
                    setOpen(false)
                    pathname.includes(shelter.id)
                      ? router.replace(pathname.replace(shelterId, shelter.id))
                      : router.push(`/shelter/${shelter.id}`)
                  }}
                  className="text-sm"
                >
                  <FrameIcon
                      className="mr-2 size-4  text-muted-foreground"
                      aria-hidden="true"
                  />
                  {shelter.name}
                  <CheckIcon
                      className={cn(
                        "ml-auto size-4",
                        selectedShelter?.id === shelter.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                      aria-hidden="true"
                    />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
