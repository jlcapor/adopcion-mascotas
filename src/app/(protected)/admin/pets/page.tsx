import { env } from '@/env'
import { Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Mascotas",
  description: "Administra tus mascotas",
}

export default function page() {
  return (
    <div>
      
    </div>
  )
}
