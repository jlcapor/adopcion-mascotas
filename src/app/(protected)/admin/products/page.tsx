import { env } from '@/env'
import { Metadata } from 'next'


export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: "Products",
    description: "Manage your products",
  }
export default function page() {
  return (
    <div>
      
    </div>
  )
}
