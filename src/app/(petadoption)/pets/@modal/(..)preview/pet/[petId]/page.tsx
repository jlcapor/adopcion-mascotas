import { DialogShell } from "@/components/DialogShell"
import { notFound } from "next/navigation"

type PetDetailsPageProps = {
    params: {
        id: string
    }
  }

export default function PetModalPage({ params: { id: petId } }: PetDetailsPageProps) {
  if (!petId) return notFound()
  return (
    <DialogShell className="flex flex-col gap-2 overflow-visible sm:flex-row">
      
    </DialogShell>
  )
}
