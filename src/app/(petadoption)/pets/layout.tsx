import { ContentWrapper } from '@/components/ContentWrapper'
import { type ReactNode } from 'react'
type ShelterLayoutProps = Record<'children' | 'modal', ReactNode>

export default function PetLayout({ children, modal }: ShelterLayoutProps) {
  return (
    <ContentWrapper>
        {children}
        {modal}
    </ContentWrapper>
  )
}
