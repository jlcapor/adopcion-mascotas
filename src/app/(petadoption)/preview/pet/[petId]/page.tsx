import { redirect } from 'next/navigation'
interface PetPreviewPageProps {
    params: {
      petId: string
    }
  }
export default function PetPreviewPage({ params }: PetPreviewPageProps) {
    const petId = params.petId
    redirect(`/pet/${petId}`)
}
