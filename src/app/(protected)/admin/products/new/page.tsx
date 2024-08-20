import { env } from '@/env'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: "New Product",
    description: "Add a new product"
}
export default function page() {
  return (
    <div>
      
    </div>
  )
}
