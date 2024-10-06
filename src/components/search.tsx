'use client';

import { useFormStatus } from 'react-dom';
import { useRef, use, useEffect, useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';
import { Label } from './ui/label';


function SearchBase({ initialQuery }: { initialQuery: string }) {
  let [inputValue, setInputValue] = useState(initialQuery);
  let inputRef = useRef<HTMLInputElement>(null);
 
  async function handleSubmit(formData: FormData) {
    let query = formData.get('search') as string;
    let newUrl = `/?search=${encodeURIComponent(query)}`;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value;
    setInputValue(newValue);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, []);

 

  return (
    <form
      action={handleSubmit}
      className="relative flex flex-1 flex-shrink-0 w-full rounded shadow-sm"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        name="search"
        id="search"
        placeholder="Buscar productos..."
        value={inputValue}
        className="w-full border-2 px-10 py-5 text-base md:text-sm overflow-hidden focus-visible:ring-0"
      />
      <LoadingSpinner />
    </form>
  );
}

function LoadingSpinner() {
  let { pending } = useFormStatus();
  return (
    <div
      data-pending={pending ? '' : undefined}
      className="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300"
    >
      <svg className="h-5 w-5" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeDasharray="282.7"
          strokeDashoffset="282.7"
          className={pending ? 'animate-fill-clock ' : ''}
          transform="rotate(-90 50 50)"
        />
      </svg>
    </div>
  );
}

export function SearchFallback() {
  return <SearchBase initialQuery="" />;
}

export function Search() {
  let query = useSearchParams().get('search') ?? '';
  return <SearchBase initialQuery={query} />;
}