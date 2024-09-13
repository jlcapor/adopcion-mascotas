import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'

export default async function FavoritesPage() {
  return (
    <div className="max-w-container-md mx-auto flex flex-col gap-16 px-4 py-20 md:pb-32 md:pt-24 xl:px-16">
      <div className="basis-1/3 text-center text-5xl font-normal tracking-tighter sm:min-w-[280px] md:text-left md:text-6xl">
        <h2>Productos favoritos</h2>
      </div>
      <Suspense fallback={<FavoritesSkeleton />}>
        <FavoritesView />
      </Suspense>
    </div>
  )
}

async function FavoritesView() {
  return (
    <></>
  )
}

function FavoritesSkeleton() {
  return (
    <section className="grid w-full grid-cols-[repeat(_auto-fill,minmax(140px,1fr)_)] items-start gap-4 gap-y-8 md:grid-cols-[repeat(_auto-fill,minmax(280px,1fr)_)]">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex h-[258px] w-full flex-col gap-4 md:h-[430px]">
          <Skeleton className="h-[320px]" />
          <div>
            <Skeleton className="h-[25px] w-3/4" />
            <Skeleton className="mt-1 h-[32px] w-12" />
          </div>
        </div>
      ))}
    </section>
  )
}
