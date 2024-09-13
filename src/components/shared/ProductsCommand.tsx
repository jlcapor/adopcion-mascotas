"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SidebarNavItem } from "@/types";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useDebounce } from "@/hooks/use-debounce";

export function ProductsCommand() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 300)
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null)
      return
    }

    async function fetchData() {
      setLoading(true)
      
    }

    void fetchData()
  }, [debouncedQuery])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false)
    callback()
  }, [])

  return (
    <>
      <Button
          variant="outline"
          className="relative size-10 p-0 h-9 xl:h-9 xl:w-96 xl:justify-start xl:px-3 xl:py-2"
          onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="size-5 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search products...</span>
        <span className="sr-only">Search products</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1/2 transform -translate-y-1/2 gap-1 rounded border px-1.5 hidden xl:block">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog 
        open={open}
        onOpenChange={(open) => {
          setOpen(open)
           if (!open) {
            setQuery("")
          }
        }}
      >
        <CommandInput 
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(loading ? "hidden" : "py-6 text-center text-sm")}
          >
            No results found.
          </CommandEmpty>
          
        </CommandList>
      </CommandDialog>
    </>
  );
}