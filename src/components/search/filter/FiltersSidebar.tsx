'use client';
import React, { useOptimistic } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { parseSearchParams, SearchParams, stringifySearchParams } from '@/lib/url-state';
import { createSearchParamsCache, parseAsArrayOf, parseAsInteger, parseAsString } from "nuqs/server"
interface FiltersSidebarProps {
  searchParams: URLSearchParams,
}

export const searchParamsCache = createSearchParamsCache({
  categories: parseAsArrayOf(parseAsString).withDefault([]),
  minPrice: parseAsInteger,
  maxPrice: parseAsInteger,
  sortBy: parseAsString.withDefault(""),
  rating: parseAsInteger,
})

function FiltersSidebar({ searchParams }: FiltersSidebarProps) {
  const router = useRouter();
  const [ isPending, startTransition ] = React.useTransition();
  const initialFilters = parseSearchParams(Object.fromEntries(searchParams));
  const [optimisticFilters, setOptimisticFilters] = useOptimistic<SearchParams>(initialFilters);

  
 
  const updateURL = (newFilters: SearchParams) => {
    const queryString = stringifySearchParams(newFilters);
    router.push(queryString ? `/?${queryString}` : '/');
  };

  const handleClearFilters = () => {
    startTransition(() => {
      setOptimisticFilters({});
      router.push('/products');
    });
  };

  const handleFilterChange = (
    filterType: keyof SearchParams,
    value: string | undefined
  ) => {
    startTransition(() => {
      const newFilters = { ...optimisticFilters, [filterType]: value };
      setOptimisticFilters(newFilters);
      updateURL(newFilters);
    });
  };

  
  return (
    <div className="p-2 sm:p-6">
      <div 
        data-pending={isPending ? '' : undefined}
        className="relative flex flex-col w-64 min-h-screen"
      >
        <div className="flex h-full flex-col justify-between mt-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-center text-foreground">
            Filtrar productos
          </h5>
          {Object.keys(optimisticFilters).length > 0 && (
            <div className="mt-4">
              <Button variant="outline" className="w-full text-sm" onClick={handleClearFilters}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
		
        <div className="flex-grow px-2 py-4 mt-4">
          <nav className="flex flex-col gap-4 font-sans text-sm font-normal">
            {/* Category Filter */}
            <div>
              <h6 className="mb-2 font-semibold">Categoría</h6>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Alimentos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Juguetes
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Accesorios
                </label>
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h6 className="mb-2 font-semibold">Marca</h6>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Pedigree
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Royal Canin
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Whiskas
                </label>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h6 className="mb-2 font-semibold">Rango de Precio</h6>
              <input type="range" min="0" max="100" className="w-full" />
              <div className="flex justify-between mt-1 text-xs">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            {/* Pet Type Filter */}
            <div>
              <h6 className="mb-2 font-semibold">Tipo de Mascota</h6>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Perros
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Gatos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Aves
                </label>
              </div>
            </div>

            {/* Age Range Filter */}
            <div>
              <h6 className="mb-2 font-semibold">Edad de la Mascota</h6>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Cachorro/Gatito
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Adulto
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Senior
                </label>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export function FilterFallback() {
  return <FiltersSidebar searchParams={new URLSearchParams()} />;
}

export function Filter() {
  const searchParams = useSearchParams();
  return <FiltersSidebar searchParams={searchParams} />;
}