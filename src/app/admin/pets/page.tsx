import { env } from '@/env'
import { Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Mascotas",
  description: "Administra tus mascotas",
}

export default function page() {
  return (
    <div className="w-full">
			<div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
				<h2 className="text-2xl font-bold tracking-tight">Mascotas</h2>
        
			</div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        ewer
      hjghjgh
      </div>
		</div>
  )
}
