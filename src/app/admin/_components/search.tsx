"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef, useTransition } from "react"
import { Loader2, SearchIcon, XCircleIcon } from "lucide-react"
import { useDebouncedCallback } from "use-debounce"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	const [isSearching, startTransition] = useTransition()
	const inputRef = useRef<HTMLInputElement>(null)
  
	const q = searchParams.get("query")?.toString()
  
	const handleSearch = useDebouncedCallback((query: string) => {
	  startTransition(() => {
		const params = new URLSearchParams(searchParams)
		if (query) {
		  params.set("query", query)
		  params.set("page", "1")
		} else {
		  params.delete("query")
		}
		replace(`${pathname}?${params.toString()}`)
	  })
	}, 300)
  
	const handleClearInput = () => {
	  if (inputRef.current) {
		inputRef.current.value = ""
		handleSearch("")
	  }
	}
  
	return (
	  <div className="relative flex flex-1 h-8 items-center ">
		{isSearching ? (
		  <Loader2 className="absolute left-2 top-2 size-4 animate-spin text-muted-foreground" />
		) : (
		  <SearchIcon className="absolute left-2 top-2 size-4 text-muted-foreground" />
		)}
		<Input
		className="peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
		//   className="h-8 w-full pl-8 lg:w-[350px]"
		  placeholder={placeholder}
		  onChange={(e) => {
			handleSearch(e.target.value)
		  }}
		  defaultValue={q}
		  onKeyDown={(e) => {
			if (e.key === "Escape") {
			  inputRef?.current?.blur()
			}
		  }}
		  ref={inputRef}
		/>
		{q && (
		  <Button
			className="absolute right-2 top-2 h-4 w-4"
			onClick={handleClearInput}
			variant={"ghost"}
			size={"icon"}
		  >
			<XCircleIcon className="size-5 text-muted-foreground" />
		  </Button>
		)}
	  </div>
	)
  }






